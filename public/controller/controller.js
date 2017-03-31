


var app = angular.module("contactlistApp", ['ngRoute']);

 app.config(function($routeProvider, $locationProvider) {
    $routeProvider

      $routeProvider.otherwise({redirectTo: '/'});
      $locationProvider.html5Mode({enabled: true, requireBase: false});
});



app.controller("MainCtrl", function($scope, $http){

  $scope.selected = {};

  function openNav() {
      document.getElementById("mySidenav").style.width = "200px";
      document.getElementById("main").style.marginLeft = "200px";

  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
  }

  function refresh() {
      location.reload();
      }


$scope.contacts = [];


$http.get('/contactlist').then(function(response) {
    console.log(" i got the data requested.");
    $scope.contacts = response.data;

});


$scope.delete = function(id) {

    console.log(id);
    $http({
        method: 'DELETE',
        url: '/contactlist/' + id
    }).then(function() {
        refresh();
    });
};


$scope.addContact = function(contact) {
    alert("add contact button");
    console.log("scope contact add " + $scope.contactAdd);
    $http.post('/contactlist', $scope.contactAdd).then(function(data) {


        refresh();
    });
    console.log("inside add contact" + contact);
};


$scope.contact = {}

$scope.edit = function(contact) {

  openEditNav();
    // $scope.contactEdit = contact;
    // console.log("id from edit " + contactEdit);
    // $scope.contactEdi= contactEdit;
    console.log(contact);
    $scope.contact = contact;
};



$scope.save = function (contact, id){
var id = contact._id;
console.log("test save "  + id);
  // $scope.contact = contact;
         $http({
           method: 'PUT',
           url: '/contactlist/' + id})
           .then(function(response){
            console.log("controller put request " + $scope.contact);
          }, function(response){
            console.log("error");
          });

      closeEditNav();
    };







// Below is final bracketrs
 });
