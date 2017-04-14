(function(){
'use strict';

angular.module("LunchCheck", [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.msg = "";
  $scope.lunch = "";

  $scope.checkLunch = function(){
      var tokens = $scope.lunch.split(",");
      var count = 0;

      for (var i in tokens) {
          if (tokens[i].trim() != "") {
             count++;
          }
      }

      if (count == 0) {
          $scope.msg = "Please enter data first";
      } else if (count <= 3) {
          $scope.msg = "Enjoy!";
      } else {
          $scope.msg = "Too much!";
      }
  };

}

})();
