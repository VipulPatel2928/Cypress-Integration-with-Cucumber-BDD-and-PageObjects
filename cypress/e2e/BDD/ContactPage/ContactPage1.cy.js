import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

import ContactPageActions from "../../../pageobject/pageactions/ContactPageActions.cy";
const contactactions = new ContactPageActions;

Given('Open given url1',()=>{
    contactactions.openURL1()
})

Then('verify the page title1',()=>{
   contactactions.verifyPagetitle1();
    
})

Given("Verify current page URL1", function () {
   contactactions.verifyPagecurrentURL1()
    });