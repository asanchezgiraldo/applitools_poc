pipeline {
  agent {
    label 'jenkins-java-node'
  }


    stages {
        stage('Run Visual Test') {
                steps {
                container('node') {
                        sh '''
                        apt-get install xvfb libgtk2.0-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 -y
                        unset PUPPETEER_SKIP_CHROMIUM_DOWNLOAD
                        npm i
                        npm test
                        '''
                }
                }
        }
    }
}