Feature: Call some apis

  Scenario:  GET method
    Given Call a GET api to "http://192.168.99.139:3003/product" with query strings page="1" and limit="21"
    Then status code should be "200"
    And number of records should equal to "21"

  Scenario: POST method
    Given Call a POST request to "http://192.168.99.139:3003/payment" with request body name="test" email=""  and phone="" and address="" and products=""
    Then status code should be "400"
    Then result should tell us "phone is required"
