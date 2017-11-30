class Api::FavoritesController < ApplicationController
  def create
    @favorite = Favorite.new
    @favorite.user_id = current_user.id
    @favorite.restaurant_id = params[:id]
    if @favorite.save
      @user = current_user
      render 'api/users/show'
    else
      render json: @favorite.errors.full_messages, status: 401
    end
  end

  def destroy
    @favorite = Favorite.find_by(user_id: current_user, restaurant_id: params[:id])
    @favorite.destroy
    @user = current_user
    render 'api/users/show'
  end
end
