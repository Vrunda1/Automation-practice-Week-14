package com.automation.steps;

import com.automation.pages.CreateAccountPage;
import com.automation.pages.HomePage;
import com.automation.pages.ProductPage;
import com.automation.pages.WomenCategoryPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class WomenCategoryPageTest {
    @When("^I click on Women link$")
    public void iClickOnWomenLink() {
        new HomePage().clickOnWomenHeader();
    }

    @Then("^I should see the women message \"([^\"]*)\"$")
    public void iShouldSeeTheWomenMessage(String text) {
        Assert.assertEquals("Cannot see women text ",text,new WomenCategoryPage().getWomenText());
    }


    @And("^I click on quantity \"([^\"]*)\"from quntity$")
    public void iClickOnQuantityFromQuntity(String qunt){
        new ProductPage().clearQuantity();
        new ProductPage().enterQuantity(qunt);

    }

    @And("^I click on product \"([^\"]*)\"from product$")
    public void iClickOnProductFromProduct(String prods) {
        new WomenCategoryPage().selectProduct(prods);
    }

    @And("^I click on size \"([^\"]*)\"from size$")
    public void iClickOnSizeFromSize(String size) {
        new ProductPage().selectSize(size);

    }

    @And("^I click on colour \"([^\"]*)\"from colour$")
    public void iClickOnColourFromColour(String col) {
        new ProductPage().selectColour(col);
    }

    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new ProductPage().clickOnAddToCart();
    }

    @Then("^I should see the product message \"([^\"]*)\"$")
    public void iShouldSeeTheProductMessage(String text) {
        try { Thread.sleep(5000);
            Assert.assertEquals("Cannot displayed message ",text,new ProductPage().verifyProductAddedToCartMessage());
        }catch(Exception e){
            //handle exception
        }
    }

    @And("^I click on close button$")
    public void iClickOnCloseButton() {
        new ProductPage().clickOnCloseButton();
    }
}

