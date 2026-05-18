pipeline {
    agent any

    environment {
        IMAGE_NAME = "learning_hub"
        CONTAINER_NAME = "learning_hub"
        HOST_PORT = "5103"
        CONTAINER_PORT = "5003"
        BRANCH_NAME = "main"
        GIT_URL = "https://gitlab.com/SonNha123/learning_hub.git"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "${BRANCH_NAME}", url: "${GIT_URL}"
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                  echo "🐳 Build Docker image mới..."
                  docker build --pull -t ${IMAGE_NAME} .
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                  echo "🛑 Kiểm tra container nào đang chiếm port ${HOST_PORT}..."
                  OLD_CONTAINER=$(docker ps -q --filter "publish=${HOST_PORT}")
                  if [ ! -z "$OLD_CONTAINER" ]; then
                    echo "🔴 Đang có container dùng port ${HOST_PORT}, xóa nó..."
                    docker rm -f $OLD_CONTAINER || true
                  fi

                  echo "🗑 Dọn container cũ theo tên ${CONTAINER_NAME}..."
                  docker rm -f ${CONTAINER_NAME} || true

                  echo "🚀 Chạy container mới..."
                  docker run -d \
                    --name ${CONTAINER_NAME} \
                    -p ${HOST_PORT}:${CONTAINER_PORT} \
                    --restart unless-stopped \
                    ${IMAGE_NAME}
                '''
            }
        }
    }

    post {
        always {
            sh '''
              echo "🧹 Dọn rác Docker..."
              docker system prune -af --volumes || true

              echo "📦 Disk usage sau khi deploy:"
              docker system df
            '''
        }
        success {
            echo "✅ Deploy thành công ở port ${HOST_PORT}!"
        }
        failure {
            echo "❌ Deploy thất bại!"
        }
    }
}
