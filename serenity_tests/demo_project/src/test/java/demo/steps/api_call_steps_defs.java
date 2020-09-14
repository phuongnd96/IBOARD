package demo.steps;

import com.google.gson.JsonObject;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import net.serenitybdd.core.Serenity;

import java.util.ArrayList;
import java.util.HashMap;

import static io.restassured.RestAssured.given;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;


public class api_call_steps_defs {
    @Given("^Call a GET api to \"([^\"]*)\" with query strings page=\"([^\"]*)\" and limit=\"([^\"]*)\"$")
    public void callAGETApiToWithQueryStringsPageAndLimit(String url, String pageNumber, String pageSize) throws Throwable {
        Response resp = given().baseUri(url)
                .queryParam("page", pageNumber)
                .queryParam("limit", pageSize)
                .when().get(url);
        Serenity.setSessionVariable("resp").to(resp);
    }

    @Then("^status code should be \"([^\"]*)\"$")
    public void statusCodeShouldBe(String expectedStatusCode) throws Throwable {
        int expectedStatusCodeInt=Integer.parseInt(expectedStatusCode);
        Response resp = Serenity.sessionVariableCalled("resp");
        resp.then().statusCode(expectedStatusCodeInt);
    }

    @And("^number of records should equal to \"([^\"]*)\"$")
    public void numberOfRecordsShouldEqualTo(String expectedLength) throws Throwable {
        int expectedLengthInt=Integer.parseInt(expectedLength);
        Response resp = Serenity.sessionVariableCalled("resp");
        ArrayList<HashMap> listRecords = resp.then().extract().path("");
        assertThat(listRecords.size(), equalTo(expectedLengthInt));
    }

    @Given("^Call a POST request to \"([^\"]*)\" with request body name=\"([^\"]*)\" email=\"([^\"]*)\"  and phone=\"([^\"]*)\" and address=\"([^\"]*)\" and products=\"([^\"]*)\"$")
    public void callAPOSTRequestToWithRequestBodyNameEmailAndPhoneAndAddressAndProducts(String url, String name, String email, String phone, String address, String product) throws Throwable {
        JsonObject requestParam=new JsonObject();
        requestParam.addProperty("address", "");
        requestParam.addProperty("email", "");
        requestParam.addProperty("name", "test");
        requestParam.addProperty("phone", "");
        requestParam.addProperty("products","");
        Response resp=given()
                .header("Content-Type","application/json")
                .body(requestParam.getAsJsonObject()).post(url);
        resp.then().assertThat()
                .body(equalTo("phone is required"));
        Serenity.setSessionVariable("resp").to(resp);
    }

    @Then("^result should tell us \"([^\"]*)\"$")
    public void resultShouldTellUs(String expectedMessage) throws Throwable {
        Response resp = Serenity.sessionVariableCalled("resp");
        resp.then().body(equalTo("phone is required"));
    }
}
