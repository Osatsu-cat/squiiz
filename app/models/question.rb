class Question < ApplicationRecord
  belongs_to :user
  has_many :corrects
  has_many :correct_users, through: :corrects
end
