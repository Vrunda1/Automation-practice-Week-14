package com.automation.pages;


import com.automation.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

/**
 * Created by Jay Vaghani
 */
public class LoginPage extends Utility {
    public LoginPage() {
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath="//h1[contains(text(),'Welcome, Please Sign In!')]")
    WebElement welcomeText;

    @FindBy(id="Email")
    WebElement emailField;

  //  By welcomeText = By.xpath("//h1[contains(text(),'Welcome, Please Sign In!')]");
 //   By emailField = By.id("Email");
    @FindBy(name="Password")
          WebElement passwordField;
   // By passwordField = By.name("Password");
    @FindBy(xpath ="//button[contains(text(),'Log in')]")
           WebElement loginButton;
   @FindBy(xpath="//div[@class='message-error validation-summary-errors']")
   WebElement errorMessage;
//    By loginButton = By.xpath("//button[contains(text(),'Log in')]");
 //   By errorMessage = By.xpath("//div[@class='message-error validation-summary-errors']");

    public String getWelcomeText() {
        Reporter.log("getting Welcome Text from "+welcomeText.toString()+"<br>");
        return getTextFromElement(welcomeText);
    }

    public void enterEmailId(String email) {

        Reporter.log("Enter email"+email+ " to email field "+emailField.toString() + "<br>");
        sendTextToElement(emailField, email);
    }

    public void enterPassword(String password) {
        Reporter.log("Enter Password"+password+ " to email field "+passwordField.toString() + "<br>");
        sendTextToElement(passwordField, password);
    }

    public void clickOnLoginButton() {
        Reporter.log("Clicking on LoginButton"+ loginButton.toString()+ "<br>");
        clickOnElement(loginButton);
    }

    public String getErrorMessage() {
        Reporter.log("getting ErrorMessage "+errorMessage.toString()+"<br>");
        return getTextFromElement(errorMessage);
    }
}
