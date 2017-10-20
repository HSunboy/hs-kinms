var 礼包物品 = "#v1302000#";
var x1 = "1302000,+1";// 物品ID,数量
var x2;
var x3;
var x4;
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";

function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			cm.teachSkill(1004,1,1);
	// cm.gainItem(1912000,1);
	// cm.gainItem(1902000,1);
          //  text += "#b#v4031344##v4031344##v4031344##v3994075##v3994066##v3994071##v3994077##v4031344##v4031344##v4031344##k\r\n";
            //text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
		   text += " \t\t\t  #e#d欢迎来到#dHundSun冒险岛#k#n              \r\n           #v4031344##v4031344##v4031344##v4031344##v4031344#\r\n"
            text += "\t\t\t#e#d当前在线时间："+cm.getGamePoints()+"分钟！#k#n\r\n"
		//var tex2 = ""+cm.getHyPay(1)+"";
        //    text += "#L8##b○每日签到#l\t#L9##b○每日任务#l\t#L16##b○每日挑战#l\r\n\r\n"//3
         //   text += "#L14##d○新手礼包#l\t#L17##b○地图传送#l\t#L18##b○兑换点卷#l\r\n\r\n"//3
           // text += "#L19##d○武器商店#l\t#L5##b○消耗商店#l\t#L20##b○点卷抽奖#l\r\n\r\n"//3
		  // if(cm.getPlayer().isGM()){
            //text += ""+爱心+"#L3##e#d○城镇传送#l\t   #L12##e#d○消费积分抽奖#l   \r\n"//3
            text += "#L3##e#d城镇活动传送#l#L5##e#d组队副本传送#l#L7##e#d快捷消耗商店#l\r\n"//3
            text += "                                         \r\n"//3
		  // }
            text += "#L11##e#r兑换充值礼包#l#L15##e#r兑换新手礼包#l#L14##e#r纪念币交易所#l\r\n"//3
           // text += "#L4##e#r○角色快捷转职#l\t   #L7##e#r○充值点卷领取#l \r\n"//3
            text += "                                        \r\n"//3
            text += "#L4##e#r角色快捷转职#l#L2##e#d坐骑任务补给#l#L8##e#r枫叶换抵用卷#l\r\n"//3
            text += "                                         \r\n"//
            text += "#L9##e#d在线时间奖励#l#L16##e#d清理背包物品#l\r\n"//3
            text += "                                        \r\n"//3

           // text += "#L11##r天成冒险岛特价4999点卷大礼包开启中·(2月3日结束)#l\r\n\r\n"//3
            //text += "#L3##d○快捷传送#l\t#L4##b○快捷转职#l\r\n\r\n"//3 
            //text += "#L5##e#d组队副本传送#l       #L16##e#d清理背包物品#l  \r\n"//3
            //text += "                  \r\n"//3
            //text += "#L14##e#r纪念币交易所#l       #L13##e#r稀有点装商城#l\r\n"//3
            //text += "               \r\n"//3
            //text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
		    cm.sendSimple(text);
        } else if (selection == 1) {//
            cm.openNpc(9900004, 7);
        } else if (selection == 2) {//
            cm.openNpc(9900004, 68);
        } else if (selection == 3) { //
            cm.openNpc(9900004, 1);
        } else if (selection == 4) {//
            cm.openNpc(9900004, 2);
        } else if (selection == 5) {//
            cm.openNpc(9900004, 3);
        } else if (selection == 6) {//
            cm.openNpc(9900004, 4);
        } else if (selection == 7) {//
           // cm.openNpc(9900004, 7);
            cm.openShop(30);
			cm.dispose();
        } else if (selection == 8) {//
            cm.openNpc(9900004, 5);
        } else if (selection == 9) {//
            cm.openNpc(9900004, 9);
        } else if (selection == 10) {//
            cm.openNpc(9900004, 999);
        } else if (selection == 11) {//
            cm.openNpc(9900004, 7);
        } else if (selection == 12) {//
		
            cm.sendOk("暂时屏蔽！");
            cm.dispose();
            //cm.openNpc(9900004, 10);
        } else if (selection == 13) {//
            cm.openNpc(9900004, 13);
        } else if (selection == 14) {//
            cm.openNpc(9900004, 14);
        } else if (selection == 15) {//
            cm.openNpc(9900004, 69);
        } else if (selection == 16) {//
            cm.openNpc(9900004, 444);
		}
    }
}


