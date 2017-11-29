require 'test_helper'

class Api::FavoritesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_favorites_create_url
    assert_response :success
  end

  test "should get delete" do
    get api_favorites_delete_url
    assert_response :success
  end

end
