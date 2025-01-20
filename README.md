# clone-x-frontend

## 프로젝트 설명
이 프로젝트는 트위터 클론 코딩을 위한 프론트엔드 레포지토리입니다. Google Cloud App Engine에 배포되어 있으며, Vue 3 버전으로 개발되었습니다.

## 프로젝트 구조
- src/components: 컴포넌트 파일들이 위치합니다.
- src/views: 뷰 파일들이 위치합니다.
- src/router: 라우터 파일들이 위치합니다.
- src/store: 스토어 파일들이 위치합니다.
- src/App.vue: 메인 컴포넌트 파일입니다.
- src/main.js: 메인 파일입니다.

## 프로젝트 실행 방법
1. 프로젝트 레포지토리를 클론합니다.
2. 프로젝트 디렉토리로 이동합니다.
3. yarn install 명령어를 실행하여 패키지를 설치합니다.
4. yarn serve 명령어를 실행하여 프로젝트를 실행합니다.

## 프로젝트 배포 방법
1. 프로젝트 디렉토리로 이동합니다.
2. yarn build 명령어를 실행하여 프로젝트를 빌드합니다.
3. 빌드된 파일들이 dist 디렉토리에 생성됩니다.
4. dist 디렉토리를 Google Cloud App Engine에 업로드합니다.