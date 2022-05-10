package com.automation.testsuite;

import com.automation.pages.*;
import com.automation.testbase.TestBase;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

public class AccountPageTest extends TestBase {
    HomePage homePage;
    SignInPage signInPage;
    CreateAccountPage createAccountPage;
    ProductPage productPage;
    WomenCategoryPage womenCategoryPage;


    @BeforeMethod(alwaysRun = true)
    public void inIt() {
        homePage = new HomePage();
        signInPage = new SignInPage();
        createAccountPage = new CreateAccountPage();
        productPage = new ProductPage();
        womenCategoryPage = new WomenCategoryPage();

    }
    @Test(groups = {"sanity","smoke","regression"})
    public void verifyThatUserShouldCreateAccountSuccessfully(){
        homePage.clickOnSignInHeader();
        SoftAssert softAssert = new SoftAssert();
        createAccountPage.enterAccountEmail("prime12311@gmail.com");
       createAccountPage.clickOnCreateAccoutnButton();
        createAccountPage.clickOnGenderRadioBtn();
        createAccountPage.enterFirstName("Primee");
        createAccountPage.enterLastName("Smith");
       // createAccountPage.enterEmail("prime121@gmail.com");
        signInPage.enterPassword("abc123");
       createAccountPage.selectBirthdate("10");
        createAccountPage.selectBirthMonth("10");
        createAccountPage.selectBirthYear("2005");
        createAccountPage.clickOnSignUpNewsletter();
        createAccountPage.clickOnReceiveOffer();
        createAccountPage.enteraddresFirstname("Miss J");
        createAccountPage.enteraddressLastname("George");
        createAccountPage.enteraddressCompany("George");
        createAccountPage.enteraddressOffice("5,new city");
        createAccountPage.enteraddressLine2("brompton");
        createAccountPage.enteraddressCity("Leeds");
        createAccountPage.selectaddressState("Ohio");
        createAccountPage.enteraddressZipCode("32152");
        createAccountPage.selectaddressCountry("United States");
        createAccountPage.enteraddressAddInfo("Nothing");
        createAccountPage.enteraddressHomephone("077545123");
        createAccountPage.enteraddressMobileephone("177956451");
        createAccountPage.enteraddressLine2("10, street");
        createAccountPage.clickOnRegister();
        softAssert.assertEquals(createAccountPage.verifyMyAccount(),"My Account","");

    }
}
