package com.automation.pages;


import com.automation.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

/**
 * Created by Jay Vaghani
 */
public class HomePage extends Utility {

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li[1]/a[1]")
    WebElement womentopMenu;

    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li[2]/a[1]")
    WebElement dressTopMenu;
    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li[3]/a[1]")
    WebElement tshirtsTopMenu;
    @FindBy(xpath = "//a[contains(text(),'Sign in')]")
    WebElement signIn;
    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[1]/a[1]/img[1]")
    WebElement logoLink;


    public void clickOnWomenHeader() {
        Reporter.log("Clicking on WomenHeader"+ womentopMenu.toString()+ "<br>");
        clickOnElement(womentopMenu);
    }

    public void clickOndressHeader() {
        Reporter.log("Clicking on dressHeader"+ dressTopMenu.toString()+ "<br>");
        clickOnElement(dressTopMenu);
    }

    public void clickOnTshirtsHeader() {
        Reporter.log("Clicking on TshirtsHeader"+ tshirtsTopMenu.toString()+ "<br>");
        clickOnElement(tshirtsTopMenu);
    }
    public void clickOnSignInHeader() {
        Reporter.log("Clicking on SignInHeader"+ signIn.toString()+ "<br>");
        clickOnElement(signIn);
    }
    public void clickOnLogo() {
        Reporter.log("Clicking on Logo"+ logoLink.toString()+ "<br>");
        clickOnElement(logoLink);
    }
}