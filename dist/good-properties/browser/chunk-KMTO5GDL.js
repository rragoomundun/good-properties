import{a as I}from"./chunk-ZYWXGTTX.js";import{Hb as P,M as h,P as u,Q as i,Qb as s,Rb as a,i as p,j as f,u as c,xb as m}from"./chunk-ECAXMYT4.js";var g=(()=>{class e{http;API_PREFIX;constructor(t){this.http=t,this.API_PREFIX="auth"}register(t,r,o){let n={email:t,password:r,repeatedPassword:o};return this.http.post(`${this.API_PREFIX}/register`,n)}registerConfirm(t){return this.http.post(`${this.API_PREFIX}/register/confirm/${t}`,{},{withCredentials:!0})}login(t,r){let o={email:t,password:r};return this.http.post(`${this.API_PREFIX}/login`,o,{withCredentials:!0})}logout(){return this.http.get(`${this.API_PREFIX}/logout`,{withCredentials:!0})}passwordForgotten(t){let r={email:t};return this.http.post(`${this.API_PREFIX}/password/forgot`,r)}resetPasword(t,r,o){let n={password:t,repeatedPassword:r};return this.http.post(`${this.API_PREFIX}/password/reset/${o}`,n,{withCredentials:!0})}authorized(){return this.http.get(`${this.API_PREFIX}/authorized`,{withCredentials:!0})}static \u0275fac=function(r){return new(r||e)(u(m))};static \u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var v=(e,l)=>{let t=i(P),r=i(I);return i(g).authorized().pipe(f(()=>!0),c(()=>(r.isPlatformBrowser()&&t.navigate(["/"]),p(!1))))};var _=s("[Offer Page] Get Offer",a()),x=s("[Offer Page] Get Offer Success",a()),j=s("[Offer Page] Get Offer Failed",a());export{g as a,v as b,_ as c,x as d,j as e};
