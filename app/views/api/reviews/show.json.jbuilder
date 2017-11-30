json.extract! @review, :id, :body, :food, :ambiance, :service, :value
json.authorId @review[:author_id]
json.restaurantId @review[:restaurant_id]
