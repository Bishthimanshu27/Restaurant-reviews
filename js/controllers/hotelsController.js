angular.module('hotels')
  .controller('hotelsController', ['hotelsService', function (hot) {
    this.items = hot.items
    this.cart = hot.cart
    this.points = hot.points
    this.color = hot.color
  }])   