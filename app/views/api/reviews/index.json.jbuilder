@reviews.each do |review|
  json.set! review.id do
    json.restaurantId review[:restaurant_id]
    json.authorId review[:author_id]
    json.extract! review, :id, :body, :food, :ambiance, :service, :value
  end
end
