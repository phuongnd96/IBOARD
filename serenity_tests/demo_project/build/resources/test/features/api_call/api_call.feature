# Feature Call some apis

#   Scenario Outline: GET method
#     Given Call a GET api to "<url>" with query strings page="<pageNumber>" and limit="<pageSize>"
#     Then status code should be "200"
# #    And result should have "50" products
#     Examples:
#       | url                                | pageNumber | pageSize |
#       | http://35.189.151.113:3000/product | 1          | 50       |

# #  Scenario: POST method
# #    Given Call a POST request to "http://35.189.151.113:3000/payment" with request body name="test" email="" and name="" and phone="" and products=""
# #    Then status code should be "400"
# #    Then result should tell us "phone is required"
