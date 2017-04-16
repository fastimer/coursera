(function(){
'use strict';

angular.module("ShoppingListApp",[])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ["ShoppingListCheckOffService"];
function ToBuyController(ShoppingListCheckOffService){
   var toBuy = this;

   toBuy.items = ShoppingListCheckOffService.getToBuyItems();   
   toBuy.checkOff = function(itemIndex){
     ShoppingListCheckOffService.checkOff(itemIndex);
   }
}

AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtController(ShoppingListCheckOffService){
   var bought = this;

   bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
   var service = this;

   var toBuyItems = [
     {name : "cookies", quantity:20 },
     {name : "eggs", quantity:6 },
     {name : "cans of tuna", quantity:3 },
     {name : "chicken wings", quantity:12 }
   ];

   var boughtItems = [];

   service.getToBuyItems = function() {
     return toBuyItems;
   }

   service.getBoughtItems = function() {
     return boughtItems;
   }

   service.checkOff = function(index) {
     var checkOffItem = toBuyItems[index];
     toBuyItems.splice(index, 1);
     boughtItems.push(checkOffItem);
   }

}

})();
