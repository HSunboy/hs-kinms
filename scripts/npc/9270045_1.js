function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
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
			//显示物品ID图片用的代码是  #v这里写入ID#
            text += "#e#d#l这里是[千年树妖王]奖励兑换处！\r\n\r\n"//3
            text += "#L1##e#r#v4000435# 1个兑换  #v2340000#x2张#l\r\n"//3
            text += "#L2##e#r#v4000435# 1个兑换  #v2049100#x2张#l\r\n"//3
            text += "#L3##e#r#v4000435# 10个兑换  #v1022224#全属性+5#l\r\n"//3
            text += "#L4##e#r#v4000435# x15 + #v1022224# 升级至 #v1022225# 全属性+8#l\r\n"//3
            text += "#L5##e#r#v4000435# x20 + #v1022225# 升级至 #v1022226# 全属性+12#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9270045, 3);
        } else if (selection == 2) {
		cm.openNpc(9270045, 4);
        } else if (selection == 3) {
		cm.openNpc(9270045, 5);
        } else if (selection == 4) {
		cm.openNpc(9270045, 6);
        } else if (selection == 5) {
		cm.openNpc(9270045, 7);
        } else if (selection == 6) {
		cm.openNpc(9270045, 8);
	}
    }
}


