class Restaurant < ApplicationRecord
  validates :name, :city, :country, :capacity, presence: true
end
