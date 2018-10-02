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
          sh 'newman run postman_collection.json  --exitcode 1'
        }

      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploy'
      }
    }
  }
}