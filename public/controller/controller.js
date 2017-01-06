


var app = angular.module("contactlistApp", ['ngRoute']);

 app.config(function($routeProvider, $locationProvider) {
    $routeProvider
     .when('/', {
       templateUrl :'pages/home.html',
       controller : 'MainCtrl'
    })
     .when('/addcontact', {
        templateUrl : 'pages/addcontact.html'
      //   controller : 'addContactCtrl'

      });

      $routeProvider.otherwise({redirectTo: '/'});
      $locationProvider.html5Mode({enabled: true, requireBase: false});
});

app.controller("addContactCtrl", function($scope, $http, $rootScope){
  console.log("inside addContactCtrl");
});

app.controller("MainCtrl", function($scope, $http, $rootScope){
  var id = $scope.contact_id;

    $http.get('/contactlist').then(function(response){
    console.log(" i got the data requested.");
    $scope.contacts = response.data; // remove id from scope array to
        });


$scope.setContact = function(contactid) {
      $rootScope.selectId = contactid;
      console.log($scope.selectId);
}


$scope.editContact = function (){
  console.log("the edit button was pressed " + $scope.selectId);
}


      });

app.controller('actionCtrl', function($scope, $http, $rootScope) {
  $scope.deleteContact = function(){
    console.log("deleteContact");

        $http.delete('/contactlist/' + $rootScope.selectId);
        console.log("the delete button was pressed" + $rootScope.selectId);


          }

});
