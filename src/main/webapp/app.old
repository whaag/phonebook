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
        description: "dude...  I don't know about this one",
        canPurchase: true,
        soldOut: false
        },
        {
        name: "fake gem",
        price: 0.58,
        description: "she'll never notice it",
        canPurchase: true,
        soldOut: false
        }
    ]

    app.controller('PanelController', function() {
        this.tab = 1;
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });
})();