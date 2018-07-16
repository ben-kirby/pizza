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
var finalOrder{
  addressString: "",
  price: 0,

}

function toppings(){
  $("input:checkbox[name=toppings]:checked").each(function(){
    pizzaOrder.toppings.push($(this).val());
  });
};

function size(){
  pizzaOrder.size = parseInt(document.getElementById("sizeOptions").value);
};

function quantity(){
  pizzaOrder.quantity = parseInt(document.getElementById("quantityInput").value);
};

function address(){
  pizzaOrder.addy1 = document.getElementById("inputAddress").value;
  pizzaOrder.addy2 = document.getElementById("inputAddress2").value;
  pizzaOrder.city = document.getElementById("inputCity").value;
  pizzaOrder.state = document.getElementById("inputState").value;
  pizzaOrder.zip = document.getElementById("inputZip").value;

/*  if (addy2 != "") {
    addressString = pizzaOrder.addy1 + "<br>" + pizzaOrder.addy2 + "<br>" + pizzaOrder.city + ", " + pizzaOrder.state + " " + pizzaOrder.zip;
  }
  else {
    addressString = pizzaOrder.addy1 + "<br>" + pizzaOrder.city + ", " + pizzaOrder.state + " " + pizzaOrder.zip;
  };
*/
}

function quantityCalculation(){
  if (pizzaOrder.size = ) {

  }
}
function priceCalculation(){
  var toppingsPrice = ((pizzaOrder.toppings.length * 2.5) * (pizzaOrder.toppings.size + 1));

  var sizePrice = 0;
  if (size === 0) {
    sizePrice = 8;
  }
  else if (size === 1) {
    sizePrice = 15;
  }
  else if (size === 2) {
    sizePrice = 20;
  }
  else if (size === 3) {
    sizePrice = 65;
  }
  else if (size === 4) {
    sizePrice = 5500;
  }

  price = (toppingsPrice + sizePrice) * pizzaOrder.quantity;
};

//UI Logic------------------------------------------
$(document).ready(function(){

  $("#toppings").submit(function(event){
    toppings();

    $(".toppings").hide();
    $(".size").show();

    event.preventDefault();
  });

  $("#size").submit(function(){
    size();

    $(".size").hide();
    $(".quantity").show();

    event.preventDefault();
  });

  $("#quantity").submit(function(){
    quantity();

    $(".quantity").hide();
    $(".address").show();

    event.preventDefault();
  });

  $("#address").submit(function(){
//get the address values
    address();
//prep the results for orer confirmation
//toppings
    for (var i = 0; i < pizzaOrder.toppings.length; i++) {
      $("#toppingsList").append("<li>" + pizzaOrder.toppings[i] + "</li>");
    }
//size
    $("#orderConfirmation").append();
//quantity
    $("#orderConfirmation").append("<td>" + pizzaOrder.quantity + "</td>");

//address
    $("#orderConfirmation").append("<td>" + addressString + "</td>");
//price
    $("#orderConfirmation").append("$" + price);


    $(".address").hide();
    $(".success").show();

    event.preventDefault();
  });

  $("#reset").click(function(){
    $(".success").hide();
    $(".toppings").show();

    event.preventDefault();
  });
});
