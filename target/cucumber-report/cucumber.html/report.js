$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("account.feature");
formatter.feature({
  "line": 1,
  "name": "Account Test",
  "description": "",
  "id": "account-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8637460500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should create account successfully",
  "description": "",
  "id": "account-test;user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on account email \"soft1235@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on account create",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on account gender",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter account firstname \"Johna\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter account lastname  \"Smith\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter  account password \"abc12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select  account birthdate  \"15\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select  account birthmonth \"11\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select  account birthyear \"2005\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter address firstname \"Miss smith\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter address lastname  \"George\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter address company \"jvc ltd\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter address line \"10,west town\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter address city \"Leeds\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter address state \"Ohio\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter address zipcode \"32184\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter address country \"United States\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter address info \"Nothing\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter address homephone \"0778456321\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter address mobilephone \"01574562112\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter address nameAddress \"10,Liverpool Street\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the message \"MY ACCOUNT\" myaccount",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I should see the authentification message \"AUTHENTICATION\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 89533500,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1681315300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soft1235@gmail.com",
      "offset": 26
    }
  ],
  "location": "CreateAccountPageTest.iClickOnAccountEmail(String)"
});
formatter.result({
  "duration": 106637500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountPageTest.iClickOnAccountCreate()"
});
formatter.result({
  "duration": 68866300,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountPageTest.iClickOnAccountGender()"
});
formatter.result({
  "duration": 1545649400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Johna",
      "offset": 27
    }
  ],
  "location": "CreateAccountPageTest.iEnterAccountFirstname(String)"
});
formatter.result({
  "duration": 76818400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Smith",
      "offset": 27
    }
  ],
  "location": "CreateAccountPageTest.iEnterAccountLastname(String)"
});
formatter.result({
  "duration": 88275200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc12345",
      "offset": 27
    }
  ],
  "location": "CreateAccountPageTest.iEnterAccountPassword(String)"
});
formatter.result({
  "duration": 95717800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 30
    }
  ],
  "location": "CreateAccountPageTest.iSelectAccountBirthdate(String)"
});
formatter.result({
  "duration": 108227500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 30
    }
  ],
  "location": "CreateAccountPageTest.iSelectAccountBirthmonth(String)"
});
formatter.result({
  "duration": 98453800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2005",
      "offset": 29
    }
  ],
  "location": "CreateAccountPageTest.iSelectAccountBirthyear(String)"
});
formatter.result({
  "duration": 141089400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miss smith",
      "offset": 27
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressFirstname(String)"
});
formatter.result({
  "duration": 95215500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "George",
      "offset": 27
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressLastname(String)"
});
formatter.result({
  "duration": 84861700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jvc ltd",
      "offset": 25
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressCompany(String)"
});
formatter.result({
  "duration": 88933800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10,west town",
      "offset": 22
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressLine(String)"
});
formatter.result({
  "duration": 90983900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leeds",
      "offset": 22
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressCity(String)"
});
formatter.result({
  "duration": 80558900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ohio",
      "offset": 23
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressState(String)"
});
formatter.result({
  "duration": 98157900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32184",
      "offset": 25
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressZipcode(String)"
});
formatter.result({
  "duration": 85494700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 25
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressCountry(String)"
});
formatter.result({
  "duration": 53500900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nothing",
      "offset": 22
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressInfo(String)"
});
formatter.result({
  "duration": 81045100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0778456321",
      "offset": 27
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressHomephone(String)"
});
formatter.result({
  "duration": 91065800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01574562112",
      "offset": 29
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressMobilephone(String)"
});
formatter.result({
  "duration": 77644000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10,Liverpool Street",
      "offset": 29
    }
  ],
  "location": "CreateAccountPageTest.iEnterAddressNameAddress(String)"
});
formatter.result({
  "duration": 82096100,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountPageTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 1295084000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MY ACCOUNT",
      "offset": 26
    }
  ],
  "location": "CreateAccountPageTest.iShouldSeeTheMessageMyaccount(String)"
});
formatter.result({
  "duration": 40103800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTHENTICATION",
      "offset": 43
    }
  ],
  "location": "SignPageTest.iShouldSeeTheAuthentificationMessage(String)"
});
formatter.result({
  "duration": 40048541100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[contains(text(),\u0027Authentication\u0027)]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027KEYOU\u0027, ip: \u0027192.168.1.213\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [661276640e4f9bbedf4c0a03e53fcba0, findElement {using\u003dxpath, value\u003d//h1[contains(text(),\u0027Authentication\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\mihir\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63095}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63095/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 661276640e4f9bbedf4c0a03e53fcba0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.automation.utility.Utility.getTextFromElement(Utility.java:65)\r\n\tat com.automation.pages.SignInPage.getAuthentificationText1(SignInPage.java:75)\r\n\tat com.automation.steps.SignPageTest.iShouldSeeTheAuthentificationMessage(SignPageTest.java:25)\r\n\tat ✽.Then I should see the authentification message \"AUTHENTICATION\"(account.feature:31)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 857756600,
  "status": "passed"
});
formatter.uri("signin.feature");
formatter.feature({
  "line": 1,
  "name": "SignInPage Test",
  "description": "",
  "id": "signinpage-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6307890600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to signIn page successfully",
  "description": "",
  "id": "signinpage-test;user-should-navigate-to-signin-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see the authentification message \"AUTHENTICATION\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 33600,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2297647000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTHENTICATION",
      "offset": 43
    }
  ],
  "location": "SignPageTest.iShouldSeeTheAuthentificationMessage(String)"
});
formatter.result({
  "duration": 28516400,
  "status": "passed"
});
formatter.after({
  "duration": 723687800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "User should see the error message with InValid credentials",
  "description": "",
  "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I click on signIn link",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the  error message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 16,
      "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 17,
      "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 18,
      "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 19,
      "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 20,
      "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4169423500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should see the error message with InValid credentials",
  "description": "",
  "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I click on signIn link",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the  error message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1731300600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 47249900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 72646200,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1352587700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 33
    }
  ],
  "location": "SignPageTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 25363600,
  "status": "passed"
});
formatter.after({
  "duration": 688348500,
  "status": "passed"
});
formatter.before({
  "duration": 4126592500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should see the error message with InValid credentials",
  "description": "",
  "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I click on signIn link",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the  error message \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2530670700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 83279500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 59621800,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1141698600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 33
    }
  ],
  "location": "SignPageTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 25681300,
  "status": "passed"
});
formatter.after({
  "duration": 674849400,
  "status": "passed"
});
formatter.before({
  "duration": 3856585300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should see the error message with InValid credentials",
  "description": "",
  "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I click on signIn link",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter username \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the  error message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1258174500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 107986700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 121574000,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 949515100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 33
    }
  ],
  "location": "SignPageTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 27187400,
  "status": "passed"
});
formatter.after({
  "duration": 696314400,
  "status": "passed"
});
formatter.before({
  "duration": 4000848300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should see the error message with InValid credentials",
  "description": "",
  "id": "signinpage-test;user-should-see-the-error-message-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I click on signIn link",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the  error message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1672066700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 92625800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 88255000,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 838048000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 33
    }
  ],
  "location": "SignPageTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 27853600,
  "status": "passed"
});
formatter.after({
  "duration": 688140800,
  "status": "passed"
});
formatter.before({
  "duration": 4215979600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should logIn successfully with valid credentials",
  "description": "",
  "id": "signinpage-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I click on signIn link",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter username \"soft1235@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter password \"abc12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see the signOut \"Sign out\" link",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1694645500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soft1235@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 87672400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc12345",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 89295200,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1297820900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign out",
      "offset": 26
    }
  ],
  "location": "SignPageTest.iShouldSeeTheSignOutLink(String)"
});
formatter.result({
  "duration": 23450000,
  "status": "passed"
});
formatter.after({
  "duration": 727349100,
  "status": "passed"
});
formatter.before({
  "duration": 4109296300,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "User should Logout SuccessFully",
  "description": "",
  "id": "signinpage-test;user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "I click on signIn link",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I enter username \"tin@mail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on signout link",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the \"Sign in\" link on top menu",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1763620800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tin@mail.com",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 74150600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 73072500,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 719073400,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSignoutLink()"
});
formatter.result({
  "duration": 767544700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iShouldSeeTheLinkOnTopMenu(String)"
});
formatter.result({
  "duration": 29496400,
  "status": "passed"
});
formatter.after({
  "duration": 678845400,
  "status": "passed"
});
formatter.uri("womencategory.feature");
formatter.feature({
  "line": 1,
  "name": "Women Category PageTest",
  "description": "",
  "id": "women-category-pagetest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4697213500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to WomenCategory page successfully",
  "description": "",
  "id": "women-category-pagetest;user-should-navigate-to-womencategory-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Women link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see the women message \"Women\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 40600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLink()"
});
formatter.result({
  "duration": 1561240300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 32
    }
  ],
  "location": "WomenCategoryPageTest.iShouldSeeTheWomenMessage(String)"
});
formatter.result({
  "duration": 32315500,
  "status": "passed"
});
formatter.after({
  "duration": 698031800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "User should AddProductToTheCartSuccessfully",
  "description": "",
  "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Women link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on product \"\u003cproduct\u003e\"from product",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on quantity \"\u003cqty\u003e\"from quntity",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on size \"\u003csize\u003e\"from size",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"\u003ccolour\u003e\"from colour",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the product message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 22,
      "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 23,
      "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 24,
      "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 25,
      "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 26,
      "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4069791600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should AddProductToTheCartSuccessfully",
  "description": "",
  "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Women link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Blouse\"from product",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on quantity \"2\"from quntity",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on size \"M\"from size",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"White\"from colour",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the product message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 126700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLink()"
});
formatter.result({
  "duration": 2525303900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProductFromProduct(String)"
});
formatter.result({
  "duration": 2705382000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnQuantityFromQuntity(String)"
});
formatter.result({
  "duration": 93736400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnSizeFromSize(String)"
});
formatter.result({
  "duration": 70451400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColourFromColour(String)"
});
formatter.result({
  "duration": 1461800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 54231200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 34
    }
  ],
  "location": "WomenCategoryPageTest.iShouldSeeTheProductMessage(String)"
});
formatter.result({
  "duration": 5036907900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnCloseButton()"
});
formatter.result({
  "duration": 86013800,
  "status": "passed"
});
formatter.after({
  "duration": 765827200,
  "status": "passed"
});
formatter.before({
  "duration": 4006072200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should AddProductToTheCartSuccessfully",
  "description": "",
  "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Women link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Printed Dress\"from product",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on quantity \"3\"from quntity",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on size \"L\"from size",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"Orange\"from colour",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the product message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 35300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLink()"
});
formatter.result({
  "duration": 1774626900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProductFromProduct(String)"
});
formatter.result({
  "duration": 2514898700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 21
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnQuantityFromQuntity(String)"
});
formatter.result({
  "duration": 90657000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnSizeFromSize(String)"
});
formatter.result({
  "duration": 81623700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColourFromColour(String)"
});
formatter.result({
  "duration": 541300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 51414600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 34
    }
  ],
  "location": "WomenCategoryPageTest.iShouldSeeTheProductMessage(String)"
});
formatter.result({
  "duration": 5029558300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnCloseButton()"
});
formatter.result({
  "duration": 43869900,
  "status": "passed"
});
formatter.after({
  "duration": 724520000,
  "status": "passed"
});
formatter.before({
  "duration": 3838591900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should AddProductToTheCartSuccessfully",
  "description": "",
  "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Women link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Printed Chiffon Dress\"from product",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on quantity \"4\"from quntity",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on size \"S\"from size",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"Green\"from colour",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the product message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 31000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLink()"
});
formatter.result({
  "duration": 2048223700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProductFromProduct(String)"
});
formatter.result({
  "duration": 1803347200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 21
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnQuantityFromQuntity(String)"
});
formatter.result({
  "duration": 105885300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnSizeFromSize(String)"
});
formatter.result({
  "duration": 45560400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColourFromColour(String)"
});
formatter.result({
  "duration": 580300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 58895400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 34
    }
  ],
  "location": "WomenCategoryPageTest.iShouldSeeTheProductMessage(String)"
});
formatter.result({
  "duration": 5035775900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnCloseButton()"
});
formatter.result({
  "duration": 41382900,
  "status": "passed"
});
formatter.after({
  "duration": 714289900,
  "status": "passed"
});
formatter.before({
  "duration": 4232086200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should AddProductToTheCartSuccessfully",
  "description": "",
  "id": "women-category-pagetest;user-should-addproducttothecartsuccessfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Women link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Printed Summer Dress with Price $28.98\"from product",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on quantity \"2\"from quntity",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on size \"M\"from size",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"Blue\"from colour",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the product message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 24000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLink()"
});
formatter.result({
  "duration": 1863858200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProductFromProduct(String)"
});
formatter.result({
  "duration": 1400924400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnQuantityFromQuntity(String)"
});
formatter.result({
  "duration": 97491400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnSizeFromSize(String)"
});
formatter.result({
  "duration": 72860400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColourFromColour(String)"
});
formatter.result({
  "duration": 548700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 48493700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 34
    }
  ],
  "location": "WomenCategoryPageTest.iShouldSeeTheProductMessage(String)"
});
formatter.result({
  "duration": 5036633700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnCloseButton()"
});
formatter.result({
  "duration": 45609700,
  "status": "passed"
});
formatter.after({
  "duration": 693080800,
  "status": "passed"
});
});