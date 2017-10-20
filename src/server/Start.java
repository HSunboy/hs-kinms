package server;

import client.DebugWindow;
import client.MapleCharacter;
import client.MapleClient;
import client.SkillFactory;
import constants.GameConstants;
import constants.ServerConstants;
import database.DatabaseConnection;
import gui.KinMS;
import handling.MapleServerHandler;
import handling.cashshop.CashShopServer;
import handling.channel.ChannelServer;
import handling.channel.MapleGuildRanking;
import handling.login.LoginInformationProvider;
import handling.login.LoginServer;
import handling.world.World;
import handling.world.family.MapleFamilyBuff;
import java.awt.Point;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Calendar;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import server.Timer.*;
import server.Timer.BuffTimer;
import server.Timer.CheatTimer;
import server.Timer.CloneTimer;
import server.Timer.EtcTimer;
import server.Timer.EventTimer;
import server.Timer.MapTimer;
import server.Timer.MobTimer;
import server.Timer.WorldTimer;
import server.events.MapleOxQuizFactory;
import server.life.MapleLifeFactory;
import server.life.MapleMonster;
import server.life.OverrideMonsterStats;
import server.maps.MapleMap;
import server.maps.MapleMapFactory;
import server.quest.MapleQuest;
import tools.FileoutputUtil;
import tools.StringUtil;

public class Start {

    public static final Start instance = new Start();
    private static int maxUsers = 0;
    private static ServerSocket srvSocket = null; //服务线程，用以控制服务器只启动一个实例
    private static ServerSocket srvSocketa = null; //服务线程，用以控制服务器只启动一个实例
    private static int srvPort = 6350;     //控制启动唯一实例的端口号，这个端口如果保存在配置文件中会更灵活
    private static int srvPorta = 6351;     //控制启动唯一实例的端口号，这个端口如果保存在配置文件中会更灵活

