/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc> 
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License version 3
 as published by the Free Software Foundation. You may not use, modify
 or distribute this program under any other version of the
 GNU Affero General Public License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package handling.login.handler;

import java.util.List;
import java.util.Calendar;

import client.inventory.IItem;
import client.inventory.Item;
import client.LoginCrypto;
import client.MapleClient;
import client.MapleCharacter;
import client.MapleCharacterUtil;
import client.inventory.MapleInventory;
import client.inventory.MapleInventoryType;
import constants.GameConstants;
import handling.channel.ChannelServer;
import handling.login.LoginInformationProvider;
import handling.login.LoginServer;
import handling.login.LoginWorker;
import server.MapleItemInformationProvider;
import server.quest.MapleQuest;
import server.ServerProperties;
import tools.MaplePacketCreator;
import tools.packet.LoginPacket;
import tools.KoreanDateUtil;
import tools.StringUtil;
import tools.data.input.SeekableLittleEndianAccessor;

public class CharLoginHandler {

    private static boolean loginFailCount(final MapleClient c) {
        c.loginAttempt++;
        return c.loginAttempt > 5;
    }

    public static final void Welcome(final MapleClient c) {
        // c.getSession().write(MaplePacketCreator.serverNotice(1, "歡迎來到尻尻谷"));
    }

    public static final void login(final SeekableLittleEndianAccessor slea, final MapleClient c) {
        final String login = slea.readMapleAsciiString();
        final String pwd = slea.readMapleAsciiString();

        c.setAccountName(login);
        final boolean ipBan = c.hasBannedIP();
        final boolean macBan = c.hasBannedMac();
        
        
        /*if (c.getLoginState() == 1) {//disposeClones
            c.disconnect(true, false);
            c.getSession().write(MaplePacketCreator.serverNotice(1, "卡号自救成功!请重新登录!"));
            c.getSession().write(LoginPacket.getLoginFailed(1)); //Shows no message, used for unstuck the login button
            return;
        }*/
        int loginok = 0;
        if (Boolean.parseBoolean(ServerProperties.getProperty("KinMS.AutoRegister"))) {

            if (AutoRegister.autoRegister && !AutoRegister.getAccountExists(login) && (!c.hasBannedIP() || !c.hasBannedMac())) {

                if (pwd.equalsIgnoreCase("disconnect") || pwd.equalsIgnoreCase("fixme")) {
                    c.getSession().write(MaplePacketCreator.serverNotice(1, "This password is invalid."));
                    c.getSession().write(LoginPacket.getLoginFailed(1)); //Shows no message, used for unstuck the login button
                    return;
                }
                AutoRegister.createAccount(login, pwd, c.getSession().getRemoteAddress().toString());

                if (AutoRegister.success) {
                    c.getSession().write(MaplePacketCreator.serverNotice(1, "账号创建成功,请重新登录!\r\n进游戏切勿一直按回车\r\n用鼠标点击登录选取选人进入"));
                    c.getSession().write(LoginPacket.getLoginFailed(1)); //Shows no message, used for unstuck the login button

                    return;
                }
            }
        }
        // loginok = c.fblogin(login, pwd, ipBan || macBan);
        loginok = c.login(login, pwd, ipBan || macBan);

        final Calendar tempbannedTill = c.getTempBanCalendar();

        
        /*if (c.getfwn() <= 0) {
            c.getSession().write(MaplePacketCreator.serverNotice(1, "请使用天成冒险岛\r\n最新登录器进入游戏.\r\n调试数据："+c.getfwn()));
            c.getSession().write(LoginPacket.getLoginFailed(1)); //Shows no message, used for unstuck the login button
            return;
        }else */
        if (loginok == 0 && (ipBan || macBan) && !c.isGm()) {
            loginok = 3;

            if (macBan) {
                // this is only an ipban o.O" - maybe we should refactor this a bit so it's more readable
                MapleCharacter.ban(c.getSession().getRemoteAddress().toString().split(":")[0], "Enforcing account ban, account " + login, false, 4, false);

            }
        }
        if (loginok != 0) {

            if (!loginFailCount(c)) {

                c.getSession().write(LoginPacket.getLoginFailed(loginok));

            }
        } else if (tempbannedTill.getTimeInMillis() != 0) {

            if (!loginFailCount(c)) {

                c.getSession().write(LoginPacket.getTempBan(KoreanDateUtil.getTempBanTimestamp(tempbannedTill.getTimeInMillis()), c.getBanReason()));

            }
        } else {

            c.loginAttempt = 0;
            LoginWorker.registerClient(c);

        }
    }


