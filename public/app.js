(function() {
  angular.module('menuApp', ['homeController', "menuFactory", 'ui.router'])
        .config(routerConfig)

      function routerConfig($stateProvider, $urlRouterProvider){

        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'partials/menuform.html',
            controller: 'homeCtrl as hCtrl'
          })

          // .state('create', {
          //   url: '/',
          //   templateUrl: 'partials/menuform.html',
          //   controller: 'homeCtrl as hCtrl'
          // })
          // .state('edit', {
          //   url: '/edit/:id',
          //   templateUrl: 'partials/menuform.html',
          //   controller: 'homeCtrl as hCtrl'
          // })


          $urlRouterProvider.otherwise('/')
      }
      
}());
