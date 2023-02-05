import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import ContactPageActions from "../../../pageobject/pageactions/ContactPageActions.cy";
const contactactions = new ContactPageActions;

Given('Open given url2', () => {
   contactactions.openURL2()
})

Then('verify the page title2', () => {
   contactactions.verifyPagetitle2();

})

Given("Verify current page URL2", function () {
   contactactions.verifyPagecurrentURL2()
});

Then("select Inquiry for", function () {
   contactactions.SelectInqueryFor('Selenium - Advanced');
});

Then("enter First name and last name", function () {
   contactactions.enterFirstLastName('Vipul', 'Patel')
});

Then("enter mobile no", function () {
   contactactions.enterMobileNo('9638527412')
});

Then("enter email", function () {
   contactactions.enterEmail('inquiry@techivp.com')
});

Then("enter message", function () {
   contactactions.enterMessage('Hi There, I would like to register as student and like to learn Advanced Selenium. Please let me know about the fees and course duration')
});

Then("I Enter", function (dataTable) {
   dataTable.hashes().forEach(Element=>{
      contactactions.enterFirstLastName(Element.firstname,Element.lastname)
      contactactions.enterMobileNo(Element.mobileno)
      contactactions.enterEmail(Element.email)
      contactactions.enterMessage(Element.message)
   })
})

When("Click Submit button", function () {
   contactactions.clickSubmitBtn();
})
Then("Verify Blank Fields Validation", function () {
   contactactions.firstLastNameValidation('This field is required.');
   contactactions.mobileValidation('This field is required.');
   contactactions.emailValidation('This field is required.');
   contactactions.messageValidation('This field is required.');
})



