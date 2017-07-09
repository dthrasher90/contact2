


var app = angular.module("contactlistApp", ['ngRoute']);

 app.config(function($routeProvider, $locationProvider) {
    $routeProvider

      $routeProvider.otherwise({redirectTo: '/'});
      $locationProvider.html5Mode({enabled: true, requireBase: false});
});



app.controller("MainCtrl", function($scope, $http ){


  function refresh() {
      location.reload();
      }


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
    // alert("add contact button");
    console.log("scope contact add " + $scope.contactAdd);
    $http.post('/contactlist', $scope.contactAdd).then(function(data) {

        refresh();
    });
    console.log("inside add contact" + contact);
};



$scope.edit = function(contact) {

  openEditNav();
    $scope.contact = contact;
};




$scope.save = function (contact, id){


 console.log( $scope.contact);
         $http({
           method: 'PUT',
           url: '/contactlist/' + id,
           data: contact
         })
           .then(function(response){
            console.log("controller put request " + id);
          }, function(response){
            console.log("controller put request error" + contact + id);
          });

      closeEditNav();
};







// Below is final brackets
 });
