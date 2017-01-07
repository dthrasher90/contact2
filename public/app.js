
var app = angular.module( 'myApp',  []);
    app.controller('MainCtrl',  function($scope, $http){
      console.log ('angular worked');

    $http.get('/contactlist').success(function(response){
      console.log(" i got the data requested.");
      $scope.contacts = response;
    });
    })






// app.config(function($routeProvider) {
//     $routeProvider
//     .when("/", {
//       templateUrl:"main.html"
//     })
//     .when("/update", {
//       templateUrl:"update.html"
//     //  controller:"ListController"
//   });

// app.controller("MainCtrl", function($http, $scope){
//
// })
