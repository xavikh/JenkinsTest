pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Build'
        nodejs('NodeJS 10.11') {
          sh 'npm install'
        }

      }
    }
    stage('Test') {
      steps {
        echo 'Test'
        nodejs('NodeJS 10.11') {
          sh 'npm test'
          junit(testResults: 'test-results.xml', healthScaleFactor: 1)
        }

      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploy'
        sh 'ssh userName@development-server-ip && cd /your-project-path && git pull && npm install -g pm2 && npm install --production && pm2 restart all'
      }
    }
  }
}