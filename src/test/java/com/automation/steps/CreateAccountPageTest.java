package com.automation.steps;

import com.automation.pages.CreateAccountPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class CreateAccountPageTest {
    @And("^I click on account create$")
    public void iClickOnAccountCreate() {
        new CreateAccountPage().clickOnCreateAccoutnButton();

    }

    @And("^I click on account email \"([^\"]*)\"$")
    public void iClickOnAccountEmail(String mail) {
        new CreateAccountPage().enterAccountEmail(mail);
    }


    @And("^I click on account gender$")
    public void iClickOnAccountGender() {
        new CreateAccountPage().clickOnGenderRadioBtn();
    }

    @And("^I enter account firstname \"([^\"]*)\"$")
    public void iEnterAccountFirstname(String fname) {
        new CreateAccountPage().enterFirstName(fname);
    }


    @And("^I enter account lastname  \"([^\"]*)\"$")
    public void iEnterAccountLastname(String lname) {
        new CreateAccountPage().enterLastName(lname);
    }

    @And("^I enter  account password \"([^\"]*)\"$")
    public void iEnterAccountPassword(String pw) {
        new CreateAccountPage().enterPassword(pw);
    }

    @And("^I select  account birthdate  \"([^\"]*)\"$")
    public void iSelectAccountBirthdate(String date) {
        new CreateAccountPage().selectBirthdate(date);
    }

    @And("^I select  account birthmonth \"([^\"]*)\"$")
    public void iSelectAccountBirthmonth(String mon) {
        new CreateAccountPage().selectBirthMonth(mon);
    }

    @And("^I select  account birthyear \"([^\"]*)\"$")
    public void iSelectAccountBirthyear(String yr) {
        new CreateAccountPage().selectBirthYear(yr);
    }
       @And("^I enter address firstname \"([^\"]*)\"$")
    public void iEnterAddressFirstname(String firstname) {
        new CreateAccountPage().enteraddresFirstname(firstname);
    }

    @And("^I enter address lastname  \"([^\"]*)\"$")
    public void iEnterAddressLastname(String lastname) {
        new CreateAccountPage().enteraddressLastname(lastname);
    }

    @And("^I enter address company \"([^\"]*)\"$")
    public void iEnterAddressCompany(String comp) {
        new CreateAccountPage().enteraddressCompany(comp);
    }

    @And("^I enter address office \"([^\"]*)\"$")
    public void iEnterAddressOffice(String off) {
        new CreateAccountPage().enteraddressOffice(off);
    }

      @And("^I enter address line \"([^\"]*)\"$")
    public void iEnterAddressLine(String add) {
        new CreateAccountPage().enteraddressOffice(add);
    }

    @And("^I enter address city \"([^\"]*)\"$")
    public void iEnterAddressCity(String city) {
        new CreateAccountPage().enteraddressCity(city);
    }

    @And("^I enter address state \"([^\"]*)\"$")
    public void iEnterAddressState(String stat) {
        new CreateAccountPage().selectaddressState(stat);
    }

    @And("^I enter address zipcode \"([^\"]*)\"$")
    public void iEnterAddressZipcode(String zip) {
        new CreateAccountPage().enteraddressZipCode(zip);
    }

    @And("^I enter address country \"([^\"]*)\"$")
    public void iEnterAddressCountry(String coun) {
        new CreateAccountPage().selectaddressCountry(coun);
    }

    @And("^I enter address info \"([^\"]*)\"$")
    public void iEnterAddressInfo(String in) {
        new CreateAccountPage().enteraddressAddInfo(in);
    }

    @And("^I enter address homephone \"([^\"]*)\"$")
    public void iEnterAddressHomephone(String home) {
        new CreateAccountPage().enteraddressHomephone(home);
    }

    @And("^I enter address mobilephone \"([^\"]*)\"$")
    public void iEnterAddressMobilephone(String mob) {
        new CreateAccountPage().enteraddressMobileephone(mob);
    }

    @And("^I enter address nameAddress \"([^\"]*)\"$")
    public void iEnterAddressNameAddress(String addr) {
        new CreateAccountPage().enteraddressLine2(addr);
    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new CreateAccountPage().clickOnRegister();
    }

    @Then("^I should see the message \"([^\"]*)\" myaccount$")
    public void iShouldSeeTheMessageMyaccount(String text) {
        Assert.assertEquals("Cannot see My account text ", text, new CreateAccountPage().verifyMyAccount());
    }




}
