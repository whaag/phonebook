(function() {
    var app = angular.module('phonebook', []);

    app.controller('ListController', function() {
        this.people = people;
    });

    var people = [
        {
            name: 'Eduardo Um',
            phone: '555-2555'
        },
        {
            name: 'Eduardo Dois',
            phone: '555-2555'
        },
        {
            name: 'Eduardo T43w',
            phone: '555-2555'
        },
        {
            name: 'Eduardo Quatro',
            phone: '555-2555'
        }
    ];
})();