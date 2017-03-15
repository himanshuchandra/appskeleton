'use strict';

/**
 * @ngdoc service
 * @name appskeletonApp.login
 * @description
 * # login
 * Factory in the appskeleton
 */
angular.module('appskeleton')
  .factory('login', function ($http,$q,requrl) {

    var object = {

        loginUser:function(loginObject){
          var defer = $q.defer(); 
          $http.post(requrl+'/login/login',loginObject)
          .then(function(data){
               defer.resolve(data);
           },function(error){
               defer.reject(error);
           }) 
            return defer.promise;
        },

    };
    return object;

});
