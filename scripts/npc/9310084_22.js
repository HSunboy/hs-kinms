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
            text += "#e#d���ã������������õ�#v1112444#������ͨ�������������õ���һ��������Ŷ��\r\n\r\n#v1112657#ȫ����+10,HP/MP+800,����/ħ��+50,����/�ر�+15,�ƶ�/��Ծ+5,����/ħ��+8\r\n�������:#v4170002#x50��+#v1112444#x1.�Ѽ���ϾͿ������ҽ��н�����.#l\r\n\r\n"//3
            text += "#L1##r����ˮ�ν�ָ#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("���������಻��2���ո�");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("�ֽ������಻��1���ո�");
            cm.dispose();
			}else */if(cm.haveItem(4170002,50) && cm.haveItem(1112444,1)){
				cm.gainItem(4170002, -50);
				cm.gainItem(1112444, -1);
				cm.gainItem(1112657,10,10,10,10,800,800,8,8,50,50,15,15,5,5);
				cm.gainMeso(100000);
            cm.sendOk("�һ��ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��50��[����������]+[6����ƽ��Ҷ��ָ]������[ˮ�βʺ��ָ]���������֣�����ƷŶ~��");
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
		}
    }
}

