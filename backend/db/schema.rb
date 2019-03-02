# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20190302001632) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.string "name"
    t.bigint "question_id"
    t.bigint "customer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["customer_id"], name: "index_answers_on_customer_id"
    t.index ["question_id"], name: "index_answers_on_question_id"
  end

  create_table "answers_dishes", id: false, force: :cascade do |t|
    t.bigint "answer_id", null: false
    t.bigint "dish_id", null: false
  end

  create_table "customers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dishes", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dishes_results", id: false, force: :cascade do |t|
    t.bigint "result_id", null: false
    t.bigint "dish_id", null: false
  end

  create_table "questions", force: :cascade do |t|
    t.bigint "quiz_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["quiz_id"], name: "index_questions_on_quiz_id"
  end

  create_table "quizzes", force: :cascade do |t|
    t.bigint "restaurant_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id"], name: "index_quizzes_on_restaurant_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name"
    t.string "reward"
    t.string "email"
    t.string "password_digest"
    t.float "long"
    t.float "lan"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "results", force: :cascade do |t|
    t.bigint "customer_id"
    t.bigint "quiz_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["customer_id"], name: "index_results_on_customer_id"
    t.index ["quiz_id"], name: "index_results_on_quiz_id"
  end

  add_foreign_key "answers", "customers"
  add_foreign_key "answers", "questions"
  add_foreign_key "questions", "quizzes"
  add_foreign_key "quizzes", "restaurants"
  add_foreign_key "results", "customers"
  add_foreign_key "results", "quizzes"
end
