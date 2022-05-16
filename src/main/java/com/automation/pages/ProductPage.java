package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class ProductPage extends Utility {
    public ProductPage() {
        PageFactory.initElements(driver, this);
    }
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @CacheLookup

    @FindBy(xpath = "//input[@id='quantity_wanted']")
    WebElement quantity;
    @CacheLookup
    @FindBy(xpath = "//select[@id='group_1']")
    WebElement size;
    @CacheLookup
    @FindBy(xpath = "//label[contains(text(),'Color')]")
    WebElement colour;
    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Add to cart')]")
    WebElement addToCart;
    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/div[4]/form[1]/div[1]/div[2]/p[1]/a[2]/span[1]/i[1]")
    WebElement addQuntity;
    @CacheLookup
    @FindBy(xpath = "//h2[normalize-space()='Product successfully added to your shopping cart']")
    WebElement popUpDisplay;
    @CacheLookup
    @FindBy(xpath = "//span[@title='Close window']")
    WebElement closeButton;

    @CacheLookup
    @FindBy(xpath = "//a[@name='White']")
    WebElement whiteColour;
    @CacheLookup
    @FindBy(xpath = "//a[@name='Orange']")
    WebElement orangeColour;
    @CacheLookup
    @FindBy(xpath = "//a[@id='color_20']")
    WebElement blueColour;
    @CacheLookup
    @FindBy(xpath = "//a[@name='Green']")
    WebElement greenColour;
    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/ul[1]/li[2]/div[1]/div[2]/h5[1]/a[1]")
    WebElement blouse;
    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/ul[1]/li[1]/div[1]/div[2]/h5[1]/a[1]")
    WebElement printedDress;
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Printed Chiffon Dress')]")
    WebElement chiffonPrintedDress;
    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/ul[1]/li[4]/div[1]/div[2]/h5[1]/a[1]")
    WebElement summerDress;


    public void clickOnPlus() {
        clickOnElement(addQuntity);
        log.info("Clicking on Plus"+ addQuntity.toString());

    }

    public void clearQuantity() {
        log.info("clear Quantity"+ quantity.toString());
        clearTextToElement(quantity);
    }

    public void enterQuantity(String quant) {
        sendTextToElement(quantity, quant);
        log.info("Enter email"+quant+ " to email field "+quantity.toString() );
    }

    public void selectSize(String sizefromDD) {
        selectByVisibleTextFromDropDown(size, sizefromDD);
        log.info("Selecting Size"+sizefromDD+" from dropdown "+size.toString() );
    }

    public void clickOncolor() {
        log.info("Clicking on color"+ colour.toString());
        clickOnElement(colour);
    }

    public void clickOnAddToCart() {
        clickOnElement(addToCart);
        log.info("Clicking on AddToCart"+ addToCart.toString());
    }

    public void changeQuantity(String numbers) {
        sendTextToElement(quantity, numbers);
        log.info("Enter  change Quantity"+numbers+ " to email field "+quantity.toString() );
    }

    public String verifyProductAddedToCartMessage() {
        log.info("getting Product Added To CartMessage from "+popUpDisplay.toString());
        return getTextFromElement(popUpDisplay);
    }
    public void clickOnCloseButton() {
        clickOnElement(closeButton);
        log.info("Clicking on CloseButton"+ closeButton.toString());
    }


    public void selectColour(String text) {
        if (text == "White") {
            clickOnElement(whiteColour);
            log.info("Clicking on Colour"+ whiteColour.toString());
        } else if (text == "Orange") {
            clickOnElement(orangeColour);
            log.info("Clicking on Colour"+ orangeColour.toString());
        } else if (text == "Green") {
            clickOnElement(greenColour);
            log.info("Clicking on Colour"+ greenColour.toString());
        } else if (text == "Blue") {
            clickOnElement(blueColour);
            log.info("Clicking on Colour"+ blueColour.toString());
        }
    }
}

