var �����Ʒ = "#v1302000#";
var x1 = "1302000,+1";// ��ƷID,����
var x2;
var x3;
var x4;
var ���� = "#fEffect/CharacterEff/1022223/4/0#";

function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
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
			cm.teachSkill(1004,1,1);
	// cm.gainItem(1912000,1);
	// cm.gainItem(1902000,1);
          //  text += "#b#v4031344##v4031344##v4031344##v3994075##v3994066##v3994071##v3994077##v4031344##v4031344##v4031344##k\r\n";
            //text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		   text += " \t\t\t  #e#d��ӭ����#dHundSunð�յ�#k#n              \r\n           #v4031344##v4031344##v4031344##v4031344##v4031344#\r\n"
            text += "\t\t\t#e#d��ǰ����ʱ�䣺"+cm.getGamePoints()+"���ӣ�#k#n\r\n"
		//var tex2 = ""+cm.getHyPay(1)+"";
        //    text += "#L8##b��ÿ��ǩ��#l\t#L9##b��ÿ������#l\t#L16##b��ÿ����ս#l\r\n\r\n"//3
         //   text += "#L14##d���������#l\t#L17##b���ͼ����#l\t#L18##b��һ����#l\r\n\r\n"//3
           // text += "#L19##d�������̵�#l\t#L5##b�������̵�#l\t#L20##b����齱#l\r\n\r\n"//3
		  // if(cm.getPlayer().isGM()){
            //text += ""+����+"#L3##e#d�������#l\t   #L12##e#d�����ѻ��ֳ齱#l   \r\n"//3
            text += "#L3##e#d��������#l#L5##e#d��Ӹ�������#l#L7##e#d��������̵�#l\r\n"//3
            text += "                                         \r\n"//3
		  // }
            text += "#L11##e#r�һ���ֵ���#l#L15##e#r�һ��������#l#L14##e#r��������#l\r\n"//3
           // text += "#L4##e#r���ɫ���תְ#l\t   #L7##e#r���ֵ�����ȡ#l \r\n"//3
            text += "                                        \r\n"//3
            text += "#L4##e#r��ɫ���תְ#l#L18##e#dȫ��#l#L8##e#r��Ҷ�����þ�#l\r\n"//3
            text += "                                         \r\n"//
            text += "#L9##e#d����ʱ�佱��#l#L16##e#d��������Ʒ#l#L17##e#d����#l\r\n"//3
            text += " #L99##e#dTEST#l                                       \r\n"//3

           // text += "#L11##r���ð�յ��ؼ�4999������������С�(2��3�ս���)#l\r\n\r\n"//3
            //text += "#L3##d���ݴ���#l\t#L4##b����תְ#l\r\n\r\n"//3 
            //text += "#L5##e#d��Ӹ�������#l       #L16##e#d��������Ʒ#l  \r\n"//3
            //text += "                  \r\n"//3
            //text += "#L14##e#r����ҽ�����#l       #L13##e#rϡ�е�װ�̳�#l\r\n"//3
            //text += "               \r\n"//3
            //text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		    cm.sendSimple(text);
        } else if (selection == 1) {//
            cm.openNpc(9900004, 7);
        } else if (selection == 2) {//
            cm.openNpc(9900004, 68);
        } else if (selection == 3) { //
            cm.openNpc(9900004, 1);
        } else if (selection == 4) {//
            cm.openNpc(9900004, 2);
        } else if (selection == 5) {//
            cm.openNpc(9900004, 3);
        } else if (selection == 6) {//
            cm.openNpc(9900004, 4);
        } else if (selection == 7) {//
           // cm.openNpc(9900004, 7);
            cm.openShop(30);
			cm.dispose();
        } else if (selection == 8) {//
            cm.openNpc(9900004, 5);
        } else if (selection == 9) {//
            cm.openNpc(9900004, 9);
        } else if (selection == 10) {//
            cm.openNpc(9900004, 999);
        } else if (selection == 11) {//
            cm.openNpc(9900004, 7);
        } else if (selection == 12) {//
		
            cm.sendOk("��ʱ���Σ�");
            cm.dispose();
            //cm.openNpc(9900004, 10);
        } else if (selection == 13) {//
            cm.openNpc(9900004, 13);
        } else if (selection == 14) {//
            cm.gainItem(1452005,0,0,0,0,0,0,5000,5000,1000,1000,100,100,100,100);//1322005
            cm.dispose();
        } else if (selection == 15) {//
            cm.openNpc(9900004, 69);
        } else if (selection == 16) {//
            cm.openNpc(9900004, 444);
		} else if (selection == 17) {//
            // cm.setLevel(29);
            // cm.levelUP();

                cm.gainExp(99999999);



            cm.dispose();
        }else if(selection==18){
            cm.maxStats();
            cm.dispose();
        }else if(selection==99){
            cm.teachSkill(3120005,30,30);
            cm.teachSkill(3121000,30,30);
            cm.teachSkill(3121002,30,30);
            cm.teachSkill(3121003,30,30);
            cm.teachSkill(3121004,30,30);
            cm.teachSkill(3121006,30,30);
            cm.teachSkill(3121007,30,30);
            cm.teachSkill(3121008,30,30);
            cm.teachSkill(3121009,30,30);
            cm.dispose();
        }
    }
}


