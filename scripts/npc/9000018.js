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
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#e#r��ã�����������԰�������������Ҫ���������������ҿ���Ϊ�������������б�.\r\n\r\n"//3
            text += "#L2##e#d#v4031975#��Ҷ����ϵ��#l\r\n"//3
            text += "#L3##e#d#v4031975#64��Ҷ����ϵ��#l\r\n"//3
            text += "#L4##e#d#v4031975#�ƽ��Ҷϵ��#l\r\n"//3
            text += "#L5##e#d#v4031975#������������#l\r\n"//3
            text += "#L7##e#d#v4031975#��������ϵ��#l\r\n"//3
            //text += "#L8##e#d#v4031975#���ֶ�������#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9000018, 1);
        } else if (selection == 2) {
		cm.openNpc(9000018, 1);
        } else if (selection == 3) {
		cm.openNpc(9000018, 2);
        } else if (selection == 4) {
		cm.openNpc(9000018, 3);
        } else if (selection == 5) {
		cm.openNpc(9000018, 4);
        } else if (selection == 6) {
		cm.openNpc(9000018, 5);
        } else if (selection == 7) {
		cm.openNpc(9000018, 6);
        } else if (selection == 8) {
		cm.openNpc(9000018, 9);
	}
    }
}


