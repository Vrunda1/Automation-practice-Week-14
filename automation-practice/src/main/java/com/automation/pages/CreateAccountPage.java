package com.automation.pages;

import com.automation.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class CreateAccountPage extends Utility {
    public CreateAccountPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//input[@id='id_gender2']")
    WebElement title;
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement createAccEmail;
    @FindBy(xpath = "//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/div[4]/button[1]/span[1]")
    WebElement register;


    @FindBy(xpath = "//input[@id='customer_firstname']")
    WebElement firstName;

    @FindBy(xpath = "//input[@id='customer_lastname']")
    WebElement lastname;

    @FindBy(xpath = "//input[@id='email']")
    WebElement emailField;

    @FindBy(xpath = "//input[@id='passwd']")
    WebElement passwordField;

    @FindBy(xpath = "//select[@id='days']")
    WebElement date;

    @FindBy(id = "months")
    WebElement month;

    @FindBy(id = "years")
    WebElement year;

    @FindBy(xpath = "//input[@id='optin']")
    WebElement signUpnewsletter;

    @FindBy(xpath = "//input[@id='optin']")
    WebElement receiveSpecialOffer;

    @FindBy(xpath = "//input[@id='firstname']")
    WebElement addressFirstname;
    @FindBy(xpath = "//input[@id='lastname']")
    WebElement addressLastName;
    @FindBy(xpath = "//input[@id='company']")
    WebElement addressCompany;
    @FindBy(xpath = "//input[@id='address1']")
    WebElement addressOfficial;
    @FindBy(xpath = "//input[@id='address2']")
    WebElement addressLine2;
    @FindBy(xpath = "//input[@id='city']")
    WebElement city;
    @FindBy(xpath = "//select[@id='id_state']")
    WebElement state;
    @FindBy(xpath = "//input[@id='postcode']")
    WebElement zipCode;
    @FindBy(xpath = "//select[@id='id_country']")
    WebElement country;
    @FindBy(xpath = "//textarea[@id='other']")
    WebElement addInfo;
    @FindBy(xpath = "//input[@id='phone']")
    WebElement homePhone;
    @FindBy(xpath = "//input[@id='phone_mobile']")
    WebElement mobile;
    @FindBy(xpath = "//input[@id='alias']")
    WebElement addressFutureRef;
    @FindBy(xpath = "//h1[contains(text(),'My account')]")
    WebElement myAccount;
    @FindBy(xpath = "//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/form[1]/div[1]/div[3]/button[1]/span[1]")
    WebElement createAnAccountButton;

    public void clickOnCreateAccoutnButton() {
        Reporter.log("Clicking on CreateAccount"+ createAnAccountButton.toString()+ "<br>");
        clickOnElement(createAnAccountButton);
    }

    public void clickOnGenderRadioBtn() {
        Reporter.log("Clicking on Gender button" + title.toString() + "<br>");
        clickOnElement(title);
    }
    public void enterFirstName(String fname) {
        Reporter.log("Enter firstname" + fname + "to firstname field" + firstName.toString() + "<br>");
        sendTextToElement(firstName, fname);
    }
    public void enterLastName(String lname) {
        Reporter.log("Enter LastName"+lname+ " to email field "+lastname.toString() + "<br>");
        sendTextToElement(lastname, lname);

    }
    public void enterAccountEmail(String accmail) {
        Reporter.log("Enter email"+accmail+ " to email field "+createAccEmail.toString() + "<br>");
        sendTextToElement(createAccEmail, accmail);
    }
    public void enterEmail(String mail)
    {Reporter.log("Enter email"+mail+ " to email field "+emailField.toString() + "<br>");
        sendTextToElement(emailField, mail);
    }

    public void enterPassword(String pw) {
        Reporter.log("Enter Password "+pw+ " to email field "+emailField.toString() + "<br>");
        sendTextToElement(passwordField, pw);
    }

    public void selectBirthdate(String birthdate) {
        Reporter.log("Selecting day"+birthdate+" from dropdown "+date.toString() + "<br>");
        selectByValueFromDropDown(date, birthdate);
    }

    public void selectBirthMonth(String birthMonth) {
        Reporter.log("Selecting Month"+birthMonth+" from dropdown "+month.toString() + "<br>");
        selectByValueFromDropDown(month, birthMonth);
    }

    public void selectBirthYear(String birthYear) {
        Reporter.log("Selecting Year"+birthYear+" from dropdown "+year.toString() + "<br>");
        selectByValueFromDropDown(year, birthYear);
    }

    public void clickOnSignUpNewsletter() {
        Reporter.log("Clicking on newsletterbox" + signUpnewsletter.toString() + "<br>");
        clickOnElement(signUpnewsletter);
    }

    public void clickOnReceiveOffer() {
        Reporter.log("Clicking on Receiving offer" + receiveSpecialOffer.toString() + "<br>");
        clickOnElement(receiveSpecialOffer);
    }

    public void enteraddresFirstname(String name) {
        Reporter.log("Enter Firstname"+name+ " to email field "+addressFirstname.toString() + "<br>");
        sendTextToElement(addressFirstname, name);
    }

    public void enteraddressLastname(String lanme)
    {Reporter.log("Enter address Lastname"+lanme+ " to email field "+addressLastName.toString() + "<br>");
        sendTextToElement(addressLastName, lanme);
    }

    public void enteraddressCompany(String comp) {
        Reporter.log("Enter address Company"+comp+ " to email field "+addressCompany.toString() + "<br>");
        sendTextToElement(addressCompany, comp);
    }

    public void enteraddressOffice(String add){
    Reporter.log("Enter address office"+add+ " to email field "+addressOfficial.toString() + "<br>");
        sendTextToElement(addressOfficial, add);
    }

    public void enteraddressLine2(String addL2){
    Reporter.log("Enter addressLine2"+addL2+ " to email field "+addressLine2.toString() + "<br>");
        sendTextToElement(addressLine2, addL2);
    }

    public void enteraddressCity(String cityname){
    Reporter.log("Enter address City"+cityname+ "to email field "+city.toString() + "<br>");
        sendTextToElement(city, cityname);
    }

    public void selectaddressState(String statename)
    {Reporter.log("Select address State"+statename+ " to email field "+state.toString() + "<br>");
        selectByVisibleTextFromDropDown(state, statename);
    }

    public void enteraddressZipCode(String zcode){
    Reporter.log("Enter address ZipCode"+zcode+ " to email field "+zipCode.toString() + "<br>");
        sendTextToElement(zipCode, zcode);
    }

    public void selectaddressCountry(String countryname) {
        Reporter.log("Selecting address Country"+countryname+" from dropdown "+country.toString() + "<br>");
        selectByVisibleTextFromDropDown(country, countryname);
    }

    public void enteraddressAddInfo(String addInform) {
        Reporter.log("Enter address AddInfo "+addInform+ " to email field "+addInfo.toString() + "<br>");
        sendTextToElement(addInfo, addInform);
    }

    public void enteraddressHomephone(String phone) {
        Reporter.log("Enter address Homephone "+phone+ " to email field "+homePhone.toString() + "<br>");
        sendTextToElement(homePhone, phone);
    }

    public void enteraddressMobileephone(String mphone) {
        Reporter.log("Enter address Mobile phone "+mphone+ " to email field "+mobile.toString() + "<br>");
        sendTextToElement(mobile, mphone);
    }

    public void enteraddressfutureRef(String ref) {
        Reporter.log("Enter address for futureRef"+ref+ " to email field "+addressFutureRef.toString() + "<br>");
        sendTextToElement(addressFutureRef, ref);
    }

    public void clickOnRegister() {
        Reporter.log("Clicking on Register"+ register.toString()+ "<br>");
        clickOnElement(register);
    }

    public String verifyMyAccount() {
        Reporter.log("Verifying my account text" + myAccount.toString() + "<br>");
        return getTextFromElement(myAccount);
    }

}