    public static void main(final String args[]) {
        if (Boolean.parseBoolean(ServerProperties.getProperty("KinMS.Admin"))) {
            System.out.println("[!!! Admin Only Mode Active !!!]");
        }
        if (Boolean.parseBoolean(ServerProperties.getProperty("KinMS.AutoRegister"))) {
            System.out.println("加载 自动注册完成 :::");
        }
        try {
            try (PreparedStatement ps = DatabaseConnection.getConnection().prepareStatement("UPDATE accounts SET loggedin = 0")) {
                ps.executeUpdate();
            }
        } catch (SQLException ex) {
            throw new RuntimeException("[EXCEPTION] Please check if the SQL server is active.");
        }

       // Start.checkSingleInstance();
        World.init();
        WorldTimer.getInstance().start();
        EtcTimer.getInstance().start();
        MapTimer.getInstance().start();
        MobTimer.getInstance().start();
        CloneTimer.getInstance().start();
        EventTimer.getInstance().start();
        BuffTimer.getInstance().start();
        LoginInformationProvider.getInstance();
        MapleQuest.initQuests();
        MapleLifeFactory.loadQuestCounts();
//        ItemMakerFactory.getInstance();
        MapleItemInformationProvider.getInstance().load();
        RandomRewards.getInstance();
        SkillFactory.getSkill(99999999);
        MapleOxQuizFactory.getInstance().initialize();
        MapleCarnivalFactory.getInstance();
        MapleGuildRanking.getInstance().getRank();
        MapleFamilyBuff.getBuffEntry();
       // MapleServerHandler.registerMBean();
        RankingWorker.getInstance().run();
        MapleMapFactory.loadCustomLife();
        // MTSStorage.load();
        CashItemFactory.getInstance().initialize();
        LoginServer.run_startup_configurations();
        ChannelServer.startChannel_Main();

        //  System.out.println("[加载商城端口启动中]");
        CashShopServer.run_startup_configurations();
        // System.out.println("[加载商城端口完成]");
        CheatTimer.getInstance().register(AutobanManager.getInstance(), 60000);
       // 在线统计(1);
       // 自动存档(30);
        在线时间(1);
        开启双倍(1);
        回收内存(360);
        刷新地图(480);
       // 防万能(3);
        if (Boolean.parseBoolean(ServerProperties.getProperty("KinMS.RandDrop"))) {
            ChannelServer.getInstance(1).getMapFactory().getMap(910000000).spawnRandDrop();
        }
        Runtime.getRuntime().addShutdownHook(new Thread(new Shutdown()));
        try {
            SpeedRunner.getInstance().loadSpeedRuns();
        } catch (SQLException e) {
            System.out.println("SpeedRunner错误:" + e);
        }
        World.registerRespawn();
        LoginServer.setOn();
        System.out.println("\r\n经验倍率:" + Integer.parseInt(ServerProperties.getProperty("KinMS.Exp")) + "  物品倍率：" + Integer.parseInt(ServerProperties.getProperty("KinMS.Drop")) + "  金币倍率" + Integer.parseInt(ServerProperties.getProperty("KinMS.Meso")));

        System.out.println("\r\n加载完成!开端成功! :::123456");
        // BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    }

    public void startServer() throws InterruptedException {
        if (Boolean.parseBoolean(ServerProperties.getProperty("KinMS.Admin"))) {
            System.out.println("[!!! Admin Only Mode Active !!!]");
        }
        if (Boolean.parseBoolean(ServerProperties.getProperty("KinMS.AutoRegister"))) {
            System.out.println("加载 自动注册完成 :::");
        }
        try {
            try (PreparedStatement ps = DatabaseConnection.getConnection().prepareStatement("UPDATE accounts SET loggedin = 0")) {
                ps.executeUpdate();
            }
        } catch (SQLException ex) {
            throw new RuntimeException("[EXCEPTION] Please check if the SQL server is active.");
        }

       // Start.checkSingleInstance();
        World.init();
        WorldTimer.getInstance().start();
        EtcTimer.getInstance().start();
        MapTimer.getInstance().start();
        MobTimer.getInstance().start();
        CloneTimer.getInstance().start();
        EventTimer.getInstance().start();
        BuffTimer.getInstance().start();
        LoginInformationProvider.getInstance();
        MapleQuest.initQuests();
        MapleLifeFactory.loadQuestCounts();
//        ItemMakerFactory.getInstance();
        MapleItemInformationProvider.getInstance().load();
        RandomRewards.getInstance();
        SkillFactory.getSkill(99999999);
        MapleOxQuizFactory.getInstance().initialize();
        MapleCarnivalFactory.getInstance();
        MapleGuildRanking.getInstance().getRank();
        MapleFamilyBuff.getBuffEntry();
      //  MapleServerHandler.registerMBean();
        RankingWorker.getInstance().run();
        // MTSStorage.load();
        CashItemFactory.getInstance().initialize();
        LoginServer.run_startup_configurations();
        ChannelServer.startChannel_Main();

        //  System.out.println("[加载商城端口启动中]");
        CashShopServer.run_startup_configurations();
        // System.out.println("[加载商城端口完成]");
        CheatTimer.getInstance().register(AutobanManager.getInstance(), 60000);
       // 在线统计(1);
        //自动存档(30);
        回收内存(360);
        在线时间(1);
     //   防万能(3);
        if (Boolean.parseBoolean(ServerProperties.getProperty("KinMS.RandDrop"))) {
            ChannelServer.getInstance(1).getMapFactory().getMap(910000000).spawnRandDrop();
        }
        Runtime.getRuntime().addShutdownHook(new Thread(new Shutdown()));
        try {
            SpeedRunner.getInstance().loadSpeedRuns();
        } catch (SQLException e) {
            System.out.println("SpeedRunner错误:" + e);
        }
        World.registerRespawn();
        LoginServer.setOn();
        System.out.println("\r\n经验倍率:" + Integer.parseInt(ServerProperties.getProperty("KinMS.Exp")) + "  物品倍率：" + Integer.parseInt(ServerProperties.getProperty("KinMS.Drop")) + "  金币倍率" + Integer.parseInt(ServerProperties.getProperty("KinMS.Meso")));

        System.out.println("\r\n加载完成!开端成功! :::");
    }

    public static void 自动存档(int time) {
        Timer.WorldTimer.getInstance().register(new Runnable() {

            public void run() {

                int ppl = 0;
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        for (MapleCharacter chr : cserv.getPlayerStorage().getAllCharacters()) {
                            if (chr == null) {
                                continue;
                            }
                            ppl++;
                            chr.saveToDB(false, true);
                        }
                    }
               // System.out.println("[自动存档] 已经将 " + ppl + " 个玩家保存到数据中.");

            }
        }, 60000 * time);
    }

