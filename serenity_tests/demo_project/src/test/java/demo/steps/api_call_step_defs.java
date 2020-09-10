//package demo.steps;
//
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import io.restassured.response.Response;
//import static io.restassured.RestAssured.given;
//public class api_call_step_defs {
//    @Given("^Call a GET api to \"([^\"]*)\" with query strings page=\"([^\"]*)\" and limit=\"([^\"]*)\"$")
//    public void callAGETApiToWithQueryStringsPageAndLimit(String url, String pageNumber, String pageSize) throws Throwable {
//        Response response=given()
//                .header("accept", "*/*")
//                .header("accept-language", "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7")
//                .header("if-none-match", "W/\"eb2-aoqtIsGwlduGD/l2xI15rU2pZ18\"")
//                .when()
//                .get();
////        Serenity.setSessionVariable("get_api_res").to(response);
//        System.out.println("1");
////        RequestSpecification httpRequest = RestAssured.given();
////        Response response = httpRequest.request(Method.GET, "/hello");
////        String responseBody = response.getBody().asString();
////        System.out.println("Response Body is =>" + responseBody);
//    }
//
//    @Then("^status code should be \"([^\"]*)\"$")
//    public void statusCodeShouldBe(String arg0) throws Throwable {
//
//        // Write code here that turns the phrase above into concrete actions
////        Response get_api_res=Serenity.sessionVariableCalled("get_api_res");
////        get_api_res.then().assertThat()
////                .statusCode(200);
////        System.out.println(get_api_res.body());
//    }
//}
