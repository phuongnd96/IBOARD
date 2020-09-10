package demo.pages;

import java.util.List;
import java.util.concurrent.TimeUnit;

import net.thucydides.core.annotations.DefaultUrl;
import net.thucydides.core.pages.PageObject;
import org.openqa.selenium.*;

import static demo.locators.Iboard_upcom_locators.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.hasItem;


@DefaultUrl("https://iboard.ssi.com.vn/bang-gia/vn30")
public class IBoard_upcom_page extends PageObject {
    //    Actions
    public void hoverOnCategoryAndInputCategoryName(String categoryName) {
        waitFor(O_DANH_MUC);
        withAction().moveToElement(element(By.cssSelector(O_DANH_MUC)))
                .moveToElement(element(By.xpath(INPUT_DANH_MUC)))
                .click().sendKeys(categoryName)
                .moveToElement(element(By.cssSelector(ADD_CATEGORY_BTN)))
                .click()
                .build().perform();
    }

    public void repeatAddCategory(String categoryName) {
        withAction().moveToElement(element(By.xpath(INPUT_DANH_MUC))).click().sendKeys(categoryName)
                .moveToElement(element(By.cssSelector(ADD_CATEGORY_BTN)))
                .click()
                .build().perform();
    }

    public String getNotification() {
        getDriver().manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
        String notificationMessage = getDriver().findElement(By.cssSelector(NOTIFICATION)).getText();
        System.out.println(notificationMessage);
        return notificationMessage;
    }

    public String getCategoryName(String categoryName) {
        System.out.println("1");
        System.out.println(categoryName);
        withAction().moveToElement(element(By.xpath(ADDED_CATEGORY_ON_LIST)))
                .click().build().perform();
        String result = getDriver().findElement(By.xpath(ADDED_CATEGORY_AFTER_CLICK)).getText();
        return result;
    }

    public void clickOnNewsCategory() {
        withAction().moveToElement(element(By.cssSelector(CATEGORY_LIST))).click().build().perform();
    }

    public void addTickerSymbol(String tickerSymbolName) {
        getDriver().findElement(By.cssSelector(TICKER_SYMBOL_INP)).sendKeys(tickerSymbolName);
        withAction().sendKeys(Keys.chord(Keys.ARROW_DOWN, Keys.ENTER)).build().perform();
    }

    public void deleteTickerSymbol(String tickerSymbolName) {
        if (getDriver().findElement(By.cssSelector(ADDED_STOCK)).isDisplayed() == true) {
            withAction()
                    .moveToElement(element(By.xpath(STOCK_SYMBOL)))
                    .moveToElement(element(By.cssSelector(REMOVE_STOCK_BTN))).click().build().perform();
        }
    }

    public boolean verifyDeletion() {
        try {
            return (getDriver().findElement(By.xpath(STOCK_SYMBOL)).isDisplayed());
        } catch (NoSuchElementException e) {
            return false;
        }
    }

    public void doubleClickOnTickerSymbol(String ma_chung_khoan) {
        int randomIndex = (int) (Math.random() * 13 + 1);
        System.out.println("#" + ma_chung_khoan + ">" + PRICE_CELLS);
        List<WebElement> priceCellLists = getDriver().findElements(By.cssSelector("#" + ma_chung_khoan + ">" + PRICE_CELLS));
        WebElement randomPriceCell = priceCellLists.get(randomIndex);
        withAction().moveToElement(randomPriceCell).doubleClick().build().perform();
    }

    public void shouldBeNavigatedToLoginPage() {
        String loginPageUrl = getDriver().getCurrentUrl();
        assertThat(loginPageUrl, containsString("/login"));
    }

    public void inputUserName(String username) {
        withAction().moveToElement(element(By.cssSelector(INPUT_USERNAME))).click().sendKeys(username).build().perform();
    }

    public void inputPassword(String password) {
        withAction().moveToElement(element(By.cssSelector(INPUT_PASSWORD))).click().sendKeys(password).build().perform();
    }

    public void clickLoginBtn() {
        withAction().moveToElement(element(By.cssSelector(LOGIN_BTN))).click().build().perform();
    }

    public void clickLater(){
        withAction().moveToElement(element(By.xpath(LATER_BTN))).click().build().perform();
    }

    public void inputQuantity(String quantity) {
            int quantityInt=Integer.parseInt(quantity);
            withAction().moveToElement()
    }

    public void inputPinCode(String pinCode) {
    }

    public void clickBuy() {
    }

    public void clickConfirm() {
    }

    public void shouldOrderedSuccessfully() {
    }
}
