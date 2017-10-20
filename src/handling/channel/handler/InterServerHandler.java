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
package handling.channel.handler;

import client.*;
import client.inventory.IItem;
import client.inventory.MapleInventoryType;
import constants.GameConstants;
import java.util.List;

import handling.MaplePacket;
import handling.cashshop.CashShopServer;
import handling.channel.ChannelServer;
import handling.login.LoginServer;
import handling.world.CharacterTransfer;
import handling.world.MapleMessenger;
import handling.world.MapleMessengerCharacter;
import handling.world.CharacterIdChannelPair;
import handling.world.MaplePartyCharacter;
import handling.world.PartyOperation;
import handling.world.PlayerBuffStorage;
import handling.world.World;
import handling.world.guild.MapleGuild;
import scripting.NPCScriptManager;
import server.MapleItemInformationProvider;
import server.MapleTrade;
import server.ServerProperties;
import server.maps.FieldLimitType;
import server.shops.IMaplePlayerShop;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;
import tools.Triple;
import tools.packet.FamilyPacket;
import tools.data.input.SeekableLittleEndianAccessor;

public class InterServerHandler {

    public static final void EnterCS(final MapleClient c, final MapleCharacter chr, final boolean mts) {
//        if (!chr.isAlive() || chr.getEventInstance() != null || c.getChannelServer() == null) {
           // c.getSession().write(MaplePacketCreator.serverBlocked(2));
           // c.getSession().write(MaplePacketCreator.enableActions());
           // return;
        //if (c.getChannel() == 1 && !c.getPlayer().isGM()) {
        //    c.getPlayer().dropMessage(5, "You may not enter on this channel. Please change channels and try again.");
        //    c.getSession().write(MaplePacketCreator.enableActions());
        //    return;
        //}
        if (c.getPlayer().getBuffedValue(MapleBuffStat.SUMMON) != null) {
            c.getPlayer().cancelEffectFromBuffStat(MapleBuffStat.SUMMON);
        }
        final ChannelServer ch = ChannelServer.getInstance(c.getChannel());

        chr.changeRemoval();

        if (chr.getMessenger() != null) {
            MapleMessengerCharacter messengerplayer = new MapleMessengerCharacter(chr);
            World.Messenger.leaveMessenger(chr.getMessenger().getId(), messengerplayer);
        }
        PlayerBuffStorage.addBuffsToStorage(chr.getId(), chr.getAllBuffs());
        PlayerBuffStorage.addCooldownsToStorage(chr.getId(), chr.getCooldowns());
        PlayerBuffStorage.addDiseaseToStorage(chr.getId(), chr.getAllDiseases());
        World.ChannelChange_Data(new CharacterTransfer(chr), chr.getId(), mts ? -20 : -10);
        ch.removePlayer(chr);
        c.updateLoginState(MapleClient.CHANGE_CHANNEL, c.getSessionIPAddress());

        c.getSession().write(MaplePacketCreator.getChannelChange(Integer.parseInt(CashShopServer.getIP().split(":")[1])));
        chr.saveToDB(false, false);
        chr.getMap().removePlayer(chr);
        c.setPlayer(null);
        c.setReceiving(false);
    }
    
public static final void EnterMTS(final MapleClient c, final MapleCharacter chr, final boolean mts) {
//        if (!chr.isAlive() || chr.getEventInstance() != null || c.getChannelServer() == null) {
        if (c.getPlayer().getTrade() != null) {
            c.getPlayer().dropMessage(1, "交易中无法进行其他操作！");
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        if (chr.isGM() == false || chr.isGM() == true) {
            NPCScriptManager.getInstance().start(c, 9900004);//拍卖npc
            c.getSession().write(MaplePacketCreator.enableActions());
           // c.getSession().write(MaplePacketCreator.serverBlocked(2));
           // c.getSession().write(MaplePacketCreator.enableActions());
           // return;
        }else{
        //if (c.getChannel() == 1 && !c.getPlayer().isGM()) {
        //    c.getPlayer().dropMessage(5, "You may not enter on this channel. Please change channels and try again.");
        //    c.getSession().write(MaplePacketCreator.enableActions());
        //    return;
        //}
        final ChannelServer ch = ChannelServer.getInstance(c.getChannel());

        chr.changeRemoval();

        if (chr.getMessenger() != null) {
            MapleMessengerCharacter messengerplayer = new MapleMessengerCharacter(chr);
            World.Messenger.leaveMessenger(chr.getMessenger().getId(), messengerplayer);
        }
        PlayerBuffStorage.addBuffsToStorage(chr.getId(), chr.getAllBuffs());
        PlayerBuffStorage.addCooldownsToStorage(chr.getId(), chr.getCooldowns());
        PlayerBuffStorage.addDiseaseToStorage(chr.getId(), chr.getAllDiseases());
        World.ChannelChange_Data(new CharacterTransfer(chr), chr.getId(), mts ? -20 : -10);
        ch.removePlayer(chr);
        c.updateLoginState(MapleClient.CHANGE_CHANNEL, c.getSessionIPAddress());

        c.getSession().write(MaplePacketCreator.getChannelChange(Integer.parseInt(CashShopServer.getIP().split(":")[1])));
        chr.saveToDB(false, false);
        chr.getMap().removePlayer(chr);
        c.setPlayer(null);
        c.setReceiving(false);
        }
    }
    public static final void Loggedin(final int playerid, final MapleClient c) {
//        if (c.getIdleTask() != null) {
//        c.getIdleTask().cancel(true);
//        }
//        c.updateLoginState(MapleClient.LOGIN_LOGGEDIN, c.getSessionIPAddress());
        final ChannelServer channelServer = c.getChannelServer();
        MapleCharacter player;
        final CharacterTransfer transfer = channelServer.getPlayerStorage().getPendingCharacter(playerid);
        
        if (transfer == null) { // Player isn't in storage, probably isn't CC
            player = MapleCharacter.loadCharFromDB(playerid, c, true);
        } else {
            player = MapleCharacter.ReconstructChr(transfer, c, true);
        }
        c.setPlayer(player);
        c.setAccID(player.getAccountID());

        if (!c.CheckIPAddress()) { // Remote hack
          //  c.getSession().close();
          //  return;
        }

        final int state = c.getLoginState();
        boolean allowLogin = false;
        if (state == MapleClient.LOGIN_SERVER_TRANSITION || state == MapleClient.CHANGE_CHANNEL) {
            if (!World.isCharacterListConnected(c.loadCharacterNames(c.getWorld()))) {
                allowLogin = true;
            }
        }
        if (!allowLogin) {
            c.setPlayer(null);
            c.getSession().close();
            return;
        }
        c.updateLoginState(MapleClient.LOGIN_LOGGEDIN, c.getSessionIPAddress());
        channelServer.addPlayer(player);

        c.getSession().write(MaplePacketCreator.getCharInfo(player));
        if (player.isGM()) {
            SkillFactory.getSkill(9001004).getEffect(1).applyTo(player);
        }
        c.getSession().write(MaplePacketCreator.temporaryStats_Reset()); // .
        player.getMap().addPlayer(player);

        try {
            player.silentGiveBuffs(PlayerBuffStorage.getBuffsFromStorage(player.getId()));
            player.giveCoolDowns(PlayerBuffStorage.getCooldownsFromStorage(player.getId()));
            player.giveSilentDebuff(PlayerBuffStorage.getDiseaseFromStorage(player.getId()));

            // Start of buddylist
           /* final int buddyIds[] = player.getBuddylist().getBuddyIds();
             World.Buddy.loggedOn(player.getName(), player.getId(), c.getChannel(), buddyIds, player.getGMLevel(), player.isHidden());
             if (player.getParty() != null) {
             World.Party.updateParty(player.getParty().getId(), PartyOperation.LOG_ONOFF, new MaplePartyCharacter(player));
             }
             final CharacterIdChannelPair[] onlineBuddies = World.Find.multiBuddyFind(player.getId(), buddyIds);
             for (CharacterIdChannelPair onlineBuddy : onlineBuddies) {
             final BuddylistEntry ble = player.getBuddylist().get(onlineBuddy.getCharacterId());
             ble.setChannel(onlineBuddy.getChannel());
             player.getBuddylist().put(ble);
             }
             c.getSession().write(MaplePacketCreator.updateBuddylist(player.getBuddylist().getBuddies()));*/
            // Start of buddylist
            final int buddyIds[] = player.getBuddylist().getBuddyIds();
            //World.Buddy.loggedOn(player.getName(), player.getId(), c.getChannel(), buddyIds);
            World.Buddy.loggedOn(player.getName(), player.getId(), c.getChannel(), buddyIds, player.getGMLevel(), player.isHidden());
            if (player.getParty() != null) {
                //channelServer.getWorldInterface().updateParty(player.getParty().getId(), PartyOperation.LOG_ONOFF, new MaplePartyCharacter(player));
                World.Party.updateParty(player.getParty().getId(), PartyOperation.LOG_ONOFF, new MaplePartyCharacter(player));
            }
            //final CharacterIdChannelPair[] onlineBuddies = cserv.getWorldInterface().multiBuddyFind(player.getId(), buddyIds);
            final CharacterIdChannelPair[] onlineBuddies = World.Find.multiBuddyFind(player.getId(), buddyIds);
            for (CharacterIdChannelPair onlineBuddy : onlineBuddies) {
                final BuddylistEntry ble = player.getBuddylist().get(onlineBuddy.getCharacterId());
                ble.setChannel(onlineBuddy.getChannel());
                player.getBuddylist().put(ble);
            }
            c.getSession().write(MaplePacketCreator.updateBuddylist(player.getBuddylist().getBuddies()));

            // Start of Messenger
            final MapleMessenger messenger = player.getMessenger();
            if (messenger != null) {
                World.Messenger.silentJoinMessenger(messenger.getId(), new MapleMessengerCharacter(c.getPlayer()));
                World.Messenger.updateMessenger(messenger.getId(), c.getPlayer().getName(), c.getChannel());
            }

            // Start of Guild and alliance
            /*if(player.getGuildId() <= 0){
                //System.out.println("writefuckguildinfo");
                c.getSession().write(MaplePacketCreator.fuckGuildInfo(player));
            }*//* else */
            if (player.getGuildId() > 0) {
                World.Guild.setGuildMemberOnline(player.getMGC(), true, c.getChannel());
                c.getSession().write(MaplePacketCreator.showGuildInfo(player));
                final MapleGuild gs = World.Guild.getGuild(player.getGuildId());
                if (gs != null) {
                    final List<MaplePacket> packetList = World.Alliance.getAllianceInfo(gs.getAllianceId(), true);
                    if (packetList != null) {
                        for (MaplePacket pack : packetList) {
                            if (pack != null) {
                                c.getSession().write(pack);
                            }
                        }
                    }
                 //    c.getSession().write(MaplePacketCreator.getGuildAlliance(gs.packetList()));//家族
                   
                } else { //guild not found, change guild id
                    player.setGuildId(0);
                    player.setGuildRank((byte) 5);
                    player.setAllianceRank((byte) 5);
                    player.saveGuildStatus();
                }
            }
            if (player.getFamilyId() > 0) {
                World.Family.setFamilyMemberOnline(player.getMFC(), true, c.getChannel());
            }
            c.getSession().write(FamilyPacket.getFamilyData());
            c.getSession().write(FamilyPacket.getFamilyInfo(player));
        } catch (Exception e) {
            FileoutputUtil.outputFileError(FileoutputUtil.Login_Error, e);
        }
        player.sendMacros();
        player.showNote();
        player.updatePartyMemberHP();
        player.startFairySchedule(false);
        player.baseSkills(); //fix people who've lost skills.
        c.getSession().write(MaplePacketCreator.getKeymap(player.getKeyLayout()));
        for (MapleQuestStatus status : player.getStartedQuests()) {
            if (status.hasMobKills()) {
                c.getSession().write(MaplePacketCreator.updateQuestMobKills(status));
            }
        }
        final CharacterNameAndId pendingBuddyRequest = player.getBuddylist().pollPendingRequest();
        if (pendingBuddyRequest != null) {
            player.getBuddylist().put(new BuddylistEntry(pendingBuddyRequest.getName(), pendingBuddyRequest.getId(), "ETC", -1, false, pendingBuddyRequest.getLevel(), pendingBuddyRequest.getJob()));
            c.getSession().write(MaplePacketCreator.requestBuddylistAdd(pendingBuddyRequest.getId(), pendingBuddyRequest.getName(), pendingBuddyRequest.getLevel(), pendingBuddyRequest.getJob()));
        }
        player.expirationTask();
        if (player.getJob() == 132) { // DARKKNIGHT
            player.checkBerserk();
        }
        if (player.getMapId() >= 910000020) {
            player.dropMessage(5,""+GameConstants.game+"");
        }
        if (GameConstants.game == 3 || GameConstants.game == 4 || GameConstants.game == 5 || GameConstants.game == 1) {
            int p = 0;
            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                for (MapleCharacter chr : cserv.getPlayerStorage().getAllCharacters()) {
                    if (chr != null) {
                        p++;
                    }
                }
            }
            if(player.getGMLevel() == 0){
            World.Broadcast.broadcastSmega(MaplePacketCreator.serverNotice(11, c.getChannel(), new StringBuilder().append("全服喇叭]").append(c.getPlayer().getName()).append(" : ").append("欢迎来到"+ServerProperties.getProperty("KinMS.CommandMessage")+"冒险岛，祝你游戏开心").toString()).getBytes());
            }
          //  World.Broadcast.broadcastSmega(MaplePacketCreator.serverNotice(11, c.getChannel(), new StringBuilder().append("全服喇叭]").append(c.getPlayer().getName()).append(" : ").append("欢迎来到棉花糖冒险岛，目前在线人数：" + p + " 个，祝你游戏开心").toString()).getBytes());
            //World.Broadcast.broadcastSmega(MaplePacketCreator.serverNotice(11, c.getChannel(), "欢迎[" + player.getName() + "]来到棉花糖冒险岛，目前在线人数：" + p + " 个，祝你游戏开心\r\n").getBytes());
       }
        player.spawnClones();
        player.getHyPay(1);
        player.getFishingJF(1);
        /*if(player.getJob() >= 2000 && player.getJob() <= 2112){
        c.getSession().write(MaplePacketCreator.testCombo(1));
        }*/
      //  player.spawnSavedPets();
        c.getSession().write(MaplePacketCreator.showCharCash(c.getPlayer()));
       // for (int i = 0; i < 10; i++) {
      //  c.getSession().write(MaplePacketCreator.游戏屏幕中间黄色字体("欢迎来到T079\r\n哈哈哈哈哈哈"));
      //  }
        //System.out.println("[KinMS冒险岛][名字:" + c.getPlayer().getName() + "][等级:" + c.getPlayer().getLevel() + "][IP:" + c.getSessionIPAddress() + "]登录.");
        
        c.getSession().write(MaplePacketCreator.weirdStatUpdate());
    }

    public static final void ChangeChannel(final SeekableLittleEndianAccessor slea, final MapleClient c, final MapleCharacter chr) {
        if (c.getPlayer().getTrade() != null || !chr.isAlive() || chr.getEventInstance() != null || chr.getMap() == null || FieldLimitType.ChannelSwitch.check(chr.getMap().getFieldLimit())) {
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        chr.changeChannel(slea.readByte() + 1);
    }
}
