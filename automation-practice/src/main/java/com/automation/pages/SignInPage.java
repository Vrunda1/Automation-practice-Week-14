package com.automation.pages;

import com.automation.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class SignInPage extends Utility {
    public SignInPage() {
        PageFactory.initElements(driver,this);
    }
    @FindBy(xpath="//input[@id='email']")
    WebElement emailField;

    @FindBy(xpath="//input[@id='passwd']")
    WebElement passwordField;

    @FindBy(xpath="//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/form[1]/div[1]/p[2]/button[1]/span[1]")
    WebElement signInButton;
    @FindBy(xpath="//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/form[1]/div[1]/div[3]/button[1]/span[1]")
    WebElement createAnAccountButton;
    @FindBy(xpath="//h1[contains(text(),'Authentication')]")
    WebElement authentificationText;
    @FindBy(xpath="//h3[contains(text(),'Create an account')]")
    WebElement createAnAccountText;
    @FindBy(xpath="//div[@class='alert alert-danger']//li")
    WebElement errorMessage;
    @FindBy(xpath = "//header/div[2]/div[1]/div[1]/nav[1]/div[2]/a[1]")
    WebElement signOut;
    @FindBy(xpath = "//a[contains(text(),'Sign in')]")
    WebElement signInTextafterLogOut;
    @FindBy(xpath = "//header/div[2]/div[1]/div[1]/nav[1]/div[2]/a[1]")
    WebElement signOutVerifyText;

    public void enterEmail(String email) {
        Reporter.log("Enter email"+email+ " to email field "+emailField.toString() + "<br>");
        sendTextToElement(emailField, email);
    }
    public void enterPassword(String pw)
    { Reporter.log("Enter Password"+pw+ " to email field "+passwordField.toString() + "<br>");

        sendTextToElement(passwordField, pw);
    }
    public void clickOnSignIn()
    {
        Reporter.log("Clicking on SignIn"+ signInButton.toString()+ "<br>");
        clickOnElement(signInButton);
    }
    public void clickOnCreateAccoutnButton()
    {
        Reporter.log("Clicking on CreateAccoutnButton"+ createAnAccountButton.toString()+ "<br>");
        clickOnElement(createAnAccountButton);
    }
    public String getAuthentificationText1()
    {
        Reporter.log("getting Authentification text from "+authentificationText.toString()+"<br>");
        return getTextFromElement(authentificationText);
    }
    public String getCreateAnAccountText()
    {
        Reporter.log("getting CreateAnAccount text from "+createAnAccountText.toString()+"<br>");
        return getTextFromElement(createAnAccountText);
    }
    public void signInToApplication(String username,String password){
        enterEmail(username);
        enterPassword(password);
        clickOnSignIn();
    }
    public String getErrorMsg(){
        Reporter.log("getting Error text from "+errorMessage.toString()+"<br>");
        return getTextFromElement(errorMessage);
    }
    public void clickOnSignOutLink() {
        Reporter.log("Clicking on SignOutLink"+ signOut.toString()+ "<br>");
        clickOnElement(signOut);
    }
    public String verifySignOut(){
        Reporter.log("getting signout from "+signOutVerifyText.toString()+"<br>");
        return getTextFromElement(signOutVerifyText);
    }
    public String verifySignInText(){
        Reporter.log("getting signout text from "+signInTextafterLogOut.toString()+"<br>");
        return getTextFromElement(signInTextafterLogOut);
    }
}
