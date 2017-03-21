'use strict';

/**
 * @ngdoc service
 * @name appskeleton.appindex
 * @description
 * # appindex
 * Factory in the appskeleton
 */
angular.module('appskeleton')
  .factory('appindex', function ($http,$q,requrl,$localStorage) {

    var object = {

        logout:function(){
            var logoutObject={
                appCall:true,
                sessionid:$localStorage.sessionid
            }
            

          var defer = $q.defer(); 
          $http.post(requrl+'/logout',logoutObject)
          .then(function(data){

            $localStorage.$reset();

               defer.resolve(data);
           },function(error){
               defer.reject(error);
           }) 
            return defer.promise;
        }

    };
    return object;

});