/* Athena Pierce
	Bowman Job Advancement
	Victoria Road : Bowman Instructional School (100000201)

	Custom Quest 100000, 100002
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
				if (cm.getLevel() >= 10){
					cm.sendNext("所以你决定成为一个 #r弓箭手#k?");
				} else {
					cm.sendOk("Train a bit more and I can show you the way of the #rBowman#k.")
					cm.dispose();
				}
			} else {
				if (cm.getLevel() >= 30 && cm.getJob() == 300) {
					if (cm.getQuestStatus(100000) >= 1) {
						cm.completeQuest(100002);
						if (cm.getQuestStatus(100002) == 2) {
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
						cm.sendOk("Alright, now take this to #bRene#k.");
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
			cm.sendNextPrev("这是一个重要的和最后的选择。你将无法回头。");
		} else if (status == 2) {
			cm.sendYesNo("你想成为一个 #r弓箭手#k?");
		} else if (status == 3) {
			if (cm.getJob() == 0)
				cm.changeJob(300);
			cm.gainItem(1452002, 1);
			cm.gainItem(2060000, 1000);
			cm.sendOk("So be it! Now go, and go with pride.");
			cm.dispose();
		} else if (status == 11) {
			cm.sendNextPrev("你可能准备采取下一步 #r猎人#k or #r弩弓手#k.")
		} else if (status == 12) {
			cm.sendAcceptDecline("但首先我必须测试你的技能。你准备好了吗？");
		} else if (status == 13) {
			if (cm.haveItem(4031010)) {
				cm.sendOk("Please report this bug at = 13");
			} else {
				cm.startQuest(100000);
				cm.sendOk("去找 #b转职教官#k 射手村附近。他会告诉你的方式。");
			}
		} else if (status == 21) {
			cm.sendSimple("你想成为什么？#b\r\n#L0#r猎人#l\r\n#L1#r弩弓手#l#k");
		} else if (status == 22) {
			var jobName;
			if (selection == 0) {
				jobName = "猎手";
				job = 310;
			} else {
				jobName = "弩手";
				job = 320;
			}
			cm.sendYesNo("你想成为一个#r" + jobName + "#k?");
		} else if (status == 23) {
			cm.changeJob(job);
			cm.sendOk("So be it! Now go, and go with pride.");
		}
	}
}	
