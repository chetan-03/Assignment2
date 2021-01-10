(
function () {
    'use strict';
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService );
    ToBuyController.$inject=['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

   function ToBuyController(ShoppingListCheckOffService) {
       var blist = this;
       blist.items = ShoppingListCheckOffService.getItems();
       blist.errorMessage = 'Everything is bought!';
       blist.bought = function (itemIndex) {
        ShoppingListCheckOffService.bought(itemIndex);
       };
       
   }

   function AlreadyBoughtController(ShoppingListCheckOffService) {
     var ablist = this;
     ablist.bitems = ShoppingListCheckOffService.getBItems();
     ablist.errorMessage = 'Nothing bought yet.';
   }
    function ShoppingListCheckOffService() {
        var service = this;
        var bitems = [];
        var items = [
            {
                name: "Cookie",
                quantity: 20,
            },
            {
                name: "Chocolate",
                quantity: 10,
            },
            {
                name: "Chips",
                quantity: 10,
            },
            {
                name: "Peanuts",
                quantity : 10,
            },
            {
                name: "Rice",
                quantity: 10,
            },
            {
                name: "Butter",
                quantity: 30,
            },
            {
                name: "Cheese",
                quantity: 5,
            },
        ];
        service.getItems = function () {
            return items;
        };
        service.bought = function (itemindex) {
            bitems.push(items[itemindex]);
            items.splice(itemindex,1); 
        };
        
        service.getBItems = function () {
            return bitems;
        };
    }
})();