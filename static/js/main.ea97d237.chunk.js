(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(4),r=n.n(c),o=(n(11),n(2)),i=n(0);var u=function(){return Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("div",{className:"header__logo"})})},l=n(5),p=n(6),d=new(function(){function e(t){Object(l.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(p.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch(this._url+"/users/me",{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch(this._url+"/cards",{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfoApi",value:function(e){return fetch(this._url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"addUserCard",value:function(e){return fetch(this._url+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch(this._url+"/cards/likes/".concat(e),{method:"".concat(t?"PUT":"DELETE"),headers:this._headers}).then(this._checkResponse)}},{key:"delete",value:function(e){return fetch(this._url+"/cards/".concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"handleUserAvatar",value:function(e){return fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.userAvatar})}).then(this._checkResponse)}},{key:"getAllNeededData",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-23",headers:{authorization:"1a04582c-c338-4c76-b689-0417388dddf2","Content-Type":"application/json"}}),_=s.a.createContext();var h=function(e){var t=s.a.useContext(_),n=e.card.owner._id===t._id,a=e.card.likes.some((function(e){return e._id===t._id})),c="elements__remove-button ".concat(n?"":"elements__remove-button_state_hidden"),r="elements__like-button ".concat(a?"elements__like-button_active":"");return Object(i.jsxs)("li",{className:"elements__card",children:[Object(i.jsx)("img",{src:e.card.link,className:"elements__image",alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(i.jsxs)("div",{className:"elements__title-wrapper",children:[Object(i.jsx)("h2",{className:"elements__title",children:e.card.name}),Object(i.jsxs)("div",{className:"elements__like-wrapper",children:[Object(i.jsx)("button",{type:"button",className:r,onClick:function(){e.onCardLike(e.card)}}),Object(i.jsx)("span",{className:"elements__like-count",children:e.card.likes.length})]})]}),Object(i.jsx)("button",{className:c,onClick:function(){e.onCardDelete(e.card)}})]})};var m=function(e){var t=e.onEditAvatar,n=e.onEditProfile,a=e.onAddPlace,c=e.onCardClick,r=s.a.useState([]),u=Object(o.a)(r,2),l=u[0],p=u[1],m=s.a.useContext(_);function j(e){var t=e.likes.some((function(e){return e._id===m._id}));d.changeLikeCardStatus(e._id,!t).then((function(t){p((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))}function b(e){d.delete(e._id).then((function(){p(l.filter((function(t){return t!==e})))})).catch((function(e){return console.log(e)}))}return s.a.useEffect((function(){d.getInitialCards().then((function(e){p(e)})).catch((function(e){return console.log(e)}))}),[]),Object(i.jsxs)("main",{className:"main",children:[Object(i.jsxs)("section",{className:"profile",children:[Object(i.jsxs)("div",{className:"profile__avatar-wrapper",children:[Object(i.jsx)("img",{src:m.avatar,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__avatar"}),Object(i.jsx)("button",{type:"button",className:"profile__avatar-edit-button",onClick:t})]}),Object(i.jsxs)("div",{className:"profile__info",children:[Object(i.jsxs)("div",{className:"profile__container",children:[Object(i.jsx)("h1",{className:"profile__name",children:m.name}),Object(i.jsx)("button",{type:"button",className:"profile__edit-button",onClick:n})]}),Object(i.jsx)("h2",{className:"profile__about",children:m.about})]}),Object(i.jsx)("button",{type:"button",className:"profile__add-button",onClick:a})]}),Object(i.jsx)("section",{className:"elements-container",children:Object(i.jsx)("ul",{className:"elements",children:l.map((function(e){return Object(i.jsx)(h,{card:e,onCardClick:c,onCardLike:j,onCardDelete:b},e._id)}))})})]})};var j=function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("p",{className:"footer__copyrights",children:"\xa9 2021 Mesto Russia"})})};var b=function(e){return Object(i.jsx)("div",{className:"popup ".concat(e.isOpen?"popup_opened":""),children:Object(i.jsxs)("div",{className:"popup__container popup__overlay",children:[Object(i.jsxs)("form",{className:"popup__form",name:e.name,noValidate:!0,onSubmit:e.onSubmit,children:[Object(i.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(i.jsx)("button",{type:"submit",className:"popup__button",children:e.buttonText})]}),Object(i.jsx)("button",{type:"button",className:"popup__close-button",onClick:e.onClose})]})})};var f=function(e){return Object(i.jsx)("div",{className:"popup popup_zoom-image ".concat(e.card?"popup_opened":""),children:Object(i.jsxs)("div",{className:"popup__figure-container popup__overlay",children:[Object(i.jsxs)("figure",{className:"popup__figure",children:[Object(i.jsx)("img",{src:e.card?e.card.link:"#",className:"popup__image",alt:e.card?e.card.name:""}),Object(i.jsx)("figcaption",{className:"popup__caption",children:e.card?e.card.name:""})]}),Object(i.jsx)("button",{type:"button",className:"popup__close-button popup__close-button_zoom-image",onClick:e.onClose})]})})};var O=function(e){var t=s.a.useState(""),n=Object(o.a)(t,2),a=n[0],c=n[1],r=s.a.useState(""),u=Object(o.a)(r,2),l=u[0],p=u[1],d=s.a.useContext(_);return s.a.useEffect((function(){c(d.name),p(d.about)}),[d]),Object(i.jsxs)(b,{name:"profile-edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:a,about:l})},children:[Object(i.jsx)("input",{name:"userName",type:"text",className:"popup__input popup__input_data_name",id:"userName-input",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u044f-\\s]+$",required:!0,value:a,onChange:function(e){c(e.target.value)}}),Object(i.jsx)("span",{className:"popup__input-error userName-input-error"}),Object(i.jsx)("input",{name:"userAbout",type:"text",className:"popup__input popup__input_data_about",id:"userAbout-input",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",minLength:"2",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u044f-\\s]+$",maxLength:"200",required:!0,value:l,onChange:function(e){p(e.target.value)}}),Object(i.jsx)("span",{className:"popup__input-error userAbout-input-error"})]})};var x=function(){var e=s.a.useState(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],c=s.a.useState(!1),r=Object(o.a)(c,2),l=r[0],p=r[1],h=s.a.useState(!1),x=Object(o.a)(h,2),v=x[0],N=x[1],g=s.a.useState(null),k=Object(o.a)(g,2),C=k[0],y=k[1],A=s.a.useState({}),S=Object(o.a)(A,2),E=S[0],T=S[1];function L(){N(!1),a(!1),p(!1),y(null)}return s.a.useEffect((function(){d.getUserInfo().then((function(e){T(e)})).catch((function(e){return console.log(e)}))}),[]),Object(i.jsx)(_.Provider,{value:E,children:Object(i.jsxs)("div",{className:"page",children:[Object(i.jsx)(u,{}),Object(i.jsx)(m,{onEditAvatar:function(){N(!0)},onEditProfile:function(){a(!0)},onAddPlace:function(){p(!0)},onCardClick:function(e){y(e)}}),Object(i.jsx)(j,{}),Object(i.jsx)(O,{isOpen:n,onClose:L,onUpdateUser:function(e){d.setUserInfoApi(e).then((function(e){console.log(e),T(e),L()})).catch((function(e){return console.log(e)}))}}),Object(i.jsxs)(b,{name:"card-add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:l,onClose:L,children:[Object(i.jsx)("input",{name:"name",type:"text",className:"popup__input popup__input_place_name",id:"placeName-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u044f-\\s]+$",required:!0}),Object(i.jsx)("span",{className:"popup__input-error placeName-input-error"}),Object(i.jsx)("input",{name:"link",type:"url",className:"popup__input popup__input_place_url",id:"placeUrl-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(i.jsx)("span",{className:"popup__input-error placeUrl-input-error"})]}),Object(i.jsxs)(b,{name:"avatar-edit",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:v,onClose:L,children:[Object(i.jsx)("input",{name:"userAvatar",type:"url",className:"popup__input popup__input_data_about",id:"userAvatar-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(i.jsx)("span",{className:"popup__input-error userAvatar-input-error"})]}),Object(i.jsx)(b,{name:"confirm-delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430"}),Object(i.jsx)(f,{card:C,onClose:L})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),v()}},[[13,1,2]]]);
//# sourceMappingURL=main.ea97d237.chunk.js.map