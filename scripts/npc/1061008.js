importPackage(Packages.client);
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var txt = "";
            txt = "���ǲֿ��ϰ�-������.ÿ�����̵�3��NPCŶ��\r\n\r\n";

            if (cm.getPS() == 2){// cm.getPS()  ����˼�� ��ȡ����ֵ�������1 �͵ó��������Ѿ�����˵�һ�� �����������еڶ�������!

                txt += "#L1##b�ռ�150���������֮β#v4000007#�����ң����ĵ��߲���Ŷ��#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ����ȥ��ħ������XX!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000013,200)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000013, -200);
                cm.sendOk("���̵�2�����!Ȼ����ȥ��.����֮��-�ֿ��ϰ�-������.������һ����");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�150���������֮β#v4000007#�����ң�");
                cm.dispose();
            }
        }
    }
}
