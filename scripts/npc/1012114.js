var status = -1;
var random = java.lang.Math.floor(Math.random() * 9 + 1);
var random1 = java.lang.Math.floor(Math.random() * 15000 + 1);
var random2 = java.lang.Math.floor(Math.random() * 10 + 1);

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendSimple("��ã�����С�ϻ� #bRice Cakes#k...#b\r\n#L1#�鿴˵��#l\r\n#L2#�뿪��ͼ#l\r\n#L0#�Ҹ�����������!#l");
    } else if (status == 1) {
        if (selection == 0) {
            if (!cm.isLeader()) {
                cm.sendOk("��ӳ�����̸��.");
            } else {
                if (cm.haveItem(4001101,20)) {
                    cm.removeAll(4001101);
                    cm.givePartyExp(6500);
					if(random <= 2 &&random >= 1){
						cm.givePartyDY(random2);
					cm.worldMessage(6,"��ң�["+cm.getName()+"]�������Ķ��������������Ӹ�������õ��þ�"+random2);
					}else if(random >= 3 && random <= 4){
						cm.givePartyMeso(random1);
					cm.worldMessage(6,"��ң�["+cm.getName()+"]�������Ķ��������������Ӹ�������ý�ң�"+random1);
					}else{
					cm.worldMessage(6,"��ң�["+cm.getName()+"]�������Ķ��������������Ӹ�����");
					}
					cm.givePartyItems(4170013, 1);
                    cm.givePartyItems(4001322, 2);
                    //cm.addPartyTrait("will", 5);
                    //cm.addPartyTrait("sense", 1);
                    //cm.achievement(100);
                    cm.endPartyQuest(1200);
                    cm.warpParty(910010300);
                } else {
                    cm.sendNext("��û�д��� #r20#k ����������... ");
                }
            }
        } else if (selection == 1) {
            cm.sendNext("�����ؿ�����������6������ȫ������ʱ���½����֡������»��ٻ�����С���ӣ�ÿ��һ��ʱ������С���ӻᵷ����⣬�ռ� #r10 #k�����󽻸��ӳ�Ȼ�󽻸�NPC������ͨ�ء�\r\n#rע�����������ӵ�����ʱ�򱣻������������ӱ����﹥��������������ʧ��.");
        } else if (selection == 2) {
        cm.removeAll(4001095);
        cm.removeAll(4001096);
        cm.removeAll(4001097);
        cm.removeAll(4001098);
        cm.removeAll(4001099);
        cm.removeAll(4001100);
                    cm.warp(100000200);
        }
        cm.dispose();
    }
}