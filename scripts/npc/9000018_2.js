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
            text += "#L1##e#d#v1302064#��ҶͻϮ������.\r\n"//3
            text += "#L2##e#d#v1332056#��Ҷ׷�������#l\r\n"//3
            text += "#L3##e#d#v1372034#��Ҷ�ɼ�������#l\r\n"//3
            text += "#L4##e#d#v1382039#��Ҷ����������#l\r\n"//3
            text += "#L5##e#d#v1432040#��Ҷ����ǹ����#l\r\n"//3
            text += "#L6##e#d#v1442051#��Ҷս������#l\r\n"//3
            text += "#L7##e#d#v1452045#��ҶHAPPY������#l\r\n"//3
            text += "#L8##e#d#v1462040#��Ҷ����������#l\r\n"//3
            text += "#L9##e#d#v1402039#��Ҷ���׽�����#l\r\n"//3
            text += "#L10##e#d#v1472055#��Ҷ����ȭ����#l\r\n"//3
            text += "#L11##e#d#v1312032#��Ҷ�ƻ�����������#l\r\n"//3
            text += "#L12##e#d#v1322054#��Ҷ���𴸵�������#l\r\n"//3
            text += "#L13##e#d#v1412027#��ҶǬ����˫������#l\r\n"//3
            text += "#L14##e#d#v1422029#��Ҷ������˫������#l\r\n"//3
            text += "#L15##e#d#v1482022#��Ҷ��צ����#l\r\n"//3
            text += "#L16##e#d#v1492022#��Ҷ������ǹ����#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9000018, 21);
        } else if (selection == 2) {
		cm.openNpc(9000018, 22);
        } else if (selection == 3) {
		cm.openNpc(9000018, 23);
        } else if (selection == 4) {
		cm.openNpc(9000018, 24);
        } else if (selection == 5) {
		cm.openNpc(9000018, 25);
        } else if (selection == 6) {
		cm.openNpc(9000018, 26);
        } else if (selection == 7) {
		cm.openNpc(9000018, 27);
        } else if (selection == 8) {
		cm.openNpc(9000018, 28);
        } else if (selection == 9) {
		cm.openNpc(9000018, 29);
        } else if (selection == 10) {
		cm.openNpc(9000018, 210);
        } else if (selection == 11) {
		cm.openNpc(9000018, 211);
        } else if (selection == 12) {
		cm.openNpc(9000018, 212);
        } else if (selection == 13) {
		cm.openNpc(9000018, 213);
        } else if (selection == 14) {
		cm.openNpc(9000018, 214);
        } else if (selection == 15) {
		cm.openNpc(9000018, 215);
        } else if (selection == 16) {
		cm.openNpc(9000018, 216);
	}
    }
}


