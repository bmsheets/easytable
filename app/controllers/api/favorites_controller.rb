class Api::FavoritesController < ApplicationController
  def create
    @favorite = Favorite.new
    @favorite.user_id = current_user.id
    @favorite.restaurant_id = params[:id]
    if @favorite.save
      @restaurant = @favorite.restaurant
      render 'api/restaurants/show'
    else
      render json: @favorite.errors.full_messages, status: 401
    end
  end

  def delete
    @favorite = Favorite.find_by(user_id: current_user, restaurant_id: params[:id])
    @favorite.destroy
    @restaurant = @favorite.restaurant
    render 'api/restaurants/show'
  end
end
