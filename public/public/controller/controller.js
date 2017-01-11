


var app = angular.module("contactlistApp", ['ngRoute']);

 app.config(function($routeProvider, $locationProvider) {
    $routeProvider
     .when('/', {
       templateUrl :'pages/home.html',
       controller : 'MainCtrl'
     })

     .when('/addcontact', {
        templateUrl : 'pages/addcontact.html',
        controller : 'MainCtrl'
      })

     .when('/edit', {
        templateUrl :'pages/addcontact.html',
        controller : 'MainCtrl'
      })

      $routeProvider.otherwise({redirectTo: '/'});
      $locationProvider.html5Mode({enabled: true, requireBase: false});
});



app.controller("MainCtrl", function($scope, $http, $rootScope){
    //    var id = $scope.contact_id;



  $scope.setId = function(id){
          $scope.setContactId = id;
        //  console.log($scope.setContactId);
          console.log(id);
         $rootScope.id = id;


          }

      $http.get('/contactlist').then(function(response){
        //  console.log(" i got the data requested.");
          $scope.contacts = response.data;
          //console.log($scope.contacts);
          });


      $scope.delete = function(id){
       console.log($rootScope)
      //  alert("delete button is pressed");
        console.log(id);
           $http({
             method: 'DELETE',
             url: '/contactlist/' + $rootScope.id._id
           })
         };




      $scope.addContact = function(){
            alert("add contact button");
           //console.log($scope);
            $http.post('/contactlist', $scope.contact)
            .success(function(){

            });
         }
       });
