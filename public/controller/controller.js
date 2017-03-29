


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
    alert("delete button");
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

$scope.edit = function(contact) {

    openNav();

    $scope.contactEdit = contact;
    console.log($scope.contactEdit);
    //
    //
    //  $http({
    //    method: 'PUT',
    //    url: '/contactlist/' + id })
    //    .then(function(response){
    //     console.log($scope.contact);
    //     return $scope.contact
    //
    //   }), function(respone){
    //     console.log("error");
    //   }
};

$scope.saveNew = function(contact) {
    openNav();
    $scope.contactAdd = contact;
    console.log($scope.contactAdd);

}






//  console.log("from edit ");
//     $http.get('/contactlist/' + $scope.contact)
//     .then(function callback(response){
//      alert("callback function");
//         $scope.contact = response.data;
//         console.log($scope.contact);
//      });
// };

$scope.saveContact = function(id) {
console.log(id);
$http.put('/contactlist/' + $scope.contact._id, $scope.contact);
refresh();
};

});
