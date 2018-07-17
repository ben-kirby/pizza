//bizniz logic
var pizzaOrder = {
  toppings: [],
  size: 0,
  quantity: 0,
  addy1: "",
  addy2: "",
  city: "",
  state: "",
  zip: ""
};
var finalOrder = {
  addressString: "",
  price: 0,
  size: ""
};


//-----------------------------------------
//get toppings
function getToppings(){
  $("input:checkbox[name=toppings]:checked").each(function(){
    pizzaOrder.toppings.push($(this).val());
  });
};

//get the size
function getSize(){
  pizzaOrder.size = parseInt(document.getElementById("sizeOptions").value);
};

//get the number of pizzas they want
function getQuantity(){
  pizzaOrder.quantity = parseInt(document.getElementById("quantityInput").value);
};

//get their address
function getAddress(){
  pizzaOrder.addy1 = document.getElementById("inputAddress").value;
  pizzaOrder.addy2 = document.getElementById("inputAddress2").value;
  pizzaOrder.city = document.getElementById("inputCity").value;
  pizzaOrder.state = document.getElementById("inputState").value;
  pizzaOrder.zip = document.getElementById("inputZip").value;
};


//-----------------------------------------
//turn the address variables into a formatted address
function addressConstructor(){
  if (pizzaOrder.addy2 != "") {
    finalOrder.addressString = pizzaOrder.addy1 + "<br>" + pizzaOrder.addy2 + "<br>" + pizzaOrder.city + ", " + pizzaOrder.state + " " + pizzaOrder.zip;
  }
  else {
    finalOrder.addressString = pizzaOrder.addy1 + "<br>" + pizzaOrder.city + ", " + pizzaOrder.state + " " + pizzaOrder.zip;
  }
};

//translate the size from a number to a string
function sizeConstructor(){
  if (pizzaOrder.size === 0) {
    finalOrder.size = "Bagel";
  }
  else if (pizzaOrder.size === 1) {
    finalOrder.size = "Frisbee";
  }
  else if (pizzaOrder.size === 2) {
    finalOrder.size = "Sauce Pan";
  }
  else if (pizzaOrder.size === 3) {
    finalOrder.size = "Trick Tire";
  }
  else if (pizzaOrder.size === 4) {
    finalOrder.size = "Moon";
  }
};

//calculate the price
function priceCalculation(){
  var toppingsPrice = ((pizzaOrder.toppings.length * 2.5) * (pizzaOrder.size + 1));
  console.log(toppingsPrice);

  var sizePrice;

  if (pizzaOrder.size === 0) {
    sizePrice = 8;
  }
  else if (pizzaOrder.size === 1) {
    sizePrice = 15;
  }
  else if (pizzaOrder.size === 2) {
    sizePrice = 20;
  }
  else if (pizzaOrder.size === 3) {
    sizePrice = 65;
  }
  else if (pizzaOrder.size === 4) {
    sizePrice = 5500;
  }

  finalOrder.price = (toppingsPrice + sizePrice) * pizzaOrder.quantity;
  toppingsPrice = 0;
  sizePrice = 0;
};


//-----------------------------------------
//reset all the values
function reset(){
  pizzaOrder.toppings = [];
  pizzaOrder.size = 0;
  pizzaOrder.quantity = 0;
  pizzaOrder.addy1 = "";
  pizzaOrder.addy2 = "";
  pizzaOrder.city = "";
  pizzaOrder.state = "";
  pizzaOrder.zip = "";
  finalOrder.addressString = "";
  finalOrder.price = 0;
  finalOrder.size = "";
}


//UI Logic------------------------------------------
$(document).ready(function(){

  $("#toppings").submit(function(event){
    getToppings();

    $(".toppings").hide();
    $(".size").show();

    event.preventDefault();
  });
  $("#size").submit(function(){
    getSize();

    $(".size").hide();
    $(".quantity").show();

    event.preventDefault();
  });
  $("#quantity").submit(function(){
    getQuantity();

    $(".quantity").hide();
    $(".address").show();

    event.preventDefault();
  });
  $("#address").submit(function(){
    getAddress();
    //prep the results for orer confirmation
    addressConstructor();
    sizeConstructor();
    priceCalculation();
//append the values for the order confirmation
    for (var i = 0; i < pizzaOrder.toppings.length; i++) {
      $("#toppingsList").append("<li>" + pizzaOrder.toppings[i] + "</li>");
    }
    $("#sizeCell").append(finalOrder.size);
    $("#quantityCell").append(pizzaOrder.quantity);
    $("#addressCell").append(finalOrder.addressString);
    $("#priceCell").append("$" + finalOrder.price);

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
