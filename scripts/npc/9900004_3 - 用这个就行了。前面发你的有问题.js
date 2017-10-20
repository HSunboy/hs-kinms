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
			text += "\t\t\t  #e欢迎来到#b冒险岛 #k!#n\r\n"
            text += "#L1##e#d领取每日物品#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) { 
			if(cm.getBossLog("每日领取ABC") <= 0){
				cm.gainItem(id,str,dex,luk,Int,hp,mp,watk,matk,wdef,mdef,hb,mz,ty,yd,time);
				cm.setBossLog("每日领取ABC");
			//	cm.gainItem(id,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //time 写1 = 1小时  写10 = 10小时 
			//上面英文代表的是对应函数  不要就写0 要就填写你要给予的属性数量就行了。但是单个函数值别超过32767 血蓝最高 30000
            cm.sendOk("领取成功！");
			}else{
            cm.sendOk("今天你已经领取过了！");
			}
            cm.dispose();
        }
    }
}


