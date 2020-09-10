package demo.steps.serenity.tạo_danh_mục;

import demo.pages.IBoard_upcom_page;
import net.thucydides.core.annotations.Step;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.hasItem;

public class userSteps {
    IBoard_upcom_page iboard_upcom_page;

    @Step
    public void isOnIBoardPage() {
        iboard_upcom_page.open();
    }

    @Step
    public void hoverOnCategoryAndInputCategoryName(String categoryName) {
        iboard_upcom_page.hoverOnCategoryAndInputCategoryName(categoryName);
    }

    @Step
    public void repeatAddCategory(String categoryName) {
        iboard_upcom_page.repeatAddCategory(categoryName);
    }

    @Step

    public void shoudldSeeCategory(String categoryName) {
        assertThat(iboard_upcom_page.getCategoryName(categoryName), containsString(categoryName));
    }

    @Step

    public void shouldSeeErrorMessage(String errorMessage) {
        assertThat(iboard_upcom_page.getNotification(), containsString(errorMessage));
    }

    @Step

    public void clickOnNewsCategory() {
        iboard_upcom_page.clickOnNewsCategory();
    }


    @Step

    public void addTickerSymbol(String tickerSymbolName) {
        iboard_upcom_page.addTickerSymbol(tickerSymbolName);
    }

    @Step

    public void deleteTickerSymbol(String tickerSymbolName) {
        iboard_upcom_page.deleteTickerSymbol(tickerSymbolName);
    }

    @Step

    public void shouldSeeMessage(String mã_chứng_khoán, String tên_sàn, String tên_mục) {
        assertThat(iboard_upcom_page.getNotification(), containsString(mã_chứng_khoán + " [" + tên_sàn + "]" + " đã được thêm vào " + tên_mục));
    }

    public void verifyDeletion() {
        iboard_upcom_page.verifyDeletion();
    }
}
