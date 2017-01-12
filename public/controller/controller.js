


var app = angular.module("contactlistApp", ['ngRoute']);

 app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    //  .when('/', {
    //    templateUrl :'pages/home.html',
    //    controller : 'MainCtrl'
    //  })
     //
    //  .when('/addcontact', {
    //     templateUrl : 'pages/addcontact.html',
    //     controller : 'MainCtrl'
    //   })
     //
    //  .when('/edit', {
    //     templateUrl :'pages/editContact.html',
    //     controller : 'MainCtrl'
    //   })

      $routeProvider.otherwise({redirectTo: '/'});
      $locationProvider.html5Mode({enabled: true, requireBase: false});
});



app.controller("MainCtrl", function($scope, $http){


    $scope.contacts = [];
      $http.get('/contactlist').then(function(response){
          console.log(" i got the data requested.");
          $scope.contacts = response.data;
          });


      $scope.delete = function(id){
       alert("delete button");
          console.log(id);
           $http({
             method: 'DELETE',
             url: '/contactlist/' + id
           }).then(function(){
            

           });
         };

//SCOPE TO REMOVE FROM ARRAY IN DELETE function REMOVE DATA AND DELTE, AND PUSH NEW DATA UP AND CLEAR TEXT BOX


      $scope.addContact = function(){
            alert("add contact button");
            $http.post('/contactlist', $scope.contact).then(function(data){
              console.log(data);
            })
         };


       $scope.edit =
       function(id){
         console.log("from edit ", id);
            $http.get('/contactlist/' + id)
            .then(function callback(response){
              alert("callback function");
              $scope.contact = response.data;
              console.log($scope.contact);
            });
          };

      // $scope.saveContact = function(){
      //   console.log($scope.contact._id);
      //     $http.put('/contactlist/' + $scope.contact._id, $scope.contact)
      //
      //
      // }

  });
