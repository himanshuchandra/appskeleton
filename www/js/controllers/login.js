'use strict';

/**
 * @ngdoc function
 * @name appskeleton.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the appskeleton
 */
angular.module('appskeleton')
  .controller('LoginCtrl', function ($scope,login,$window,$location,md5) {

      $scope.login={
        loginid:"",
        loginpassword:"",
        RememberMe:undefined
      };
      
     $scope.submitForm=function(loginForm){
        if(loginForm.$valid){
            $scope.result="Checking..";
            $scope.doLogin();
        }
        else{
            $scope.result="Invalid info.";
        }
    };
    
    
    $scope.doLogin=function(){
        
        var hashLoginPassword=md5.createHash($scope.login.loginpassword);

        var loginObject = {
            "loginid":$scope.login.loginid,
            "loginpassword":hashLoginPassword,
            "rememberMe":$scope.login.RememberMe
        };
        var promise = login.loginUser(loginObject);
        promise.then(function(data){
            if(data.data.message==="success"){
                $scope.result="Logged in successfully";
                $window.location.reload();
                $location.path("#/app");
            }
            else if(data.data.message==="fail"){
                $scope.result="Wrong email or password";
            }
            else{
                $scope.result="Error occurred! Try again later.";
            }
        },function(error){
            $scope.result = "Error occurred! Try again later.";
        });
    };
  
  });
