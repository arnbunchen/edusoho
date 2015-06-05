app.controller('RegistController', ['$scope', '$http', '$ionicHistory', 'UserService', RegistController]);

function RegistController($scope, $http, $ionicHistory, UserService)
{
	console.log("RegistController");

	$scope.user = {
		phone : null,
		code : null,
		password: null
	};

	$scope.checkCode = function(code) {
		return !code || code.length == 0;
	};

	$scope.checkEmail = function(code) {
		return false;
	};

	$scope.sendSmsCode = function(phone) {
		if (!parseInt(phone)) {
			alert("手机格式不正确!");
			return;
		}

		UserService.smsSend({
			phoneNumber : phone
		}, function(data) {
			$scope.toast(data.meta.message);
		});
	}

	$scope.registWithPhone = function(user) {
		if (!parseInt(user.phone)) {
			alert("手机格式不正确!");
			return;
		}
		if (user.password && (user.password.length < 5 || user.password.length > 20)) {
			alert("密码格式不正确!");
			return;
		}

		if (!$scope.checkCode(user.code)) {
			alert("验证码不正确!");
			return;
		}

		UserService.regist({
			phone : user.phone,
			smsCode : user.code,
			password : user.password,
		}, function(data) {
			if (data.meta.code == 500) {
				$scope.toast(data.meta.message);
				return;
			}
			$ionicLoading.hide();
			$scope.jumpToMain();
		}, function(error) {
			$scope.toast("注册失败");
		});
	}

	$scope.registWithEmail = function(user) {
		if (!user.email) {
			alert("邮箱格式不正确!");
			return;
		}
		if (user.password && (user.password.length < 5 || user.password.length > 20)) {
			alert("密码格式不正确!");
			return;
		}

		UserService.regist({
			email : user.email,
			password : user.password,
		}, function(data) {
			if (data.meta.code == 500) {
				$scope.toast(data.meta.message);
				return;
			}
			$ionicLoading.hide();
			$scope.jumpToMain();
		}, function(error) {
			$scope.toast("注册失败");
		});
	}
}