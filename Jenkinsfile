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
        echo 'Deploy'
        input(message: 'Deploy?', ok: 'Go, go, go!')
        sh '#ssh superamo@192.168.0.24 && cd /your-project-path && git pull && npm install -g pm2 && npm install --production && pm2 restart all'
      }
    }
  }
}