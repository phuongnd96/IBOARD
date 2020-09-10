Feature: Tạo danh mục

  Background: Khách hàng truy cập thành công iboard web
    Given Khách hàng truy cập iboard web
    Given hover vào tab Danh mục trên bảng giá và nhập tên  mục "phuongtest" sau đó nhấn nút +

  @TC01
  Scenario Outline: Tạo mới danh mục thành công
    Then Danh mục "<tên_mục>" được tạo thành công
    Examples:
      | tên_mục   |
      | phuongtest |

  @TC02
  Scenario: Tạo mới danh mục không thành công
    When lặp lại thao tác với tên mục "phuongtest"
    Then có thông báo lỗi 'Danh mục tên "phuongtest" đã tồn tại'

  @TC03
  Scenario: Thêm mã vào danh mục
    When click vào danh mục vừa tạo
    And thêm mã chứng khoán "BID" cho mục
    Then có thông báo '"BID" "hose" đã được thêm vào "phuongtest"'

  @TC04
  Scenario: Thêm mã vào danh mục không thành công
    When click vào danh mục vừa tạo
    And thêm mã chứng khoán "BID" cho mục
    And thêm mã chứng khoán "BID" cho mục
    Then có thông báo "Mã này đã tồn tại trong danh mục hiện tại"

  @TC05
  Scenario: Xóa mã trong danh mục
    When click vào danh mục vừa tạo
    And thêm mã chứng khoán "BID" cho mục
    When click vào X bên cạnh mã chứng khoán "BID"
    Then mã bị xoá thành công