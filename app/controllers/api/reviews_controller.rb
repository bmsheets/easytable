class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    @review.restaurant_id = params[:id]
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  def update
    @review = Review.find_by(user_id: current_user, restaurant_id: params[:id])
    if @review.update_attributes(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  def destroy
    @review = Review.find_by(user_id: current_user, restaurant_id: params[:id])
    @review.destroy
    render :show
  end

  private
  def review_params
    params.require(:review).permit(:body, :food, :ambiance, :service, :value)
  end
end
