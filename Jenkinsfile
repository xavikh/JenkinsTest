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
        sh 'npm install newman'
        sh 'newman postman_collection.json  --exitcode 1'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploy'
      }
    }
  }
}