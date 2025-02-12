# Fokin Weather

## Learning React Native by Building a Foking Weather App

# 0 Introduction

## 설치 전 필요한 것들

## 2020.04.21 : 나중에 기상청 날씨 API로 바꿔보자

node.js 버전 10이상
npm 버전 6 이상
윈도우, 리눅스 - 시뮬레이터를 가진 안드로이드 스튜디오가 있어야함
맥 - 시뮬레이터를 가진 Xcode

아니라면
ios, 안드로이드 폰에 Expo 앱이 필요함
안드로이드 스튜디오, Xcode가 없다면 폰에서 테스트 할 수 있는 유일한 방법

https://reactnative.dev/docs/environment-setup
여기서 확인해보고 cmd창에서
npm install -g expo-cli 로 설치

---

expo 가 뭔지 react native 랑 어떤 관련이 있을까?

기본적으로
expo는 create-react-app 같은 거임
리엑트 네이티브를 위한 설정 파일같은 것들이 없는 방식으로, 모든것이 셋업되어있음
만약 리엑트 네이티브를 수동으로 작업하고 싶다면, 사이트에서 react native CLI를 보고 진행해야함
React native CLI 방식은 너가 native files들을 더 많이 컨트롤 하고 싶을때를 위한 것

expo는 모든 native files들을 숨기고, 모든걸 관리해줌
expo의 가장 큰 장점은 정말정말 빠르게 너의 휴대폰에서 앱을 테스트 할 수 있다는 것임

만약 React native CLI를 이용해서 폰에서 앱을 테스트 할려고 하면은 계정이 있어야되고,
개발자 계정이 있어야 하고, Xcode Connect를 통해서 로그인 해야하고 정말 성가심

expo가 너 대신 모든것을 처리해 줄거임
expo의 유일한 문제점은, native files들을 크게 제어 할 수 없다는 거임
노마드코더에 한해서 expo로 작업하면서 어떤 문제도 없었고, expo는 노마드코더가 제일
좋아하는 리엑트 네이티브 작업 방식임.

expo 는 더 나은 개발자 경험을 제공하고, 너가 앱을 만드는 방식을 처리해줌
simulation를 처리하고, react native 업데이트도 처리해주고, 문서도 정말 잘 되있음
react native에 더 많은 모듈들이 있음

expo는 create-react-app같은 거임. 근데 그 위에 더 많은 것들을 가지고 있음
-> 사이트 가서 다양한 API 모듈들을 확인할 수 있음

react native CLI에서 expo에서 제공하는 모듈들을 작동하게 만들려면
혼자 다 설치해야함.

고로 expo는 수동적인 작업들이 덜 필요하고, 시작하는데 훨씬 더 빠른 방식임
대신 한계가 있음. native파일에 접근이 없기 때문임.

노마드코더 피셜: 대부분의 경우, 노마드코더가 만난 react native 개발자들의 80%가
native file들이 그렇게 많이 필요가 없다고 하는걸로 느껴졌다고 함. 대부분의 경우일 분
회사들, 큰 회사들은 native file이 필요할 듯. 분석이나, 뭐 그런것들을 위해서.

또한 expo가 ios와 안드로이드를 위한 앱 building process를 처리해 줄 거임.
이론적으로, 예를 들면 내가 windows를 가지고 있어도 expo덕에 ios앱을 빌드 할 수
있다고함

반면에 react native CLI로 작업을 하고 window를 갖고 있다면, ios 앱을 빌드할 방법이 없음
ios앱을 빌드할 Mac이 필요함
근데 expo가 길을 열어줘서 너 대신 앱을 빌드해 줄 거임.

---

expo로 프로젝트를 실행하려면
cmd로 너가 원하는 경로로 가서, expo init [프로젝트명] 을 실행하면 됨
그럼 너한테 두가지를 물어볼 거임.
blank(TypeScript) or Taps of bare-minimum 왜냐면 expo가 자동생성을 할 수 있기 때문임
fokin-weather 앱에서는 blank를 선택함 zero에서부터 시작할 거기 때문

