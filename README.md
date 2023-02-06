# :sparkles:ui-publish 
- Author: guiyomi98@gmail.com :feet:
- Creat Date: 2023-02-02
- Modify: 2023-02-06

## Technology
- node.js v14
- <a href="https://gulpjs.com/docs/en/getting-started/quick-start/" title="gulp.js" target="_black">gulp</a>
- <a href="https://pugjs.org/api/getting-started.html" title="pug.js" target="_black">pug</a> 
- scss(sass)
> :blossom:*NOTE.* 사용한 기술에 대한 자세한 내용은 <a href="https://www.notion.so/guiyomi/Engineering-wiki-Beta" title="Engineering wiki (Beta)" target="_black">엔지니어링 위키</a> 확인 부탁드립니다.

## Design
<a href="https://xd.adobe.com/view/8251c75b-d861-4321-5517-ecd8e70afa82-f460" title="styleguide" target="_black">스타일 가이드 확인하기 ></a>

## File structure
```
.
├── dist                        : 컴파일되어 빌드된 파일(.gitignore)
│   └── 📁assets                : fonts/images/css/js
│
├── node_modules                : npm 모듈 모음. 설치하면 해당 폴더가 생성됩니다.(.gitignore)
│
├── src                         : 실제 작업할 개발 영역
│   ├── 📁particles             : 레이아웃에 반복 사용하는 블록 모음
│   ├── 📁stylesheets           : scss
│   ├── 📁templates             : 레이아웃 형식 모음
│   ├── 📄elements.pug          : 요소 단위의 블록 컴포넌트 mixin
│   ├── 📄index.html            : 코딩리스트
│   └── 📄_guide.html           : 퍼블리싱 가이드
│
├── gulpfile.js
├── package-lock.json
├── package.json
└── README.md                   : 개발 작업 가이드 라인 문서
```

## Installation
1. node.js <a href="https://nodejs.org/ko/download" title="노드 js 다운로드 페이지" target="_black">다운로드</a> 후 설치
2. npm(node module) 설치
``` js
npm install
```

## :rocket:Run
개발 환경 실행
``` js
gulp
```

## Build
컴파일만
``` js
gulp build
```

## Distribute product
빌드 후 배포
``` js
gulp deploy
```