(function() {
  angular.module('menuFactory', [])
    .factory('menuMob', menuMob)

    function menuMob ($http) {
      var dMob = {}

      dMob.create = function(menu){
        console.log("from factory", menu)
          return $http.post('/api/menus', menu)
      }
      dMob.update = function(menu, id){
          return $http.put('/api/menus/'+id, menu)
      }
      dMob.delete = function(id){
          return $http.delete('/api/menus/'+id)
      }
      dMob.showAll = function(){
          return $http.get('/api/menus')
      }
      dMob.showOne = function(id){
          return $http.get('/api/menus/'+id)
      }
      return dMob
    }


}());