## 0.3 Creating the Project

- babel.config.js 이 파일은 건들지 말고
- app.json 은 expo가 읽게 될 configuration 파일임

  - 예를 들면, platforms에 보면 ios, android, web이 있음. web은 베타 서포트임
  - 기본 설정들이 되어있고 내가 할 수 있는 훨씬 더 많은 설정들이 있음

- App.js 는 기본적인 리엑트 컴포넌트인데 살짝 다름

- npm start를 하면 자동으로 export DEV tools가 오픈해 줄거임
  - 안드로이드 폰은 QR코드를 스캔해서 어플을 폰에서 테스트해볼 수 있음.
  - IOS의 경우 QR코드가 없다. 그래서 vscode 창에 expo login 입력
  - 그럼 id와 비밀번호 요구할 것
  - 다시 npm start를 입력하면 폰에서 확인할 수 있을것.

## 0.4 Getting to know Expo

- expo의 장점
  1. live reloading
     - vscode 에서 파일을 작성하고 저장하면, 저장후에 바로 즉시 expo가 전체 애플리케이션을 reload함
     - 수동으로 하고 싶다면 시뮬레이터로가서 ctrl+R을 누르면 됨
     - 핸드폰에서는 핸드폰을 흔들면 expo 개발자 메뉴가 뜸
     - 시뮬레이터에서 개발자 메뉴에 접근하고 싶다면 ctrl+D 를 누르면 됨
  2. hot reloading
     - 새롭게 추가한 코드만을 인지하여 그 부분만 새롭게 불러오는것
     - live reload를 끄고 hot reloading을 켜면 된다.

## 0.5 How does React Native Work?

- 모바일 앱을 만드는 3가지 방법

  1. 완전 Native: Swift or objective-c로 iOS 앱 만드는 것 또는 Java or 코틀린 가지고 만드는 Android앱

     - Xcode, Android Studio 이게 Native 방식

  2. 앱 기반 웹뷰를 만드는 것

     - 예로 Cordova or PhoneGap을 이용해서 정말 간단한, 매우매우 심플한 앱을 만들때
     - 그리고 그 안에 그냥 HTML, CSS를 넣는 것
     - 앱 안에서 작동하는 웹사이트 같은 것.
     - 이게 하이브리드, 웹뷰 방식

  3. 리엑트 네이티브로 만드는 것
     - 자바스크립트를 이용해서 iOS 또는 Android 네이티브 엔진에게 자바스크립트를 이용한 메세지를 보내는 것
     - 컨텐츠만 다루는 어플리케이션을 만들기에는 퍼펙트함
       - 예로 인스타그램(사진 가져오기, 좋아요누르기, 코멘트 달기, 삭제, 프로필 업뎃)이나 데이트앱 같은 것들을 리엑트 네이티브로 만드는 것은 매우 쉬움
       - 반면에 3D비디오 게임을 같은 것을 만든다면 별로임. 브릿지가 느려지지 않도록 코드를 최적화 하는데 많은 시간을 써야하기 때문임.

- 리엑트 네이티브 or 아이폰, 안드로이드 세상에서는 모든게 view임, view는 <div> 같은 거라고 이해하셈.
- 전부다 view로 이루어져있고 view 안에 모든걸 집어넣어야함.
- 리엑트 네이티브의 경우에는 다른 규칙들이 있음
  - 리엑트 네이티브는 ```<div>, <span>```을 사용하지 않고 ```<View>```와 ```<Text>```를 사용할 거임.
  - 리엑트 네이티브는 이런 규칙들이 있음.
  - 이런 룰이 존재하는 이유는 브릿지 때문임.
  - CSS와 조금씩 다른 구석이 있음

## 1.0 Layouts with Flexbox in React Native

- 리엑트 네이티브의 레이아웃에 대한 규칙들(expo에 관한것이 아니고 모든것에 적용되는 리엑트 네이티브 규칙)

