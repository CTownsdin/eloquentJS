'use strict';

var app = angular.module('myapp', []);

app.controller('MainController', function($scope){

  var person = {
    firstName : 'Christian',
    lastName : 'Townsdin',
    imgSrc : 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/6/005/0b1/3e6/0036c15.jpg'
  };

  $scope.message = 'Hello Angular!';
  $scope.person = person;

});


