var _e=Object.defineProperty,we=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var V=(e,i,n)=>i in e?_e(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n,z=(e,i)=>{for(var n in i||(i={}))Ce.call(i,n)&&V(e,n,i[n]);if(N)for(var n of N(i))qe.call(i,n)&&V(e,n,i[n]);return e},y=(e,i)=>we(e,pe(i));import{d as Te,e as ke,a as $e,Q as p}from"./QBtn.f551ee35.js";import{c as B,f as Pe,d as xe}from"./render.6c468f42.js";import{c as s,h as v,g as le,r as h,R as Qe,V as Ae,W as Be,o as Me,f as R,_ as He,Z as De,t as x,u as E,v as m,y as u,z as b,$ as je,a0 as Oe,a1 as Ie,a2 as Le,C as oe,A as F}from"./index.fa2519f3.js";import{u as ie,b as ne,Q as U,e as Ne,c as k,s as Y,m as Z,T as W,k as Ve,f as Re,i as Ee,j as G,l as X}from"./QScrollObserver.5bed98c9.js";import{Q as Fe}from"./QPage.b1fd753c.js";import{I as J,d as $,C as Ue,M as Ye,y as K,f as Ze,l as We,h as Ge,c as Xe}from"./firebase.be910d7f.js";var ee=B({name:"QAvatar",props:y(z({},Te),{fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean}),setup(e,{slots:i}){const n=ke(e),c=s(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),d=s(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const f=e.icon!==void 0?[v($e,{name:e.icon})]:void 0;return v("div",{class:c.value,style:n.value},[v("div",{class:"q-avatar__content row flex-center overflow-hidden",style:d.value},Pe(i.default,f))])}}});const Je={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},Q={xs:2,sm:4,md:8,lg:16,xl:24};var Ke=B({name:"QSeparator",props:y(z({},ie),{spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String}),setup(e){const i=le(),n=ne(e,i.proxy.$q),c=s(()=>e.vertical===!0?"vertical":"horizontal"),d=s(()=>` q-separator--${c.value}`),f=s(()=>e.inset!==!1?`${d.value}-${Je[e.inset]}`:""),o=s(()=>`q-separator${d.value}${f.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(n.value===!0?" q-separator--dark":"")),t=s(()=>{const S={};if(e.size!==void 0&&(S[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const P=e.spaced===!0?`${Q.md}px`:e.spaced in Q?`${Q[e.spaced]}px`:e.spaced,_=e.vertical===!0?["Left","Right"]:["Top","Bottom"];S[`margin${_[0]}`]=S[`margin${_[1]}`]=P}return S});return()=>v("hr",{class:o.value,style:t.value,"aria-orientation":c.value})}});const te=["vertical","horizontal"],A={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},ae={prevent:!0,mouse:!0,mouseAllDir:!0};var et=B({name:"QScrollArea",props:y(z({},ie),{thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function}),setup(e,{slots:i,emit:n}){const c=h(!1),d=h(!1),f=h(!1),o={vertical:h(0),horizontal:h(0)},t={vertical:{ref:h(null),position:h(0),size:h(0)},horizontal:{ref:h(null),position:h(0),size:h(0)}},S=le(),P=ne(e,S.proxy.$q);let _,M;const w=h(null),re=s(()=>"q-scrollarea"+(P.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=s(()=>{const a=t.vertical.size.value-o.vertical.value;if(a<=0)return 0;const l=k(t.vertical.position.value/a,0,1);return Math.round(l*1e4)/1e4}),t.vertical.thumbHidden=s(()=>(e.visible===null?f.value:e.visible)!==!0&&c.value===!1&&d.value===!1||t.vertical.size.value<=o.vertical.value+1),t.vertical.thumbStart=s(()=>t.vertical.percentage.value*(o.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=s(()=>Math.round(k(o.vertical.value*o.vertical.value/t.vertical.size.value,50,o.vertical.value))),t.vertical.style=s(()=>y(z(z({},e.thumbStyle),e.verticalThumbStyle),{top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=s(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=s(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=s(()=>{const a=t.horizontal.size.value-o.horizontal.value;if(a<=0)return 0;const l=k(t.horizontal.position.value/a,0,1);return Math.round(l*1e4)/1e4}),t.horizontal.thumbHidden=s(()=>(e.visible===null?f.value:e.visible)!==!0&&c.value===!1&&d.value===!1||t.horizontal.size.value<=o.horizontal.value+1),t.horizontal.thumbStart=s(()=>t.horizontal.percentage.value*(o.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=s(()=>Math.round(k(o.horizontal.value*o.horizontal.value/t.horizontal.size.value,50,o.horizontal.value))),t.horizontal.style=s(()=>y(z(z({},e.thumbStyle),e.horizontalThumbStyle),{left:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=s(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=s(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const se=s(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),ce=[[W,a=>{O(a,"vertical")},void 0,z({vertical:!0},ae)]],ue=[[W,a=>{O(a,"horizontal")},void 0,z({horizontal:!0},ae)]];function H(){const a={};return te.forEach(l=>{const r=t[l];a[l+"Position"]=r.position.value,a[l+"Percentage"]=r.percentage.value,a[l+"Size"]=r.size.value,a[l+"ContainerSize"]=o[l].value}),a}const D=Qe(()=>{const a=H();a.ref=S.proxy,n("scroll",a)},0);function j(a,l,r){if(te.includes(a)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(a==="vertical"?Y:Z)(w.value,l,r)}function de({height:a,width:l}){let r=!1;o.vertical.value!==a&&(o.vertical.value=a,r=!0),o.horizontal.value!==l&&(o.horizontal.value=l,r=!0),r===!0&&C()}function ve({position:a}){let l=!1;t.vertical.position.value!==a.top&&(t.vertical.position.value=a.top,l=!0),t.horizontal.position.value!==a.left&&(t.horizontal.position.value=a.left,l=!0),l===!0&&C()}function fe({height:a,width:l}){t.horizontal.size.value!==l&&(t.horizontal.size.value=l,C()),t.vertical.size.value!==a&&(t.vertical.size.value=a,C())}function O(a,l){const r=t[l];if(a.isFirst===!0){if(r.thumbHidden.value===!0)return;M=r.position.value,d.value=!0}else if(d.value!==!0)return;a.isFinal===!0&&(d.value=!1);const g=A[l],T=o[l].value,Se=(r.size.value-T)/(T-r.thumbSize.value),ge=a.distance[g.dist],ye=M+(a.direction===g.dir?1:-1)*ge*Se;L(ye,l)}function I(a,l){const r=t[l];if(r.thumbHidden.value!==!0){const g=a[A[l].offset];if(g<r.thumbStart.value||g>r.thumbStart.value+r.thumbSize.value){const T=g-r.thumbSize.value/2;L(T/o[l].value*r.size.value,l)}r.ref.value!==null&&r.ref.value.dispatchEvent(new MouseEvent(a.type,a))}}function he(a){I(a,"vertical")}function me(a){I(a,"horizontal")}function C(){c.value===!0?clearTimeout(_):c.value=!0,_=setTimeout(()=>{c.value=!1},e.delay),e.onScroll!==void 0&&D()}function L(a,l){w.value[A[l].scroll]=a}function be(){f.value=!0}function ze(){f.value=!1}Object.assign(S.proxy,{getScrollTarget:()=>w.value,getScroll:H,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:j,setScrollPercentage(a,l,r){j(a,l*(t[a].size.value-o[a].value),r)}});let q=null;return Ae(()=>{q={top:t.vertical.position.value,left:t.horizontal.position.value}}),Be(()=>{if(q===null)return;const a=w.value;a!==null&&(Z(a,q.left),Y(a,q.top))}),Me(D.cancel),()=>v("div",{class:re.value,onMouseenter:be,onMouseleave:ze},[v("div",{ref:w,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[v("div",{class:"q-scrollarea__content absolute",style:se.value},xe(i.default,[v(U,{debounce:0,onResize:fe})])),v(Ne,{axis:"both",onScroll:ve})]),v(U,{debounce:0,onResize:de}),v("div",{class:t.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:he}),v("div",{class:t.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:me}),R(v("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),ce),R(v("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),ue)])}});const tt=De({name:"PageHome",data(){return{newTweetContent:"",tweets:[]}},methods:{formattedDate(e){return new Date(e).toLocaleString("en-US",{timeZone:"America/New_York"})},addNewTweet(){let e={content:this.newTweetContent,date:new Date().toLocaleString("en-US",{timeZone:"America/New_York"}),liked:!1};async function i(){await We(K($,"tweets"),{content:e.content,date:e.date})}i(),this.newTweetContent=""},deleteTweet(e){async function i(){await Ge(J($,"tweets",e.id))}i()},toggleLiked(e){const i=J($,"tweets",e.id);async function n(){await Xe(i,{liked:!e.liked})}n()}},mounted(){const e=Ue(K($,"tweets"),Ye("date"));Ze(e,i=>{i.docChanges().forEach(n=>{let c=n.doc.data();if(c.id=n.doc.id,n.type==="added"&&this.tweets.unshift(c),n.type==="modified"){let d=this.tweets.findIndex(f=>f.id===c.id);Object.assign(this.tweets[d],c)}if(n.type==="removed"){let d=this.tweets.findIndex(f=>f.id===c.id);this.tweets.splice(d,1)}})})}}),at={class:"q-py-lg q-px-md row items-end q-col-gutter-md"},lt={class:"col"},ot=b("img",{src:"https://i.pinimg.com/originals/dd/88/18/dd881804b3c9419e03883b83c40cb407.jpg"},null,-1),it={class:"col col-shrink"},nt=b("img",{src:"https://i.pinimg.com/originals/dd/88/18/dd881804b3c9419e03883b83c40cb407.jpg"},null,-1),rt=b("strong",null,"Debamita Saha",-1),st={class:"text-grey-7"},ct=oe(" @debamita__saha "),ut=b("br",{class:"lt-md"},null,-1),dt={class:"tweet-content text-body1"},vt={class:"tweet-icons row justify-between q-mt-sm"};function ft(e,i,n,c,d,f){return x(),E(Fe,{class:"relative-position"},{default:m(()=>[u(et,{class:"absolute full-width full-height"},{default:m(()=>[b("div",at,[b("div",lt,[u(Ve,{class:"new-tweet","bottom-slots":"",modelValue:e.newTweetContent,"onUpdate:modelValue":i[0]||(i[0]=o=>e.newTweetContent=o),placeholder:"What's happening?",counter:"",maxlength:"280",autogrow:""},{before:m(()=>[u(ee,{size:"xl"},{default:m(()=>[ot]),_:1})]),_:1},8,["modelValue"])]),b("div",it,[u(p,{onClick:e.addNewTweet,disable:!e.newTweetContent,class:"q-mb-lg",unelevated:"",rounded:"","no-caps":"",color:"primary",label:"Tweet"},null,8,["onClick","disable"])])]),u(Ke,{class:"divider",size:"10px",color:"grey-2"}),u(Re,{separator:""},{default:m(()=>[u(je,{appear:"","enter-active-class":"animated fadeIn slow","leave-active-class":"animated fadeOut slow"},{default:m(()=>[(x(!0),Oe(Le,null,Ie(e.tweets,o=>(x(),E(Ee,{key:o.id,class:"q-py-md"},{default:m(()=>[u(G,{avatar:"",top:""},{default:m(()=>[u(ee,{size:"xl"},{default:m(()=>[nt]),_:1})]),_:1}),u(G,null,{default:m(()=>[u(X,{class:"text-subtitle1"},{default:m(()=>[rt,b("span",st,[ct,ut,oe(" \u2022 "+F(e.formattedDate(o.date)),1)])]),_:2},1024),u(X,null,{default:m(()=>[b("div",dt,[b("pre",null," "+F(o.content),1)])]),_:2},1024),b("div",vt,[u(p,{flat:"",round:"",color:"grey",size:"sm",icon:"fa-regular fa-comment"}),u(p,{flat:"",round:"",color:"grey",size:"sm",icon:"fa-solid fa-retweet"}),u(p,{onClick:t=>e.toggleLiked(o),flat:"",round:"",color:o.liked?"pink":"grey",icon:o.liked?"fa-solid fa-heart":"fa-regular fa-heart",size:"sm"},null,8,["onClick","color","icon"]),u(p,{onClick:t=>e.deleteTweet(o),flat:"",round:"",color:"grey",size:"sm",icon:"fa-solid fa-trash"},null,8,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})}var _t=He(tt,[["render",ft]]);export{_t as default};
