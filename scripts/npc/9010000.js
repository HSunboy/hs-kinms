function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
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
			//显示物品ID图片用的代码是  #v这里写入ID#
            text += "#e#d您好！非常欢迎您光临[天成冒险岛]！\r\n希望您能在天成玩的开心，多交朋友，游戏遇到什么问题可以随时联系群主，不用拘束！唯一QQ群：84586869   YY频道：81111881，活动的时候记得来YY频道参加哦！#l\r\n\r\n"//3
            //text += "#L1##r是的我要购买#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.getMeso() > 5000000){
				cm.gainItem(3994092, 1);
				cm.gainMeso(-5000000);
            cm.sendOk("购买成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]在周末集市购买了[烤鳗鱼]，期待丰收吧！");
            cm.dispose();
			}else{
            cm.sendOk("您的金币不足！");
            cm.dispose();
			}
		}
    }
}


