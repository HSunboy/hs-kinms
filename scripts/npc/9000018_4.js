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
            text += "#L1##e#d#v1302312#������������֮������.\r\n"//3
            text += "#L2##e#d#v1332257#������������̵�����#l\r\n"//3
            text += "#L3##e#d#v1372204#�������������������#l\r\n"//3
            text += "#L4##e#d#v1382242#�����������᳤������#l\r\n"//3
            text += "#L5##e#d#v1402233#������������˫�ֽ�����#l\r\n"//3
            text += "#L6##e#d#v1442251#������������ì����#l\r\n"//3
            text += "#L7##e#d#v1452235#�����������ṭ����#l\r\n"//3
            text += "#L8##e#d#v1462222#������������������#l\r\n"//3
            text += "#L9##e#d#v1472244#�����������ᶷȭ����#l\r\n"//3
            text += "#L10##e#d#v1432197#������������ǹ����#l\r\n"//3
            text += "#L11##e#d#v1312182#�����������ᵥ�ָ�����#l\r\n"//3
            text += "#L12##e#d#v1322233#�����������ᵥ�ִ�����#l\r\n"//3
            text += "#L13##e#d#v1412161#������������˫��ս������#l\r\n"//3
            text += "#L14##e#d#v1422168#������������˫�ִ�����#l\r\n"//3
            text += "#L15##e#d#v1482199#������������ȭ������#l\r\n"//3
            text += "#L16##e#d#v1492209#�������������ǹ����#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9000018, 41);
        } else if (selection == 2) {
		cm.openNpc(9000018, 42);
        } else if (selection == 3) {
		cm.openNpc(9000018, 43);
        } else if (selection == 4) {
		cm.openNpc(9000018, 44);
        } else if (selection == 5) {
		cm.openNpc(9000018, 45);
        } else if (selection == 6) {
		cm.openNpc(9000018, 46);
        } else if (selection == 7) {
		cm.openNpc(9000018, 47);
        } else if (selection == 8) {
		cm.openNpc(9000018, 48);
        } else if (selection == 9) {
		cm.openNpc(9000018, 49);
        } else if (selection == 10) {
		cm.openNpc(9000018, 410);
        } else if (selection == 11) {
		cm.openNpc(9000018, 411);
        } else if (selection == 12) {
		cm.openNpc(9000018, 412);
        } else if (selection == 13) {
		cm.openNpc(9000018, 413);
        } else if (selection == 14) {
		cm.openNpc(9000018, 414);
        } else if (selection == 15) {
		cm.openNpc(9000018, 415);
        } else if (selection == 16) {
		cm.openNpc(9000018, 416);
	}
    }
}


