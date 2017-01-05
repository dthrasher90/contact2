


var app = angular.module("contactlistApp", []);


app.controller("MainCtrl", function($scope, $http){

var id = $scope.contact_id;

$http.get('/contactlist').then(function(response){
  console.log(" i got the data requested.");
  $scope.contacts = response.data; // remove id from scope array to
  });

$scope.setContact = function(contactid) {
  $scope.selectId = contactid;
  console.log($scope.selectId);

}

$scope.createContact = function(){
  console.log("the create button was pressed ");
  console.log($scope.selectId);
}

$scope.editContact = function (){
  console.log("the edit button was pressed " + $scope.selectId);
}

$scope.deleteContact = function(){
  $http.delete('/contactlist/' + $scope.selectId);

  // called asynchronously if an error occurs
  // or server returns response with an error status.

//create refresh funciotn in success callbqack, to reload the list

  console.log("the delete button was pressed" + $scope.selectId);
}

});
