require 'test_helper'

class Api::ReservationsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_reservations_create_url
    assert_response :success
  end

end
