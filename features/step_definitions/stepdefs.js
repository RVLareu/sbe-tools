const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isShipmentFree(client, amountOfBooks) {
    if (client === "VIP" && amountOfBooks >= 5) {
      return "free";
    } else {
      return "charged";
    }
  }
  

Given ('the client is {string}', function (client) {
    this.client = client;
})

Given ('the client bought {int}', function (amountOfBooks) {
  this.amountOfBooks = amountOfBooks;
})


When('the client wants to pay for the cart', function () {
  this.shipment = isShipmentFree(this.client, this.amountOfBooks);
});

Then('the shipment should be {string}', function (shipment) {
  assert.equal(this.shipment, shipment);
});
