package demo.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import demo.steps.dat_lenh.userSteps;
import net.thucydides.core.annotations.Steps;

public class dat_lenh_steps_defs {
    @Steps
    userSteps user;

    @Given("^double click vào gía bất kì của mã chứng khoá \"([^\"]*)\"$")
    public void doubleClickVàoGíaBấtKìCủaMãChứngKhoá(String ma_chung_khoan) throws Throwable {
        user.doubleClickOnTickerSymbol(ma_chung_khoan);
    }

    @Then("^người dùng được chuyển hướng đến trang Login$")
    public void ngườiDùngĐượcChuyểnHướngĐếnTrangLogin() {
        user.shouldBeNavigatedToLoginPage();
    }

    @When("^nhập tên đăng nhập \"([^\"]*)\"$")
    public void nhậpTênĐăngNhập(String userName) throws Throwable {
        user.inputUserName(userName);
    }

    @And("^nhập mật khẩu \"([^\"]*)\"$")
    public void nhậpMậtKhẩu(String password) throws Throwable {
        user.inputPassword(password);
        // Write code here that turns the phrase above into concrete actions
    }

    @And("^click Đăng nhập$")
    public void clickĐăngNhập() {
        user.clickLoginBtn();
    }

    @When("^nhập số lượng \"([^\"]*)\"$")
    public void nhậpSốLượng(String quantity) throws Throwable {
        user.inputQuantity(quantity);
    }

    @And("^nhập mã pin \"([^\"]*)\"$")
    public void nhậpMãPin(String pinCode) throws Throwable {
        user.inputPinCode(pinCode);
    }

    @When("^click Mua$")
    public void clickMua() {
        user.clickBuy();
    }

    @And("^click Xác nhận$")
    public void clickXácNhận() {
        user.clickConfirm();
    }

    @Then("^đặt lệnh thành công$")
    public void đặtLệnhThànhCông() {
        user.shouldOrderedSuccessfully();
    }

    @And("^click Để sau$")
    public void clickĐểSau() {
        user.clickLater();
    }

    @Then("^thông báo đặt lệnh thành công được hiển thị$")
    public void thôngBáoĐặtLệnhThànhCôngĐượcHiểnThị() {
    }

    @And("^lệnh hiển thị trong danh sách lệnh$")
    public void lệnhHiểnThịTrongDanhSáchLệnh() {
    }

    @When("^nhập biên trượt \"([^\"]*)\"$")
    public void nhậpBiênTrượt(String priceValueBorder) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        user.inputPriceValueBorder(priceValueBorder);
    }

    @And("^click Lưu$")
    public void clickLưu() {
        user.clickSavePinCodeBtn();
    }
}
