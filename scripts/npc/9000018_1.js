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
            text += "#L1##e#d#v1302030#��Ҷ������.\r\n"//3
            text += "#L2##e#d#v1332025#��Ҷ������#l\r\n"//3
            text += "#L3##e#d#v1382012#��Ҷ������#l\r\n"//3
            text += "#L4##e#d#v1432012#��Ҷǹ����#l\r\n"//3
            text += "#L5##e#d#v1442024#��Ҷì����#l\r\n"//3
            text += "#L6##e#d#v1452022#��Ҷ������#l\r\n"//3
            text += "#L7##e#d#v1462019#��Ҷ������#l\r\n"//3
            text += "#L8##e#d#v1472032#��Ҷȭ����#l\r\n"//3
            text += "#L9##e#d#v1422014#��Ҷ������#l\r\n"//3
            text += "#L10##e#d#v1412011#��Ҷ������#l\r\n"//3
            text += "#L11##e#d#v1482020#��Ҷָ������#l\r\n"//3
            text += "#L12##e#d#v1492020#��Ҷ��ǹ����#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9000018, 11);
        } else if (selection == 2) {
		cm.openNpc(9000018, 12);
        } else if (selection == 3) {
		cm.openNpc(9000018, 13);
        } else if (selection == 4) {
		cm.openNpc(9000018, 14);
        } else if (selection == 5) {
		cm.openNpc(9000018, 15);
        } else if (selection == 6) {
		cm.openNpc(9000018, 16);
        } else if (selection == 7) {
		cm.openNpc(9000018, 17);
        } else if (selection == 8) {
		cm.openNpc(9000018, 18);
        } else if (selection == 9) {
		cm.openNpc(9000018, 19);
        } else if (selection == 10) {
		cm.openNpc(9000018, 110);
        } else if (selection == 11) {
		cm.openNpc(9000018, 111);
        } else if (selection == 12) {
		cm.openNpc(9000018, 112);
	}
    }
}


