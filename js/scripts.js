// This is the business (or back-end) logic:
function Pizza(customerName, pizzaSize, pizzaToppings) { //constructor/blue print \
  this.orderNumber;
  this.customerName = customerName;
  this.deliveryAddress;
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.homeDeliveryStatus;
  this.approxDeliveryTime;
  this.totalPrice
}

Pizza.prototype.orderNoGenEstDeliveryTime = function () {
  var currentTime = new Date();
  var orderNumber = currentTime.getTime();
  approxDeliveryTime = new Date(currentTime);
  approxDeliveryTime.setMinutes(currentTime.getMinutes() + 30);
  var index = String(approxDeliveryTime).indexOf("GMT");
  if (index > 0) {
    approxDeliveryTime = String(approxDeliveryTime).substring(0, index);
  }
  //console.log("CALLED from within function: Truncated Time is " + approxDeliveryTime);
  var timeElements = approxDeliveryTime.split(" ");
  //return this.approxDeliveryTime = timeElements[4] + " PST " + timeElements[0] + " " + timeElements[1]+ " " + timeElements[2]+ " " + timeElements[3];
  this.approxDeliveryTime = timeElements[4] + " PST " + timeElements[0] + " " + timeElements[1] + " " + timeElements[2] + " " + timeElements[3];
  this.orderNumber = orderNumber;
}

Pizza.prototype.renderToppingList = function () {
  var toppingList = $("ol#toppings");
  var htmlForToppingList = "";
  this.pizzaToppings.forEach(function (pizzaTopping) {
    htmlForToppingList += "<li><span class=\"blueColor\">" + pizzaTopping + "</span></li>";
  });
  toppingList.html(htmlForToppingList);
};


Pizza.prototype.calculatePrice = function (pizzaSize, pizzaToppings) {
  var totalPrice = 0;
  var sizePrice = 0;
  switch (this.pizzaSize) {
    case 'ExtraLarge':
      sizePrice = 14;
      //console.log('Loop: ExtraLarge Pizza Costs $14.');
      break;
    case 'Large':
      sizePrice = 12;
      //console.log('Loop:Large Pizza Costs $12.');
      break;
    case 'Medium':
      sizePrice = 10;
      //console.log('Loop:Medium Pizza Costs $10.');
      break;
    case 'Small':
      sizePrice = 8;
      //console.log('Loop:Small Pizza Costs $8.');
      break;
  }
  this.totalPrice = sizePrice + (this.pizzaToppings.length * 1);
  //console.log(`Length:Calculated price::${this.pizzaToppings.length}:${this.totalPrice}`);
  return this.totalPrice;
}


// Everything below this line is the user interface (or front-end) logic:
$(document).ready(function () {
  $('#restart').click(function () {
    document.location.reload(true);       //Reload Page
  });
  $('#formOne').submit(function () {
    event.preventDefault();
    $("#toppingsDiv").hide();
    var customerName = "";
    var deliveryAddress = "";
    var pizzaSize = "";
    var pizzaToppings = [];
    var homeDeliveryStatus = false;
    var atLeastOneToping = false;

    var newOrder = new Pizza(customerName, pizzaSize, pizzaToppings);
    newOrder.orderNoGenEstDeliveryTime();  //Generates Order# based off Epoch time; Estimates delivery time be adding 30 mins to order placement time

    $("input:checkbox[name=deliveryAddress]:checked").each(function () {
      newOrder.deliveryAddress = $('#deliveryAddress').val();
      $('input[type="text"], textarea').val('');  // to clear form of entered value after submit  
      newOrder.homeDeliveryStatus = true;
    });

    newOrder.customerName = $("#cusName").val();
    $('input[type="string"], textarea').val('');  // to clear form of entered value after submit
    newOrder.pizzaSize = $(".pizzaSize").val();

    $("input:checkbox[name=pizzaTopping]:checked").each(function () {
      newOrder.pizzaToppings.push($(this).val());
      atLeastOneToping = true;
    });
    $("input[type=checkbox]").each(function () { this.checked = false; }); //to uncheck previously checked checkboxes

    newOrder.totalPrice = newOrder.calculatePrice(this.pizzaSize, this.pizzaToppings)
    $("#totalAmount").text("$" + newOrder.totalPrice);
    if (atLeastOneToping === true) { //List toppings only if 1 or more topping were chosen
      $("#showToppings").show();
      newOrder.renderToppingList();
    }
    $("#customerName").text(newOrder.customerName);
    $("#orderNumber").text(newOrder.orderNumber);
    if (newOrder.homeDeliveryStatus === true) { 
      $("#address").text(newOrder.deliveryAddress);
      $("#approximatedTime").text(newOrder.approxDeliveryTime);
      $("#showAddress").show();
    }
    $("#showPrice").show();
    console.log(newOrder);
  });
});