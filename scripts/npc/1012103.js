/* Natalie
	Henesys VIP Hair/Hair Color Change.
*/
var status = -1;
var beauty = 0;
var hair_Colo_new;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        cm.sendSimple("�����������ϰ���������ֻҪ�������ܸ߼����������Ͱ�ͷ�������Ұɡ�ѡ��������������ɡ�\r\n#b#L0#��������(ʹ�ø߼���Ա��)#l\r\n#L1#Ⱦɫ(ʹ�ø߼���Ա��)#l");
    } else if (status == 1) {
        if (selection == 0) {
            var hair = cm.getPlayerStat("HAIR");
            hair_Colo_new = [];
            beauty = 1;
            if (cm.getPlayerStat("GENDER") == 0) {
                hair_Colo_new = [30030, 30020, 30000, 30310, 30330, 30060, 30150, 30410, 30210, 30140, 30120, 30200];
            } else {
                hair_Colo_new = [31050, 31040, 31000, 31150, 31310, 31300, 31160, 31100, 31410, 31030, 31080, 31070];
            }
            for (var i = 0; i < hair_Colo_new.length; i++) {
                hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
            }
            cm.askAvatar("�ҿ��԰��㻻��ȫ�µķ��͡�����������ڵķ�������ֻҪ����#b���ܻ�Ա��#k���ҾͿ��԰���������͡���������ѡ�Լ�ϲ���ķ��͡�", 5150001, hair_Colo_new);
        } else if (selection == 1) {
            var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
            hair_Colo_new = [];
            beauty = 2;
            for (var i = 0; i < 8; i++) {
                hair_Colo_new[i] = currenthaircolo + i;
            }
            cm.askAvatar("���ǿ���Ϊ��ı�ͷ������ɫ���ǲ����Ѿ������ͷ������ɫ�����������#b���ܻ�Ա��#k���ҾͿ��Ը���Ⱦ����������ѡ��ϲ������ɫ�ɣ�", 5151001, hair_Colo_new);
        }
    } else if (status == 2) {
        if (beauty == 1) {
            if (cm.setAvatar(5150001 , hair_Colo_new[selection]) == 1) {
                cm.sendOk("�����ˣ���ô������������·��Ͱɣ�");
            } else {
                cm.sendOk("�š��������û��������ר�û�Ա������������˼��û�л�Ա���Ļ����ҾͲ��ܰ�������");
            }
        } else {
            if (cm.setAvatar(5151001, hair_Colo_new[selection]) == 1) {
                cm.sendOk("���ˣ�����������̾����·�ɫ�ɣ�");
            } else {
                cm.sendOk("�š� ������û������������Ļ��������˼�����û�л�Ա�������ǲ����Ը���Ⱦͷ����");
            }
        }
        cm.dispose();
    }
}