webpackJsonp(["app/js/settings/update-pay-password/index"],[function(r,a,e){"use strict";function s(r){return r&&r.__esModule?r:{default:r}}var t=e("b334fd7e4c5a19234db2"),n=s(t),o=$("#pay-password-reset-update-form"),d=o.validate({rules:{"form[currentUserLoginPassword]":{required:!0},"form[payPassword]":{required:!0,minlength:5,maxlength:20},"form[confirmPayPassword]":{required:!0,equalTo:"#form_payPassword"}}});$("#payPassword-save-btn").on("click",function(r){var a=$(r.currentTarget);d.form()&&(a.button("loading"),o.submit())});var u=$(".alert-danger").text(),i=$(".alert-success").text();u&&(0,n.default)("danger",Translator.trans(u)),i&&(0,n.default)("success",Translator.trans(i))}]);