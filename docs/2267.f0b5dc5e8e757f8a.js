"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2267],{2267:(u,a,o)=>{o.r(a),o.d(a,{HomePage:()=>s});var e=o(7304),t=o(8256),r=o(9217);let s=(()=>{class i{constructor(n){this.faio=n}showFingerprintAuthDlg(){this.faio.isAvailable().then(n=>{console.log(n),this.faio.show({cancelButtonTitle:"Cancel",description:"Some biometric description",disableBackup:!0,title:"Scanner Title",fallbackButtonTitle:"FB Back Button",subtitle:"This SubTitle"}).then(c=>{console.log(c),alert("Successfully Authenticated!")}).catch(c=>{console.log(c),alert("Match not found!")})}).catch(n=>{console.log(n)})}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(r.h))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-home"]],standalone:!0,features:[t.jDz],decls:9,vars:2,consts:[[3,"translucent"],[1,"ion-padding",3,"fullscreen"],["expand","full","fill","outline",3,"click"]],template:function(n,c){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3," Fingerprint AIO "),t.qZA()()(),t.TgZ(4,"ion-content",1)(5,"h4"),t._uU(6,"Tap the button to Authenticate"),t.qZA(),t.TgZ(7,"ion-button",2),t.NdJ("click",function(){return c.showFingerprintAuthDlg()}),t._uU(8,"Fingerprint Authenticate "),t.qZA()()),2&n&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0))},dependencies:[e.Pc,e.YG,e.W2,e.Gu,e.wd,e.sr],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),i})()}}]);