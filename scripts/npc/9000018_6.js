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
            text += "#L1##e#d#v1302081#�����Ƽ׽�����.\r\n"//3
            text += "#L2##e#d#v1332073#������������#l\r\n"//3
            text += "#L3##e#d#v1372044#�������������#l\r\n"//3
            text += "#L4##e#d#v1382057#�������������#l\r\n"//3
            text += "#L5##e#d#v1402046#������ڤ������#l\r\n"//3
            text += "#L6##e#d#v1432047#������ʥǹ����#l\r\n"//3
            text += "#L7##e#d#v1442063#������������#l\r\n"//3
            text += "#L8##e#d#v1452057#���㾪�繭����#l\r\n"//3
            text += "#L9##e#d#v1462050#����ڤ��������#l\r\n"//3
            text += "#L10##e#d#v1472068#����󱯸�����#l\r\n"//3
            text += "#L11##e#d#v1322060#���㾪��������#l\r\n"//3
            text += "#L12##e#d#v1422037#���������츳����#l\r\n"//3
            text += "#L13##e#d#v1312037#������Ÿ�������#l\r\n"//3
            text += "#L14##e#d#v1412033#��������������#l\r\n"//3
            text += "#L15##e#d#v1482023#�����ȸ������#l\r\n"//3
            text += "#L16##e#d#v1492023#�����������#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9000018, 61);
        } else if (selection == 2) {
		cm.openNpc(9000018, 62);
        } else if (selection == 3) {
		cm.openNpc(9000018, 63);
        } else if (selection == 4) {
		cm.openNpc(9000018, 64);
        } else if (selection == 5) {
		cm.openNpc(9000018, 65);
        } else if (selection == 6) {
		cm.openNpc(9000018, 66);
        } else if (selection == 7) {
		cm.openNpc(9000018, 67);
        } else if (selection == 8) {
		cm.openNpc(9000018, 68);
        } else if (selection == 9) {
		cm.openNpc(9000018, 69);
        } else if (selection == 10) {
		cm.openNpc(9000018, 610);
        } else if (selection == 11) {
		cm.openNpc(9000018, 611);
        } else if (selection == 12) {
		cm.openNpc(9000018, 612);
        } else if (selection == 13) {
		cm.openNpc(9000018, 613);
        } else if (selection == 14) {
		cm.openNpc(9000018, 614);
        } else if (selection == 15) {
		cm.openNpc(9000018, 615);
        } else if (selection == 16) {
		cm.openNpc(9000018, 616);
	}
    }
}


