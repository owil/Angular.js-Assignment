(function(){
	var app = angular.module('gemStore',[]);

	app.controller('StoreController',function(){
		this.products = [
		{
			gems,
			reviews: [
			{
				stars:5,
				body:"I love this product!",
				author:"joe@thomas.com"
			}]
		};
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
		this.review = {};

		this.addReview =function(product){
			product.reviews.push(this.review);
			this.review ={};
		};
	});

	var gems = [
		{
			name: 'Azurite',
			price:2.95,
			description: '. . .',
			canPurchase: false,
			soldOut:true,
			shine: 8,
			rarity: 6,
			color:'#CCC',
			faces: 14,
			images: [
				{
					full: "images/gem-01.gif",
					"images/gem-03.gif",
					"images/gem-04.gif"
				}],
		}
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
		}
		{
			name: 'Zircon',
			price:3.95,
			description: '. . .',
			canPurchase: true,
			soldOut:false,
		}
	];
})();