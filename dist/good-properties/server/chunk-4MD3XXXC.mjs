import './polyfills.server.mjs';
import{a as X,d as Z,g as tt,k as et,n as ot}from"./chunk-JMDKFUX5.mjs";import{a as it}from"./chunk-OA3WBR5E.mjs";import{a as R}from"./chunk-BDFF7HA3.mjs";import{a as B}from"./chunk-BEWL7WZG.mjs";import{d as S,f as N,g as y,h as F,i as _,j as G,m as D,n as L,t as k}from"./chunk-BYJCX5FD.mjs";import{g as v,h as x,n as b,o as I}from"./chunk-TFWXTRYT.mjs";import{Ab as c,Ca as e,Da as E,Ma as f,Oa as d,S as $,Sa as C,Wa as a,Xa as r,Ya as m,Z as P,Za as w,_ as j,_b as K,cb as A,db as g,ga as M,ha as h,ob as s,pb as J,qb as l,sc as U,ub as O,vb as T,wc as Q,yc as V,zb as p}from"./chunk-NYYUEVQ5.mjs";import"./chunk-5XUXGTUW.mjs";var nt=t=>t.register,rt=x(nt,t=>t.status),at=x(nt,t=>t.errors),bt=t=>t.registerConfirm,st=x(bt,t=>t.status),pt=t=>t.login,ct=x(pt,t=>t.status),lt=x(pt,t=>t.errors),dt=t=>t.passwordForgotten,mt=x(dt,t=>t.status),ut=x(dt,t=>t.errors),gt=t=>t.resetPassword,ft=x(gt,t=>t.status),Ct=x(gt,t=>t.errors);var It=()=>["PENDING","ERROR"];function Mt(t,u){t&1&&(a(0,"div",11)(1,"p",14),s(2),p(3,"translate"),r()()),t&2&&(e(2),l(" ",c(3,1,"PAGES.REGISTER.ERRORS.ACCOUNT_CREATION")," "))}function ht(t,u){if(t&1){let o=w();a(0,"button",15),A("click",function(){M(o);let n=g();return h(n.onRegisterClick())}),s(1),p(2,"translate"),r()}if(t&2){let o=g();d("disabled",o.registerForm.valid===!1),e(),l(" ",c(2,2,"REGISTER")," ")}}function wt(t,u){t&1&&(a(0,"button",12),m(1,"span",16),s(2),p(3,"translate"),r()),t&2&&(d("disabled",!0),e(2),l(" ",c(3,2,"REGISTERING")," "))}function At(t,u){t&1&&(a(0,"p",13),s(1),p(2,"translate"),r()),t&2&&(e(),l(" ",c(2,1,"PAGES.REGISTER.REGISTRATION_SUCCESSFUL")," "))}var Et=(()=>{class t{store;status$;errors$;status;errors;registerForm;constructor(o){this.store=o,this.status$=this.store.select(rt),this.errors$=this.store.select(at),this.status$.subscribe(i=>this.status=i),this.errors$.subscribe(i=>this.errors=i),this.registerForm=new F({email:new _("",[S.required]),password:new _("",[S.required]),repeatedPassword:new _("",[S.required])})}get emailError(){return R.getInputError("ERRORS.EMAIL.",this.errors,["INVALID_EMAIL","EMAIL_IN_USE"])}get passwordError(){return R.getInputError("ERRORS.PASSWORD.",this.errors,["PASSWORD_MIN_LENGTH"])}get repeatedPasswordError(){return R.getInputError("ERRORS.REPEATED_PASSWORD.",this.errors,["REPEATED_PASSWORD_NO_MATCH"])}onRegisterClick(){let{value:o}=this.registerForm;this.store.dispatch(X({email:o.email,password:o.password,repeatedPassword:o.repeatedPassword}))}static \u0275fac=function(i){return new(i||t)(E(v))};static \u0275cmp=P({type:t,selectors:[["app-register"]],standalone:!0,features:[O],decls:25,vars:28,consts:[["id","main-container"],[1,"container"],[1,"row"],[1,"col-12","col-sm-8","col-md-6"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle","mb-2","text-body-secondary"],[3,"formGroup"],[1,"mb-3"],[3,"id","icon","label","type","formControlName","error"],[1,"text-center"],[1,"btn","btn-primary",3,"disabled"],[1,"text-success"],[1,"text-danger"],[1,"btn","btn-primary",3,"click","disabled"],[1,"fa-solid","fa-spinner","fa-spin"]],template:function(i,n){i&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h5",6),s(7),p(8,"translate"),r(),a(9,"h6",7),s(10),p(11,"translate"),r(),m(12,"hr"),a(13,"form",8)(14,"div",9),m(15,"app-input",10),r(),a(16,"div",9),m(17,"app-input",10),r(),a(18,"div",9),m(19,"app-input",10),r(),f(20,Mt,4,3,"div",11),a(21,"div",11),f(22,ht,3,4,"button",12)(23,wt,4,4,"button",12)(24,At,3,3,"p",13),r()()()()()()()()),i&2&&(e(7),l(" ",c(8,23,"REGISTER")," "),e(3),l(" ",c(11,25,"PAGES.REGISTER.REGISTER_ON")," "),e(3),d("formGroup",n.registerForm),e(2),d("id","email-input")("icon","fa-solid fa-envelope")("label","EMAIL")("type","email")("formControlName","email")("error",n.emailError),e(2),d("id","password-input")("icon","fa-solid fa-lock")("label","PASSWORD")("type","password")("formControlName","password")("error",n.passwordError),e(2),d("id","repeated-password-input")("icon","fa-solid fa-lock")("label","REPEAT_PASSWORD")("type","password")("formControlName","repeatedPassword")("error",n.repeatedPasswordError),e(),C(n.errors&&n.errors.type==="ACCOUNT_CREATION"?20:-1),e(2),C(T(27,It).includes(n.status)?22:n.status==="IN_PROGRESS"?23:24))},dependencies:[I,b,k,G,N,y,D,L,B],styles:["[_nghost-%COMP%]{flex:1;background-repeat:no-repeat;background-size:cover;background-image:url(/assets/images/houses.jpeg)}.container[_ngcontent-%COMP%]   .col-12.col-sm-8.col-md-6[_ngcontent-%COMP%]{margin:auto}.container[_ngcontent-%COMP%]   .col-12.col-sm-8.col-md-6[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin-top:100px;margin-bottom:100px}.container[_ngcontent-%COMP%]   .col-12.col-sm-8.col-md-6[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .col-12.col-sm-8.col-md-6[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%]{text-align:center}"]})}return t})();function Tt(t,u){t&1&&(m(0,"span",9),a(1,"p"),s(2),p(3,"translate"),r()),t&2&&(e(2),J(c(3,1,"PAGES.REGISTER_CONFIRM.CONFIRMING")))}function Nt(t,u){t&1&&(a(0,"p",7),s(1),p(2,"translate"),r()),t&2&&(e(),l(" ",c(2,1,"PAGES.REGISTER_CONFIRM.SUCCESS")," "))}function yt(t,u){t&1&&(a(0,"p",8),s(1),p(2,"translate"),r()),t&2&&(e(),l(" ",c(2,1,"PAGES.REGISTER_CONFIRM.ERROR")," "))}var _t=(()=>{class t{store;activatedRoute;platformService;status$;status;constructor(o,i,n){this.store=o,this.activatedRoute=i,this.platformService=n,this.status$=this.store.select(st),this.status$.subscribe(xt=>this.status=xt)}ngOnInit(){if(this.platformService.isPlatformBrowser()){let{confirmationToken:o}=this.activatedRoute.snapshot.params;this.store.dispatch(Z({confirmationToken:o}))}}static \u0275fac=function(i){return new(i||t)(E(v),E(U),E(it))};static \u0275cmp=P({type:t,selectors:[["app-register-confirm"]],standalone:!0,features:[O],decls:13,vars:4,consts:[["id","main-container"],[1,"container"],[1,"row"],[1,"col-12","col-sm-8","col-md-6"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"text-success"],[1,"text-danger"],[1,"fa-solid","fa-spinner","fa-spin","fa-2x"]],template:function(i,n){i&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h5",6),s(7),p(8,"translate"),r(),m(9,"hr"),f(10,Tt,4,3)(11,Nt,3,3,"p",7)(12,yt,3,3,"p",8),r()()()()()()),i&2&&(e(7),l(" ",c(8,2,"PAGES.REGISTER_CONFIRM.TITLE")," "),e(3),C(n.status==="IN_PROGRESS"?10:n.status==="SUCCESS"?11:n.status==="ERROR"?12:-1))},dependencies:[I,b],styles:["[_nghost-%COMP%]{flex:1;background-repeat:no-repeat;background-size:cover;background-image:url(/assets/images/houses.jpeg)}.container[_ngcontent-%COMP%]   .col-12.col-sm-8.col-md-6[_ngcontent-%COMP%]{margin:auto}.container[_ngcontent-%COMP%]   .col-12.col-sm-8.col-md-6[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin-top:100px;margin-bottom:100px}.container[_ngcontent-%COMP%]   .col-12.col-sm-8.col-md-6[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{text-align:center}"]})}return t})();var Ft=()=>["PENDING","ERROR","SUCCESS"];function Gt(t,u){if(t&1&&(a(0,"div",13)(1,"p",15),s(2),p(3,"translate"),r()()),t&2){let o=g();e(2),l(" ",c(3,1,"PAGES.LOGIN.ERRORS."+o.errors.type)," ")}}function Dt(t,u){if(t&1){let o=w();a(0,"button",16),A("click",function(){M(o);let n=g();return h(n.onLoginClick())}),s(1),p(2,"translate"),r()}if(t&2){let o=g();d("disabled",o.loginForm.valid===!1),e(),l(" ",c(2,2,"LOGIN")," ")}}function Lt(t,u){t&1&&(a(0,"button",14),m(1,"span",17),s(2),p(3,"translate"),r()),t&2&&(d("disabled",!0),e(2),l(" ",c(3,2,"PAGES.LOGIN.LOGIN")," "))}var Rt=(()=>{class t{store;status$;errors$;status;errors;loginForm;constructor(o){this.store=o,this.status$=this.store.select(ct),this.errors$=this.store.select(lt),this.status$.subscribe(i=>this.status=i),this.errors$.subscribe(i=>this.errors=i),this.loginForm=new F({email:new _("",[S.required]),password:new _("",[S.required])})}get emailError(){return R.getInputError("ERRORS.EMAIL.",this.errors,["INVALID_EMAIL"])}get passwordError(){return R.getInputError("ERRORS.PASSWORD.",this.errors,["PASSWORD_MIN_LENGTH"])}onLoginClick(){let{email:o,password:i}=this.loginForm.value;this.store.dispatch(tt({email:o,password:i}))}static \u0275fac=function(i){return new(i||t)(E(v))};static \u0275cmp=P({type:t,selectors:[["app-login"]],standalone:!0,features:[O],decls:26,vars:25,consts:[["id","main-container"],[1,"container"],[1,"row"],[1,"col-12","col-sm-8","col-md-6"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle","mb-2","text-body-secondary"],[3,"formGroup"],[1,"mb-3"],[3,"id","icon","label","type","formControlName","error"],[1,"text-end","mb-3"],["routerLink","/auth/password/forgotten"],[1,"text-center"],[1,"btn","btn-primary",3,"disabled"],[1,"text-danger"],[1,"btn","btn-primary",3,"click","disabled"],[1,"fa-solid","fa-spinner","fa-spin"]],template:function(i,n){i&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h5",6),s(7),p(8,"translate"),r(),a(9,"h6",7),s(10),p(11,"translate"),r(),m(12,"hr"),a(13,"form",8)(14,"div",9),m(15,"app-input",10),r(),a(16,"div",9),m(17,"app-input",10),r(),a(18,"div",11)(19,"a",12),s(20),p(21,"translate"),r()(),f(22,Gt,4,3,"div",13),a(23,"div",13),f(24,Dt,3,4,"button",14)(25,Lt,4,4,"button",14),r()()()()()()()()),i&2&&(e(7),l(" ",c(8,18,"LOGIN")," "),e(3),l(" ",c(11,20,"PAGES.LOGIN.LOGIN_ON")," "),e(3),d("formGroup",n.loginForm),e(2),d("id","email-input")("icon","fa-solid fa-envelope")("label","EMAIL")("type","email")("formControlName","email")("error",n.emailError),e(2),d("id","password-input")("icon","fa-solid fa-lock")("label","PASSWORD")("type","password")("formControlName","password")("error",n.passwordError),e(3),l(" ",c(21,22,"PAGES.LOGIN.PASSWORD_FORGOTTEN")," "),e(2),C(n.errors&&n.errors.type!=="INVALID_PARAMETERS"?22:-1),e(2),C(T(24,Ft).includes(n.status)?24:n.status==="IN_PROGRESS"?25:-1))},dependencies:[I,b,k,G,N,y,D,L,V,Q,B],styles:["[_nghost-%COMP%]{flex:1;background-repeat:no-repeat;background-size:cover;background-image:url(/assets/images/houses.jpeg)}.container[_ngcontent-%COMP%]   .col-12.col-sm-8.col-md-6[_ngcontent-%COMP%]{margin:auto}.container[_ngcontent-%COMP%]   .col-12.col-sm-8.col-md-6[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin-top:100px;margin-bottom:100px}.container[_ngcontent-%COMP%]   .col-12.col-sm-8.col-md-6[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .col-12.col-sm-8.col-md-6[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%]{text-align:center}"]})}return t})();var kt=()=>["PENDING","ERROR"];function Bt(t,u){if(t&1&&(a(0,"div",11)(1,"div",15),s(2),p(3,"translate"),r()()),t&2){let o=g();e(2),l(" ",c(3,1,"PAGES.PASSWORD_FORGOTTEN.ERRORS."+o.errors.type)," ")}}function Wt(t,u){if(t&1){let o=w();a(0,"button",16),A("click",function(){M(o);let n=g();return h(n.onSubmitClick())}),s(1),p(2,"translate"),r()}if(t&2){let o=g();d("disabled",o.passwordForgottenForm.valid===!1),e(),l(" ",c(2,2,"SUBMIT")," ")}}function Vt(t,u){t&1&&(a(0,"button",13),m(1,"span",17),s(2),p(3,"translate"),r()),t&2&&(d("disabled",!0),e(2),l(" ",c(3,2,"SUBMITTING")," "))}function $t(t,u){t&1&&(a(0,"p",14),s(1),p(2,"translate"),r()),t&2&&(e(),l(" ",c(2,1,"PAGES.PASSWORD_FORGOTTEN.SUCCESS")," "))}var Pt=(()=>{class t{store;status$;errors$;status;errors;passwordForgottenForm;constructor(o){this.store=o,this.status$=this.store.select(mt),this.errors$=this.store.select(ut),this.status$.subscribe(i=>this.status=i),this.errors$.subscribe(i=>this.errors=i),this.passwordForgottenForm=new F({email:new _("",[S.required])})}get emailError(){return R.getInputError("ERRORS.EMAIL.",this.errors,["INVALID_EMAIL","EMAIL_NOT_FOUND"])}onSubmitClick(){let{email:o}=this.passwordForgottenForm.value;this.store.dispatch(et({email:o}))}static \u0275fac=function(i){return new(i||t)(E(v))};static \u0275cmp=P({type:t,selectors:[["app-password-forgotten"]],standalone:!0,features:[O],decls:24,vars:19,consts:[["id","main-container"],[1,"container"],[1,"row"],[1,"col-12","col-sm-8","col-md-6"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle","mb-2","text-body-secondary"],[3,"formGroup"],[1,"mb-3"],[3,"id","icon","label","type","formControlName","error"],[1,"text-center","mb-3"],[1,"text-center"],[1,"btn","btn-primary",3,"disabled"],[1,"text-success"],[1,"text-danger"],[1,"btn","btn-primary",3,"click","disabled"],[1,"fa-solid","fa-spinner","fa-spin"]],template:function(i,n){i&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h5",6),s(7),p(8,"translate"),r(),a(9,"h6",7),s(10),p(11,"translate"),r(),m(12,"hr"),a(13,"p"),s(14),p(15,"translate"),r(),a(16,"form",8)(17,"div",9),m(18,"app-input",10),r(),f(19,Bt,4,3,"div",11),a(20,"div",12),f(21,Wt,3,4,"button",13)(22,Vt,4,4,"button",13)(23,$t,3,3,"p",14),r()()()()()()()()),i&2&&(e(7),l(" ",c(8,12,"PAGES.PASSWORD_FORGOTTEN.TITLE")," "),e(3),l(" ",c(11,14,"PAGES.PASSWORD_FORGOTTEN.RECOVER")," "),e(4),l(" ",c(15,16,"PAGES.PASSWORD_FORGOTTEN.ENTER_EMAIL")," "),e(2),d("formGroup",n.passwordForgottenForm),e(2),d("id","email-input")("icon","fa-solid fa-envelope")("label","EMAIL")("type","email")("formControlName","email")("error",n.emailError),e(),C(n.errors&&n.errors.type!=="INVALID_PARAMETERS"?19:-1),e(2),C(T(18,kt).includes(n.status)?21:n.status==="IN_PROGRESS"?22:23))},dependencies:[I,b,k,G,N,y,D,L,B],styles:["[_nghost-%COMP%]{flex:1;background-repeat:no-repeat;background-size:cover;background-image:url(/assets/images/houses.jpeg)}.container[_ngcontent-%COMP%]   .col-12.col-sm-8.col-md-6[_ngcontent-%COMP%]{margin:auto}.container[_ngcontent-%COMP%]   .col-12.col-sm-8.col-md-6[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin-top:100px;margin-bottom:100px}.container[_ngcontent-%COMP%]   .col-12.col-sm-8.col-md-6[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .col-12.col-sm-8.col-md-6[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%]{text-align:center}"]})}return t})();var jt=()=>["PENDING","ERROR"];function Ut(t,u){if(t&1&&(a(0,"div",11)(1,"p",14),s(2),p(3,"translate"),r()()),t&2){let o=g();e(2),l(" ",c(3,1,"PAGES.RESET_PASSWORD.ERRORS."+o.errors.type)," ")}}function qt(t,u){if(t&1){let o=w();a(0,"button",15),A("click",function(){M(o);let n=g();return h(n.onModifyClick())}),s(1),p(2,"translate"),r()}if(t&2){let o=g();d("disabled",o.resetPasswordForm.valid===!1),e(),l(" ",c(2,2,"MODIFY")," ")}}function zt(t,u){t&1&&(a(0,"button",12),m(1,"span",16),s(2),p(3,"translate"),r()),t&2&&(d("disabled",!0),e(2),l(" ",c(3,2,"MODIFYING")," "))}function Ht(t,u){t&1&&(a(0,"p",13),s(1),p(2,"translate"),r()),t&2&&(e(),l(" ",c(2,1,"PAGES.RESET_PASSWORD.SUCCESS")," "))}var Ot=(()=>{class t{store;activatedRoute;status$;errors$;status;errors;resetPasswordForm;constructor(o,i){this.store=o,this.activatedRoute=i,this.status$=this.store.select(ft),this.errors$=this.store.select(Ct),this.status$.subscribe(n=>this.status=n),this.errors$.subscribe(n=>this.errors=n),this.resetPasswordForm=new F({password:new _("",[S.required]),repeatedPassword:new _("",[S.required])})}get passwordError(){return R.getInputError("ERRORS.PASSWORD.",this.errors,["PASSWORD_MIN_LENGTH"])}get repeatedPasswordError(){return R.getInputError("ERRORS.REPEATED_PASSWORD.",this.errors,["REPEATED_PASSWORD_NO_MATCH"])}onModifyClick(){let{resetPasswordToken:o}=this.activatedRoute.snapshot.params,{password:i,repeatedPassword:n}=this.resetPasswordForm.value;this.store.dispatch(ot({password:i,repeatedPassword:n,resetPasswordToken:o}))}static \u0275fac=function(i){return new(i||t)(E(v),E(U))};static \u0275cmp=P({type:t,selectors:[["app-reset-password"]],standalone:!0,features:[O],decls:26,vars:25,consts:[["id","main-container"],[1,"container"],[1,"row"],[1,"col-12","col-sm-8","col-md-6"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle","mb-2","text-body-secondary"],[3,"formGroup"],[1,"mb-3"],[3,"id","icon","label","type","formControlName","error"],[1,"text-center"],[1,"btn","btn-primary",3,"disabled"],[1,"text-success"],[1,"text-danger"],[1,"btn","btn-primary",3,"click","disabled"],[1,"fa-solid","fa-spinner","fa-spin"]],template:function(i,n){i&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h5",6),s(7),p(8,"translate"),r(),a(9,"h6",7),s(10),p(11,"translate"),r(),m(12,"hr"),a(13,"p"),s(14),p(15,"translate"),r(),a(16,"form",8)(17,"div",9),m(18,"app-input",10),r(),a(19,"div",9),m(20,"app-input",10),r(),f(21,Ut,4,3,"div",11),a(22,"div",11),f(23,qt,3,4,"button",12)(24,zt,4,4,"button",12)(25,Ht,3,3,"p",13),r()()()()()()()()),i&2&&(e(7),l(" ",c(8,18,"PAGES.RESET_PASSWORD.TITLE")," "),e(3),l(" ",c(11,20,"PAGES.RESET_PASSWORD.RESET")," "),e(4),l(" ",c(15,22,"PAGES.RESET_PASSWORD.ENTER_PASSWORD")," "),e(2),d("formGroup",n.resetPasswordForm),e(2),d("id","password-input")("icon","fa-solid fa-lock")("label","PASSWORD")("type","password")("formControlName","password")("error",n.passwordError),e(2),d("id","repeated-password-input")("icon","fa-solid fa-lock")("label","REPEAT_PASSWORD")("type","password")("formControlName","repeatedPassword")("error",n.repeatedPasswordError),e(),C(n.errors&&n.errors.type!=="INVALID_PARAMETERS"?21:-1),e(2),C(T(24,jt).includes(n.status)?23:n.status==="IN_PROGRESS"?24:25))},dependencies:[I,b,k,G,N,y,D,L,B],styles:["[_nghost-%COMP%]{flex:1;background-repeat:no-repeat;background-size:cover;background-image:url(/assets/images/houses.jpeg)}.container[_ngcontent-%COMP%]   .col-12.col-sm-8.col-md-6[_ngcontent-%COMP%]{margin:auto}.container[_ngcontent-%COMP%]   .col-12.col-sm-8.col-md-6[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin-top:100px;margin-bottom:100px}.container[_ngcontent-%COMP%]   .col-12.col-sm-8.col-md-6[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .col-12.col-sm-8.col-md-6[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%]{text-align:center}"]})}return t})();var Yt=[{path:"register",children:[{path:"confirm/:confirmationToken",component:_t,data:{title:"PAGES.REGISTER_CONFIRM.TITLE"}},{path:"**",component:Et,data:{title:"REGISTER"}}]},{path:"login",component:Rt,data:{title:"LOGIN"}},{path:"password",children:[{path:"forgotten",component:Pt,data:{title:"PAGES.PASSWORD_FORGOTTEN.TITLE"}},{path:"reset/:resetPasswordToken",component:Ot,data:{title:"PAGES.RESET_PASSWORD.TITLE"}},{path:"**",redirectTo:"/"}]}],vt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=$({imports:[V.forChild(Yt),V]})}return t})();var Ge=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=$({imports:[K,vt]})}return t})();export{Ge as AuthModule};
