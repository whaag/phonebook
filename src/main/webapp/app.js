(function() {
    var app = angular.module('phonebook', []);

    app.controller('PhonebookController', function() {
        this.product = gem;
    });

    var gem = [
        {
        name: "Precious gem",
        price: 901.58,
        description: "a precious gem",
        canPurchase: true,
        soldOut: false
        },
        {
        name: "ok gem",
        price: 1.58,
        description: "a precious gem",
        canPurchase: true,
        soldOut: false
        },
        {
        name: "fake gem",
        price: 0.58,
        description: "a precious gem",
        canPurchase: true,
        soldOut: false
        }
    ]
})();