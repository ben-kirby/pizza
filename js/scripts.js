//bizniz logic
var pizzaOrder = {
  toppings: [],
  size: 0,
  quantity: 0,
  address: {
    addy1: "",
    addy2: "",
    city: "",
    state: "",
    zip: "",
  }
}

function toppings(){
  $("input:checkbox[name=toppings]:checked").each(function(){
    pizzaOrder.toppings.push($(this).val());
  });
}

//UI Logic------------------------------------------
$(document).ready(function(){

  $("#toppings").submit(function(event){
    toppings();

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
