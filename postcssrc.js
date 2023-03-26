// ESM (import and export)
// Common JS

// import
// autoprefixer 패키지를 불러와서 autoptrefixer라는 변수에 담기
// const autoprefixer = require('autoprefixer')

// export
// module.exports = {
//   Plugins: [
//     require('autoprefixer')
//   ]
// }

// 버전 다운그레이드
// 개발의존성으로 autoprefixer 9버전으로 다운그레이드 설치
// npm i -D autoprefixer@9

module.exports = {
  Plugins: [
    require('autoprefixer')
  ]
}

