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

            cm.sendOk("��л��Ĺ��٣�");
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
			text += "\t\t\t  #e��ӭ����#b���ֹ�ð�յ� #k!#n\r\n"
			if(cm.getJob() >= 0 && cm.getJob()<= 522 && cm.hasSkill(1007) == false && cm.getMeso() >= 5000000){
            text += "#L1##e#d������켼�ܡ�500W��#l\r\n"//3
			}else if(cm.getJob() >=1000 && cm.getJob() <= 1512 && cm.hasSkill(10001007) == false && cm.getMeso() >= 5000000){
            text += "#L1##e#d������켼�ܡ�500W��#l\r\n"//3
			}else if(cm.getJob() >=2000 && cm.getJob() <= 2112 && cm.hasSkill(20001007) == false && cm.getMeso() >= 5000000){
            text += "#L1##e#d������켼�ܡ�500W��#l\r\n"//3
			}else{
            text += "#r#d���Ѿ������������#l\r\n������û��500���ң�"//3
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