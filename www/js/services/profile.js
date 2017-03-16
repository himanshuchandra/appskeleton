'use strict';

/**
 * @ngdoc service
 * @name appskeleton.profile
 * @description
 * # profile
 * Factory in the appskeleton.
 */
angular.module('appskeleton')
  .factory('profile', function ($http,$q,requrl) {

    var object = {

        getData:function(){
          var defer = $q.defer(); 
          $http.post(requrl+'/profile/getData')
          .then(function(data){
               defer.resolve(data);
           },function(error){
               defer.reject(error);
           }) 
            return defer.promise;
        },

        checkUsername:function(usernameObj){
           var defer = $q.defer();
           $http.post(requrl+'/commonroutes/checkUsername',usernameObj)
           .then(function(data){
               defer.resolve(data);
           },function(error){
               defer.reject(error);
           }) 
            return defer.promise;
        },
        
       changeUsername:function(UsernameObject){
            var defer=$q.defer();
            $http.post(requrl+"/profile/changeUsername",UsernameObject)
            .then(function(data){
                defer.resolve(data); 
            },function(error){
                defer.reject(error);
            })
            return defer.promise;
        },

        updateProfileData:function(profileObject){
            var defer=$q.defer();
            $http.post(requrl+"/profile/updateProfileData",profileObject)
            .then(function(data){
                defer.resolve(data); 
            },function(error){
                defer.reject(error);
            })
            return defer.promise;
        },

        updateMobile:function(MobileObject){
            var defer=$q.defer();
            $http.post(requrl+"/profile/updateMobile",MobileObject)
            .then(function(data){
                defer.resolve(data); 
            },function(error){
                defer.reject(error);
            })
            return defer.promise;
        },

        verifyCode:function(CodeObject){
            var defer=$q.defer();
            $http.post(requrl+"/profile/verifyCode",CodeObject)
            .then(function(data){
                defer.resolve(data); 
            },function(error){
                defer.reject(error);
            })
            return defer.promise;
        },

        setNewPassword:function(passwordObject){
            var defer=$q.defer();
            $http.post(requrl+"/profile/setNewPassword",passwordObject)
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