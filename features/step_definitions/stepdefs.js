const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');


Given ('the client is {string}', function (client) {
    this.client = client;
})

Given ('the client bought {int}', function (amountOfBooks) {
  this.amountOfBooks = amountOfBooks;
})

When('the client wants to pay for the cart', function () {
  this.delivery = isDeliveryFree(this.client, this.amountOfBooks);
});

Then('the delivery should be {string}', function (delivery) {
  assert.equal(this.delivery, delivery);
});



function isDeliveryFree(client, amountOfBooks) {
  if (client === "VIP" && amountOfBooks >= 5) {
    return "free";
  } else {
    return "charged";
  }
}
