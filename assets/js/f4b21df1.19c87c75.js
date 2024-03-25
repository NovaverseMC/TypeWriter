"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9125],{58604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(74848),r=n(28453),s=n(58362);const a={},c="First Interaction",o={id:"docs/creating-stories/interactions/index",title:"First Interaction",description:"This guide assumes that you have already installed the Basic Adapter.\\",source:"@site/docs/docs/03-creating-stories/01-interactions/index.mdx",sourceDirName:"docs/03-creating-stories/01-interactions",slug:"/docs/creating-stories/interactions/",permalink:"/TypeWriter/beta/docs/creating-stories/interactions/",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/develop/documentation/docs/docs/03-creating-stories/01-interactions/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Layout",permalink:"/TypeWriter/beta/docs/getting-started/layout"},next:{title:"Giving items",permalink:"/TypeWriter/beta/docs/creating-stories/interactions/items"}},l={},d=[{value:"What are interactions?",id:"what-are-interactions",level:2},{value:"Creating an interaction",id:"creating-an-interaction",level:2},{value:"Configuring the interaction",id:"configuring-the-interaction",level:3},{value:"Creating an event",id:"creating-an-event",level:2},{value:"Configuring the event",id:"configuring-the-event",level:3},{value:"Configuring the speaker",id:"configuring-the-speaker",level:3},{value:"Result",id:"result",level:2}];function h(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"first-interaction",children:"First Interaction"}),"\n",(0,i.jsx)(t.admonition,{title:"Before starting",type:"info",children:(0,i.jsxs)(t.p,{children:["This guide assumes that you have already installed the ",(0,i.jsx)(t.a,{href:"/TypeWriter/beta/docs/getting-started/installation#basic-adapter",children:"Basic Adapter"}),".",(0,i.jsx)(t.br,{}),"\n","Also, make sure you have read the ",(0,i.jsx)(t.a,{href:"/TypeWriter/beta/docs/getting-started/layout",children:"layout"})," documentation and created a sequence page."]})}),"\n",(0,i.jsx)(t.p,{children:"Let's create our first interaction. Our example interaction will have the following steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The player clicks on a flower."}),"\n",(0,i.jsx)(t.li,{children:"A chat dialogue opens."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["If you need any assistance during the process, feel free to ask for help on our ",(0,i.jsx)(t.a,{href:"https://discord.gg/HtbKyuDDBw",children:"Discord"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"what-are-interactions",children:"What are interactions?"}),"\n",(0,i.jsx)(t.p,{children:"An interaction occurs when the player interacts with something and triggers an event. In this tutorial, the player clicking on the flower is the interaction, and the chat dialogue is the event that gets triggered."}),"\n",(0,i.jsx)(t.h2,{id:"creating-an-interaction",children:"Creating an interaction"}),"\n",(0,i.jsxs)(t.p,{children:["Let's get started by creating an entry. Click on the + icon in the top right corner of the panel and search for ",(0,i.jsx)(t.code,{children:"on interact with block"}),". Add it to your page by clicking on the + icon."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"on-interact-with-block",src:n(61998).A+"",width:"503",height:"210"})}),"\n",(0,i.jsx)(t.h3,{id:"configuring-the-interaction",children:"Configuring the interaction"}),"\n",(0,i.jsxs)(t.p,{children:["In the inspector, set the block to ",(0,i.jsx)(t.code,{children:"Red Tulip"})," (1) and set the name to ",(0,i.jsx)(t.code,{children:"on flower click"})," (2)."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"on-flower-click",src:n(79639).A+"",width:"269",height:"600"})}),"\n",(0,i.jsx)(t.h2,{id:"creating-an-event",children:"Creating an event"}),"\n",(0,i.jsxs)(t.p,{children:["Now we need to create an event that gets triggered when the player clicks on the flower. Right-click on the ",(0,i.jsx)(t.code,{children:"On Flower Click"})," entry and click on ",(0,i.jsx)(t.code,{children:"+ link with ..."})," to open the search menu. Search for ",(0,i.jsx)(t.code,{children:"Add Spoken"})," and add it to the page."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"add-spoken",src:n(58297).A+"",width:"502",height:"211"})}),"\n",(0,i.jsx)(t.h3,{id:"configuring-the-event",children:"Configuring the event"}),"\n",(0,i.jsxs)(t.p,{children:["In the inspector, set the text to ",(0,i.jsx)(t.code,{children:"Hello! I am a flower."})," and set the duration to ",(0,i.jsx)(t.code,{children:"1s"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"configuring-the-speaker",children:"Configuring the speaker"}),"\n",(0,i.jsx)(t.p,{children:"Follow these steps to configure the speaker:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Click on the text ",(0,i.jsx)(t.code,{children:"Select a speaker"})," and in the search menu, click on ",(0,i.jsx)(t.code,{children:"Add Simple Speaker"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Select ",(0,i.jsx)(t.code,{children:"Add static"})," and give that static page a name."]}),"\n",(0,i.jsx)(t.li,{children:"Click on the Simple speaker."}),"\n",(0,i.jsxs)(t.li,{children:["Inside the inspector, set the DisplayName to ",(0,i.jsx)(t.code,{children:"A beautiful flower"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"simple-speaker",src:n(42703).A+"",width:"540",height:"417"})}),"\n",(0,i.jsx)(t.h2,{id:"result",children:"Result"}),"\n",(0,i.jsx)(t.p,{children:"You can now publish your pages, and in-game, it should look like this when clicking on the flower:"}),"\n",(0,i.jsx)(s.A,{url:n(63871).A})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},58362:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(96540),r=n(13554),s=n.n(r);const a={player:"player_DXFF",bar:"bar_YnB5",progress:"progress_ekEV"};var c=n(74848);function o(e){let{url:t}=e,[n,r]=(0,i.useState)(0);return(0,c.jsxs)("div",{className:a.player,children:[(0,c.jsx)(l,{progress:n}),(0,c.jsx)(s(),{url:t,playing:!0,loop:!0,muted:!0,width:"100%",height:"100%",progressInterval:100,onProgress:e=>r(100*e.played),className:a.player})]})}function l(e){let{progress:t}=e;return(0,c.jsx)("div",{className:a.bar,children:(0,c.jsx)("div",{className:a.progress,style:{width:`${t}%`}})})}},63871:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/medias/final-result-default-543489b53ecf7d7d834ae0b9cc06a60d.webm"},58297:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/add-spoken-15b275feb34d81bd82aad30d7585b846.png"},61998:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/on-interact-with-block-ef45cac5abb5a4639a3c9cac5f485c0e.png"},79639:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/on_flower_click-607d55969e8978b8e50044f9b8b3f469.png"},42703:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/simple-speaker-6772c59606a2ffd3e9894ad0c44f3bad.png"}}]);