package demo.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.thucydides.core.annotations.Steps;
import demo.steps.serenity.tạo_danh_mục.userSteps;
//import org.openqa.selenium.interactions.Actions;

public class tạo_danh_mục_steps_defs {
    @Steps
    userSteps user;

    @Given("^Khách hàng truy cập iboard web$")
    public void kháchHàngTruyCậpIboardWeb() {
        user.isOnIBoardPage();
    }

    @When("^hover vào tab Danh mục trên bảng giá và nhập tên  mục \"([^\"]*)\" sau đó nhấn nút \\+$")
    public void hoverVàoTabDanhMụcTrênBảngGiáVàNhậpTênMụcSauĐóNhấnNút(String tên_mục) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        user.hoverOnCategoryAndInputCategoryName(tên_mục);

    }

    @And("^click vào danh mục vừa tạo$")
    public void clickVàoDanhMụcVừaTạo() {
        user.clickOnNewsCategory();
    }

    @Then("^Danh mục \"([^\"]*)\" được tạo thành công$")
    public void danhMụcĐượcTạoThànhCông(String tên_mục) throws Throwable {
        user.shoudldSeeCategory(tên_mục);
    }


    @Then("^có thông báo lỗi 'Danh mục tên \"([^\"]*)\" đã tồn tại'$")
    public void cóThôngBáoLỗiDanhMụcTênĐãTồnTại(String tên_mục) throws Throwable {
        user.shouldSeeErrorMessage(tên_mục);
    }

    @Then("^có thông báo \"([^\"]*)\"$")
    public void cóThôngBáo(String errorMessage) throws Throwable {
        user.shouldSeeErrorMessage(errorMessage);
    }

    @When("^thêm mã chứng khoán \"([^\"]*)\" cho mục$")
    public void thêmMãChứngKhoánChoMục(String tickerSymbol) throws Throwable {
        user.addTickerSymbol(tickerSymbol);
    }

    @When("^click vào X bên cạnh mã chứng khoán \"([^\"]*)\"$")
    public void clickVàoXBênCạnhMãChứngKhoán(String tickerSymbol) throws Throwable {
        user.deleteTickerSymbol(tickerSymbol);
    }


    @Then("^có thông báo '\"([^\"]*)\" \"([^\"]*)\" đã được thêm vào \"([^\"]*)\"'$")
    public void cóThôngBáoĐãĐượcThêmVào(String mã_chứng_khoán, String tên_sàn, String tên_mục) throws Throwable {
        user.shouldSeeMessage(mã_chứng_khoán, tên_sàn, tên_mục);
    }


    @And("^lặp lại thao tác với tên mục \"([^\"]*)\"$")
    public void lặpLạiThaoTácVớiTênMục(String tên_mục) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        user.repeatAddCategory(tên_mục);
    }

    @Then("^mã bị xoá thành công$")
    public void mãBịXoáThànhCông() {
        user.verifyDeletion();
    }
}

