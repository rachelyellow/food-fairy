# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Creating Restaurants


res1 = Restaurant.create(name: "Rachel's Sushi Palace", reward: "$5.00 off first order", email: "rachel@gmail.com", password_digest: "hello", longitude: 43.6, latitude: -79.40);
res2 = Restaurant.create(name:"Gagan's Res", reward: "$2.00 off first order", email:"gagan@gmail.com", password_digest:"hithere", longitude:-50.0, latitude:80.0);

quiz1 = Quiz.create(restaurant_id:1);

# Quiz Questions 
# 1
question1 = Question.create(quiz_id:1, inquiry:"What type of portions do you prefer?")
# 2
question2 = Question.create( quiz_id:1, inquiry:"Do you eat raw fish?")
# 3
question3 = Question.create(quiz_id:1, inquiry:"What spice level do you prefer?")
# # 4
# question4 = Question.create(quiz_id:1, inquiry:"Which of the following do you prefer?")



#Options for Question 1
option1 = Option.create(question_id: 1, name:"Light")
option2 = Option.create(question_id: 1, name:"Heavy")

#Options for Question 2
option3 = Option.create(question_id: 2, name:"Yes")
option4 = Option.create(question_id: 2, name:"No")

#Options for Question 3
option5 = Option.create(question_id: 3, name:"Hot")
option6 = Option.create(question_id: 3, name:"Medium")
option7 = Option.create(question_id: 3, name:"Mild")


# #Options for Question 4
# option8 = Option.create(question_id: 4, name:"Sweet")
# option9 = Option.create(question_id: 4, name:"Sour")
# option10 = Option.create(question_id: 4, name:"Salty")



# Dishes 

# Raw Fish(light and heavy)
dish1 = Dish.create(name:"Ruby Sashimi [12pc]", image:"https://scontent-lax3-1.cdninstagram.com/vp/a0d1f0f0250388ce58c075c9db8eedd5/5CD57D20/t51.2885-15/e35/c41.0.998.998/s480x480/46797746_2460616444012583_2590863162451918337_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com" )
dish2 = Dish.create(name:"Ruby Sashimi [6pc]", image:"https://scontent-lax3-1.cdninstagram.com/vp/a0d1f0f0250388ce58c075c9db8eedd5/5CD57D20/t51.2885-15/e35/c41.0.998.998/s480x480/46797746_2460616444012583_2590863162451918337_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com" )

# Not raw Fish
dish3 = Dish.create(name:"Tempura Shrimp [6pc]", image:"https://www.justonecookbook.com/wp-content/uploads/2016/04/Dragon-Roll-New.jpg" )
dish4 = Dish.create(name:"Tempura Shrimp [12pc]", image:"https://www.justonecookbook.com/wp-content/uploads/2016/04/Dragon-Roll-New.jpg" )

dish5 = Dish.create(name:"Spicy Tuna Roll [6pc]", image:"https://www.justonecookbook.com/wp-content/uploads/2017/02/Spicy-Tuna-Rolls-III.jpg" )
dish6 = Dish.create(name:"Spicy Tuna Roll [12pc]", image:"https://www.justonecookbook.com/wp-content/uploads/2017/02/Spicy-Tuna-Rolls-III.jpg" )

dish7 = Dish.create(name:"Spider Roll [6pc]", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOSiw0DNvOGTz63lYnQkWbWZLfMcEJ9ES5brCp3wcd0nb3ioF" )
dish8 = Dish.create(name:"Spider Roll [12pc]", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOSiw0DNvOGTz63lYnQkWbWZLfMcEJ9ES5brCp3wcd0nb3ioF" )


dish9 = Dish.create(name:"California Roll [6pc]", image:"https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/600x400/california-roll-sushi_33781.jpg" )
dish10 = Dish.create(name:"California Roll [12pc]", image:"https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/600x400/california-roll-sushi_33781.jpg" )


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
