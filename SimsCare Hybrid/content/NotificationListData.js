///<reference path="angular.js"/>


    angular.module('sushiMobileApp', [ 'kendo.directives' ])
    .run(['sushiCart', function(sushiCart){
      sushiCart.init();
    }])
    .service('sushiCart', function() {

      this.init = function() {
        //the application DataSource
        
          this.productsDataSource = menuJSON;
         /* this.productsDataSource = new kendo.data.DataSource({
          transport: {
            read: {
              url: "/echo",
              data: {
                "json" : JSON.stringify(menuJSON)
              },
              dataType: "json"
            }
          }
        });
          */
          
        //observable array that will be used to store products that user has selected
        this.added = new kendo.data.ObservableArray([]);
        //field that will hold reference to the last selected product (used for displaying the details)
        this.currentItem = null;
      };

    })
    .controller('indexController', ['$scope', 'sushiCart', function($scope, sushiCart) {
        $scope.sushiCart = sushiCart;
    }]);


 var menuJSON = [
      {
        "id": 1,
        "name": "Sashimi salad",
        "price": 12.00,
        "image": "sashimi-salad.jpg",
        "category": "Cold starters",
        "description": "Organic greens topped with market fresh sashimi, wasabi soy vinaigrette.",
        "featured": true
      },
      {
        "id": 2,
        "name": "Chirashi sushi",
        "price": 21.00,
        "image": "chirashi-sushi.jpg",
        "category": "Cold starters",
        "description": "Sushi bar variety with sushi rice.",
        "featured": false
      },
      {
        "id": 3,
        "name": "Seaweed salad",
        "price": 17.00,
        "image": "seaweed-salad.jpg",
        "category": "Cold starters",
        "description": "A nice seaweed salad.",
        "featured": true
      },
      {
        "id": 4,
        "name": "Edamame",
        "price": 4.00,
        "image": "edamame.jpg",
        "category": "Warm Starters",
        "description": "Boiled soy beans with salt ",
        "featured": true
      },
      {
        "id": 5,
        "name": "Miso soup",
        "price": 4.00,
        "image": "miso-soup.jpg",
        "category": "Warm Starters",
        "description": "Soy bean soup with Wacame seaweed, tofu and spring onion.",
        "featured": false
      },
      {
        "id": 6,
        "name": "Maguro",
        "price": 12.50,
        "image": "maguro.jpg",
        "category": "Sashimi",
        "description": "Tuna pieces.",
        "featured": true
      },
      {
        "id": 7,
        "name": "Shake",
        "price": 10.00,
        "image": "shake.jpg",
        "category": "Sashimi",
        "description": "",
        "featured": false
      },
      {
        "id": 8,
        "name": "Shiromi",
        "price": 9.50,
        "image": "shiromi.jpg",
        "category": "Sashimi",
        "description": "White fish pieces.",
        "featured": false
      },
      {
        "id": 9,
        "name": "Tekka maki",
        "price": 6.00,
        "image": "tekka-maki.jpg",
        "category": "Hosomaki",
        "description": "Tuna roll with wasabi. - 6 pieces",
        "featured": true
      },
      {
        "id": 10,
        "name": "Hosomaki Mix",
        "price": 17.00,
        "image": "hosomaki-mix.jpg",
        "category": "Hosomaki",
        "description": "18 pieces.",
        "featured": false
      },
      {
        "id": 11,
        "name": "California rolls",
        "price": 7.75,
        "image": "california-rolls.jpg",
        "category": "Traditionall Rolls",
        "description": "Crab sticks, avocado and cucumber. - 8 pieces",
        "featured": true
      },
      {
        "id": 12,
        "name": "Seattle rolls",
        "price": 8.00,
        "image": "seattle-rolls.jpg",
        "category": "Traditionall Rolls",
        "description": "Smoked salmon. Cucumber. Cream cheese.",
        "featured": false
      },
      {
        "id": 13,
        "name": "Spicy Tuna rolls",
        "price": 6.00,
        "image": "spicytuna-rolls.jpg",
        "category": "Traditionall Rolls",
        "description": "Spicy tuna, spring onion and avocado. - 6 pieces",
        "featured": true
      },
      {
        "id": 14,
        "name": "Ebi rolls",
        "price": 8.00,
        "image": "ebi-rolls.jpg",
        "category": "Traditionall Rolls",
        "description": "King prawns, avocado and asparagus. - 8 pieces",
        "featured": false
      },
      {
        "id": 15,
        "name": "Chicken Teriyaki",
        "price": 12.00,
        "image": "chicken-teriyaki.jpg",
        "category": "Hot Dishes",
        "description": "Sauted chicken with teiyaki sauce.",
        "featured": false
      },
      {
        "id": 16,
        "name": "Salmon Teriyaki",
        "price": 13.50,
        "image": "salmon-teriyaki.jpg",
        "category": "Hot Dishes",
        "description": "Sauted salmon with teriyaki sauce.",
        "featured": true
      },
      {
        "id": 17,
        "name": "Gohan",
        "price": 3.00,
        "image": "gohan.jpg",
        "category": "Hot Dishes",
        "description": "Steamed rice.",
        "featured": false
      },
      {
        "id": 18,
        "name": "Tori Katsu",
        "price": 11.00,
        "image": "tori-katsu.jpg",
        "category": "Hot Dishes",
        "description": "Pan-fried chicken breast with yasai salad.",
        "featured": false
      },
      {
        "id": 19,
        "name": "Yaki Udon",
        "price": 11.50,
        "image": "yaki-udon.jpg",
        "category": "Hot Dishes",
        "description": "Udon noddles with chicken, king prawns and vegetables.",
        "featured": true
      }
    ]




