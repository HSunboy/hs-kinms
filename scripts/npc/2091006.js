/*
	�����������
*/
var status = -1;
var sel;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.sendNext("#b(���Ҽ�æ�ص���֪ͨ�����ص�����Ҳ��ʧ�ˡ�)");
        cm.safeDispose();
        return;
    }
    if (status == 0) {
        cm.sendSimple("#e< ���� >#n\r\n������������ս��������ߣ���ӭ��ǰ�����������-�乫-\r\n\r\n#b#L0# ��ս���������#l\r\n#L1# ��ϸ�Ķ�����#l")
    } else if (status == 1) {
        sel = selection;
        if (sel == 1) {
            cm.sendNext("#e< ���棺��ս�ɣ� >#n\r\n����������������������乫���ܾ���ǰ����������ɽ��ʼ���������������ҵ��ڹ��Ѵﵽ�쳬Խ���޵Ľ׶Ρ���ǰ�������������ų�����������ĳ̶ȡ����Խ��쿪ʼ���ҽӹ����������ֻ��ǿ�߿���ӵ������������ʸ�\r\n��Ҫ�õ�����ָ����˾�������ս��������Ҫ��ս�ҵ���Ҳ�޷����һ�����֪�������֪����");
        } else {
            cm.sendYesNo("#b(���Ұ��ҵ��ַ��ڹ���,һ�����ص�������ʼ��������Χ��)#k\r\n\r\n  ����ȥ����ѵ������");
        }
    } else if (status == 2) {
        if (sel == 1) {
            cm.sendNextPrev("��ע����ӭ������ս�����û�������Ļ������������һ��Ҳ�޷���");
        } else {
            cm.saveLocation("MULUNG_TC");
            cm.warp(925020000, 0);
            cm.dispose();
        }
    } else if (status == 3) {
        cm.dispose();
    }
}