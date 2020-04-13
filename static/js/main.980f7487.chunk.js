(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,a){e.exports=a(38)},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),o=a.n(l),s=a(17),i=a(18),c=a(29),m=a(28),u=a(43),h=a(44),d=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={station:1,time:"",username:"",password:"",server:"",auth:!1,error:""},e.handleClick=function(t){e.setState({station:t.target.innerHTML})},e.handleAuthChange=function(){e.setState({auth:!e.state.auth})},e.handleTimeChange=function(t){e.setState({time:t.target.value})},e.handleUsernameChange=function(t){e.setState({username:t.target.value})},e.handlePasswordChange=function(t){e.setState({password:t.target.value})},e.handleServerChange=function(t){e.setState({server:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a={method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e.state.username,password:e.state.password,launchtime:e.state.time,launchdevice:e.state.station,authorized:e.state.auth})};fetch("http://".concat(e.state.server,":3000/launch"),a).then((function(e){return e.json()})).then((function(t){e.setState({username:"",password:"",auth:!1,time:"",station:1}),"failed"===t.launched&&e.setState({error:t.error})})).catch((function(t){e.setState({error:"".concat(e.state.server," nem tal\xe1lhat\xf3")})}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 col-sm-12"}),r.a.createElement("div",{className:"col-md-6 col-sm-12 d-flex flex-column",style:{alignItems:"center"}},r.a.createElement("h1",{className:"mb-5 text-danger"},"Kil\xf6v\u0151 \xe1llom\xe1s"),""!==this.state.error?r.a.createElement("h1",{className:"text-warning"},this.state.error):"",r.a.createElement(u.a,null,r.a.createElement(u.a.Toggle,{variant:"danger",id:"dropdown-basic"},"Kil\xf6v\u0151 \xe1llom\xe1s"),r.a.createElement(u.a.Menu,null,r.a.createElement(u.a.Item,{eventKey:"1",active:1==this.state.station,onClick:this.handleClick,value:"1"},"1"),r.a.createElement(u.a.Divider,null),r.a.createElement(u.a.Item,{eventKey:"2",active:2==this.state.station,onClick:this.handleClick,value:"2"},"2"),r.a.createElement(u.a.Divider,null),r.a.createElement(u.a.Item,{eventKey:"3",active:3==this.state.station,onClick:this.handleClick,value:"3"},"3"),r.a.createElement(u.a.Divider,null),r.a.createElement(u.a.Item,{eventKey:"4",active:4==this.state.station,onClick:this.handleClick,value:"4"},"4"))),r.a.createElement(h.a,{className:"mt-4"},r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,r.a.createElement("h2",null,"Felhaszn\xe1l\xf3i azonos\xedt\xe1s")),r.a.createElement(h.a.Text,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"server",id:"server",required:!0,autoComplete:"off",placeholder:"Szerver",value:this.state.server,onChange:this.handleServerChange,className:"form-control bg-dark text-white mb-1"}),r.a.createElement("input",{type:"text",name:"time",id:"time",required:!0,autoComplete:"off",placeholder:"Id\u0151",value:this.state.time,onChange:this.handleTimeChange,className:"form-control bg-light mb-1"}),r.a.createElement("input",{type:"text",name:"username",id:"username",required:!0,autoComplete:"off",placeholder:"Felhaszn\xe1l\xf3n\xe9v",value:this.state.username,onChange:this.handleUsernameChange,className:"form-control bg-light mb-1"}),r.a.createElement("input",{type:"password",name:"password",id:"password",required:!0,autoComplete:"off",placeholder:"Jelsz\xf3",value:this.state.password,onChange:this.handlePasswordChange,className:"form-control bg-light mb-1"}),r.a.createElement("label",{htmlFor:"auth",className:"mr-2"},"Enged\xe9lyez\xe9s"),r.a.createElement("div",{class:"custom-control custom-switch"},r.a.createElement("input",{type:"checkbox",class:"custom-control-input",id:"customSwitch1",checked:this.state.auth,onClick:this.handleAuthChange,name:"auth"}),r.a.createElement("label",{class:"custom-control-label",for:"customSwitch1"},"Toggle this switch element")),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Kil\xf6v\xe9s",className:"btn btn-outline-danger"})))))),r.a.createElement("div",{className:"col-md-3 col-sm-12"})))))}}]),a}(n.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(d,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");v?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(t,e)}))}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.980f7487.chunk.js.map