webpackJsonp([8],{KFVb:function(e,t){!function(e){var t,r;void 0===e.btoa&&(e.btoa=(t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),function(e){var r,n=void 0,a=void 0,o=void 0,i=void 0,s=void 0,d=void 0;for(a=o=0,i=e.length,s=(i-=r=i%3)/3<<2,r>0&&(s+=4),n=new Array(s);a<i;)d=e.charCodeAt(a++)<<16|e.charCodeAt(a++)<<8|e.charCodeAt(a++),n[o++]=t[d>>18]+t[d>>12&63]+t[d>>6&63]+t[63&d];return 1==r?(d=e.charCodeAt(a++),n[o++]=t[d>>2]+t[(3&d)<<4]+"=="):2==r&&(d=e.charCodeAt(a++)<<8|e.charCodeAt(a++),n[o++]=t[d>>10]+t[d>>4&63]+t[(15&d)<<2]+"="),n.join("")})),void 0===e.atob&&(e.atob=(r=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1],function(e){var t,n=void 0,a=void 0,o=void 0,i=void 0,s=void 0,d=void 0,c=void 0,h=void 0,l=void 0;if((t=e.length)%4!=0)return"";if(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(e))return"";for(h=t,(c="="==e.charAt(t-2)?1:"="==e.charAt(t-1)?2:0)>0&&(h-=4),h=3*(h>>2)+c,l=new Array(h),s=d=0;s<t&&-1!=(n=r[e.charCodeAt(s++)])&&-1!=(a=r[e.charCodeAt(s++)])&&(l[d++]=String.fromCharCode(n<<2|(48&a)>>4),-1!=(o=r[e.charCodeAt(s++)]))&&(l[d++]=String.fromCharCode((15&a)<<4|(60&o)>>2),-1!=(i=r[e.charCodeAt(s++)]));)l[d++]=String.fromCharCode((3&o)<<6|i);return l.join("")}));var n=2654435769;function a(e,t){var r=e.length,n=r<<2;if(t){var a=e[r-1];if(a<(n-=4)-3||a>n)return null;n=a}for(var o=0;o<r;o++)e[o]=String.fromCharCode(255&e[o],e[o]>>>8&255,e[o]>>>16&255,e[o]>>>24&255);var i=e.join("");return t?i.substring(0,n):i}function o(e,t){var r=e.length,n=r>>2;0!=(3&r)&&++n;var a=void 0;t?(a=new Array(n+1))[n]=r:a=new Array(n);for(var o=0;o<r;++o)a[o>>2]|=e.charCodeAt(o)<<((3&o)<<3);return a}function i(e){return 4294967295&e}function s(e,t,r,n,a,o){return(r>>>5^t<<2)+(t>>>3^r<<4)^(e^t)+(o[3&n^a]^r)}function d(e){return e.length<4&&(e.length=4),e}function c(e){if(/^[\x00-\x7f]*$/.test(e))return e;for(var t=[],r=e.length,n=0,a=0;n<r;++n,++a){var o=e.charCodeAt(n);if(o<128)t[a]=e.charAt(n);else if(o<2048)t[a]=String.fromCharCode(192|o>>6,128|63&o);else{if(!(o<55296||o>57343)){if(n+1<r){var i=e.charCodeAt(n+1);if(o<56320&&i>=56320&&i<=57343){var s=65536+((1023&o)<<10|1023&i);t[a]=String.fromCharCode(240|s>>18&63,128|s>>12&63,128|s>>6&63,128|63&s),++n;continue}}throw new Error("Malformed string")}t[a]=String.fromCharCode(224|o>>12,128|o>>6&63,128|63&o)}}return t.join("")}function h(e,t){return(void 0===t||null===t||t<0)&&(t=e.length),0===t?"":/^[\x00-\x7f]*$/.test(e)||!/^[\x00-\xff]*$/.test(e)?t===e.length?e:e.substr(0,t):t<65535?function(e,t){for(var r=new Array(t),n=0,a=0,o=e.length;n<t&&a<o;n++){var i=e.charCodeAt(a++);switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:r[n]=i;break;case 12:case 13:if(!(a<o))throw new Error("Unfinished UTF-8 octet sequence");r[n]=(31&i)<<6|63&e.charCodeAt(a++);break;case 14:if(!(a+1<o))throw new Error("Unfinished UTF-8 octet sequence");r[n]=(15&i)<<12|(63&e.charCodeAt(a++))<<6|63&e.charCodeAt(a++);break;case 15:if(!(a+2<o))throw new Error("Unfinished UTF-8 octet sequence");var s=((7&i)<<18|(63&e.charCodeAt(a++))<<12|(63&e.charCodeAt(a++))<<6|63&e.charCodeAt(a++))-65536;if(!(s>=0&&s<=1048575))throw new Error("Character outside valid Unicode range: 0x"+s.toString(16));r[n++]=s>>10&1023|55296,r[n]=1023&s|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+i.toString(16))}}return n<t&&(r.length=n),String.fromCharCode.apply(String,r)}(e,t):function(e,t){for(var r=[],n=new Array(32768),a=0,o=0,i=e.length;a<t&&o<i;a++){var s=e.charCodeAt(o++);switch(s>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:n[a]=s;break;case 12:case 13:if(!(o<i))throw new Error("Unfinished UTF-8 octet sequence");n[a]=(31&s)<<6|63&e.charCodeAt(o++);break;case 14:if(!(o+1<i))throw new Error("Unfinished UTF-8 octet sequence");n[a]=(15&s)<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++);break;case 15:if(!(o+2<i))throw new Error("Unfinished UTF-8 octet sequence");var d=((7&s)<<18|(63&e.charCodeAt(o++))<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++))-65536;if(!(d>=0&&d<=1048575))throw new Error("Character outside valid Unicode range: 0x"+d.toString(16));n[a++]=d>>10&1023|55296,n[a]=1023&d|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+s.toString(16))}if(a>=32766){var c=a+1;n.length=c,r[r.length]=String.fromCharCode.apply(String,n),t-=c,a=-1}}return a>0&&(n.length=a,r[r.length]=String.fromCharCode.apply(String,n)),r.join("")}(e,t)}function l(e,t){return void 0===e||null===e||0===e.length?e:(e=c(e),t=c(t),a(function(e,t){var r=e.length,a=r-1,o=void 0,d=void 0,c=void 0,h=void 0,l=void 0,u=void 0;for(d=e[a],c=0,u=0|Math.floor(6+52/r);u>0;--u){for(h=(c=i(c+n))>>>2&3,l=0;l<a;++l)o=e[l+1],d=e[l]=i(e[l]+s(c,o,d,l,h,t));o=e[0],d=e[a]=i(e[a]+s(c,o,d,a,h,t))}return e}(o(e,!0),d(o(t,!1))),!1))}function u(e,t){return void 0===e||null===e||0===e.length?e:(t=c(t),h(a(function(e,t){var r=e.length,a=r-1,o=void 0,d=void 0,c=void 0,h=void 0,l=void 0;for(o=e[0],c=i(Math.floor(6+52/r)*n);0!==c;c=i(c-n)){for(h=c>>>2&3,l=a;l>0;--l)d=e[l-1],o=e[l]=i(e[l]-s(c,o,d,l,h,t));d=e[a],o=e[0]=i(e[0]-s(c,o,d,0,h,t))}return e}(o(e,!1),d(o(t,!1))),!0)))}e.XXTEA={utf8Encode:c,utf8Decode:h,encrypt:l,encryptToBase64:function(t,r){return e.btoa(l(t,r))},decrypt:u,decryptFromBase64:function(t,r){return void 0===t||null===t||0===t.length?t:u(e.atob(t),r)}}}(window)},"qtn/":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r("eqfM");var n=r("/QYm"),a=r("Dd8w"),o=r.n(a),i=r("mvHQ"),s=r.n(i),d=r("Gu7T"),c=r.n(d),h=r("woOf"),l=r.n(h),u=r("gyMJ"),f={props:{tips:{type:String,default:"拖动左边滑块完成上方拼图"}},data:function(){return{imgInfo:{url:"",jigsaw:"",token:""},dragState:{left:0,width:0,currentX:0,currentLeft:0,btnWidth:0,maskWidth:0},dragToEnd:!1}},created:function(){this.initDragCaptcha()},mounted:function(){var e=this.$refs.bar,t=this.$refs.dragBtn,r=e.getBoundingClientRect();l()(this.dragState,{left:r.left.toFixed(2),width:e.clientWidth,btnWidth:t.offsetWidth/2})},methods:{initDragCaptcha:function(){var e=this;u.a.dragCaptcha().then(function(t){e.imgInfo=o()({},t),l()(e.dragState,{currentLeft:0,maskWidth:0})})},handletTouchEnd:function(){var e=this;this.dragToEnd||this.dragState.currentLeft&&(this.dragToEnd=!0,u.a.dragValidate({query:{token:this.getToken()}}).then(function(t){n.a.success("验证成功"),e.$emit("success",e.getToken())}).catch(function(t){n.a.fail(t.message),e.initDragCaptcha()}))},handleTouchMove:function(e){if(!this.dragToEnd){e.preventDefault();var t=this.$refs.dragBtn,r=(this.$refs.dragImgBg,this.dragState),n=e.clientX?e.clientX.toFixed(2):e.targetTouches[0].pageX.toFixed(2),a=(n-r.left-r.btnWidth).toFixed(2);a<0&&(a=0),n>r.width&&(a=(r.width-r.left-r.btnWidth).toFixed(2)),l()(this.dragState,{currentLeft:a,maskWidth:(Number(a)+t.offsetWidth/2).toFixed(2)})}},calPositionX:function(){var e=this.$refs.dragImgBg,t=(e.naturalWidth/e.width).toFixed(2);return(Number(this.dragState.currentLeft).toFixed(2)*t).toFixed(2)},getToken:function(){var e={token:this.imgInfo.token,captcha:this.calPositionX()};return[].concat(c()(btoa(s()(e)))).reverse().join("")}}},g={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"e-drag"},[r("div",{staticClass:"e-drag-section"},[r("div",{staticClass:"e-drag-img"},[r("img",{ref:"dragImgBg",attrs:{src:e.imgInfo.url,alt:""}}),e._v(" "),r("img",{staticClass:"e-drag-img__dragable",style:{left:e.dragState.currentLeft+"px"},attrs:{src:e.imgInfo.jigsaw,alt:""}})]),e._v(" "),r("div",{ref:"bar",staticClass:"e-drag-bar"},[r("span",[e._v(e._s(e.tips))]),e._v(" "),r("div",{staticClass:"e-drag-bar__mask",style:{width:e.dragState.maskWidth+"px"}}),e._v(" "),r("div",{ref:"dragBtn",staticClass:"e-drag-btn",style:{left:e.dragState.currentLeft+"px"},on:{touchend:e.handletTouchEnd,touchmove:e.handleTouchMove}},[r("img",{attrs:{src:"static/images/drag.png",alt:""}})])])])])},staticRenderFns:[]},v=r("VU/8")(f,g,!1,null,null,null).exports,m=r("NYxO"),b=(r("KFVb"),r("SgDA")),p={components:{EDrag:v},data:function(){return{registerInfo:{mobile:"",dragCaptchaToken:"",encrypt_password:"",smsCode:"",smsToken:"",type:"register"},dragEnable:!1,dragKey:0,submitFlag:!0,options:[{model:"email"},{model:"mobile"}],errorMessage:{mobile:"",encrypt_password:""},validated:{mobile:!1,encrypt_password:!1},count:{showCount:!1,num:120,codeBtnDisable:!1}}},computed:o()({btnDisable:function(){return!(this.registerInfo.mobile&&this.registerInfo.encrypt_password&&this.registerInfo.smsCode)}},Object(m.mapState)({isLoading:function(e){return e.isLoading}})),methods:o()({},Object(m.mapActions)(["addUser","sendSmsCenter","userLogin"]),{validateMobileOrPsw:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mobile",t=this.registerInfo[e],r=b.a[e];if(0==t.length)return this.errorMessage[e]="",!1;this.errorMessage[e]=r.validator(t)?"":r.message},validatedChecker:function(){var e=this.registerInfo.mobile,t=b.a.mobile;this.validated.mobile=t.validator(e)},handleSmsSuccess:function(e){this.registerInfo.dragCaptchaToken=e,this.handleSendSms()},handleSubmit:function(){var e=this,t=this.registerInfo.encrypt_password,r=this.registerInfo.mobile;if(this.submitFlag){var a=window.XXTEA.encryptToBase64(t,window.location.host);this.registerInfo.encrypt_password=a,this.submitFlag=!1}this.addUser(this.registerInfo).then(function(t){n.a.success({duration:2e3,message:"注册成功"});setTimeout(function(){e.$router.push({name:"find"})},2e3)}).then(function(){e.userLogin({username:r,password:t})}).catch(function(e){n.a.fail(e.message)})},clickSmsBtn:function(){this.dragEnable=!0},handleSendSms:function(){var e=this;this.sendSmsCenter(this.registerInfo).then(function(t){e.registerInfo.smsToken=t.smsToken,e.countDown()}).catch(function(t){switch(t.code){case 4030301:case 4030302:e.dragKey++,e.registerInfo.dragCaptchaToken="",e.registerInfo.smsToken="",n.a.fail(t.message);case 4030303:e.dragEnable=!0,n.a.fail(t.message)}})},countDown:function(){var e=this;this.count.showCount=!0,this.count.codeBtnDisable=!0,this.count.num=120;var t=setInterval(function(){if(e.count.num<=0)return e.count.codeBtnDisable=!1,e.count.showCount=!1,void clearInterval(t);e.count.num--},1e3)}})},C={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register"},[e.isLoading?r("e-loading"):e._e(),e._v(" "),r("span",{staticClass:"register-title"},[e._v("注册账号")]),e._v(" "),r("van-field",{ref:"mobile",attrs:{placeholder:"请输入手机号",maxLength:"11","error-message":e.errorMessage.mobile},on:{blur:function(t){e.validateMobileOrPsw("mobile")},keyup:function(t){e.validatedChecker()}},model:{value:e.registerInfo.mobile,callback:function(t){e.$set(e.registerInfo,"mobile",t)},expression:"registerInfo.mobile"}}),e._v(" "),r("van-field",{attrs:{type:"password",maxLength:"20","error-message":e.errorMessage.encrypt_password,placeholder:"请设置密码（5-20位字符）"},on:{blur:function(t){e.validateMobileOrPsw("encrypt_password")}},model:{value:e.registerInfo.encrypt_password,callback:function(t){e.$set(e.registerInfo,"encrypt_password",t)},expression:"registerInfo.encrypt_password"}}),e._v(" "),e.dragEnable?r("e-drag",{key:e.dragKey,attrs:{info:e.registerInfo},on:{success:e.handleSmsSuccess}}):e._e(),e._v(" "),r("van-field",{attrs:{type:"text",center:"",clearable:"",maxLength:"6",placeholder:"请输入验证码"},model:{value:e.registerInfo.smsCode,callback:function(t){e.$set(e.registerInfo,"smsCode",t)},expression:"registerInfo.smsCode"}},[r("van-button",{attrs:{slot:"button",size:"small",type:"primary",disabled:e.count.codeBtnDisable||!e.validated.mobile},on:{click:e.clickSmsBtn},slot:"button"},[e._v("\n        发送验证码\n        "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.count.showCount,expression:"count.showCount"}]},[e._v("("+e._s(e.count.num)+")")])])],1),e._v(" "),r("van-button",{staticClass:"primary-btn mb20",attrs:{type:"default",disabled:e.btnDisable},on:{click:e.handleSubmit}},[e._v("注册")])],1)},staticRenderFns:[]},w=r("VU/8")(p,C,!1,null,null,null);t.default=w.exports}});