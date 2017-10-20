@echo off
@title KinMS079
set path=C:\Program Files\Java\jre7\bin;%SystemRoot%\system32;%SystemRoot%;%SystemRoot%
set JRE_HOME=C:\Program Files\Java\jre7
set JAVA_HOME=C:\Program Files\Java\jre7\bin
set CLASSPATH=.;dist\*
java -server -Xmx4000M -Xms4000M -Xmn2G -XX:PermSize=500M -XX:MaxPermSize=500M -Xss256K -XX:+DisableExplicitGC -XX:SurvivorRatio=1 -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:+CMSParallelRemarkEnabled -XX:+UseCMSCompactAtFullCollection -XX:CMSFullGCsBeforeCompaction=0 -XX:+CMSClassUnloadingEnabled -XX:LargePageSizeInBytes=128M -XX:+UseFastAccessorMethods -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -XX:+PrintClassHistogram -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintHeapAtGC -Xloggc:log/gc.log -Dnet.sf.odinms.wzpath=wz server.Start
pause
