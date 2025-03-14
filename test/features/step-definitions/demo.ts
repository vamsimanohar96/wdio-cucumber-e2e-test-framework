import { Given, When, Then } from "@wdio/cucumber-framework";
import * as chai from "chai"


Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com/");

});


When(/^Search with (.*)$/, async function(searchItem){
console.log(`The search items is :: ${searchItem}`);
let ele = await $(`[name=q]`);
await ele.setValue(searchItem);
await browser.keys("Enter");


});

Then(/^click on first search result$/, async function()
{
    let ele = await $(`//h3`);
    await ele.click();

});

Then(/^url should match (.*)$/, async function(expectedURL){

    let currentURL = await browser.getUrl();
    console.log(`Current URL is : ${currentURL}`);
    chai.expect(currentURL).to.equal(expectedURL);


})

