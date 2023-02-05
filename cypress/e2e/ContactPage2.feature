Feature: Contact Page functionality2

    Checking the available functionality on contact Page

Background: 
 Given Open given url2

@Smoke
    Scenario: Verify page title2   
    Then verify the page title2

    Scenario: Verify current page URL2   
    Then Verify current page URL2

    Scenario: Fill the enquery form
    Then select Inquiry for
    Then enter First name and last name
    Then enter mobile no
    Then enter email
    Then enter message

    Scenario: Fill the enquery form
    Then select Inquiry for
    Then I Enter
     |firstname|lastname|mobileno|email|message|
     |Vip|Pat|1111111111|xyz@techivp.com|Hi This is data table|

    Scenario: Fill ENQUIRE NOW form Blank field Verification
    When Click Submit button
    Then Verify Blank Fields Validation