package demo;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(features = {
 "src/test/resources/features/danh_mục/tạo_danh_mục/tạo_danh_mục.feature"
        },
        plugin = {
                "junit:target/testrunner/cucumber.xml"
                , "html:target/testrunner"
                , "json:target/testrunner/cucumber.json"
        })
public class TAO_DANH_MUC {
}
