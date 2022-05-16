Feature: Women Category PageTest


  Scenario: User should navigate to WomenCategory page successfully
    Given I am on homepage
    When I click on Women link
    Then I should see the women message "Women"

  Scenario Outline: User should AddProductToTheCartSuccessfully
    Given I am on homepage
    When I click on Women link
    And  I click on product "<product>"from product
    And  I click on quantity "<qty>"from quntity
    And  I click on size "<size>"from size
    And  I click on colour "<colour>"from colour
    And  I click on add to cart button
    Then I should see the product message "Product successfully added to your shopping cart"
    And  I click on close button


    Examples:
      | product                                | qty | size | colour |
      | Blouse                                 | 2   | M    | White  |
      | Printed Dress                          | 3   | L    | Orange |
      | Printed Chiffon Dress                  | 4   | S    | Green  |
      | Printed Summer Dress with Price $28.98 | 2   | M    | Blue   |