/*
var NotificationApp = angular.module('NotificationApp', []);
NotificationApp.controller("DashboardController", function ($scope){
    
    $scope.students = 
    [
        { name: "Andrew Fuller", description: "VICE PRESIDENT, SALES", url: "http://demos.telerik.com/kendo-ui/content/shared/images/employees/1.png"},
        { name: "Janet Leverling", description: "SALES REPRESENTATIVE", url: "http://demos.telerik.com/kendo-ui/content/shared/images/employees/2.png"},
        { name: "Laura Callahan", description: "INSIDE SALES COORDINATOR", url: "http://demos.telerik.com/kendo-ui/content/shared/images/employees/3.png"},
        { name: "Steven Buchanan", description: "SALES MANAGER", url: "http://demos.telerik.com/kendo-ui/content/shared/images/employees/4.png"},
        { name: "Michael Suyama", description: "SALES REPRESENTATIVE", url: "http://demos.telerik.com/kendo-ui/content/shared/images/employees/5.png"},
        { name: "Anne Dodsworth", description: "SALES REPRESENTATIVE", url: "http://demos.telerik.com/kendo-ui/content/shared/images/employees/6.png"},
        { name: "Margaret Peacock", description: "SALES REPRESENTATIVE", url: "http://demos.telerik.com/kendo-ui/content/shared/images/employees/7.png"},
        { name: "Nancy Davolio", description: "SALES REPRESENTATIVE", url: "http://demos.telerik.com/kendo-ui/content/shared/images/employees/8.png"},
        { name: "Robert King", description: "SALES REPRESENTATIVE", url: "http://demos.telerik.com/kendo-ui/content/shared/images/employees/9.png"}      
    ];
    
    $scope.students = 
    [
        { name: "Andrew Fuller", description: "VICE PRESIDENT, SALES", url: "../content/shared/images/employees/1.png"},
        { name: "Janet Leverling", description: "SALES REPRESENTATIVE", url: "../content/shared/images/employees/1.png"},
        { name: "Laura Callahan", description: "INSIDE SALES COORDINATOR", url: "../content/shared/images/employees/1.png"},
        { name: "Steven Buchanan", description: "SALES MANAGER", url: "../content/shared/images/employees/1.png"},
        { name: "Michael Suyama", description: "SALES REPRESENTATIVE", url: "../content/shared/images/employees/1.png"},
        { name: "Anne Dodsworth", description: "SALES REPRESENTATIVE", url: "../content/shared/images/employees/1.png"},
        { name: "Margaret Peacock", description: "SALES REPRESENTATIVE", url: "../content/shared/images/employees/1.png"},
        { name: "Nancy Davolio", description: "SALES REPRESENTATIVE", url: "../content/shared/images/employees/1.png"},
        { name: "Robert King", description: "SALES REPRESENTATIVE", url: "../content/shared/images/employees/1.png"}      
    ];    
      
    
});
*/