(function() {
  angular.module('homeController', [])
    .controller('homeCtrl', homeCtrl)
    .controller('mCtrl', mCtrl)

    function homeCtrl (menuMob, $state,$stateParams) {
      var hCtrl = this
      hCtrl.page = $state.current.name
      if(hCtrl.page == 'edit'){
        menuMob.showOne($stateParams.id)
        .then(function(res) {
          console.log(res);
          hCtrl.newMenu= res.data
        })
        
      }
      
    //   hCtrl.seatArray=[]
      hCtrl.newMenu = []
      hCtrl.totalCost = 0;
      
      hCtrl.check = function(item){
        
        if(item.checked == true){
            hCtrl.newMenu.push(item)
            var total = 0
            hCtrl.newMenu.forEach(function(element, index){
                total += parseFloat(element.price)
                hCtrl.totalCost = total
                console.log("current array",element.price)
            })
        } else {
            var i = hCtrl.newMenu.indexOf(item)
            hCtrl.newMenu.splice(i,1)
            var total = 0
            hCtrl.newMenu.forEach(function(element, index){
                total += parseFloat(element.price)
                hCtrl.totalCost = total
                console.log("This is the total",hCtrl.totalCost)
            })
        }
        
        if(!item.checked){
            hCtrl.totalCost = total
        }
        
        console.log("This is the newMenu",hCtrl.newMenu)
      }
      
      
      hCtrl.submitMenu = function(menu) {
        console.log("This is the submit function", menu)
        
        
        
        menuMob.create(menu)
          .then(function (res) {
            console.log("new menu : ", res)
          })
      }

      hCtrl.createMenu = function(){
        hCtrl.page = "create"
        $state.go('create')
      }
      hCtrl.editMenu = function(id){
        hCtrl.page = "edit"
        $state.go('edit', {id: id})
      }
    }
    
     function mCtrl ($scope) {
    $scope.menuItem = [
       {
       "item"     :  "Western Cheeseburger",
       "price"    :  8.50,
       "desc"     :  "Angus beef with bacon and Jim's special BBQ sauce.",
       "stockNum" :  100
        }, 
        {
       "item"     :  "New York Pizza",
       "desc"     :  "Thin crusted pizza with your choice of toppings.",
       "price"    :  12.80,
       "stockNum" :  101
        },
        {
       "item"     :  "Rob's Ribeye Steak",
       "desc"     :  "100% Kobe beef cooked to perfection.",
       "price"    :  10.50,
       "stockNum" :  102
        },
        {
       "item"     :  "Salad Supreme",
       "desc"     :  "Signature salad with onion, boiled egg, and croutons. Your choice of dressing.",
       "price"    :  6.95,
       "stockNum" :  103
        },
        {
       "item"     :  "BBQ Chicken Wings",
       "desc"     :  "Delicious boneless wings drowned in Jim's special BBQ sauce.",
       "price"    :  7.35,
       "stockNum" :  104
        },
        {
       "item"     :  "Baby Back Ribs",
       "desc"     :  "Slow cooked ribs that slide right off the bone. Covered in Jim's special BBQ sauce.",
       "price"    :  11.25,
       "stockNum" :  105
        },
        {
       "item"     :  "Tony's Tri Tip",
       "desc"     :  "Slow cooked tri tip seasoned to perfection.",
       "price"    :  10.35,
       "stockNum" :  106
        },
        {
       "item"     :  "Raph's Ravioli",
       "desc"     :  "Delicious pasta stuffed with spinach and ricotta cheese.",
       "price"    :  7.85,
       "stockNum" :  107
        },
        {
       "item"     :  "Fountain Drink",
       "desc"     :  "Perpsi, Croke, Mountain Mist, Nurse Pepper, or Spreete.",
       "price"    :  1.50,
       "stockNum" :  200
        },
        {
       "item"     :  "Tres Equis",
       "desc"     :  "Premium beer from Mexico.",
       "price"    :  4.50,
       "stockNum" :  201
        },
        {
       "item"     :  "Grinnussee",
       "desc"     :  "A dry stout from Ireland.",
       "price"    :  5.50,
       "stockNum" :  202
        },
        {
       "item"     :  "Heinkus",
       "desc"     :  "A Dutch pale lager.",
       "price"    :  5.75,
       "stockNum" :  203
        },
        {
       "item"     :  "Oldcastle",
       "desc"     :  "A delicious brown ale from the UK.",
       "price"    :  5.25,
       "stockNum" :  204
        },
        {
       "item"     :  "Door's",
       "desc"     :  "American lager.",
       "price"    :  3.25,
       "stockNum" :  205
        },
        {
       "item"     :  "Dudweiser",
       "desc"     :  "American pale lager.",
       "price"    :  4.50,
       "stockNum" :  202
        },
        {
       "item"     :  "Dud Light",
       "desc"     :  "Light American pale lager.",
       "price"    :  4.50,
       "stockNum" :  202
        },
        {
       "item"     :  "Pop's Red Ribbon",
       "desc"     :  "Hip and trendy American lager.",
       "price"    :  4.50,
       "stockNum" :  202
        },
        {
       "item"     :  "Cheesecake",
       "price"    :  4.25,
       "desc"     :  "Fresh made cheesecake with strawberry sauce drizzled on top.",
       "stockNum" :  300
        },
        {
       "item"     :  "Ice Cream",
       "desc"     :  "Vanilla, Chocolate, Strawberry.",
       "price"    :  3.50,
       "stockNum" :  301
        },
     ];
          
          
 }
    
    
  
    
}());


