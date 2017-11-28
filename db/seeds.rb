# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({first_name: "Alice", email: "alice@mail.com", password: "password"})
User.create({first_name: "Bob", email: "bob@mail.com", password: "password"})
User.create({first_name: "Guest", email: "guest@mail.com", password: "password"})

restaurants = ActiveSupport::JSON.decode(File.read('db/seeds/restaurants.json'))
restaurant_names = ActiveSupport::JSON.decode(File.read('db/seeds/restaurant_names.json'))
thumbnail_urls = ActiveSupport::JSON.decode(File.read('db/seeds/image_urls.json'))
cuisines = ["Italian", "French", "American", "Indian", "Japanese", "Chinese",
   "Korean", "Thai", "Greek", "Vietnamese", "Mexican", "Hawaiian", "Spanish"]

restaurants.each.with_index do |restaurant, idx|
  restaurant[:name] = restaurant_names[idx]
  restaurant[:cuisine] = cuisines.sample
  restaurant[:thumbnail_url] = thumbnail_urls.sample
  Restaurant.create(restaurant)
end
