json.array! @restaurants do |restaurant|
  json.extract! restaurant, :name, :city, :state, :country, :address, :capacity
  json.zipCode restaurant, :zip_code
  json.phoneNumber restaurant, :phone_number
end
