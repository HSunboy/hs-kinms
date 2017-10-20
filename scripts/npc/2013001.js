function action(mode, type, selection) {
    if (cm.getPlayer().getMapId() == 920011200) { //exit
	for (var i = 4001044; i < 4001064; i++) {
		cm.removeAll(i); //holy
	}
	cm.warp(200080101);
	cm.dispose();
	return;
    }
    var em = cm.getEventManager("OrbisPQ");
    if (em == null) {
	cm.sendOk("Please try again later.");
	cm.dispose();
	return;
    }
    if (!cm.isLeader()) {
	cm.sendOk("I only wish to speak to your leader!");
	cm.dispose();
	return;
    }
    if (em.getProperty("pre").equals("0")) {
	for (var i = 4001044; i < 4001064; i++) {
		cm.removeAll(i); //holy
	}
	cm.sendNext("请救救我，我被困在了爸爸的小精灵的印章，我们塔的恐怖！他把我们所有的米勒娃雕像都放错了地方，我们得把它弄回来！哦，对不起，我的管家，说我是米勒娃的皇家仆人。请帮我把20个云朵碎片放入地图亭子的光球下！");
	cm.dispose();
	return;
    }
    switch(cm.getPlayer().getMapId()) {
	case 920010000:
	    cm.warpParty(920010000, 2);
	    break;
	case 920010100:
	    if (em.getProperty("stage").equals("6")) {
		if (em.getProperty("finished").equals("0")) {
		    cm.warpParty(920010800); //GARDEN.	
		} else {
		    cm.sendOk("Thank you for saving Minerva! Please, talk to her!");
		}
	    } else {
		cm.sendOk("Please, save Minerva! Gather the six pieces of her statue and talk to me to retrieve the final piece!");
	    } 
	    break;
	case 920010200: //walkway
	    if (!cm.haveItem(4001050,30)) {
		cm.sendOk("Gather the 30 Statue Pieces from the monsters in this stage, and please bring them to me so I can put them together!");
	    } else if(cm.haveItem(4001044,1)){
		cm.sendOk("XX!");
	    } else {
		cm.removeAll(4001050);
		cm.gainItem(4001044,1); //first piece
			    cm.givePartyExp(200000);
		clear();
	    }
	    break;
	case 920010300: //storage
	    if (!cm.haveItem(4001051,15)) {
		cm.sendOk("Gather the 15 Statue Pieces from the monsters in this stage, and please bring them to me so I can put them together!");
	    } else if(cm.haveItem(4001045,1)){
		cm.sendOk("XX!");
	    } else {
		cm.removeAll(4001051);
		cm.gainItem(4001045,1); //second piece
			    cm.givePartyExp(200000);
		clear();
	    }
	    break;
	case 920010400: //lobby
	    if (em.getProperty("stage3").equals("0")) {
		cm.sendOk("请，找到这个唱片的一周，并将它放在音乐播放。\r\n#v4001056#Sunday\r\n#v4001057#Monday\r\n#v4001058#Tuesday\r\n#v4001059#Wednesday\r\n#v4001060#Thursday\r\n#v4001061#Friday\r\n#v4001062#Saturday\r\n");
	    } else if (em.getProperty("stage3").equals("1")) {
		if (cm.canHold(4001046,1)) {
		    cm.gainItem(4001046,1); //third piece
		    cm.givePartyExp(150000);
		    clear();
		    em.setProperty("stage3", "2");
		} else {
		    cm.sendOk("Please make room!");
		}
	    } else {
		cm.sendOk("Thank you so much!");
	    }
	    break;
	case 920010500: //sealed
	    if (em.getProperty("stage4").equals("0")) {
		var players = Array();
		var total = 0;
		for (var i = 0; i < 3; i++) {
		    var z = cm.getMap().getNumPlayersItemsInArea(i);
		    players.push(z);
		    total += z;
		}
		if (total != 3) {
		    cm.sendOk("There needs to be 3 players OR items on the platforms.");
		} else {
		    var num_correct = 0;
		    for (var i = 0; i < 3; i++) {
			if (em.getProperty("stage4_" + i).equals("" + players[i])) {
			    num_correct++;
			}
		    }
		    if (num_correct == 3) {
			if (cm.canHold(4001047,1)) {
	    		    clear();
			    cm.gainItem(4001047,1); //fourth
			    cm.givePartyExp(200000);
	    		    em.setProperty("stage4", "1");
			} else {
			    cm.sendOk("Please make room!");
			}
		    } else {
    	    		cm.showEffect(true, "quest/party/wrong_kor");
    	    		cm.playSound(true, "Party1/Failed");
			if (num_correct > 0) {
			    cm.sendOk("One of the platforms is correct.");
			} else {
			    cm.sendOk("All of the platforms are wrong.");
			}
		    }
		}
	    } else {
		cm.sendOk("The portal is opened! Go!");
	    }
	    cm.dispose();
	    break;
	case 920010600: //lounge
	    if (!cm.haveItem(4001052,20)) {
		cm.sendOk("Gather the 20 Statue Pieces from the monsters in this stage, and please bring them to me so I can put them together!");
	    } else if(cm.haveItem(4001048,1)){
		cm.sendOk("XX!");
	    } else {
		cm.removeAll(4001052);
		cm.gainItem(4001048,1); //fifth piece
		cm.givePartyExp(200000);
		clear();
	    }
	    break;
	case 920010700: //on the way up
	    if (em.getProperty("stage6").equals("0")) {
		var react = Array();
		var total = 0;
	    	for(var i = 0; i < 3; i++) {
		    if (cm.getMap().getReactorByName("" + (i + 1)).getState() > 0) {
			react.push("1");
			total += 1;
		    } else {
			react.push("0");
		    }
	    	}
		if (total != 2) {
		    cm.sendOk("There needs to be 2 levers at the top of the map pushed on.");
		} else {
		    var num_correct = 0;
		    for (var i = 0; i < 3; i++) {
			if (em.getProperty("stage62_" + i).equals("" + react[i])) {
			    num_correct++;
			}
		    }
		    if (num_correct == 3) {
			if (cm.canHold(4001049,1)) {
	    		    clear();
			    cm.gainItem(4001049,1); //sixth
			    cm.givePartyExp(200000);
	    		    em.setProperty("stage6", "1");
			} else {
			    cm.sendOk("Please make room!");
			}
		    } else {
    	    		cm.showEffect(true, "quest/party/wrong_kor");
    	    		cm.playSound(true, "Party1/Failed");
			if (num_correct >= 1) { //this should always be true
			    cm.sendOk("One of the levers is correct.");
			} else {
			    cm.sendOk("Both of the levers are wrong.");
			}
		    }
		}
	    } else {
		cm.sendOk("Thank you!!");
	    }
	    break;
	case 920010800:
	    cm.sendNext("请找到一个方法来战胜爸爸的小精灵！一旦你把种子发现黑nependeath，你发现爸爸的小精灵！战胜它，得到生命的根来拯救米勒娃！！！"); 
	    break;
	case 920010900:
	    cm.sendNext("这是塔的监狱。在这里你可以找到一些好吃的东西，但除此之外我不认为这里有任何碎片。"); 
	    break;
	case 920011000:
	    cm.sendNext("这是塔楼的隐藏空间。在这里你可以找到一些好吃的东西，但除此之外我不认为这里有任何碎片。"); 
	    break;
    }
    cm.dispose();
}

function clear() {
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
}