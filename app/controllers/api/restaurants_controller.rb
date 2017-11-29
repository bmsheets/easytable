  class Api::RestaurantsController < ApplicationController
  INDEX_LIMIT = 10

  def create
    @restaurant = Restaurant.new(restaurant_params)
    if @restaurant.save
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 401
    end
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    render :show
  end

  def index
    @restaurants = Restaurant.limit(INDEX_LIMIT)
    render :index
  end

  def search
    @restaurants = Restaurant.search(params[:search_term]).limit(INDEX_LIMIT).order(:name)
    render :index
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
      :capacity,
      :cuisine)
  end
end
