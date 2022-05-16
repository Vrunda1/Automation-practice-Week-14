package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.SignInPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SignPageTest {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {

    }

    @When("^I click on signIn link$")
    public void iClickOnSignInLink() {
        new HomePage().clickOnSignInHeader();
    }

    @Then("^I should see the authentification message \"([^\"]*)\"$")
    public void iShouldSeeTheAuthentificationMessage(String text){
        Assert.assertEquals("cannot see message ",text,new SignInPage().getAuthentificationText1());
    }

    @And("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String mail) {
        new SignInPage().enterEmail(mail);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String pw) {
        new SignInPage().enterPassword(pw);
    }


    @And("^I click on signIn button$")
    public void iClickOnSignInButton() {
        new SignInPage().clickOnSignIn();
    }

    @Then("^I should see the  error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String error){
        Assert.assertEquals("Cannot see error text ",error,new SignInPage().getErrorMsg());
    }
      @Then("^I should see the \"([^\"]*)\" link on top menu$")
    public void iShouldSeeTheLinkOnTopMenu(String signIn) {
          Assert.assertEquals("Cannot see signIn ",signIn,new SignInPage().verifySignInText());

    }

    @And("^I click on signout link$")
    public void iClickOnSignoutLink() {
        new SignInPage().clickOnSignOutLink();
    }

    @Then("^I should see the signOut \"([^\"]*)\" link$")
    public void iShouldSeeTheSignOutLink(String signOut) {
        Assert.assertEquals("Cannot see signOut ", signOut, new SignInPage().verifySignOut());
    }
}
