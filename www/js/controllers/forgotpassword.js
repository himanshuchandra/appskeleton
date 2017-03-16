'use strict';

/**
 * @ngdoc function
 * @name appskeleton.controller:ForgotpasswordCtrl
 * @description
 * # ForgotpasswordCtrl
 * Controller of the appskeleton
 */
angular.module('appskeleton')
  .controller('ForgotpasswordCtrl', function ($scope,forgotpassword,$window,$location,requrl,md5) {


    // ////////////////////////////////////////////////
    //   $scope.CheckToken=function(){
         
    //      $scope.Result="Checking";

    //       var PasswordObject={
    //         "UserEmail":UserEmail,
    //         "Token":Token,  
    //       }
         
    //       var promise = forgotpassword.passwordReset(PasswordObject);
    //       promise.then(function(data){
    //         if(data.data.message==="fail"){
    //           $scope.Result="Link expired.. Send a new one!";
    //         }
    //         else if(data.data.message==="pass"){
    //           verifiedUserEmail=PasswordObject.UserEmail;
    //           $scope.NewPasswordForm=false;
    //           $scope.Result=undefined;
    //           //show new password form
    //         }
    //         else{
    //           $scope.Result = "Error occured,Try again later";
    //         }
    //       }
    //       ,function(error){
    //         $scope.Result = "Error occured,Try again later";
    //       });
    //   };

  ///////////////////////////////////////////
    $scope.SendForm=false;
    $scope.sendAgainButton=true;
    // $scope.NewPasswordForm=true; 
    // var UserEmail=$location.search().e;
    // var Token=$location.search().t;
    // var verifiedUserEmail=undefined;

    // if(UserEmail!=undefined && Token!=undefined)
    // {
    //     $scope.SendForm=true;
    //      //hidden
    //     $scope.CheckToken();
    // }
    // else{
    //     $scope.SendForm=false;
    // }

//////////////////////////////////////////////////
     $scope.submitForm=function(forgotForm) {
        if(forgotForm.$valid){
          $scope.SendLink();
        }
    };

     $scope.SendLink=function() {
      
        var ForgotObject={
            "Email":$scope.ForgotEmail,
        };
        
        var promise=forgotpassword.sendLink(ForgotObject);
        promise.then(function(data){
          if(data.data.message==="sent"){
            $scope.result = "Link Sent";
            $scope.SendForm=true;
            $scope.sendAgainButton=false;
          }
          else if(data.data.message==="notFound"){
            $scope.result = "Email not found";
          }
          else{
            $scope.result = "Error occurred! Try again Later.";
          }
        },function (error) {
            $scope.result = "Error occurred! Try again Later.";
        });
      }; 

      $scope.sendAgain=function(){
        $scope.SendForm=false;
        $scope.sendAgainButton=true;
        $scope.ForgotEmail=undefined;
        $scope.result=undefined;
      };

////////////////////////////////
    //       var arePasswordsSame=false;
    
    //       $scope.checkPassword=function(){
    //       if($scope.ResetPassword2!=undefined)
    //       {   
    //           if($scope.ResetPassword===$scope.ResetPassword2)
    //           {   
    //             $scope.PasswordMessage="Passwords match";
    //             arePasswordsSame=true;
                
    //           }
    //           else if($scope.ResetPassword==undefined){
    //              $scope.PasswordMessage=undefined;
    //              arePasswordsSame=false;
    //           }
    //           else{
    //             $scope.PasswordMessage="Passwords dont match";
    //             arePasswordsSame=false; 
    //           }
    //       }
    //     };

    //       $scope.submitPasswordForm=function(passForm){
    //          if(passForm.$valid && arePasswordsSame==true && verifiedUserEmail!=undefined && Token!=undefined){
    //                 $scope.SaveNewPassword();
    //                 $scope.PasswordResult="Updating Password";
    //         }
    //         else{
    //           $scope.PasswordResult="Enter correct passwords";
    //         }
    //       };

    //   $scope.SaveNewPassword=function(){
         
    //      $scope.Result="Checking";
    //      var HashPassword=md5.createHash($scope.ResetPassword);

    //       var NewPasswordObject={
    //         "UserEmail":verifiedUserEmail,
    //         "Token":Token,
    //         "NewPassword":HashPassword,
    //       }
         
    //       var promise = forgotpassword.passwordReset(NewPasswordObject);
    //       promise.then(function(data){
    //         if(data.data.message==="fail"){
    //           $scope.Result = "Error occured,Try again later";
    //         }
    //         else if(data.data.message==="success"){
    //           $scope.NewPasswordForm=true; 
    //           $scope.Result = "Password Changed";
    //         }
    //         else{
    //           $scope.Result = "Error occured,Try again later";
    //         }
    //       }
    //       ,function(error){
    //         $scope.Result = "Error occured,Try again later";
    //       });
    //   };

  });