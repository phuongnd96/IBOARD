$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/dat_lenh/dat_lenh.feature");
formatter.feature({
  "name": "Đặt lệnh",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Khách hàng truy cập thành công iboard web",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Khách hàng truy cập iboard web",
  "keyword": "Given "
});
formatter.match({
  "location": "tạo_danh_mục_steps_defs.kháchHàngTruyCậpIboardWeb()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Đặt lệnh thành công trong trường hợp mode là Normal Order và có Xác nhận",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DL01"
    }
  ]
});
formatter.step({
  "name": "double click vào gía bất kì của mã chứng khoá \"BID\"",
  "keyword": "Given "
});
formatter.match({
  "location": "dat_lenh_steps_defs.doubleClickVàoGíaBấtKìCủaMãChứngKhoá(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "người dùng được chuyển hướng đến trang Login",
  "keyword": "Then "
});
formatter.match({
  "location": "dat_lenh_steps_defs.ngườiDùngĐượcChuyểnHướngĐếnTrangLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nhập tên đăng nhập \"username\"",
  "keyword": "When "
});
formatter.match({
  "location": "dat_lenh_steps_defs.nhậpTênĐăngNhập(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nhập mật khẩu \"password\"",
  "keyword": "And "
});
formatter.match({
  "location": "dat_lenh_steps_defs.nhậpMậtKhẩu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Đăng nhập",
  "keyword": "And "
});
formatter.match({
  "location": "dat_lenh_steps_defs.clickĐăngNhập()"
});
formatter.result({
  "status": "passed"
});
});