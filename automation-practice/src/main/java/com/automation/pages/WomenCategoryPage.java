package com.automation.pages;

import com.automation.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class WomenCategoryPage extends Utility {
    public WomenCategoryPage() {
        PageFactory.initElements(driver,this);
    }
    @FindBy(xpath = "//span[@class='category-name']")
    WebElement womenLink;
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/ul[1]/li[1]/a[1]]")
    WebElement womentop;
      @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/ul[1]/li[2]/a[1]")
    WebElement womenDress;
    @FindBy(xpath = "//label[contains(text(),'Sort by')]")
    WebElement sortBy;
    @FindBy(xpath = "//li[@id='list']")
    WebElement listview;
    @FindBy(xpath = "//a[@class='logout' ]")
    WebElement signOutLink;

    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/h1[1]/span[1]")
    WebElement getWomenLink;
    @FindBy(xpath = "//div[@class='product-container']")
    WebElement products;
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/ul[1]/li[2]/div[1]/div[2]/h5[1]/a[1]")
    WebElement blouse;
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/ul[1]/li[1]/div[1]/div[2]/h5[1]/a[1]")
    WebElement printedDress;
    @FindBy(xpath = "//a[contains(text(),'Printed Chiffon Dress')]")
    WebElement chiffonPrintedDress;
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/ul[1]/li[3]/div[1]/div[2]/h5[1]/a[1]")
    WebElement printedSummerDress;

    public void selectProduct(String text){
        if(text == "Blouse") {
            Reporter.log("Clicking on Blouse " + blouse.toString());
            clickOnElement(blouse);
        }

        if(text == "Printed Dress") {
            Reporter.log("Clicking on Printed Dress " + printedDress.toString());
            clickOnElement(printedDress);
        }
        if(text == "Printed Chiffon Dress") {
            Reporter.log("Clicking on Printed Chiffon Dress " + chiffonPrintedDress.toString());
            clickOnElement(chiffonPrintedDress);
        }
        if(text == "Printed Summer Dress with Price $28.98") {
            Reporter.log("Clicking on Printed Summer Dress with Price tag $28.98 " + printedSummerDress.toString());
            clickOnElement(printedSummerDress);
        }
    }

    public void clickOnWomentag(){

        Reporter.log("Clicking on Womentag"+ getWomenLink.toString()+ "<br>");
        clickOnElement(getWomenLink);
    }
    public void clickOnProducts(){
        Reporter.log("Clicking on Products"+ products.toString()+ "<br>");
        clickOnElement(products);
    }


    public String getWomenText() {
        Reporter.log("getting Women text from "+womenLink.toString()+"<br>");
        return getTextFromElement(womenLink);
    }
    public void clickOnTop() {
        Reporter.log("Clicking on Top"+ womentop.toString()+ "<br>");
        clickOnElement(womentop);
    }
    public void clickOnDresses() {
        Reporter.log("Clicking on Dresses"+ womenDress.toString()+ "<br>");
        clickOnElement(womenDress);
    }
    public void selectfromDropdownSortBy(String sorting) {
        Reporter.log("Selecting from Dropdown SortBy"+sorting+" from dropdown "+sortBy.toString() + "<br>");
        selectByVisibleTextFromDropDown(sortBy,sorting);
    }
    public void clickOnList() {
        Reporter.log("Clicking on List"+ listview.toString()+ "<br>");
        clickOnElement(listview);
    }
    public String verifySignOut(){
        Reporter.log("getting signout text from "+signOutLink.toString()+"<br>");
        return getTextFromElement(signOutLink);
    }


}
