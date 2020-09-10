Feature: Đặt lệnh

  Background: Khách hàng truy cập thành công iboard web
    Given Khách hàng truy cập iboard web

    @DL01
    Scenario: Đặt lệnh thành công trong trường hợp mode là Normal Order và có Xác nhận
    Given double click vào gía bất kì của mã chứng khoá "BID"
    Then người dùng được chuyển hướng đến trang Login
#    When nhập tên đăng nhập "username"
#    And nhập mật khẩu "password"
#    And click Đăng nhập
#    When nhập số lượng "123"
#    And nhập mã pin "123123"
#    When click Mua
#    And click Xác nhận
#    Then đặt lệnh thành công

#    @DL02
#    Given double click vào gía bất kì của mã chứng khoá "BID"
#    Then người dùng được chuyển hướng đến trang "login"
#    When nhập tên đăng nhập "username"
#    And nhập mật khẩu "password"
#    And click Đăng nhập
#    And click Để sau
#    When nhập số lượng "123"
#    And nhập mã pin "123123"
#    When click Mua
#    Then thông báo đặt lệnh thành công được hiển thị
#    And lệnh hiển thị trong danh sách lệnh
#
#    @DL03
#    Given double click vào gía bất kì của mã chứng khoá "BID"
#    Then người dùng được chuyển hướng đến trang "login"
#    When nhập tên đăng nhập "username"
#    And nhập mật khẩu "password"
#    And click Đăng nhập
#    And click Để sau
#    When nhập biên trượt "abc"
#    And nhập số lượng "123"
#    And nhập mã pin "123123"
#    When click Mua
#    And click Xác nhận
#    Then thông báo đặt lệnh thành công được hiển thị
#    And lệnh hiển thị trong danh sách lệnh
#
#    @DL04
#    Given double click vào gía bất kì của mã chứng khoá "BID"
#    Then người dùng được chuyển hướng đến trang "login"
#    When nhập tên đăng nhập "username"
#    And nhập mật khẩu "password"
#    And click Đăng nhập
#    And click Để sau
#    When nhập biên trượt "abc"
#    And nhập số lượng "123"
#    And nhập mã pin "123123"
#    When click Mua
#    Then thông báo đặt lệnh thành công được hiển thị
#    And lệnh hiển thị trong danh sách lệnh
#
#    @DL05
#    Given double click vào gía bất kì của mã chứng khoá "BID"
#    Then người dùng được chuyển hướng đến trang "login"
#    When nhập tên đăng nhập "username"
#    And nhập mật khẩu "password"
#    And click Đăng nhập
#    And click Để sau
#    When nhập biên trượt "abc"
#    And nhập số lượng "123"
#    And nhập mã pin "123123"
#    And click Lưu
#    When click Mua
#    Then thông báo đặt lệnh thành công được hiển thị
#    And lệnh hiển thị trong danh sách lệnh
#
#    @DL06
#    Given double click vào gía bất kì của mã chứng khoá "BID"
#    Then người dùng được chuyển hướng đến trang "login"
#    When nhập tên đăng nhập "username"
#    And nhập mật khẩu "password"
#    And click Đăng nhập
#    And nhập mã pin "123123"
#    And click Lưu
#    And nhập số lượng "123"
#    And click Xác nhận
#    When click Mua
#    Then thông báo đặt lệnh thành công được hiển thị
#    And lệnh hiển thị trong danh sách lệnh
#
