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
            text += "#L1##e#d#v1302213#���鷨ʦ���ֽ�����.\r\n"//3
            text += "#L2##e#d#v1332188#���鷨ʦ���������#l\r\n"//3
            text += "#L3##e#d#v1372132#���鷨ʦȨ�Ƚ�����#l\r\n"//3
            text += "#L4##e#d#v1382159#���鷨ʦ��������#l\r\n"//3
            text += "#L5##e#d#v1402143#���鷨ʦ˫�ֽ�����#l\r\n"//3
            text += "#L6##e#d#v1432133#���鷨ʦǹ����#l\r\n"//3
            text += "#L7##e#d#v1442171#���鷨ʦì����#l\r\n"//3
            text += "#L8##e#d#v1452163#���鷨ʦ��������#l\r\n"//3
            text += "#L9##e#d#v1462153#���鷨ʦ������#l\r\n"//3
            text += "#L10##e#d#v1472175#���鷨ʦѪɫȭ������#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9000018, 51);
        } else if (selection == 2) {
		cm.openNpc(9000018, 52);
        } else if (selection == 3) {
		cm.openNpc(9000018, 53);
        } else if (selection == 4) {
		cm.openNpc(9000018, 54);
        } else if (selection == 5) {
		cm.openNpc(9000018, 55);
        } else if (selection == 6) {
		cm.openNpc(9000018, 56);
        } else if (selection == 7) {
		cm.openNpc(9000018, 57);
        } else if (selection == 8) {
		cm.openNpc(9000018, 58);
        } else if (selection == 9) {
		cm.openNpc(9000018, 59);
        } else if (selection == 10) {
		cm.openNpc(9000018, 510);
	}
    }
}


