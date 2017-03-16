'use strict';

/**
 * @ngdoc service
 * @name appskeleton.appindex
 * @description
 * # appindex
 * Factory in the appskeleton
 */
angular.module('appskeleton')
  .factory('appindex', function ($http,$q,requrl) {

    var object = {

        logout:function(){
          var defer = $q.defer(); 
          $http.post(requrl+'/logout')
          .then(function(data){
               defer.resolve(data);
           },function(error){
               defer.reject(error);
           }) 
            return defer.promise;
        }

    };
    return object;

});