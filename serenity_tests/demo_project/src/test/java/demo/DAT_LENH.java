package demo;
import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;
@RunWith(CucumberWithSerenity.class)
@CucumberOptions(features = {
        "src/test/resources/features/dat_lenh/dat_lenh.feature",
},
        plugin = {
                "junit:target/testrunner/cucumber.xml"
                , "html:target/testrunner"
                , "json:target/testrunner/cucumber.json"
        })
public class DAT_LENH {
}
