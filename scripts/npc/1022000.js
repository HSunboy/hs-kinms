/* Dances with Balrog
	Warrior Job Advancement
	Victoria Road : Warriors' Sanctuary (102000003)

	Custom Quest 100003, 100005
*/

importPackage(net.sf.odinms.client);

var status = 0;
var job;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 2) {
			cm.sendOk("Make up your mind and visit me again.");
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
					cm.sendNext("�����������Ϊһ�� #rսʿ#k?");
				else {
					cm.sendOk("Train a bit more and I can show you the way of the #rWarrior#k.")
					cm.dispose();
				}
			} else {
				if (cm.getLevel() >= 30 && cm.getJob() == 100) {
                if (cm.getQuestStatus(100003) >= 1) {
                    cm.completeQuest(100005);
                    if (cm.getQuestStatus(100005) == 2) {
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
						cm.sendOk("Alright, now take this to #bTylus#k.");
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
			cm.sendYesNo("�����Ϊһ�� #rսʿ#k?");
		} else if (status == 3) {
			if (cm.getJob() == 0)
				cm.changeJob(100);
			cm.gainItem(1402001, 1);
			cm.sendOk("So be it! Now go, and go with pride.");
			cm.dispose();
		} else if (status == 11) {
			cm.sendNextPrev("�����׼����ȡ��һ�� #r����#k, #r׼��ʿ#k or #rǹսʿ#k.")
		} else if (status == 12) {
			cm.sendAcceptDecline("�������ұ��������ļ��ܡ���׼��������");
		} else if (status == 13) {
			if (cm.haveItem(4031008)) {
				cm.sendOk("Please report this bug at = 13");
			} else {
				cm.startQuest(100003);
				cm.sendOk("ȥ�� #bתְ�̹�#k ��ʿ���丽�������������ķ�ʽ��");
			}
		} else if (status == 21) {
			cm.sendSimple("�����Ϊʲô��#b\r\n#L0#����#l\r\n#L1#׼��ʿ#l\r\n#L2#ǹսʿ#l#k");
		} else if (status == 22) {
			var jobName;
			if (selection == 0) {
				jobName = "����";
				job = 110;
			} else if (selection == 1) {
				jobName = "׼��ʿ";
				job = 120;
			} else {
				jobName = "ǹսʿ";
				job = 130;
			}
			cm.sendYesNo("Do you want to become a #r" + jobName + "#k?");
		} else if (status == 23) {
			cm.changeJob(job);
			cm.sendOk("So be it! Now go, and go with pride.");
		}
	}
}	