    /*
     * public static final void login(final SeekableLittleEndianAccessor slea,
     * final MapleClient c) { final String login = slea.readMapleAsciiString();
     * final String pwd = slea.readMapleAsciiString();
     *
     * c.setAccountName(login); final boolean ipBan = c.hasBannedIP(); final
     * boolean macBan = c.hasBannedMac();
     *
     * int loginok = c.login(login, pwd, ipBan || macBan); final Calendar
     * tempbannedTill = c.getTempBanCalendar();
     *
     * if (loginok == 0 && (ipBan || macBan) && !c.isGm()) { loginok = 3; if
     * (macBan) { // this is only an ipban o.O" - maybe we should refactor this
     * a bit so it's more readable
     * MapleCharacter.ban(c.getSession().getRemoteAddress().toString().split(":")[0],
     * "Enforcing account ban, account " + login, false, 4, false); } } if
     * (loginok != 0) { if (!loginFailCount(c)) {
     * c.getSession().write(LoginPacket.getLoginFailed(loginok)); } } else if
     * (tempbannedTill.getTimeInMillis() != 0) { if (!loginFailCount(c)) {
     * c.getSession().write(LoginPacket.getTempBan(KoreanDateUtil.getTempBanTimestamp(tempbannedTill.getTimeInMillis()),
     * c.getBanReason())); } } else { c.loginAttempt = 0;
     * LoginWorker.registerClient(c); }
     }
     */
    public static final void SetGenderRequest(final SeekableLittleEndianAccessor slea, final MapleClient c) {
        byte gender = slea.readByte();
        String username = slea.readMapleAsciiString();
        // String password = slea.readMapleAsciiString();
        if (c.getAccountName().equals(username)) {
            c.setGender(gender);
            //  c.setSecondPassword(password);
            c.updateSecondPassword();
            c.updateGender();
            c.getSession().write(LoginPacket.getGenderChanged(c));
            c.getSession().write(MaplePacketCreator.licenseRequest());
            c.updateLoginState(MapleClient.LOGIN_NOTLOGGEDIN, c.getSessionIPAddress());
        } else {
            c.getSession().close();
        }
    }

    public static final void ServerListRequest(final MapleClient c) {
        c.getSession().write(LoginPacket.getServerList(0, LoginServer.getServerName(), LoginServer.getLoad()));
        //c.getSession().write(MaplePacketCreator.getServerList(1, "Scania", LoginServer.getInstance().getChannels(), 1200));
        //c.getSession().write(MaplePacketCreator.getServerList(2, "Scania", LoginServer.getInstance().getChannels(), 1200));
        //c.getSession().write(MaplePacketCreator.getServerList(3, "Scania", LoginServer.getInstance().getChannels(), 1200));
        c.getSession().write(LoginPacket.getEndOfServerList());
    }

    public static final void ServerStatusRequest(final MapleClient c) {
        // 0 = Select world normally
        // 1 = "Since there are many users, you may encounter some..."
        // 2 = "The concurrent users in this world have reached the max"
        final int numPlayer = LoginServer.getUsersOn();
        final int userLimit = LoginServer.getUserLimit();
        if (numPlayer >= userLimit) {
            c.getSession().write(LoginPacket.getServerStatus(2));
        } else if (numPlayer * 2 >= userLimit) {
            c.getSession().write(LoginPacket.getServerStatus(1));
        } else {
            c.getSession().write(LoginPacket.getServerStatus(0));
        }
    }

