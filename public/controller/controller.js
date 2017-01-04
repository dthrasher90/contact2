
var app = angular.module("contactlistApp", []);

app.controller("MainCtrl", function($scope, $http){
  $http.get('/contactlist').then(function(response){
    console.log(" i got the data requested.");
    $scope.contacts = response.data;
  });
});
