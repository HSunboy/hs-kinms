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
            text += "#L1##r#v4001245#��ȡ800Ԫ�ۼƳ�ֵ�����#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4001245,1)){
				cm.gainItem(4001245, -1);
				cm.gainItem(2340000, 50);//ף��
				cm.gainItem(2049100, 50);//����
				cm.gainItem(1113057, 1);//����ָ��
				cm.gainItem(3015051, 1);//���ްԷɻ�
				cm.gainItem(1012173, 1);//������150
				cm.gainItem(1142175,50,50,50,50,2000,2000,50,60,300,300,50,50,15,15);//ð�յ��ղؼ�
				cm.gainItem(5150040, 50);//�ʼ�
				cm.gainMeso(20000000);
            cm.sendOk("�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ�����ð�յ� 800Ԫ�ۼƳ�ֵ��л�������л����֧�֣�");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
		}
    }
}


