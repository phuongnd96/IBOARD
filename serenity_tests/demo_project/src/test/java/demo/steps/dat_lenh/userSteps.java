package demo.steps.dat_lenh;

import demo.pages.IBoard_upcom_page;
import net.thucydides.core.annotations.Step;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.hasItem;

public class userSteps {
    IBoard_upcom_page iboard_upcom_page;

    @Step
    public void doubleClickOnTickerSymbol(String ma_chung_khoan) {
        iboard_upcom_page.doubleClickOnTickerSymbol(ma_chung_khoan);
    }

    public void shouldBeNavigatedToLoginPage() {
        iboard_upcom_page.shouldBeNavigatedToLoginPage();
    }

    public void inputUserName(String userName) {
        iboard_upcom_page.inputUserName(userName);
    }

    public void inputPassword(String password) {
        iboard_upcom_page.inputPassword(password);
    }

    public void clickLoginBtn() {
        iboard_upcom_page.clickLoginBtn();
    }

    public void clickLater(){iboard_upcom_page.clickLater();}

    public void inputQuantity(String quantity) {
        iboard_upcom_page.inputQuantity(quantity);
    }

    public void inputPinCode(String pinCode) {
        iboard_upcom_page.inputPinCode(pinCode);
    }

    public void clickBuy() {
        iboard_upcom_page.clickBuy();
    }

    public void clickConfirm() {
        iboard_upcom_page.clickConfirm();
    }

    public void shouldOrderedSuccessfully() {
        assertThat(iboard_upcom_page.getNotification(),containsString("Lệnh của bạn đã được gửi đi"));
    }

    public void inputPriceValueBorder(String priceValueBorder){
        iboard_upcom_page.inputPriceValueBorder(priceValueBorder);
    }

    public void clickSavePinCodeBtn(){
        iboard_upcom_page.clickSavePinCodeBtn();
    }
}
