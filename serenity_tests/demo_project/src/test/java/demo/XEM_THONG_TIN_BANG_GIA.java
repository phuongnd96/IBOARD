package demo;
import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;
//to run with a specific test suite: mvn test -Dtest=classname
//Example mvn test -Dtest=TAO_DANH_MUC
@RunWith(CucumberWithSerenity.class)
@CucumberOptions(features = {
        "src/test/resources/features/xem_thong_tin_bang_gia/xem_thong_tin_bang_gia.feature",
},
        plugin = {
                "junit:target/testrunner/cucumber.xml"
                , "html:target/testrunner"
                , "json:target/testrunner/cucumber.json"
        })
public class XEM_THONG_TIN_BANG_GIA {
}
