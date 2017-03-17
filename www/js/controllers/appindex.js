'use strict';

/**
 * @ngdoc function
 * @name appskeleton.controller:AppindexCtrl
 * @description
 * # AppindexCtrl
 * Controller of the appskeleton
 */
angular.module('appskeleton')
  .controller('AppindexCtrl', function ($scope,appindex,$window,$location) {

    $scope.loggedOut=false;
    $scope.loggedIn=false;

    $scope.logout=function(){
        confirm("Are you sure you want to logout?");
        if(confirm){
            $scope.doLogout();
        }
        else{
            $location.path("app/home");
        }
    };

    $scope.doLogout=function(){
        var promise = appindex.logout();
        promise.then(function(data){
            $window.location.reload();
            $location.path("app/login");
        },function(error){
            $scope.LogoutMessage="Error,Try again Later";
        });
      };

  });
