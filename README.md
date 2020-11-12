# VUE.JS

가장 큰 장점
1. 컴포넌트 기반의 SPA를 구축할수 있게 해주는 프레임 워크
2. 웹 어플리케이션을 개발할때 사용하는 다앙한 UI(header , foote 등r)를 컴포넌트로 만들고 
이것을 조립해서 하나의 페이지를 완성하는 방법
3. 컴포넌트를 통해 구조화 하여 재사용에 매우 용이하다.
4. SPA를 통해서 하나의 페이지에 있는 HTML , CSS , JS를 로딩후 
다음 페이지에선 기존에 로딩한것에서 바뀐것들만 로딩하므로 트래픽이 적다(라우팅이라고 한다)

vuecli : 뷰 프로젝트를 개발할떄 도외주는툴 , 프로젝트의 구성을 자동적으로 생성해줌

뷰를 cli버젼으로 설치할떄 하는 명령어
npm install -g @vue/cli
프로젝트 만들때 하는 명령어
vue create test
default : bable + eslint
Manually : bable,typescript,router,vuex,lilter등등

bootstrap vue를 사용함
npm install vue bootstrap-vue bootstrap

<template>안에는 html코드가 들어간다

라우터 만들기
const router = new VueRouter({
    mode: = "history",
    route:[
        {path:'/',component:Home} -> 아무것도 안눌렀을때 home페이지로 오게한다
        {path:'/about',component:About} -> about페이지를 눌렀을때 about페이지로 오게 한다.
    ]
});
