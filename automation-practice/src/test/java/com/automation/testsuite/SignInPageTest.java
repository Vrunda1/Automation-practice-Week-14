package com.automation.testsuite;

import com.automation.pages.*;
import com.automation.testbase.TestBase;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;
import resources.testdata.TestData;

public class SignInPageTest extends TestBase {
    HomePage homePage;
    SignInPage signInPage;
    CreateAccountPage createAccountPage;
    ProductPage productPage;
    WomenCategoryPage womenCategoryPage;

    @BeforeMethod(alwaysRun = true)
    public void inIt(){
        homePage = new HomePage();
        signInPage=new SignInPage();
         createAccountPage=new CreateAccountPage();
        productPage = new ProductPage();
        womenCategoryPage = new WomenCategoryPage();
    }
    @Test(groups = {"sanity","smoke","regression"})
    public void userShouldNavigateToSignInPageSuccessFully(){
        SoftAssert softAssert = new SoftAssert();
        homePage.clickOnSignInHeader();
        softAssert.assertEquals(signInPage.getAuthentificationText1(),"AUTHENTICATION","");
        softAssert.assertAll();
    }
    @Test(dataProvider = "credentials",dataProviderClass = TestData.class,groups = {"smoke","regression"})
    public void verifyTheErrorMessageWithInValidCredentials(String username, String password,String message){
        SoftAssert softAssert = new SoftAssert();
        homePage.clickOnSignInHeader();
        signInPage.signInToApplication(username,password);
        softAssert.assertEquals(signInPage.getErrorMsg(),"Login page is not displayed","");

    }
    @Test(groups = {"regression"})
    public void verifyThatUserShouldLogInSuccessFullyWithValidCredentials(){
        SoftAssert softAssert = new SoftAssert();
        homePage.clickOnSignInHeader();
        signInPage.enterEmail("prime123@gmail.com");
        signInPage.enterPassword("abc123");
        signInPage.clickOnSignIn();
        softAssert.assertEquals(signInPage.verifySignOut(),"Sign out","");
    }
    @Test(groups = {"regression"})
    public void verifyThatUserShouldLogOutSuccessFully(){
        SoftAssert softAssert = new SoftAssert();
        homePage.clickOnSignInHeader();
        signInPage.enterEmail("prime122@gmail.com");
        signInPage.enterPassword("abc321");
        signInPage.clickOnSignIn();
        softAssert.assertEquals(signInPage.verifySignInText(),"Sign In","");
        signInPage.clickOnSignOutLink();
    }
   }
