/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
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

/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Lakelis - Victoria Road: Kerning City (103000000)
-- By ---------------------------------------------------------------------------------------------
	Stereo
-- Version Info -----------------------------------------------------------------------------------
	1.0 - First Version by Stereo
---------------------------------------------------------------------------------------------------
**/

var status;
var minLevel = 21;
var maxLevel = 255;
var minPlayers = 3;
var maxPlayers = 6;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (cm.getParty() == null) { // No Party
            cm.sendOk("你没有队伍无法进入！");
            cm.dispose();
        } else if (!cm.isLeader()) { // Not Party Leader
            cm.sendOk("请让你的队长和我说话~");
            cm.dispose();
        } else {
            var party = cm.getParty().getMembers();
            var inMap = cm.partyMembersInMap();
            var levelValid = 0;
            for (var i = 0; i < party.size(); i++) {
                if (party.get(i).getLevel() >= minLevel && party.get(i).getLevel() <= maxLevel)
                    levelValid++;
            }
            if (inMap < minPlayers || inMap > maxPlayers) {
                cm.sendOk("你的队伍人数不足"+minPlayers+"人.请把你的队伍人员召集到废气都市在进入副本.");
                //cm.sendOk("Your party is not a party of "+minPlayers+". Please make sure all your members are present and qualified to participate in this quest. I see #b" + inMap + "#k of your party members are in Kerning. If this seems wrong, #blog out and log back in,#k or reform the party.");
                cm.dispose();
            } else if (levelValid != inMap) {
                cm.sendOk("请确保你的队伍人员最小等级在 "+minLevel+" 和 "+maxLevel+"之间. I see #b" + levelValid + "#k members are in the right level range. If this seems wrong, #blog out and log back in,#k or reform the party.");
                cm.dispose();
            } else {
                var em = cm.getEventManager("KerningPQ");
                if (em == null) {
                    cm.sendOk("This PQ is currently unavailable.");
                //} else if (em.getProperty("KPQOpen").equals("true")) {
                } else {
        if (cm.getPlayerCount(103000800) <= 0 && cm.getPlayerCount(103000801) <= 0 && cm.getPlayerCount(103000802) <= 0 && cm.getPlayerCount(103000803) <= 0 && cm.getPlayerCount(103000804) <= 0) {
			//if(cm.getMonsterCount(103000804) <= 0){
				/*cm.spawnMobOnMap(9300002,1,297,-2188,103000804);
				cm.spawnMobOnMap(9300002,1,433,-2192,103000804);
				cm.spawnMobOnMap(9300002,1,132,-2193,103000804);
				cm.spawnMobOnMap(9300000,1,-18,-1480,103000804);
				cm.spawnMobOnMap(9300000,1,80,-1486,103000804);
				cm.spawnMobOnMap(9300000,1,391,-1488,103000804);
				cm.spawnMobOnMap(9300000,1,247,-1485,103000804);
				cm.spawnMobOnMap(9300000,1,-111,-1475,103000804);
				cm.spawnMobOnMap(9300000,1,299,-1485,103000804);
				cm.spawnMobOnMap(9300003,1,162,-451,103000804);*/
			//}
				//em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
                em.startInstance(cm.getParty(), cm.getPlayer().getMap());
		} else {
                            cm.sendOk("请稍等...任务正在进行中.");
                        }
						// Capt. Lac Map
				//em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
                    // Begin the PQ.
                //    em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    // Remove Passes and Coupons GMS DOESNT DO THIS!!!
                    //party = cm.getPlayer().getEventInstance().getPlayers();
                    //cm.removeFromParty(4001008, party);
                    //cm.removeFromParty(4001007, party);
                  //  em.setProperty("KPQOpen" , "false");
                //} else {
                 //   cm.sendNext("There is already another party inside. Please wait !");
                }
                cm.dispose();
            }
        }
    }
}