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
      parallel {
        stage('Test') {
          steps {
            nodejs('NodeJS 10.11') {
              sh 'npm test'
              junit(testResults: 'test-results.xml', healthScaleFactor: 1)
            }
          }
        }
        stage('Coverage') {
          steps {
            nodejs('NodeJS 10.11') {
              sh 'npm run test-coverage'
              sh 'istanbul report cobertura --root coverage/ --dir ./'
              cobertura(coberturaReportFile: 'cobertura-coverage.xml')
            }
          }
        }
      }
    }
    stage('Deploy') {
      steps {
        input(message: 'Deploy?', ok: 'Go, go, go!')
        sh '#zip -q -r repo.zip ./'
        archiveArtifacts artifacts: 'repo.zip', allowEmptyArchive: true
        sshagent(credentials: ['182b0b03-94bc-40f7-bbac-e811b998e005']) {
          sh 'ssh -o StrictHostKeyChecking=no -l superamo 192.168.0.24 "cd ~/ && git clone ' + env.GIT_URL + ' && npm install -g pm2 && npm install --production && pm2 restart all"'
        }
      }
    }
  }
}