Feature: Account Test


  Scenario:User should create account successfully
    Given I am on homepage
    When I click on signIn link
    And  I click on account email "soft12345@gmail.com"
    And  I click on account create
    And  I click on account gender
    And  I enter account firstname "Johna"
    And  I enter account lastname  "Smith"
    And  I enter  account password "abc12345"
    And  I select  account birthdate  "15"
    And  I select  account birthmonth "11"
    And  I select  account birthyear "2005"
    And  I enter address firstname "Miss smith"
    And  I enter address lastname  "George"
    And  I enter address company "jvc ltd"
    And  I enter address line "10,west town"
    And  I enter address city "Leeds"
    And  I enter address state "Ohio"
    And  I enter address zipcode "32184"
    And  I enter address country "United States"
    And  I enter address info "Nothing"
    And  I enter address homephone "0778456321"
    And  I enter address mobilephone "01574562112"
    And  I enter address nameAddress "10,Liverpool Street"
    And  I click on register button
    Then I should see the message "MY ACCOUNT" myaccount
    And I should see the authentification message "AUTHENTICATION"






