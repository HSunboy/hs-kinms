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
			text += "\t\t\t  #e��ӭ����#bð�յ� #k!#n\r\n"
            text += "#L1##e#d��ȡÿ����Ʒ#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) { 
			if(cm.getBossLog("ÿ����ȡABC") <= 0){
				cm.gainItem(id,str,dex,luk,Int,hp,mp,watk,matk,wdef,mdef,hb,mz,ty,yd,time);
				cm.setBossLog("ÿ����ȡABC");
			//	cm.gainItem(id,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //time д1 = 1Сʱ  д10 = 10Сʱ 
			//����Ӣ�Ĵ�����Ƕ�Ӧ����  ��Ҫ��д0 Ҫ����д��Ҫ������������������ˡ����ǵ�������ֵ�𳬹�32767 Ѫ����� 30000
            cm.sendOk("��ȡ�ɹ���");
			}else{
            cm.sendOk("�������Ѿ���ȡ���ˣ�");
			}
            cm.dispose();
        }
    }
}


