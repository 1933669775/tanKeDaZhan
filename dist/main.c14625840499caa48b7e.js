"use strict";(self.webpackChunktkdz=self.webpackChunktkdz||[]).push([[179],{370:(e,t,i)=>{i.d(t,{Z:()=>q});var l=i(81),s=i.n(l),n=i(645),a=i.n(n)()(s());a.push([e.id,"*{margin:0}body{display:flex;height:100vh;justify-content:center;align-items:center;flex-direction:column;font-size:14px}body canvas{border:1px solid red;background-color:#000}body .game{display:flex;justify-content:center;align-items:center}body .selectLevel{position:absolute;top:5%;display:flex;flex-wrap:wrap;justify-content:center;width:50%}body .selectLevel .level{margin:15px 20px 0 0;cursor:pointer}body .selectLevel .level:last-child{margin-right:0}body .selectLevel .level:hover{color:red}body .selectLevel .active{color:red}body .explain{position:absolute;cursor:pointer;top:50px;left:50px}body .dialog-main-box{top:55% !important}",""]);const q=a},44:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var l=i(379),s=i.n(l),n=i(795),a=i.n(n),q=i(569),r=i.n(q),h=i(565),o=i.n(h),c=i(216),d=i.n(c),u=i(589),m=i.n(u),y=i(370),f={};f.styleTagTransform=m(),f.setAttributes=o(),f.insert=r().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d();s()(y.Z,f);const v=y.Z&&y.Z.locals?y.Z.locals:void 0},294:function(e,t,i){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),i(44),i(204);let s=new(l(i(896)).default);const n=document.querySelector(".selectLevel"),a=[];for(let e=0;e<s.CreateMap.levelSum;e++){let t=document.createElement("div");t.setAttribute("index",String(e)),t.innerText=`第${e+1}关`,t.classList.add("level"),a.push(t),n.appendChild(t)}n.addEventListener("click",(e=>{var t;const i=e.target.getAttribute("index");i&&(a.forEach((e=>e.classList.remove("active"))),null===(t=a[parseInt(i)])||void 0===t||t.classList.add("active"),s.start(parseInt(i)))})),document.querySelector(".explain").addEventListener("click",(()=>{s.Tank.suspend()})),document.addEventListener("visibilitychange",(function(){document.hidden&&s.Tank.suspend()}))},502:function(e,t,i){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=l(i(943)),n=l(i(879)),a=document.querySelector("canvas"),q=a.getContext("2d");class r{constructor(){this.dialog=n.default,this.canvas=a,this.cw=this.canvas.width,this.ch=this.canvas.height,this.ctx=q,this.config=s.default,this.dialog=new n.default}borderRect(e,t,i,l){const{ctx:s}=this;s.beginPath(),s.fillRect(e,t,i,l),s.strokeRect(e,t,i,l),s.closePath()}rotate(e,t,i,l,s){let n=e+i/2,a=t+l/2;const{ctx:q}=this;q.translate(n,a),q.rotate(s*Math.PI/180),q.translate(-n,-a)}hitDetection(e,t){return e.x+e.w>=t.x&&e.x<=t.x+t.w&&e.y+e.h>=t.y&&e.y<=t.y+t.h}updateStatus(){var e;document.querySelector("#myLife").innerHTML=String(null===(e=this.myTanke)||void 0===e?void 0:e.tankObj.lifeVal),document.querySelector("#enemyNum").innerHTML=String(this.levelParams.enemyAmount-this.enemyVanishNum)}suspend(){this.isSuspend||(this.isSuspend=!0,this.dialog.alert({content:"\n      操作：↑↓←→<br>Space：发射子弹<br>点击选择关卡，每一关难度不同<br>\n      我设置了三个关卡<br>第一关：简单，第二关：困难，第三关：地狱<br>\n      胜利条件：消灭所有敌人<br>\n      失败条件：家全部被毁灭，或主角生命&lt;=0\n    ",buttons:{ok:()=>(this.isSuspend=!1,!0)}}))}get barrierObj(){return r.barrierObj_}set barrierObj(e){r.barrierObj_=e}get enemyAll(){return r.enemyAll_}set enemyAll(e){r.enemyAll_=e}get bulletAll(){return r.bulletAll_}set bulletAll(e){r.bulletAll_=e}get levelParams(){return r.levelParams_}set levelParams(e){r.levelParams_=e}get isSuspend(){return r.isSuspend_}set isSuspend(e){r.isSuspend_=e}get enemyVanishNum(){return r.enemyVanishNum_}set enemyVanishNum(e){r.enemyVanishNum_=e}get level(){return r.level_}set level(e){r.level_=e}get isFinish(){return r.isFinish_}set isFinish(e){r.isFinish_=e}get myTanke(){return r.enemyAll_.find((e=>e.tankObj.color===this.config.myTankColor))}}t.default=r,r.barrierObj_=[],r.enemyAll_=[],r.bulletAll_=[],r.level_=0,r.enemyVanishNum_=0,r.isSuspend_=!1},844:function(e,t,i){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=l(i(502));class n extends s.default{constructor(){super(),this.move=()=>{var e,t;const{canvas:i}=this;this.bulletAll=null===(e=this.bulletAll)||void 0===e?void 0:e.filter((e=>!(e.x<0||e.x>i.width||e.y<0||e.y>i.height))),this.bulletAll=(null===(t=this.bulletAll)||void 0===t?void 0:t.map((e=>{switch(e.dir){case"上":e.y-=e.seed;break;case"下":e.y+=e.seed;break;case"左":e.x-=e.seed;break;case"右":e.x+=e.seed}return e})))||[],this.isBulletHit(),this.redrawBullet()},this.effectsAll=[],this.move()}isBulletHit(){const e=this.config.myTankColor;this.bulletAll=this.bulletAll.filter((t=>{const i={x:t.x,y:t.y,w:5,h:5};let l=!1,s=!1,n=!1;return this.barrierObj=this.barrierObj.filter((e=>{let t=this.hitDetection(i,e);return t&&"h"!==e.type&&(l=!0),"z"===e.type||"h"===e.type||!t})),this.barrierObj.filter((e=>"j"===e.type)).length<=0&&!this.isFinish?(this.isFinish=!0,this.enemyAll=this.enemyAll.filter((t=>t.tankObj.color!==e)),void this.dialog.alert({content:"家没了，大侠请重新来过",buttons:{ok:()=>!0}})):(t.color===e?this.enemyAll=this.enemyAll.filter(((t,n)=>{if(t.tankObj.color===e)return!0;return this.hitDetection(i,{x:t.tankObj.tankX,y:t.tankObj.tankY,w:t.tankObj.tankW,h:t.tankObj.tankH})?(l=!0,t.tankObj.isInvincible||(this.enemyAll[n].tankObj.lifeVal-=1),this.enemyAll[n].tankObj.lifeVal<=0&&(s=!0,clearTimeout(t.bulletId),clearTimeout(t.turnToId),this.enemyVanishNum++,this.enemyVanishNum>=this.levelParams.enemyAmount&&this.dialog.alert({content:0===this.level?"胜利了，你可以开始下一关":1===this.level?"你居然过了第二关，有点实力":2===this.level?"牛啊，给你个大拇指":"",buttons:{ok:()=>!0}}),this.updateStatus())):s=!1,!s})):t.color!==e&&(this.enemyAll=this.enemyAll.filter(((t,s)=>{if(t.tankObj.color!==e)return t;return this.hitDetection(i,{x:t.tankObj.tankX,y:t.tankObj.tankY,w:t.tankObj.tankW,h:t.tankObj.tankH})&&(t.tankObj.isInvincible||(this.enemyAll[s].tankObj.lifeVal-=1,t.tankObj.invincible(500)),l=!0,this.updateStatus(),this.enemyAll[s].tankObj.lifeVal<=0&&(this.isFinish=!0,n=!0,this.dialog.alert({content:"失败，坦克没了，大侠请重新来过",buttons:{ok:()=>!0}}))),!n}))),l&&this.effectsAll.push({x:t.x,y:t.y,radius:0,color:t.color}),!l)}))}drawHitEffects(){this.effectsAll=this.effectsAll.map((e=>(e.radius++,this.drawFires(e.x,e.y,12,e.radius,e.color),e))),this.effectsAll=this.effectsAll.filter((e=>e.radius<=13))}drawFires(e,t,i,l,s){const{ctx:n}=this;for(let a=0;a<=2;a++)for(let q=0;q<i;q++){let r=360/(i/a)*q*Math.PI/180,h=e+Math.cos(r)*l/a,o=t+Math.sin(r)*l/a;n.beginPath(),n.arc(h,o,1.3,2*Math.PI,0,!1),n.closePath(),n.fillStyle=s,n.fill()}}redrawBullet(){var e;const{ctx:t}=this;null===(e=this.bulletAll)||void 0===e||e.forEach((e=>{t.beginPath(),t.save(),t.fillStyle=e.color,t.arc(e.x,e.y,3,0,2*Math.PI),t.fill(),t.restore(),t.closePath()}))}}t.default=n},896:function(e,t,i){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=l(i(6)),n=l(i(724)),a=l(i(844)),q=l(i(191));t.default=class{constructor(){this.move=()=>{this.isMove||this.Tank.isSuspend||(this.isMove=!0,this.moveHandle())},this.redraw=()=>{if(!this.Tank.isSuspend){const{ctx:e,canvas:t}=this.Tank;e.clearRect(0,0,t.width,t.height),this.CreateMap.drawMap(),this.Enemy.move(),this.Bullet.move(),this.Enemy.draw(),this.Bullet.drawHitEffects()}window.requestAnimationFrame(this.redraw)},this.moveHandle=()=>{this.isMove&&(this.Tank.enemyAll=this.Tank.enemyAll.map((e=>e.tankObj===this.Tank?(e.tankObj.dir=this.dir,e):e)),this.Tank.move(),window.requestAnimationFrame(this.moveHandle))},this.CreateMap=new s.default;const{config:e}=this.CreateMap;this.Tank=new n.default(e.myTankSeed,e.myTankColor,0),this.Bullet=new a.default,this.Enemy=new q.default,this.isMove=!1,this.dir="下",this.bulletTimeID=null,this.controllerHandle(),this.redraw()}start(e){this.Tank.isFinish=!1,this.Tank.level=e,this.Tank.enemyVanishNum=0,this.CreateMap.create(),this.Tank.lifeVal=this.CreateMap.levelParams.myTankLife,this.Tank.enemyAll.forEach((e=>{clearInterval(e.bulletId),clearInterval(e.turnToId)})),this.Tank.enemyAll=[],this.Tank.bulletAll=[],this.Tank.tankX=0,this.Tank.tankY=(this.CreateMap.canvas.height-this.Tank.config.tankHeight*devicePixelRatio)/devicePixelRatio,this.Tank.enemyAll.push({tankObj:this.Tank}),this.Enemy.create(),this.Tank.updateStatus()}controllerHandle(){window.onkeydown=e=>{switch(e.key){case"ArrowUp":this.dir="上",this.move();break;case"ArrowDown":this.dir="下",this.move();break;case"ArrowLeft":this.dir="左",this.move();break;case"ArrowRight":this.dir="右",this.move();break;case" ":this.launchBullet()}},window.onkeyup=e=>{!this.isMove||"ArrowDown"!==e.key&&"ArrowRight"!==e.key&&"ArrowLeft"!==e.key&&"ArrowUp"!==e.key||(this.isMove=!1)}}launchBullet(){this.Tank.isFinish||(null!==this.bulletTimeID&&clearTimeout(this.bulletTimeID),this.bulletTimeID=setTimeout((()=>{const{tankW:e,tankH:t,tankX:i,tankY:l,config:s}=this.Tank;this.Bullet.bulletAll.push({dir:this.dir,x:i+e/2,y:l+t/2,seed:s.myBulletSeed,color:s.myTankColor})}),100))}}},6:function(e,t,i){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=l(i(502));class n extends s.default{constructor(){super(),this.drawMap=()=>{this.barrierObj.forEach((e=>{"q"===e.type&&this.drawWall(e.x,e.y,e.w,e.h,this.config.wallColor),"j"===e.type&&this.drawFamily(e.x,e.y,e.w,e.h),"z"===e.type&&this.drawBarrier(e.x,e.y,e.w,e.h),"h"===e.type&&this.drawSea(e.x,e.y,e.w,e.h)}))},this.levelSum=a.length,this.currentLevel=-1}create(){this.barrierObj=[],this.currentLevel=this.level,this.levelParams=a[this.level];const e=a[this.level].map,t=this.cw/e[0].length,i=this.ch/e.length;e.forEach(((e,l)=>{for(let s=0;s<e.length;s++){const n=t*s/devicePixelRatio,a=i*l/devicePixelRatio;" "!==e[s]&&this.barrierObj.push({x:n,y:a,w:t/devicePixelRatio,h:i/devicePixelRatio,type:e[s]})}})),this.drawMap()}drawWall(e,t,i,l,s){const{ctx:n}=this;n.fillStyle=s,n.beginPath(),n.fillRect(e,t,i,l),n.closePath();const a=l/2;n.strokeStyle=this.config.wallLineColor,n.lineWidth=2;for(let l=1;l<=2;l++)l%2==1?(n.beginPath(),n.strokeRect(e,t+a*l-a,i-i/2,a),n.moveTo(e+(i-i/2),t+a*l),n.lineTo(e+i,t+a*l),n.moveTo(e+(i-i/2),t+a*l-a),n.lineTo(e+i,t+a*l-a),n.stroke(),n.closePath()):(n.beginPath(),n.moveTo(e+i/4,t+a*l),n.lineTo(e+i/4,t+a*l-a),n.moveTo(e+i/2+i/4,t+a*l),n.lineTo(e+i/2+i/4,t+a*l-a),n.stroke(),n.closePath())}drawSea(e,t,i,l){const{ctx:s}=this;s.beginPath(),s.save(),s.fillStyle="#0022ff",s.fillRect(e,t,i,l),s.strokeStyle="#a5a5a5",s.moveTo(e+i/5,t+l/4),s.lineTo(e+i/2.5,t+l/4),s.moveTo(e+i/1.5,t+l/4),s.lineTo(e+i/2,t+l/4),s.moveTo(e+i/5,t+l/1.5),s.lineTo(e+i/2,t+l/1.5),s.moveTo(e+i/1.6,t+l/1.5),s.lineTo(e+i/1.1,t+l/1.5),s.stroke(),s.restore(),s.closePath()}drawFamily(e,t,i,l){const{ctx:s}=this;s.beginPath(),s.strokeStyle="red",s.font=`${parseInt(String(i/1.5))}px Arial`,s.fillText("家",e,t+l),s.closePath()}drawBarrier(e,t,i,l){const{ctx:s}=this;s.beginPath(),s.save(),s.fillStyle="#fff",s.fillRect(e,t,i,l),s.restore(),s.closePath()}}t.default=n;const a=[{enemySeed:2,enemyAmount:10,enemyCeiling:5,enemyLife:2,myTankLife:4,enemyCreateSeed:1500,map:["                                ","                                ","                                ","                                ","                                ","   hhh                    hhh   ","   hhh    q         q     hhh   ","         q q       q q          ","        q   q     q   q         ","       q     q   q     q        ","q     q       q q       q      q","qq     q       q       q      qq","qqq     q             q      qqq","qqqq     q           q      qqqq","qqqqq     q         q      qqqqq","           q       q            ","            q     q             ","             q   q              ","              q q               ","               q                ","    zzzzz              zzzzz    ","    zzzzz              zzzzz    ","                                ","            qqqqqqq             ","            qqjjjqq             ","            qqjjjqq             "]},{enemySeed:2.5,enemyAmount:100,enemyCeiling:20,enemyLife:3,myTankLife:5,enemyCreateSeed:800,map:["                                ","                                ","                                ","     qqqzzqqqqqqqqqqqqzzqqq     ","     qqq  q   qqqq   q  qqq     ","     qqq  q          q  qqq     ","     qqq  q          q  qqq     ","     qqq  q          q  qqq     ","     qqq  qqqqqqq    q  qqq     ","     qqq  q          q  qqq     ","          q          q          ","    hhhh  q    qqqqqqq  hhhh    ","    hhhh  q          q  hhhh    ","          q           q         ","     qqq  qqqqqqq    q  qqq     ","     qqq  q          q  qqq     ","     qqq  q          q  qqq     ","     qqq  q    qqqqqqq  qqq     ","     qqq  q          q  qqq     ","     qqq  q          q  qqq     ","     qqq  qqqqqqqqqqqq  qqq     ","      q                  q      ","       zz              zz       ","    z       qqqqqqq        z    ","    z       qqjjjqq        z    ","            qqjjjqq             "]},{enemySeed:3,enemyAmount:200,enemyCeiling:50,enemyLife:4,myTankLife:10,enemyCreateSeed:500,map:["                                ","                                ","         zzz       zzz          ","         zzz       zzz          ","                                ","                                ","    qqqqqqqqqqqqqqqqqqqqqqqqqqqq","    qqqqqqqqqqqqqqqqqqqqqqqqqqqq","              hhh               ","              hhh               ","qqqqqqqqqqqqqqhhhqqqqqqqqqqq    ","qqqqqqqqqqqqqqhhhqqqqqqqqqqq    ","  hhh                      hhh  ","  hhh                      hhh  ","   qqqqqqqqqqqqqqqqqqqqqqqqqqqqq","   qqqqqqqqqqqqqqqqqqqqqqqqqqqqq","                                ","                                ","    zzz     qqqqqqqq     zzz    ","    zzz     qqqqqqqq     zzz    ","                                ","qqqqqqqqq              qqqqqqqqq","            qqqqqqq             ","            qqqqqqq             ","            qqjjjqq             ","            qqjjjqq             "]}]},191:function(e,t,i){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=l(i(502)),n=l(i(724));class a extends s.default{constructor(){super(),this.draw=()=>{this.enemyAll.forEach((e=>{e.tankObj.drawTank()}))},this.move=()=>{this.enemyAll=this.enemyAll.map((e=>("yellow"===e.tankObj.color||e.tankObj.move().then((()=>{this.turnTo(e.tankObj,e.tankObj.dir)})),e)))},this.enemyBullet=e=>{const{tankW:t,tankH:i,tankX:l,tankY:s,dir:n}=e;this.bulletAll.push({dir:n,x:l+t/2,y:s+i/2,seed:4,color:"red"})},this.createEnemyId=null}create(){null!==this.createEnemyId&&clearInterval(this.createEnemyId),this.createHandle(),this.createEnemyId=setInterval((()=>{this.enemyAll.length<=this.levelParams.enemyCeiling&&this.levelParams.enemyAmount-this.enemyVanishNum>this.enemyAll.length-1&&!this.isSuspend&&this.createHandle()}),this.levelParams.enemyCreateSeed),this.move()}turnTo(e,t){const i=["下","上","左","右"].filter((e=>t!==e));this.enemyAll=this.enemyAll.map((t=>e===t.tankObj?(t.tankObj.dir=i[Math.floor(Math.random()*i.length)],t):t))}createHandle(){const e=[1.2,1.5,1.8,2,2.2,2.5],t=e[Math.floor(Math.random()*e.length)],i=new n.default(this.levelParams.enemySeed,"e80000",this.levelParams.enemyLife,100,0),l=setInterval((()=>{this.isSuspend||this.enemyBullet(i)}),1e3*t/1.5),s=setInterval((()=>{this.isSuspend||this.turnTo(i)}),1e3*t);this.enemyAll.push({bulletId:l,turnToId:s,tankObj:i}),this.draw()}}t.default=a},724:function(e,t,i){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=l(i(502));class n extends s.default{constructor(e,t,i,l,s){super(),this.move=()=>new Promise((e=>{let{canvas:t,tankW:i,tankH:l,hitDetection:s,tankX:n,tankY:a}=this;const q=t.width,r=(t.height-l*devicePixelRatio)/devicePixelRatio,h=(q-i*devicePixelRatio)/devicePixelRatio;n>0&&"左"===this.dir&&(n-=this.seed),n<h&&"右"===this.dir&&(n+=this.seed),a>0&&"上"===this.dir&&(a-=this.seed),a<r&&"下"===this.dir&&(a+=this.seed);const o=this.barrierObj.find((e=>s({x:n,y:a,w:i,h:l},e)));if((n<=0||n>=h||a<=0||a>=r)&&this.color!==this.config.myTankColor&&e(null),o)return e(null);this.tankX=n,this.tankY=a})),this.tankW=this.config.tankWidth,this.tankH=this.config.tankHeight,this.tankX=l||0,this.tankY=s||0,this.dir="上",this.color=t,this.seed=e,this.isInvincible=!1,this.lifeVal=i,this.invincible(3e3)}invincible(e){this.isInvincible=!0,setTimeout((()=>{this.isInvincible=!1}),e)}drawTank(){const e=this.tankX,t=this.tankY,{ctx:i,tankW:l,tankH:s}=this;i.beginPath(),i.save(),i.fillStyle=this.color,this.rotate(e,t,l,s,"上"===this.dir?0:"下"===this.dir?180:"左"===this.dir?270:90),i.fillRect(e,t,l/4,s),i.fillRect(e+(l-l/4),t,l/4,s),i.strokeStyle="rgba(153,153,153,0.6)";for(let n=1;n<=2;n++){i.lineWidth=1;for(let a=1;a<=5;a++){const q=t+s/5*a;if(1===n)i.moveTo(e,q),i.lineTo(e+l/4,q);else i.moveTo(e+l-l/4,q),i.lineTo(e+(l-l/4)+l/4,q)}i.stroke()}this.borderRect(e+l/2-l/2.6/2,t+(s-s/1.4)/2,l/2.6,s/1.4),i.lineWidth=1,this.borderRect(e+(l/2-l/6/2),t-5,l/6,s/1.3),this.isInvincible&&(i.beginPath(),i.strokeStyle="rgba(255,130,0)",i.arc(e+l/2,t+s/2,l-2,2*Math.PI,0),i.stroke(),i.closePath()),i.restore(),i.closePath(),this.lifeVal<=(this.color===this.config.myTankColor?this.levelParams.myTankLife/2:this.levelParams.enemyLife/2)&&(i.beginPath(),i.save(),i.strokeStyle="#000",i.lineWidth=3,i.moveTo(e+s/4,t),i.lineTo(e+5,t+s/2),i.lineTo(e+s/3,t+s/2),i.lineTo(e+s/4,t+s),i.moveTo(e+s-5,t),i.lineTo(e+s-5,t+s/2),i.lineTo(e+s,t+s/2),i.lineTo(e+s-10,t+s),i.stroke(),i.restore(),i.closePath())}}t.default=n},943:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default={wallColor:"red",wallLineColor:"rgb(197, 211, 4)",tankWidth:28,tankHeight:28,myTankSeed:2,myTankColor:"yellow",myBulletSeed:4}}},e=>{e.O(0,[216],(()=>{return t=294,e(e.s=t);var t}));e.O()}]);