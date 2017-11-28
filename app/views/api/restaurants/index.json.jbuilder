@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.extract! restaurant, :id, :name, :city, :state, :country, :address, :capacity, :cuisine
    json.zipCode restaurant[:zip_code]
    json.phoneNumber restaurant[:phone_number]
    json.thumbnailUrl restaurant[:thumbnail_url]
  end
end
