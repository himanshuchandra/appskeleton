'use strict';

/**
 * @ngdoc service
 * @name appskeleton.socialsignin
 * @description
 * # socialsignin
 * Factory in the appskeleton.
 */
angular.module('appskeleton')
  .factory('socialsignin', function ($q,$http,requrl) {

    var object = {

        socialSignin:function(SocialObject){   
          var defer = $q.defer(); 
          $http.post(requrl+'/commonroutes/socialSignin',SocialObject)
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