```
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Minjong1</Text>
      <Text style={styles.Text}>Minjong2</Text>
    </View>
  );
}
```

    - minjong2 라는 텍스트를 추가하게 되면 minjong1의 아래로 감
    - 리엑트 네이티브에서 모든 flex box의 디폴트는 column이기 때문
        - ```flexDirection:column```
        - 웹사이트에서 모든 flex box의 디폴트는 row임 -> 모바일과의 차이점
        - 모바일 폰에서는 대게 모든게 서로 아래에 있기 때문임.
        - 물론 원한다면 ```flexDirection:row``` 이렇게 다른 방식으로 변경 할 수 있음.

```
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  yellowView: {
    flex: 1,
    backgroundColor: "yellow",
  },
  blueView: {
    flex: 2,
    backgroundColor: "blue",
  },
});
```

- `flex: 1` : 웹사이트에서는 flex: 1 or flex: 2 이렇게 하지 않음
- 또한 flex: 1 은 모든 공간 사용가능하다는 걸 의미함.
- 만약 전체 공간을 다 차지하고 싶다면, flex: 1
- 여러 형제들을 가지면(예를 들면 여기에서는 yellowView, blueView) flex: 2 처럼 값을 조정하면 됨
- 자리 경쟁하는 형제들이고, 더 큰 값을 갖는 애가 대부분의 자리를 차지한다고 생각하면 됨.

- 늘 flex로 레이아웃을 코딩하는 것을 권장함
  - 누군가 사이즈가 좀 더 큰 폰, 작은 폰을 갖고 있거나, iPad에서 열어본다거나, 폰을 회전시킨다거나 할때 flex box로 만들었다면 자동으로 맞춰질 거임.

# 1 Logic

## 1.1 Loading Screen

- react와 똑같이 js파일을 만들고 export, import 해서 사용할 수 있음

## 1.2 Getting the Location

- expo API인 Location 가져오기
- try-catch 문에서 error catch를 확인해보고 싶다면 try문 위에 `throw Error();` 를 입력하면 바로 catch문으로 이동한다.

## 1.3 Askiing for Permissions

- https://docs.expo.io/versions/v37.0.0/sdk/location/#locationgetcurrentpositionasyncoptions 에서
- Location.getCurrentPositionAsync(options) 이용

## 1.4 Getting the Weather

- openweather map api를 이용할 것(https://openweathermap.org/api)
- tpqms608@naver.com // mnb30217

# 2 Styles

## 2.0 Displaying Temperature

## 2.2 Icon and Styling

- expo/vector-icons : expo init 으로 템플릿 프로젝트에 디폴트로 인스톨 되어짐 -> https://docs.expo.io/versions/v37.0.0/guides/icons/
- https://expo.github.io/vector-icons/ -> 여기서 import 할 대상 찾아서 import 시키기

## 2.3 Background Gradient

```
expo : 이 시스템에서 스크립트를 실행할 수 없으므로 C:\Users\DP_Bell\AppData\Roaming\npm\expo.ps1 파일을 로드할 수 없습니다. 자세한 내용은 about_Execution_Policies (https://go.microsoft.com/fwlink/?LinkID=135170)를 참조하십시오
 위치 줄:1 문자:1
+ expo install expo-linear-gradient
```

- 위와 같은 Execution_Policies 스크립트오류가 발생했을 경우
- Get-ExecutionPolicy 로 현재 상태를 확인하고
- Set-ExecutionPolicy [알맞는 Policy 명 선택] 으로 변경후 -> Set-ExecutionPolicy 로 검색하면 Policy 옵션 확인 가능
- 다시 Get-ExecutionPolicy로 Policy가 바뀌었는지 확인

* LinearGradient 사용
* https://docs.expo.io/versions/v37.0.0/sdk/linear-gradient/ 사용법 확인
* yarn 스크립트 오류가 발생한다면 npm install -g yarn 실행

* react native 에 Statusbar 라는 컴포넌트가 있음. 이건 View 안에 넣어도 CSS에 영향을 주지 않음. 화면상에 표시가 안된다는 뜻임
* `<StatusBar barStyle="dark-content" />`