    public static void 开启双倍(int time) {
        Timer.WorldTimer.getInstance().register(new Runnable() {

            public void run() {

                int year = Calendar.getInstance().get(Calendar.YEAR);//年
                int month = Calendar.getInstance().get(Calendar.MONTH) + 1;//月
                int date = Calendar.getInstance().get(Calendar.DATE);//日
                int hour = Calendar.getInstance().get(Calendar.HOUR_OF_DAY);//小时
                int minute = Calendar.getInstance().get(Calendar.MINUTE);//分钟
                int second = Calendar.getInstance().get(Calendar.SECOND); //毫秒
                for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                    if (Integer.parseInt(ServerProperties.getProperty("KinMS.开启双倍时间")) == hour && minute <= 1 && Integer.parseInt(ServerProperties.getProperty("KinMS.开启双倍时间")) != 0) {
                        cserv.setDoubleExp(1);
                    } else if (Integer.parseInt(ServerProperties.getProperty("KinMS.关闭双倍时间")) == hour && minute <= 1 && Integer.parseInt(ServerProperties.getProperty("KinMS.关闭双倍时间")) != 0) {
                        cserv.setDoubleExp(0);
                    }
                }
                for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                    for (MapleCharacter chr : cserv.getPlayerStorage().getAllCharacters()) {
                        if (chr == null) {
                            continue;
                        }
                        if (cserv.getDoubleExp() == 1 && Integer.parseInt(ServerProperties.getProperty("KinMS.开启双倍时间")) == hour && minute <= 1 && Integer.parseInt(ServerProperties.getProperty("KinMS.开启双倍时间")) != 0) {
                            chr.startMapEffect("系统自动开启【双倍经验】活动！", 5120000);
                        } else if (Integer.parseInt(ServerProperties.getProperty("KinMS.关闭双倍时间")) == hour && minute <= 1 && Integer.parseInt(ServerProperties.getProperty("KinMS.关闭双倍时间")) != 0) {
                            chr.startMapEffect("系统自动关闭【双倍经验】活动！期待下次活动！", 5120000);
                        }
                    }
                }
            }
        }, 60000 * time);
    }

    public static void 刷新地图(int time) {
        Timer.WorldTimer.getInstance().register(new Runnable() {

            public void run() {
                for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                    for (MapleCharacter chr : cserv.getPlayerStorage().getAllCharacters()) {
                        for (int i = 0; i < 6; i++) {
                            int mapidA = 100000000 + (i + 1000000 - 2000000);
                            MapleCharacter player = chr;
                            if (i == 6) {
                                mapidA = 910000000;
                            }
                            int mapid = mapidA;
                            MapleMap map = player.getClient().getChannelServer().getMapFactory().getMap(mapid);
                            if (player.getClient().getChannelServer().getMapFactory().destroyMap(mapid)) {
                                MapleMap newMap = player.getClient().getChannelServer().getMapFactory().getMap(mapid);
                                MaplePortal newPor = newMap.getPortal(0);
                                LinkedHashSet<MapleCharacter> mcs = new LinkedHashSet<MapleCharacter>(map.getCharacters()); // do NOT remove, fixing ConcurrentModificationEx.
                                outerLoop:
                                for (MapleCharacter m : mcs) {
                                    for (int x = 0; x < 5; x++) {
                                        try {
                                            m.changeMap(newMap, newPor);
                                            continue outerLoop;
                                        } catch (Throwable t) {
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, 60000 * time);
    }
    
    public static void 防万能(int time) {
        Timer.WorldTimer.getInstance().register(new Runnable() {

            @Override
            public void run() {
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        for (MapleCharacter chr : cserv.getPlayerStorage().getAllCharacters()) {
                            if(chr.getClient().getfwn() <= 0 && chr != null){
                                chr.getClient().getSession().close();
                            }
                        }
                    }
            }
        }, 60000 * time);
    }
    
    public static void 在线统计(int time) {
        System.out.println("服务端启用在线统计." + time + "分钟统计一次在线的人数信息.");
        Timer.WorldTimer.getInstance().register(new Runnable() {

            public void run() {
                Map connected = World.getConnected();
                StringBuilder conStr = new StringBuilder(new StringBuilder().append(FileoutputUtil.CurrentReadable_Time()).append(" 在线人数: ").toString());
                for (Iterator i$ = connected.keySet().iterator(); i$.hasNext();) {
                    int i = ((Integer) i$.next()).intValue();
                    if (i == 0) {
                        int users = ((Integer) connected.get(Integer.valueOf(i))).intValue();
                        conStr.append(StringUtil.getRightPaddedStr(String.valueOf(users), ' ', 3));
                        if (users > Start.maxUsers) {
                            Start.maxUsers = users;
                        }
                        conStr.append(" 最高在线: ");
                        conStr.append(Start.maxUsers);
                        break;
                    }
                }
                System.out.println(conStr.toString());
                if (Start.maxUsers > 0) {
                    FileoutputUtil.log("在线统计.txt", conStr.toString() + "\r\n");
                }
            }
        }, 60000 * time);
    }

    public static void 在线时间(int time) {
        Timer.WorldTimer.getInstance().register(new Runnable() {

            @Override
            public void run() {
                try {
                    for (ChannelServer chan : ChannelServer.getAllInstances()) {
                        for (MapleCharacter chr : chan.getPlayerStorage().getAllCharacters()) {
                            if (chr == null) {
                                continue;
                            }
                            chr.gainGamePoints(1);
                            if (chr.getGamePoints() < 5) {
                                chr.resetFBRW();
                                chr.resetFBRWA();
                                chr.resetSBOSSRW();
                                chr.resetSBOSSRWA();
                                chr.resetSGRW();
                                chr.resetSGRWA();
                                chr.resetSJRW();
                                chr.resetlb();
                                chr.setmrsjrw(0);
                                
                                chr.setmrfbrw(0);
                                chr.setmrsgrw(0);
                                chr.setmrsbossrw(0);
                                
                                chr.setmrfbrwa(0);
                                chr.setmrsgrwa(0);
                                chr.setmrsbossrwa(0);
                                
                                chr.setmrfbrwas(0);
                                chr.setmrsgrwas(0);
                                chr.setmrsbossrwas(0);
                                
                                chr.setmrfbrws(0);
                                chr.setmrsgrws(0);
                                chr.setmrsbossrws(0);
                                
                                chr.resetGamePointsPS();
                                chr.resetGamePointsPD();
                            }
                        }
                    }
                } catch (Exception e) {
                }
            }
        }, 60000 * time);
    }

    protected static void checkSingleInstance() {
        try {
            if (GameConstants.game == 3) {
                srvSocket = new ServerSocket(srvPort); //启动一个ServerSocket，用以控制只启动一个实例    
            } else if (GameConstants.game == 4) {
                srvSocketa = new ServerSocket(srvPorta); //启动一个ServerSocket，用以控制只启动一个实例    
            } else {
                srvSocket = new ServerSocket(srvPort); //启动一个ServerSocket，用以控制只启动一个实例    
            }
        } catch (IOException ex) {
            if (ex.getMessage().indexOf("Address already in use: JVM_Bind") >= 0) {
                System.out.println("在一台主机上同时只能启动一个进程(Only one instance allowed)。");
            }
            System.exit(0);
        }
    }
    
    public static class Shutdown implements Runnable {

        @Override
        public void run() {
            new Thread(ShutdownServer.getInstance()).start();
        }
    }
    public static void 回收内存(int time) {
        Timer.WorldTimer.getInstance().register(new Runnable() {
            
            public void run() {

                System.gc();
            
            }
        }, 60000 * time);
    }
}
