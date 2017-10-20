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
			text += "\t\t\t  #e欢迎来到#b欢乐谷冒险岛 #k!#n\r\n"
			if(cm.getJob() >= 0 && cm.getJob()<= 522 && cm.hasSkill(1007) == false && cm.getMeso() >= 5000000){
            text += "#L1##e#d激活锻造技能【500W】#l\r\n"//3
			}else if(cm.getJob() >=1000 && cm.getJob() <= 1512 && cm.hasSkill(10001007) == false && cm.getMeso() >= 5000000){
            text += "#L1##e#d激活锻造技能【500W】#l\r\n"//3
			}else if(cm.getJob() >=2000 && cm.getJob() <= 2112 && cm.hasSkill(20001007) == false && cm.getMeso() >= 5000000){
            text += "#L1##e#d激活锻造技能【500W】#l\r\n"//3
			}else{
            text += "#r#d你已经激活过技能了#l\r\n或者你没有500万金币！"//3
			}
            cm.sendSimple(text);
        } else if (selection == 1) { 
			if(cm.getJob() >= 0 && cm.getJob()<= 522 && cm.hasSkill(1007) == false){
			cm.teachSkill(1007,3,3);
			}else if(cm.getJob() >=1000 && cm.getJob() <= 1512 && cm.hasSkill(10001007) == false){
			cm.teachSkill(10001007,3,3);
			}else if(cm.getJob() >=2000 && cm.getJob() <= 2112 && cm.hasSkill(20001007) == false){
			cm.teachSkill(20001007,3,3);
			}
			cm.gainMeso(-5000000);
            cm.dispose();
        }
    }
}


7