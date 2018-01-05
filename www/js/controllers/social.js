'use strict';

/**
 * @ngdoc function
 * @name appskeleton.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appskeleton
 */
angular.module('appskeleton')
  .controller('SocialCtrl', function ($scope, $window, requrl, $location, $http, $localStorage) {

    $scope.signInFacebook = function () {
      var ref = cordova.InAppBrowser.open(requrl + "/social/socialFacebookApp", '_blank', 'location=yes,clearcache=yes,clearsessioncache=yes');
      ref.addEventListener('loadstart', function (event) {
        var index = event.url.indexOf("?sid=");
        if (index > -1) {
          var l = event.url.length;
          var sid = event.url.substring(index+5,l);
          ref.close();
          $localStorage.$default({
            sessionid: ''
          });
          $localStorage.sessionid = sid;
          $window.location.reload();
        }

      });
    }

    $scope.signInGoogle = function () {
      var ref = cordova.InAppBrowser.open(requrl + "/social/socialGoogleApp", '_blank', 'location=yes,clearcache=yes,clearsessioncache=yes');
      ref.addEventListener('loadstart', function (event) {
        var index = event.url.indexOf("?sid=");
        if (index > -1) {
          var l = event.url.length;
          var sid = event.url.substring(index+5,l);
          ref.close();
          $localStorage.$default({
            sessionid: ''
          });
          $localStorage.sessionid = sid;
          $window.location.reload();
        }

      });
    }
  });
