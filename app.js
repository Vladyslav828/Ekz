(function () {
    'use strict';

    var factory2 = new ShoppingListService();

    angular.module('ControllerAsApp', [])
        .controller('ShoppingListController1', ShoppingListController1)
        .factory('ShoppingListFactory', ShoppingListFactory);

    ShoppingListController1.$inject = ['ShoppingListFactory'];

    function ShoppingListController1(ShoppingListFactory) {
        var list1 = this;

        var shoppingList = ShoppingListFactory();

        list1.item = shoppingList.getItems();

        list1.removeItem = function (index) {
            shoppingList.removeItem(index);
        };
        list1.hide = function(index){
            shoppingList.hide(index);
        }
    }

    function ShoppingListService() {
        var service = this;

        var items = [
        {
                mark: "Молоко",
                quantity: 125,
                show : true
            },
            {
                mark: "Гарний йогурт",
                quantity: 95,
                 show : true
            },
            {
                mark: "Найкращий йогурт",
                quantity: 12,
                 show : true
            },
            {
                mark: "Йогурт №1 в Україні",
                quantity: 39,
                 show : true
            },
            {
                mark: "Файний йогурт",
                quantity: 4,
                 show : true
            },
            {
                mark: "Наш йогурт",
                quantity: 33,
                 show : true
            },
        ];

        service.removeItem = function (itemIndex) {
            items.splice(itemIndex, 1);
        };

        service.getItems = function () {
            return items;
        };
            service.hide = function(index)
        {
             items[index].show = false;
        }
    }

    function ShoppingListFactory() {
        var factory = function () {
            return factory2;
        };
        return factory;
    }
})();
