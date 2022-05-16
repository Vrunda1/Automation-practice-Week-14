package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class WomenCategoryPage extends Utility {
    public WomenCategoryPage() {
        PageFactory.initElements(driver,this);
    }
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());
    @CacheLookup

    @FindBy(xpath = "//span[@class='category-name']")
    WebElement womenLink;
    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/ul[1]/li[1]/a[1]]")
    WebElement womentop;
      @CacheLookup
      @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/ul[1]/li[2]/a[1]")
    WebElement womenDress;
    @CacheLookup
    @FindBy(xpath = "//label[contains(text(),'Sort by')]")
    WebElement sortBy;
    @CacheLookup
    @FindBy(xpath = "//li[@id='list']")
    WebElement listview;
    @CacheLookup
    @FindBy(xpath = "//a[@class='logout' ]")
    WebElement signOutLink;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/h1[1]/span[1]")
    WebElement getWomenLink;
    @CacheLookup
    @FindBy(xpath = "//div[@class='product-container']")
    WebElement products;
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
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/ul[1]/li[3]/div[1]/div[2]/h5[1]/a[1]")
    WebElement printedSummerDress;

    public void selectProduct(String text){
        if(text.equalsIgnoreCase("Blouse")) {
            clickOnElement(blouse);
            log.info("Clicking on Blouse " + blouse.toString());
        }

        if(text.equalsIgnoreCase("Printed Dress")) {
           log.info("Clicking on Printed Dress " + printedDress.toString());
            clickOnElement(printedDress);
        }
        if(text.equalsIgnoreCase("Printed Chiffon Dress") ) {
            clickOnElement(chiffonPrintedDress);
            log.info("Clicking on Printed Chiffon Dress " + chiffonPrintedDress.toString());
        }
        if(text.equalsIgnoreCase("Printed Summer Dress with Price $28.98")) {
            clickOnElement(printedSummerDress);
            log.info("Clicking on Printed Summer Dress with Price tag $28.98 " + printedSummerDress.toString());
        }
    }

    public void clickOnWomentag(){
        clickOnElement(getWomenLink);
        log.info("Clicking on Womentag"+ getWomenLink.toString());
    }
    public void clickOnProducts(){
        clickOnElement(products);
        log.info("Clicking on Products"+ products.toString());
    }


    public String getWomenText() {
       log.info("getting Women text from "+womenLink.toString());
        return getTextFromElement(womenLink);
    }
    public void clickOnTop() {
        clickOnElement(womentop);
        log.info("Clicking on Top"+ womentop.toString());
    }
    public void clickOnDresses() {
        clickOnElement(womenDress);
        log.info("Clicking on Dresses"+ womenDress.toString());
    }
    public void selectfromDropdownSortBy(String sorting) {
        selectByVisibleTextFromDropDown(sortBy,sorting);
        log.info("Selecting from Dropdown SortBy"+sorting+" from dropdown "+sortBy.toString());
    }
    public void clickOnList() {
       log.info("Clicking on List"+ listview.toString());
        clickOnElement(listview);
    }
    public String verifySignOut(){
       log.info("getting signout text from "+signOutLink.toString());
        return getTextFromElement(signOutLink);
    }


}
