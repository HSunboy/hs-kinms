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
            text += "#e#d�һ�#v1112444#ȫ����+5+��Ч,HP/MP+500,����/ħ��+5,����/ħ��+10,����/�ر�+10,��Ծ/�ƶ�+5\r\n��Ҫ#v4170013#x50��.�Ѽ��õ��߾Ϳ������Ҷһ���.#l\r\n\r\n"//3
            text += "#L1##r�һ�6����ƽ��Ҷ��ָ#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4170013,50)){
				cm.gainItem(4170013, -50);
				cm.gainItem(1112444,5,5,5,5,500,500,5,5,10,10,10,10,5,5);
				cm.gainMeso(100000);
            cm.sendOk("�һ��ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��50��[�������]�һ���ȫ����+5[6����ƽ��Ҷ��ָ]���������֣�����ƷŶ~��");
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
		}
    }
}


