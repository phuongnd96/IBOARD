node{
    deleteDir()
            def SELENUM_HUB_URL="http://localhost:4444/wd/hub"
            branchName = env.BRANCH_NAME
            buildNumber = env.BUILD_NUMBER
    try{
        stage("Prepare"){
             git(
                    credentialsId: '0cdeefb4-a3b8-4011-b10d-04a0590e1a61',
                    branch: "${env.BRANCH_NAME}",
                    url: 'https://gitlab.com/nguyenduyphuong1996/jenkins_pipeline'
                )
                 sh "chmod +x ./chrometest.sh"
                 sh "chmod +x ./chrometest_nohub.sh"
                 sh "chmod +x ./firefoxtest.sh"
                 sh "chmod +x ./firefoxtest_nohub.sh"
             echo "${branchName}"  //curent branchName project
             echo "${buildNumber}"  //current buildNumber
             echo "url is ${SELENUM_HUB_URL}"
             echo 'Notify GitLab'
             updateGitlabCommitStatus name: 'prepare', state: 'pending'
             updateGitlabCommitStatus (name: 'prepare', state: 'success')
        }
        stage("build"){
            echo "Building.."
             echo 'Notify GitLab'
             updateGitlabCommitStatus (name: 'build', state: 'success')
        }
        stage("test"){
            echo "Testing"
               echo 'Notify GitLab'
             updateGitlabCommitStatus (name: 'test', state: 'pending')
                try{
                // parallel chrome: {
                //     //  sh "mvn verify -Dcontext=chrome -Dwebdriver.remote.driver=chrome -Dwebdriver.remote.url=${SELENUM_HUB_URL}"
                //     sh "./chrometest.sh"
                //  }, firefox: {
                //     //  sh "mvn verify -Dcontext=firefox -Dwebdriver.remote.driver=firefox -Dwebdriver.remote.url=${SELENUM_HUB_URL}"
                //     sh "./firefoxtest.sh"
                // },
                // failFast: true
                    echo "CHROME"
                    sh "./chrometest_nohub.sh"
                    echo "FIREFOX"
                    sh "./firefoxtest_nohub.sh"
                }
                catch(error){
                    currentBuild.result="FAILED"
                    updateGitlabCommitStatus (name: 'test', state: 'failed')
                }
        }
        stage("deploy"){
            echo "Deploying"
             echo 'Notify GitLab'
             updateGitlabCommitStatus (name: 'deploy', state: 'success')
        }
        stage("stop container"){
            echo "stop selenium hub docker container"
             echo 'Notify GitLab'
             updateGitlabCommitStatus (name: 'stop container', state: 'success')
        }
        stage("remove image"){
            echo "Removing selenium hub docker images"
             echo 'Notify GitLab'
             updateGitlabCommitStatus (name: 'remove images', state: 'success')
        }
    }catch(err){
        currentBuild.result='FAILED'
        throw err
    }
}

