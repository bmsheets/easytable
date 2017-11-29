class Review < ApplicationRecord
  validates :author_id, :restaurant_id, :body, :food, :ambiance, :service,
  :value, presence: true

  belongs_to :restaurant
  belongs_to :author
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
end
