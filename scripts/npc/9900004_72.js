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
            text += "#L1##r#v4170011#��ȡ300Ԫ�ۼƳ�ֵ�����#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(4170011,1)){
				cm.gainItem(4170011, -1);
				cm.gainItem(2040807, 3);//���׾�
				cm.gainItem(3015092, 1);//����¡���ɿ���������
				cm.gainItem(5150040, 50);//�ʼ�
				cm.gainItem(1142178,30,30,30,30,1000,1000,30,40,80,80,50,50,15,15);//ð�յ������ʹ
				cm.gainItem(1902013, 1);//ˮţ
				cm.gainItem(1912009, 1);//����
				cm.gainItem(2049100, 30);//����
				cm.gainItem(1012171, 1);//�˿�100
				cm.gainItem(2340000, 30);//ף��
				cm.gainMeso(10000000);
            cm.sendOk("�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ�����ð�յ� 300Ԫ�ۼƳ�ֵ��л�������л����֧�֣�");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
		}
    }
}


