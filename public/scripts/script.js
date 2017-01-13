var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home', {
    templateUrl: 'views/partials/home.html',
    controller: 'HomeController'
  })
  .when('/add', {
    templateUrl: 'views/partials/add.html',
    controller: 'AddController'
  })
  .when('/login', {
    templateUrl: 'views/partials/login.html',
    controller: 'LoginController'
  })
  .when('/register', {
    templateUrl: 'views/partials/register.html',
    controller: 'registerController'
  })
  .otherwise({
    redirectTo: 'home'
  });
}]);//end routeProvider

myApp.controller('LoginController',['$scope', '$http', '$window',
  function($scope, $http, $window) {
  console.log('inside login controller');

  $scope.login = function(){

    var userInfo = {
      username: $scope.username,
      password: $scope.password
    };

    $http({
      method: 'POST',
      url: '/',
      data: userInfo
    }).then(function successCallback(response) {
      console.log(response);
      $window.location.href = '#!/home';
    }, function errorCallback(error) {
      console.log('error', error);
      $window.location.href = '#!/login';
    });
  };
}]);

myApp.controller('registerController',['$scope', '$http', '$window',
  function($scope, $http, $window) {
  console.log('inside register controller');

  $scope.register = function() {
    var userInfo = {
      username: $scope.username,
      password: $scope.password
    };

    $http({
      method: 'POST',
      url: '/register',
      data: userInfo
    }).then(function successCallback(response) {
      console.log('success', response);
      $window.location.href = '#!/login';
    }, function errorCallback(error) {
      console.log('error occurred!');
    });
  };

}]);

myApp.controller('AddController', ['$scope', '$http', '$window', function($scope, $http, $window){
  console.log('in AddController');
  $scope.checkLogin = function(){
    $http.get('/auth')
      .then(function successCallback(response) {
        console.log('success', response);
      }, function errorCallback(error) {
        console.log('error occurred!');
        $window.location.href = '#!/login';
      });
  };$scope.checkLogin();

  $scope.addItem = function(){
    var itemToSend = {
      description: $scope.descrip,
      image: $scope.imageUrl
    };
    $http.post('/item', itemToSend)
    .then(function(response){
      console.log('POST hit');

      if(confirm("Do you want to add another item?")){
        $scope.descrip = '';
        $scope.imageUrl = '';
      }else{
        $window.location.href = '#!/home';

      }
    }).catch(function(response){
      console.log('PSYCHE: ', response);
      if(response.status === 401) {
        $window.location.href = '#!/login';
      }

    });
  };
}]);//end AddController

myApp.controller('HomeController', ['$scope', '$http', '$window', function($scope, $http, $window){
  console.log('in HomeController');
  $scope.displayItems = function(){
    $http.get('/item')
    .then(function(response){
      console.log(response);
      $scope.items = response.data;
    });
  };
  $scope.displayItems();
  $scope.deleteItem = function (id){
    $http.delete('/item/' + id)
    .then(function(response){
      console.log('delete hit', response);
      if(response.data.message === 'Not your item!'){
        alert(response.data.message);
      }
      $scope.displayItems();
    }).catch(function(response){
      console.log('delete error', response);
      if(response.status === 401) {
        $window.location.href = '#!/login';
      }
    });
  };
  $scope.displayUsers = function() {
    $http.get('/home')
    .then(function(response){
      console.log('displayUsers response:', response);
      $scope.users = response.data;
    });
  };
  $scope.displayUsers();
}]);
