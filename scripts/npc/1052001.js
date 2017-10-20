/* Dark Lord
	Thief Job Advancement
	Victoria Road : Thieves' Hideout (103000003)

	Custom Quest 100009, 100011
*/

var status = 0;
var job;

importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 2) {
			cm.sendOk("You know there is no other choice...");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getJob() == 0) {
				if (cm.getLevel() >= 10)
					cm.sendNext("�����������Ϊһ��#r����#k?");
				else {
					cm.sendOk("Train a bit more and I can show you the way of the #rThief#k.")
					cm.dispose();
				}
			} else {
				if (cm.getLevel() >= 30 && cm.getJob() == 400) {
					if (cm.getQuestStatus(100009) >= 1) {
						cm.completeQuest(100011);
						if (cm.getQuestStatus(100011) == 2) {
							status = 20;
							cm.sendNext("I see you have done well. I will allow you to take the next step on your long road.");
						} else {
							cm.sendOk("Go and see the #rJob Instructor#k.")
							cm.dispose();
						}
					} else {
						status = 10;
						cm.sendNext("The progress you have made is astonishing.");
					}
				} else if (cm.getQuestStatus(100100) == 1) {
					cm.completeQuest(100101);
					if (cm.getQuestStatus(100101) == 2) {
						cm.sendOk("Alright, now take this to #bArec#k.");
					} else {
						cm.sendOk("Hey, " + cm.getChar().getName() + "! I need a #bBlack Charm#k. Go and find the Door of Dimension.");
						cm.startQuest(100101);
					}
					cm.dispose();
				} else {
					cm.sendOk("You have chosen wisely.");
					cm.dispose();
				}
			}
		} else if (status == 1) {
			cm.sendNextPrev("����һ����Ҫ�ĺ�����ѡ���㽫�޷���ͷ��");
		} else if (status == 2) {
			cm.sendYesNo("�����Ϊһ�� #r����#k?");
		} else if (status == 3) {
			if (cm.getJob() == 0)
				cm.changeJob(400);
			cm.gainItem(1472000,1);
			cm.gainItem(2070015,500);
			cm.sendOk("So be it! Now go, and go with pride.");
			cm.dispose();
		} else if (status == 11) {
			cm.sendNextPrev("�����׼����ȡ��һ�� #r�̿�#k or #r����#k.");
		} else if (status == 12) {
			cm.sendAcceptDecline("�������ұ��������ļ��ܡ���׼��������");
		} else if (status == 13) {
			if (cm.haveItem(4031011)) {
				cm.sendOk("Please report this bug at = 13");
			} else {
				cm.startQuest(100009);
				cm.sendOk("ȥ�� #bתְ�̹�#k �������и��������������ķ�ʽ��");
			}
		} else if (status == 21) {
			cm.sendSimple("�����Ϊʲô��#b\r\n#L0#r�̿�#l\r\n#L1#r����#l#k");
		} else if (status == 22) {
			var jobName;
			if (selection == 0) {
				jobName = "�̿�";
				job = 410;
			} else {
				jobName = "����";
				job = 420;
			}
			cm.sendYesNo("Do you want to become a #r" + jobName + "#k?");
		} else if (status == 23) {
			cm.changeJob(job);
			cm.sendOk("So be it! Now go, my servant.");
		}
	}
}	
