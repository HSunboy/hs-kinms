var status = 0;
var itemList = 
Array(     
			Array(2040001,800,1,1), //ͷ����������60%
			Array(2040002,800,1,1), //ͷ����������10%
			Array(2040004,800,1,1), //ͷ����������60%
			Array(2040005,800,1,1), //ͷ����������10%
			Array(2040016,800,1,1), //ͷ�����о���10%
			Array(2040017,800,1,1), //ͷ�����о���60%
			Array(2040025,800,1,1), //ͷ����������60%
			Array(2040026,800,1,1), //ͷ����������10%
			Array(2040029,800,1,1), //ͷ�����ݾ���60%
			Array(2040031,800,1,1), //ͷ�����ݾ���10%
			Array(2040005,800,1,1), //ͷ����������10%
			Array(2040005,800,1,1), //ͷ����������10%
			Array(2040105,800,1,1), //����װ�λر��ʾ���10%
			Array(2040106,800,1,1), //����װ�λر��ʾ���60%
			Array(2040200,800,1,1), //�۲�װ�������ʾ���10%
			Array(2040201,800,1,1), //�۲�װ�������ʾ���60%
			Array(2040205,800,1,1), //�۲�װ����������10%
			Array(2040206,800,1,1), //�۲�װ����������60%		
			Array(2040301,800,1,1), //������������ 60
			Array(2040302,800,1,1), //������������ 10
			Array(2040317,800,1,1), //�������ݾ��� 60
			Array(2040318,800,1,1), //�������ݾ��� 10
			Array(2040321,800,1,1), //������������ 60
			Array(2040323,800,1,1), //������������ 10
			Array(2040326,800,1,1), //������������ 60
			Array(2040328,800,1,1), //������������ 10
			Array(2040501,800,1,1), //ȫ���������ݾ���60
			Array(2040502,800,1,1), //ȫ���������ݾ���10
			Array(2040513,800,1,1), //ȫ��������������60
			Array(2040514,800,1,1), //ȫ��������������10
			Array(2040516,800,1,1), //ȫ��������������60
			Array(2040517,800,1,1), //ȫ��������������10
			Array(2040532,800,1,1), //ȫ��������������60
			Array(2040534,800,1,1), //ȫ��������������10
			Array(2040418,800,1,1), //������������60%
			Array(2040419,800,1,1), //������������10%
			Array(2040413,800,1,1), //������������60%
			Array(2040412,800,1,1), //������������10%
			Array(2040613,800,1,1), //ȹ�����ݾ���60%
			Array(2040612,800,1,1), //ȹ�����ݾ���10%
			Array(2040704,800,1,1), //Ь����Ծ����60
			Array(2040705,800,1,1), //Ь����Ծ����10
			Array(2040804,800,1,1), //���׹�������60
			Array(2040805,800,1,1), //���׹�������10
			Array(2040816,800,1,1), //����ħ������10%
			Array(2040817,800,1,1), //����ħ������60%
			Array(2040914,800,1,1), //���ƹ�������60%
			Array(2041013,800,1,1), //������������60
			Array(2041014,800,1,1), //������������10
			Array(2041016,800,1,1), //������������60
			Array(2041017,800,1,1), //������������10
			Array(2041019,800,1,1), //�������ݾ���60
			Array(2041020,800,1,1), //�������ݾ���10
			Array(2041022,800,1,1), //������������60
			Array(2041023,800,1,1), //������������10
			Array(2041201,800,1,1), //������������10
			Array(2041202,800,1,1), //������������60
			Array(2041206,800,1,1), //������������10
			Array(2041207,800,1,1), //������������60
			Array(2041301,800,1,1), //������������60
			Array(2041304,800,1,1), //������������60
			Array(2041307,800,1,1), //�������ݾ���60
			Array(2041310,800,1,1), //������������60
			Array(2041302,800,1,1), //������������10
			Array(2041305,800,1,1), //������������10
			Array(2041308,800,1,1), //�������ݾ���10
			Array(2041311,800,1,1), //������������10
			Array(2043002,800,1,1), //���ֽ�10
			Array(2043001,800,1,1), //���ֽ�60
			Array(2044002,800,1,1), //˫�ֽ�10
			Array(2044001,800,1,1), //˫�ֽ�60
			Array(2044302,800,1,1), //ǹ10
			Array(2044301,800,1,1), //ǹ60
			Array(2044502,800,1,1), //��10
			Array(2044501,800,1,1), //��60
			Array(2044602,800,1,1), //��10
			Array(2044601,800,1,1), //��60
			Array(2044702,800,1,1), //ȭ��10
			Array(2044701,800,1,1), //ȭ��60
			Array(2043802,800,1,1), //����10
			Array(2043801,800,1,1), //����60
			Array(2043702,800,1,1), //����10
			Array(2043701,800,1,1), //����60
			Array(2044402,800,1,1), //ì10
			Array(2044401,800,1,1), //ì60
			Array(2043302,800,1,1), //�̽�10
			Array(2043301,800,1,1), //�̽�60
			Array(1102041,600,1,1), //PF
			Array(1102042,600,1,1), //PF
			Array(3010044,700,1,1), //��ɡ����
			Array(3010036,800,1,1), //��ǧ
			Array(3010049,800,1,1), //ѧ����
			Array(3010110,800,1,1), //��
			Array(3010131,800,1,1), //��è
			Array(1022129,800,1,1), //�۾�
			Array(3012001,800,1,1), //���� 
			Array(3012002,800,1,1), //ԡͰ
			Array(3012003,800,1,1), //����
			Array(3010013,800,1,1), //������
			Array(3010018,800,1,1), //Ҭ����
			Array(3010021,800,1,1), //ůů��
			Array(3010024,800,1,1), //�����
			Array(3010025,800,1,1), //5�����Ҷ����
			Array(3010026,800,1,1), //���鸽��
			Array(3010034,800,1,1), //���ں�
			Array(3010035,800,1,1), //������
			Array(3010043,800,1,1), //ħŮɨ��
			Array(3010051,800,1,1), //ɳĮ����1
			Array(3010052,800,1,1), //ɳĮ����2
			Array(3010054,800,1,1), //���ല
			Array(3010057,800,1,1), //Ѫɫõ��
			Array(3010058,800,1,1), //����ĩ��
			Array(3010063,800,1,1), //��������
			Array(3010068,800,1,1), //¶ˮ����
			Array(3010069,800,1,1), //��Ʒ�
			Array(3010071,800,1,1), //��������
			Array(3010075,800,1,1), //���ֿ�
			Array(3010075,800,1,1), //����è
			Array(3010079,800,1,1), //��è
			Array(3010085,800,1,1), //����������
			Array(3010096,800,1,1), //������ʯ
			Array(3010099,800,1,1), //����������
			Array(3010109,800,1,1), //ů¯����
			Array(3010110,800,1,1), //����
			Array(3010129,800,1,1), //��������
			Array(3010139,800,1,1), //˽�ܿռ�
			Array(3010140,800,1,1), //���տ���
			Array(3010147,800,1,1), //��������
			Array(3010149,800,1,1), //����
			Array(3010151,800,1,1), //���˵�
			Array(3010151,800,1,1), //�����ŷ�
			Array(3010169,800,1,1), //������
			Array(3010172,800,1,1), //�ǿ�����
			Array(3010175,800,1,1), //����������
			Array(3010193,800,1,1), //����ƿ
			Array(3010195,800,1,1), //�޼�֮��
			Array(3010195,800,1,1), //����ԡ��
			Array(3010289,800,1,1), //�����̶�ͨ��
			Array(3010293,800,1,1), //��������
			Array(3010403,800,1,1), //���ֻ�
			Array(1102041,600,1,1), //PF
			Array(1102042,600,1,1), //PF
			Array(3010410,800,1,1), //����
			Array(3010411,800,1,1), //˫��
			Array(3010412,800,1,1), //˫��
			Array(3010428,800,1,1), //ˮ��
			Array(3010437,800,1,1), //ħ����
			Array(3010438,800,1,1), //����
			Array(3010453,800,1,1), //����
			Array(3010454,800,1,1), //�����ƶ�
			Array(3010462,800,1,1), //����̨
			Array(3010494,800,1,1), //TV����
			Array(3010505,800,1,1), //������
			Array(3010515,800,1,1), //��ʯ����
			Array(3010609,800,1,1), //����������
			Array(3010622,800,1,1), //����
			Array(1102041,600,1,1), //PF
			Array(1102042,600,1,1), //PF
			Array(3010632,800,1,1), //ӡ�ڰ�
			Array(3010633,800,1,1), //ӡ�ڰ�
			Array(3010659,800,1,1), //��ʿ
			Array(3010716,800,1,1), //����Ģ��
			Array(3010729,800,1,1), //�¶�����
			Array(3010730,800,1,1), //С���ϳ���
			Array(3010733,800,1,1), //��������
			Array(3010738,800,1,1), //����������
			Array(3010739,800,1,1), //ѩ���㲨
			Array(3010753,800,1,1), //õ������
			Array(3010767,800,1,1), //ѩ������
			Array(3010760,800,1,1), //�Ŵ�ԡ��
			Array(3010876,800,1,1), //����
			Array(3010879,800,1,1), //����
			Array(3010937,800,1,1), //���
			Array(3010938,800,1,1), //���
			Array(3010939,800,1,1), //���
			Array(3010946,800,1,1), //ɭ�ֻ��
			Array(3012007,800,1,1), //ʯʨ
			Array(3012008,800,1,1), //��������
			Array(3012011,800,1,1), //���
			Array(3012022,800,1,1), //��˾
			Array(3015053,800,1,1), //������
			Array(3015120,800,1,1), //��ͷ��ս
			Array(3015264,800,1,1), //��ζ����
			Array(3015158,800,1,1), //ӡ�ڰ�
			Array(3015158,800,1,1), //ӡ�ڰ�
			Array(1102041,700,1,1), //PF
			Array(1102042,700,1,1), //PF
			Array(3015158,800,1,1) //�����۾�
);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("��߸�����Ҫ������#v1102041#,#v1102042#,���־��ᣬ�Լ��ϰ�������.�Ƚ���.");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(4170005, 1)) {
            cm.sendYesNo("��߸�����Ҫ������#v1102041#,#v1102042#,���־��ᣬ�Լ��ϰ�������.�Ƚ���.");
        } else {
            cm.sendOk("��߸�����Ҫ������#v1102041#,#v1102042#,���־��ᣬ�Լ��ϰ�������.�Ƚ���.�㱳������1��#b#t4170005##k��?");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 900);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "��߸��������齱", notice);
            if (item != -1) {
                cm.gainItem(4170005, -1);
                cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                cm.sendOk("��ȷʵ��#b#t4170005##k������ǣ�����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("�������������ʲô��û���õ���������Ϊ�������͸���5��#v4001322#��Ϊ����.");
            cm.gainItem(4170005, -1);
            cm.gainItem(4001322, 5);
            cm.safeDispose();
        }
    }
}