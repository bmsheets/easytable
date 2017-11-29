class Api::ReservationsController < ApplicationController
  def create
    @reservation = Reservation.new(reservation_params)
    @reservation.user_id = current_user.id
    if @reservation.save
      render :show
    else
      render json: @reservation.errors.full_messages, status: 401
    end
  end

  private
  def reservation_params
    params.require(:reservation).permit(:time, :num_guests, :restaurant_id)
  end
end
