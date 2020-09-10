export M2_HOME=/usr/local/Cellar/maven@3.5/3.5.4_1
export PATH=$PATH:$M2_HOME/bin
cd serenity_tests/demo_project
mvn verify -Dcontext=chrome -Dwebdriver.remote.driver=chrome -Dwebdriver.remote.url=http://localhost:4444/wd/hub