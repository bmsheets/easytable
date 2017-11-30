class Reservation < ApplicationRecord
  validates :user_id, :restaurant_id, :time, :num_guests, presence: true

  belongs_to :user
  belongs_to :restaurant
end
