$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/api_call/api_call.feature");
formatter.feature({
  "name": "Call some apis",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "GET method",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Call a GET api to \"http://192.168.99.139:3003/product\" with query strings page\u003d\"1\" and limit\u003d\"21\"",
  "keyword": "Given "
});
formatter.match({
  "location": "api_call_steps_defs.callAGETApiToWithQueryStringsPageAndLimit(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "api_call_steps_defs.statusCodeShouldBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "number of records should equal to \"21\"",
  "keyword": "And "
});
formatter.match({
  "location": "api_call_steps_defs.numberOfRecordsShouldEqualTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "POST method",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Call a POST request to \"http://192.168.99.139:3003/payment\" with request body name\u003d\"test\" email\u003d\"\"  and phone\u003d\"\" and address\u003d\"\" and products\u003d\"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "api_call_steps_defs.callAPOSTRequestToWithRequestBodyNameEmailAndPhoneAndAddressAndProducts(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "api_call_steps_defs.statusCodeShouldBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result should tell us \"phone is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "api_call_steps_defs.resultShouldTellUs(String)"
});
formatter.result({
  "status": "passed"
});
});