    public static final void LicenseRequest(final SeekableLittleEndianAccessor slea, final MapleClient c) {
        if (slea.readByte() == 1) {
            c.getSession().write(MaplePacketCreator.licenseResult());
            c.updateLoginState(0);
        } else {
            c.getSession().close();
        }
    }

    public static final void CharlistRequest(final SeekableLittleEndianAccessor slea, final MapleClient c) {
        // slea.readByte();
        final int server = slea.readByte();
        final int channel = slea.readByte() + 1;
        slea.readInt();

        c.setWorld(server);
        //System.out.println("Client " + c.getSession().getRemoteAddress().toString().split(":")[0] + " is connecting to server " + server + " channel " + channel + "");
        c.setChannel(channel);
        
        final List<MapleCharacter> chars = c.loadCharacters(server);
        if (chars != null) {
            c.getSession().write(LoginPacket.getCharList(c.getSecondPassword() != null, chars, c.getCharacterSlots()));
        } else {
            c.getSession().close();
        }
    }

    public static final void CheckCharName(final String name, final MapleClient c) {
        c.getSession().write(LoginPacket.charNameResponse(name, !MapleCharacterUtil.canCreateChar(name) || LoginInformationProvider.getInstance().isForbiddenName(name)));
    }

    public static final void CreateChar(final SeekableLittleEndianAccessor slea, final MapleClient c) {
        final String name = slea.readMapleAsciiString();
        final int JobType = slea.readInt(); // 1 = Adventurer, 0 = Cygnus, 2 = Aran
        /*
         * if (JobType == 0 || JobType == 2) {
         * c.getSession().write(MaplePacketCreator.serverNotice(1, "只能創冒險家喔"));
         * return;
        }
         */
        boolean 冒险家 = Boolean.parseBoolean(ServerProperties.getProperty("KinMS.mxj", "false"));
        boolean 骑士团 = Boolean.parseBoolean(ServerProperties.getProperty("KinMS.qst", "false"));
        boolean 战神 = Boolean.parseBoolean(ServerProperties.getProperty("KinMS.zs", "false"));
        if(!骑士团 && JobType == 0){
            c.getSession().write(MaplePacketCreator.serverNotice(1, "无法创建骑士团职业！"));
            return;
        }else if(!冒险家 && JobType == 1){
            c.getSession().write(MaplePacketCreator.serverNotice(1, "无法创建冒险家职业！"));
            return;
        }else if(!战神 && JobType == 2){
            c.getSession().write(MaplePacketCreator.serverNotice(1, "无法创建战神职业！"));
            return;
        }
        final short db = 0; //whether dual blade = 1 or adventurer = 0
        final int face = slea.readInt();
        final int hair = slea.readInt();
        final int hairColor = 0;
        final byte skinColor = 0;
        final int top = slea.readInt();
        final int bottom = slea.readInt();
        final int shoes = slea.readInt();
        final int weapon = slea.readInt();

        final byte gender = c.getGender();

        if (gender == 0) {
            if (face != 20100 && face != 20401 && face != 20402) {
                return;
            }
            if (hair != 30030 && hair != 30027 && hair != 30000) {
                return;
            }
            if (top != 1040002 && top != 1040006 && top != 1040010 && top != 1042167) {
                return;
            }
            if (bottom != 1060002 && bottom != 1060006 && bottom != 1062115) {
                return;
            }
        } else if (gender == 1) {
            if (face != 21002 && face != 21700 && face != 21201) {
                return;
            }
            if (hair != 31002 && hair != 31047 && hair != 31057) {
                return;
            }
            if (top != 1041002 && top != 1041006 && top != 1041010 && top != 1041011 && top != 1042167) {
                return;
            }
            if (bottom != 1061002 && bottom != 1061008 && bottom != 1062115) {
                return;
            }
        } else {
            return;
        }
        if (shoes != 1072001 && shoes != 1072005 && shoes != 1072037 && shoes != 1072038 && shoes != 1072383) {
            return;
        }
        if (weapon != 1302000 && weapon != 1322005 && weapon != 1312004 && weapon != 1442079) {
            return;
        }

        MapleCharacter newchar = MapleCharacter.getDefault(c, JobType);
        newchar.setWorld((byte) c.getWorld());
        newchar.setFace(face);
        newchar.setHair(hair + hairColor);
        newchar.setGender(gender);
        newchar.setName(name);
        newchar.setSkinColor(skinColor);

        MapleInventory equip = newchar.getInventory(MapleInventoryType.EQUIPPED);
        final MapleItemInformationProvider li = MapleItemInformationProvider.getInstance();

        IItem item = li.getEquipById(top);
        item.setPosition((byte) -5);
        equip.addFromDB(item);

        item = li.getEquipById(bottom);
        item.setPosition((byte) -6);
        equip.addFromDB(item);

        item = li.getEquipById(shoes);
        item.setPosition((byte) -7);
        equip.addFromDB(item);

        item = li.getEquipById(weapon);
        item.setPosition((byte) -11);
        equip.addFromDB(item);

        //blue/red pots
        switch (JobType) {
            case 0: // Cygnus
                newchar.setQuestAdd(MapleQuest.getInstance(20022), (byte) 1, "1");
                newchar.setQuestAdd(MapleQuest.getInstance(20010), (byte) 1, null); //>_>_>_> ugh

                newchar.setQuestAdd(MapleQuest.getInstance(20000), (byte) 1, null); //>_>_>_> ugh
                newchar.setQuestAdd(MapleQuest.getInstance(20015), (byte) 1, null); //>_>_>_> ugh
                newchar.setQuestAdd(MapleQuest.getInstance(20020), (byte) 1, null); //>_>_>_> ugh

                newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161047, (byte) 0, (short) 1, (byte) 0));
                break;
            case 1: // Adventurer
                newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161001, (byte) 0, (short) 1, (byte) 0));
                break;
            case 2: // Aran
                newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161048, (byte) 0, (short) 1, (byte) 0));
                break;
            //     case 3: //Evan
            //         newchar.getInventory(MapleInventoryType.ETC).addItem(new Item(4161052, (byte) 0, (short) 1, (byte) 0));
            //        break;
        }
        if(GameConstants.game == 3 || GameConstants.game == 4 || GameConstants.game == 5){
                newchar.getInventory(MapleInventoryType.CASH).addItem(new Item(5530000, (byte) 0, (short) 1, (byte) 0));
        }
        if (MapleCharacterUtil.canCreateChar(name) && !LoginInformationProvider.getInstance().isForbiddenName(name)) {
            MapleCharacter.saveNewCharToDB(newchar, JobType, JobType == 1 && db == 0);
            c.getSession().write(LoginPacket.addNewCharEntry(newchar, true));
            c.createdChar(newchar.getId());
        } else {
            c.getSession().write(LoginPacket.addNewCharEntry(newchar, false));
        }
    }

    public static final void DeleteChar(final SeekableLittleEndianAccessor slea, final MapleClient c) {
        slea.readByte();
        String Secondpw_Client = null;
//        if (slea.readByte() > 0) { // Specific if user have second password or not
        Secondpw_Client = slea.readMapleAsciiString();
//        }
//        slea.readMapleAsciiString();
        final int Character_ID = slea.readInt();

        if (!c.login_Auth(Character_ID)) {
            c.getSession().write(LoginPacket.secondPwError((byte) 0x14));
            return; // Attempting to delete other character
        }
        byte state = 0;

        if (c.getSecondPassword() != null) { // On the server, there's a second password
            if (Secondpw_Client == null) { // Client's hacking
                c.getSession().close();
                return;
            } else {
                if (!c.CheckSecondPassword(Secondpw_Client)) { // Wrong Password
                    //state = 12;
                    state = 16;
                }
            }
        }
        // TODO, implement 13 digit Asiasoft passport too.

        if (state == 0) {
            state = (byte) c.deleteCharacter(Character_ID);
        }
        c.getSession().write(LoginPacket.deleteCharResponse(Character_ID, state));
    }

    public static void Character_WithoutSecondPassword(final SeekableLittleEndianAccessor slea, final MapleClient c) {
//        slea.skip(1);
        /*if (c.getLoginState() != 2) {
            return;
        }*/
        final int charId = slea.readInt();
        if ((!c.isLoggedIn()) || (loginFailCount(c)) || (!c.login_Auth(charId))) {
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        if ((ChannelServer.getInstance(c.getChannel()) == null) || (c.getWorld() != 0)) {
            c.getSession().close();
            return;
        }
        if (c.getIdleTask() != null) {
            c.getIdleTask().cancel(true);
        }
        String ip = c.getSessionIPAddress();
        LoginServer.putLoginAuth(charId, ip.substring(ip.indexOf('/') + 1, ip.length()), c.getTempIP(), c.getChannel());
        c.updateLoginState(1, ip);
            /*if (c.getLoginState() == 2) {
                c.updateLoginState(2, ip);
                System.out.println("输出登录2");
            } else {*/
        c.getSession().write(MaplePacketCreator.getServerIP(Integer.parseInt(ChannelServer.getInstance(c.getChannel()).getIP().split(":")[1]), charId));

        /*
         * final String currentpw = c.getSecondPassword(); if (slea.available()
         * != 0) { if (currentpw != null) { // Hack c.getSession().close();
         * return; } final String setpassword = slea.readMapleAsciiString();
         *
         * if (setpassword.length() >= 4 && setpassword.length() <= 16) {
         * c.setSecondPassword(setpassword); c.updateSecondPassword();
         *
         * if (!c.login_Auth(charId)) { c.getSession().close(); return; } } else
         * { c.getSession().write(LoginPacket.secondPwError((byte) 0x14));
         * return; } } else if (loginFailCount(c) || currentpw != null ||
         * !c.login_Auth(charId)) { c.getSession().close(); return;
        }
         */
        //这句是我屏蔽的


        //   String ip = c.getSessionIPAddress();
        //   LoginServer.putLoginAuth(charId, ip.substring(ip.indexOf('/') + 1, ip.length()), c.getTempIP(), c.getChannel());
        //   c.updateLoginState(MapleClient.LOGIN_SERVER_TRANSITION, c.getSessionIPAddress());        
        //   System.out.println("··········A"+charId);
        //    System.out.println("··········C"+c.getSessionIPAddress());
        //    System.out.println("··········B"+ChannelServer.getInstance(c.getChannel()).getIP());
        //    c.getSession().write(MaplePacketCreator.getServerIP(Integer.parseInt(ChannelServer.getInstance(c.getChannel()).getIP().split(":")[1]), charId));
        //  c.getSession().write(MaplePacketCreator.getServerIP(0, charId));
    }

    public static final void Character_WithSecondPassword(final SeekableLittleEndianAccessor slea, final MapleClient c) {
        final String password = slea.readMapleAsciiString();
        final int charId = slea.readInt();

        if (loginFailCount(c) || c.getSecondPassword() == null || !c.login_Auth(charId)) { // This should not happen unless player is hacking
            c.getSession().close();
            return;
        }
        if (c.CheckSecondPassword(password)) {
            c.updateMacs(slea.readMapleAsciiString());
            if (c.getIdleTask() != null) {
                c.getIdleTask().cancel(true);
            }
            c.updateLoginState(MapleClient.LOGIN_SERVER_TRANSITION, c.getSessionIPAddress());
            c.getSession().write(MaplePacketCreator.getServerIP(Integer.parseInt(ChannelServer.getInstance(c.getChannel()).getIP().split(":")[1]), charId));
        } else {
            c.getSession().write(LoginPacket.secondPwError((byte) 0x14));
        }
    }
}
