
	var app = angular.module('gemStore',[]);

	app.controller('StoreController',function(){
		this.products = gems;
	});

	app.controller("PanelController", function(){
		this.tab=1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	app.controller('TabController', function(){
		this.tab = 1;

		this.setTab = function(newValue){
			this.tab = newValue;
		};

		this.isSet = function(tabName){
			return this.tab === tabName;
		};
	});

	app.controller('GalleryController', function(){
		this.current = 0;
		this.setCurrent = function(newGallery){
			this.current = newGallery || 0;
		};
	});

	app.controller('ReviewController',function(){

		this.addReview =function(product){
			this.review.createdOn=Date.now();
			product.reviews.push(this.review);
			this.review ={};
		};
	});

	app.directive('productTitle',function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});

	var gems = [
		{
			"name": 'Azurite',
			"price": 2.95,
			"description": '. . .',
			"canPurchase": true,
			"soldOut": false,
			"shine": 8,
			"rarity": 6,
			"color":'#CCC',
			"faces": 14,
			"images": [
				{
					"full": "img1.jpg",
					"" : "img2.jpg"
				},
				{
					"full": "img3.jpg",
					"" : "img4.jpg"
				}
			],
			"reviews": [
				{
					"stars": 5,
					"body": "I love this product!",
					"author": "joe@thomas.com"
				}
			]
		},
		{
			name: 'Bloodstone',
			price:5.95,
			description: '. . .',
			canPurchase: false,
			soldOut:false,
			shine: 9,
			rarity: 6,
			color: '#EEE',
			faces: 12,
			"images": [
				{
					"full": "img1.jpg",
					"" : "img2.jpg"
				},
				{
					"full": "img3.jpg",
					"" : "img4.jpg"
				}
			],
			"reviews": [
				{
					"stars": 3,
					"body": "It's an okay product.",
					"author": "joe@thomas.com",
					"createdOn": "Jan-3-2014"
				}
			]
		},
		{
			name: 'Zircon',
			price:3.95,
			description: '. . .',
			canPurchase: true,
			soldOut:false,
			shine: 2,
			rarity: 4,
			color: '#ECE',
			faces: 7,
			"images": [],
			"reviews": [
				{
					"stars": 1,
					"body": "I want my money back!",
					"author": "joe@thomas.com"
				}
			]
		}
	];
