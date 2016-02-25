var Yodlee = angular.module('Yodlee', ['ngAnimate']);

Yodlee.controller('yController', function ($scope, $window) {

  // use ng-show and ng-hide to display the content dynamically
  $scope.firstList = ['Cash','Bank','Bills','Investments'];
  $scope.secondList = ['Bank of America', 'Chase', 'Wells Fargo'];
  $scope.thirdList = ['$6858.83 - Primary Savings', '$3643.29 - Checking Account'];

  $scope.showSecondPanel = false;
  $scope.showThirdPanel = false;

  $scope.firstPanelClick = function (element) {
    $scope.showSecondPanel = true;
  };

  $scope.secondPanelClick = function (element) {
    $scope.showThirdPanel = true;
  };

  $scope.hideSecondPanel = function () {
    $scope.showSecondPanel = false;
    $scope.showThirdPanel = false;
  };

  $scope.hideThirdPanel = function () {
    $scope.showThirdPanel = false;
  };

});

