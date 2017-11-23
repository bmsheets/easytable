class Api::RestaurantsController < ApplicationController
  def create
    @restaurant = Restaurant.new(restaurant_params)
    if @restaurant.save
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 401
    end
  end

  private
  def restaurant_params
    params.require(:restaurant)
    .permit(
      :name,
      :city,
      :state,
      :country,
      :address,
      :phone_number,
      :zip_code,
      :capacity)
  end
end
