


var app = angular.module("contactlistApp", ['ngRoute']);

 app.config(function($routeProvider, $locationProvider) {
    $routeProvider
     .when('/', {
       templateUrl :'pages/home.html',
       controller : 'MainCtrl'
     })

     .when('/addcontact', {
        templateUrl : 'pages/addcontact.html',
        controller : 'AddCtrl'
      })

     .when('/edit', {
        templateUrl :'pages/addcontact.html',
        controller : 'UpdateCtrl'
      })

      $routeProvider.otherwise({redirectTo: '/'});
      $locationProvider.html5Mode({enabled: true, requireBase: false});
});


// $scope.setContact = function(contactid, $scope, $rootScope) {
//     $rootScope.selectId = contactid;
//     console.log($rootScope.selectId);
//     }

app.controller("MainCtrl", function($scope, $http, $rootScope){
        var id = $scope.contact_id;

        $http.get('/contactlist').then(function(response){
          console.log(" i got the data requested.");
          $scope.contacts = response.data; // remove id from scope array to
          console.log($scope.contacts);
          console.log(response.data[0]._id);
        });
});

app.controller("actionCtrl", function($scope, $http, $rootScope){

console.log($scope);
$scope.delete = function($scope, contact_id){
      alert("delete button is pressed");
      $http.delete('/contactlist' + contact_id);
     console.log(contact._id);
      };

});




 app.controller("AddCtrl", function($scope, $http){

       $scope.addContact = function(){
            console.log($scope);
            $http.post('/contactlist', $scope.contact);

              }
              });
