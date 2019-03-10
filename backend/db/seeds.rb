# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Creating Customer

cus1 = Customer.create!(first_name: "Anisa", last_name: "Tahlil", email: "anisa@hotmail.com", password_digest: "12345")

# Creating Restaurants
res1 = Restaurant.create(name:"Rachel's Sushi Palace", reward: "$5.00 off first order", email: "rachel@gmail.com", password_digest: "hello",latitude: 43.6450,longitude:  -79.3965, description:"Japanese Restaurant", image:"https://img.jakpost.net/c/2017/02/28/2017_02_28_22453_1488267265._large.jpg", address:"461 King St W, Toronto, ON");
res2 = Restaurant.create(name:"Marty's deepdished Cuisine", reward: "$2.00 off first order", email:"gagan@gmail.com", password_digest:"hithere",latitude: 43.645581, longitude: -79.400644, description:"Italian Restaurant" ,image:"https://amp.businessinsider.com/images/56182ad29dd7cc1b008c0dae-750-526.jpg", address:"80 Portland Street, Toronto,ON" );
res3 = Restaurant.create(name:"The Foodie's Bargain", reward:"50% off first order", email:"foodie@gmail.com",password_digest:"hello",latitude: 43.645630, longitude: -79.399195, description:"Great food for a bargain", image:"https://i.imgur.com/n3BQO3o.png", address:"662 King Street West, Toronto,ON")
res4 = Restaurant.create(name:"SweetNSour", reward:"$5.00 off first order", email:"sweetnsalty@gmail.com",password_digest:"hello",latitude: 43.643900, longitude: -79.397554, description:"Heaven for sweet-tooths", image:"https://i.imgur.com/gKcgyR0.jpg", address:"730 King Street West, Toronto,ON")
res5 = Restaurant.create(name:"Punjab Pioneers Buffet", reward:"$10.00 off first order", email:"ppb@gmail.com",password_digest:"hello",latitude: 43.646220, longitude: -79.394614, description:"Indian food buffet", image:"https://i.imgur.com/diS0Bnu.png", address:"721 King Street West, Toronto,ON")


quiz1 = Quiz.create(restaurant_id:1);

# Quiz Questions 
# 1
question1 = Question.create(quiz_id:1, inquiry:"What type of portions do you prefer?")
# 2
question2 = Question.create( quiz_id:1, inquiry:"Do you eat raw fish?")
# 3
question3 = Question.create(quiz_id:1, inquiry:"When I add hot sauce, I prefer to add it like this:")
# # 4
# question4 = Question.create(quiz_id:1, inquiry:"Which of the following do you prefer?")



#Options for Question 1
option1 = Option.create(question_id: 1, name:"Small")
option2 = Option.create(question_id: 1, name:"Large")

#Options for Question 2
option3 = Option.create(question_id: 2, name:"Yes")
option4 = Option.create(question_id: 2, name:"No")

#Options for Question 3
option5 = Option.create(question_id: 3, name:"A line")
option6 = Option.create(question_id: 3, name:"More than 1 dot")
option7 = Option.create(question_id: 3, name:"A dot")


# #Options for Question 4
# option8 = Option.create(question_id: 4, name:"Sweet")
# option9 = Option.create(question_id: 4, name:"Sour")
# option10 = Option.create(question_id: 4, name:"Salty")



# Dishes 

# Raw Fish(light and heavy)
dish1 = Dish.create(restaurant_id:1, name:"Ruby Sashimi [12pc]", image:"https://scontent-lax3-1.cdninstagram.com/vp/a0d1f0f0250388ce58c075c9db8eedd5/5CD57D20/t51.2885-15/e35/c41.0.998.998/s480x480/46797746_2460616444012583_2590863162451918337_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com" )
dish2 = Dish.create(restaurant_id:1, name:"Ruby Sashimi [6pc]", image:"https://scontent-lax3-1.cdninstagram.com/vp/a0d1f0f0250388ce58c075c9db8eedd5/5CD57D20/t51.2885-15/e35/c41.0.998.998/s480x480/46797746_2460616444012583_2590863162451918337_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com" )

# Not raw Fish
dish3 = Dish.create(restaurant_id:1, name:"Tempura Shrimp [6pc]", image:"https://www.justonecookbook.com/wp-content/uploads/2016/04/Dragon-Roll-New.jpg" )
dish4 = Dish.create(restaurant_id:1, name:"Tempura Shrimp [12pc]", image:"https://www.justonecookbook.com/wp-content/uploads/2016/04/Dragon-Roll-New.jpg" )

dish5 = Dish.create(restaurant_id:1, name:"Spicy Tuna Roll [6pc]", image:"https://www.justonecookbook.com/wp-content/uploads/2017/02/Spicy-Tuna-Rolls-III.jpg" )
dish6 = Dish.create(restaurant_id:1, name:"Spicy Tuna Roll [12pc]", image:"https://www.justonecookbook.com/wp-content/uploads/2017/02/Spicy-Tuna-Rolls-III.jpg" )

dish7 = Dish.create(restaurant_id:1, name:"Spider Roll [6pc]", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOSiw0DNvOGTz63lYnQkWbWZLfMcEJ9ES5brCp3wcd0nb3ioF" )
dish8 = Dish.create(restaurant_id:1, name:"Spider Roll [12pc]", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOSiw0DNvOGTz63lYnQkWbWZLfMcEJ9ES5brCp3wcd0nb3ioF" )


dish9 = Dish.create(restaurant_id:1, name:"California Roll [6pc]", image:"https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/600x400/california-roll-sushi_33781.jpg" )
dish10 = Dish.create(restaurant_id:1, name:"California Roll [12pc]", image:"https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/600x400/california-roll-sushi_33781.jpg" )


#Associating dishes with options 

# All 6pc sushi(Light Option)
DishOption.create(option_id:1, dish_id:2)
DishOption.create(option_id:1, dish_id:3)
DishOption.create(option_id:1, dish_id:5)
DishOption.create(option_id:1, dish_id:7)
DishOption.create(option_id:1, dish_id:9)




# All 12pc sushi(Heavy Option)
DishOption.create(option_id:2, dish_id:1)
DishOption.create(option_id:2, dish_id:4)
DishOption.create(option_id:2, dish_id:8)
DishOption.create(option_id:2, dish_id:8)
DishOption.create(option_id:2, dish_id:10)




# All raw fish dishes
DishOption.create(option_id:3, dish_id:1)
DishOption.create(option_id:3, dish_id:2)





# Not raw fish dishes
DishOption.create(option_id:4, dish_id:3)
DishOption.create(option_id:4, dish_id:4)
DishOption.create(option_id:4, dish_id:5)
DishOption.create(option_id:4, dish_id:6)
DishOption.create(option_id:4, dish_id:7)
DishOption.create(option_id:4, dish_id:8)
DishOption.create(option_id:4, dish_id:9)
DishOption.create(option_id:4, dish_id:10)




# All hot dishes
DishOption.create(option_id:5, dish_id:5)
DishOption.create(option_id:5, dish_id:6)

# All medium dishes 
DishOption.create(option_id:6, dish_id:7)
DishOption.create(option_id:6, dish_id:8)


# All mild options 

DishOption.create(option_id:7, dish_id:1)
DishOption.create(option_id:7, dish_id:2)
DishOption.create(option_id:7, dish_id:3)
DishOption.create(option_id:7, dish_id:4)
DishOption.create(option_id:7, dish_id:9)
DishOption.create(option_id:7, dish_id:10)
