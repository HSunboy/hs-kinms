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
            text += "#e#d��ã�\r\n����������԰�������������Ҫ��������ͼ��������Ϸ���������ҿ���Ϊ����������Ϸ�����б�.\r\n\r\n"//3
            text += "#L1##e#d#v4080000# ��ˮ��/Ģ��  ������#l\r\n"//3
            text += "#L2##e#d#v4080001# ��ˮ��/������������#l\r\n"//3
            text += "#L3##e#d#v4080002# ��ˮ��/����  ������#l\r\n"//3
            text += "#L4##e#d#v4080003# ��������/Ģ��������#l\r\n"//3
            text += "#L5##e#d#v4080004# ����/��������������#l\r\n"//3
            text += "#L6##e#d#v4080005# ����/Ģ��    ������#l\r\n"//3
            text += "#L7##e#d#v4080100# �������#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(1012008, 1);
        } else if (selection == 2) {
		cm.openNpc(1012008, 2);
        } else if (selection == 3) {
		cm.openNpc(1012008, 3);
        } else if (selection == 4) {
		cm.openNpc(1012008, 4);
        } else if (selection == 5) {
		cm.openNpc(1012008, 5);
        } else if (selection == 6) {
		cm.openNpc(1012008, 6);
        } else if (selection == 7) {
		cm.openNpc(1012008, 7);
	}
    }
}


