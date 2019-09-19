
// creating our class
function Car(type, color, speed, image, price, madeDate, addDate){
  var car = {};
  car.type = type;
  car.color = color;
  car.speed = speed; 
  car.madeDate = madeDate;
  car.addDate = addDate;
  car.image = image;
  car.price = price;
  car.rented = 0; // 1 means rented, 0 not rented
  car.setRent = setRent; // change the value of rented;
  return car;
}

// the function is used when we rent the car.
function setRent(status) {
  this.rented = status;
}

var car1 = Car('tyota', 'white', '200km', 'car1.jpg','200$', '12/3/2015', '3/9/2019');
var car2 = Car('porsh', 'black', '100km', 'car2.jpg', '100$','12/4/2015', '2/9/2019');
var car3 = Car('mercedec', 'red', '50km', 'car3.jpg', '250$','12/5/2015', '4/9/2019');
var car4 = Car('ferrari', 'yellow', '320km', 'car4.jpg', '50$','12/6/2015', '5/9/2019');
var car5 = Car('volks wagn', 'grey', '600km', 'car5.jpg', '70$','12/7/2015', '6/9/2019');

var cars = [car1, car2, car3, car4, car5];

function getAvailableCars(carsArr){

	return carsArr.filter(function(car){
      return car.rented === 0;
	});
}

function getCarInfo(carsArr,type){
  return carsArr.filter(function(car){
      return car.type === type;
  });
}

// loading car images to the page
function viewImages(cars){
  var availableCars = getAvailableCars(cars);
  $.each(availableCars,function(index, car){
    $('#cars-imgs').append('<div class="car-img-info"><img src="' + car.image + '" /><a href="#">' + car.type + '</a></div>');
  });
}

viewImages(cars);
  
$('a').on('click',function(){
  var car = getCarInfo(cars, $(this).text());

  $('#car-info').html('');  
  $('#car-info').append('<h2 >Car Information</h2>');
  $('#car-info').append('<img src="' + car[0].image + '" />');
  $('#car-info').append('<ul></ul>');
  $('#car-info ul').append('<li> Type :' + car[0].type + '</li>');
  $('#car-info ul').append('<li> Color :' + car[0].color + '</li>');
  $('#car-info ul').append('<li> Speed :' + car[0].speed + '</li>');
  $('#car-info ul').append('<li> Made Date :' + car[0].madeDate + '</li>');
  $('#car-info ul').append('<li> Add Date :' + car[0].addDate + '</li>');
  $('#car-info ul').append('<li> Price :' + car[0].price + '</li>');
  $('#car-info').append('<button id="rent">Rent Now</button>');

});


