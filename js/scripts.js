//bizniz logic
var inputToppings = [];
var inputSize;
var inputQuantity;
/*var inputAddy1;
var inputAddy2;
var inputCity;
var inputState;
var inputZip;*/
var pizzaPie;
var newAddress;

var finalOrder = {
  addressString: "",
  price: 0,
  size: ""
};

function pizza(toppings, size, quantity){
  this.toppings = toppings;
  this.size = size;
  this.quantity = quantity;
}

function address(inputAddy1, inputAddy2, inputCity, inputState, inputZip){
  this.inputAddy1 = inputAddy1;
  this.inputAddy2 = inputAddy2;
  this.inputCity = inputCity;
  this.inputState = inputState;
  this.inputZip = inputZip;
}


//-----------------------------------------
//get toppings
function getToppings(){
  $("input:checkbox[name=toppings]:checked").each(function(){
    inputToppings.push($(this).val());
  });

};

//get the size
function getSize(){
  inputSize = parseInt(document.getElementById("sizeOptions").value);
};

//get the number of pizzas they want
function getQuantity(){
  inputQuantity = parseInt(document.getElementById("quantityInput").value);
};

//get their address
function getAddress(){
  var inputAddy1 = document.getElementById("inputAddress").value;
  var inputAddy2 = document.getElementById("inputAddress2").value;
  var inputCity = document.getElementById("inputCity").value;
  var inputState = document.getElementById("inputState").value;
  var inputZip = document.getElementById("inputZip").value;
  var newAddress = new address(inputAddy1, inputAddy2, inputCity, inputState, inputZip)
  address.prototype.fullAddress = function(){
    if (this.inputAddy2 != "") {
      return this.inputAddy1 + "<br>" + this.inputAddy2 + "<br>" + this.inputCity + ", " + this.inputState + " " + this.inputZip;
    }
    else {
      return this.inputAddy1 + "<br>" + this.inputCity + ", " + this.inputState + " " + this.inputZip;
    }
  }
$("#orderConfirmation").append("<td><span>" + newAddress.fullAddress() + "</span></td>");
};

function pizzaConstructors(){
  pizzaPie = new pizza(inputToppings, inputSize, inputQuantity)
}

function addressConstructor(){
};


//-----------------------------------------
//turn the address variables into a formatted address
//translate the size from a number to a string
function sizeConstructor(){
  if (inputSize === 0) {
    finalOrder.size = "Bagel";
  }
  else if (inputSize === 1) {
    finalOrder.size = "Frisbee";
  }
  else if (inputSize === 2) {
    finalOrder.size = "Sauce Pan";
  }
  else if (inputSize === 3) {
    finalOrder.size = "Trick Tire";
  }
  else if (inputSize === 4) {
    finalOrder.size = "Moon";
  }
};

//calculate the price
function priceCalculation(){
  var toppingsPrice = ((inputToppings.length * 2.5) * (inputSize + 1));
  console.log(toppingsPrice);

  var sizePrice;

  if (inputSize === 0) {
    sizePrice = 8;
  }
  else if (inputSize === 1) {
    sizePrice = 15;
  }
  else if (inputSize === 2) {
    sizePrice = 20;
  }
  else if (inputSize === 3) {
    sizePrice = 65;
  }
  else if (inputSize === 4) {
    sizePrice = 5500;
  }

  finalOrder.price = (toppingsPrice + sizePrice) * inputQuantity;
  toppingsPrice = 0;
  sizePrice = 0;
};


//-----------------------------------------
//reset all the values
function reset(){
  inputToppings = [];
  inputSize = 0;
  inputQuantity = 0;
  inputAddy1 = "";
  inputAddy2 = "";
  inputCity = "";
  inputState = "";
  inputZip = "";
  finalOrder.addressString = "";
  finalOrder.price = 0;
  finalOrder.size = "";
  document.getElementById("toppings").reset();
  document.getElementById("size").reset();
  document.getElementById("quantity").reset();
  document.getElementById("address").reset();
}


//UI Logic------------------------------------------
$(document).ready(function(){

  $("#toppings").submit(function(){
    $(".toppings").hide();
    $(".size").show();
    event.preventDefault();
  });

  $("#size").submit(function(){
    $(".size").hide();
    $(".quantity").show();
    event.preventDefault();
  });

  $("#quantity").submit(function(){
    $(".quantity").hide();
    $(".address").show();
    event.preventDefault();
  });

  $("#address").submit(function(){
//get everything
    getToppings();
    getSize();
    getQuantity();


//prep the results for orer confirmation
    sizeConstructor();
    priceCalculation();
    pizzaConstructors();
    addressConstructor();



//make the pizza object

//append the values for the order confirmation
    $("#orderConfirmation").append("<tr><td><ul>");
    for (var i = 0; i < inputToppings.length; i++) {
        $("#orderConfirmation").append("<li>" + inputToppings[i] + "</li>");
      };
    $("#orderConfirmation").append("</ul></td>");
    $("#orderConfirmation").append("<td>" + finalOrder.size + "</td>");
    $("#orderConfirmation").append("<td>" + pizzaPie.quantity + "</td>");
    getAddress();
    $("#orderConfirmation").append("<td>" + "$" + finalOrder.price + "</td></tr><br>");

    $(".address").hide();
    $(".success").show();

    event.preventDefault();
  });

  $("#reset").click(function(){
    reset();

    $(".success").hide();
    $(".toppings").show();

    event.preventDefault();
  });
});
