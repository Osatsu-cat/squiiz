class Question < ApplicationRecord
  belongs_to :user, optional: true
  has_many :corrects
  has_many :correct_users, through: :corrects
  has_many :cfs
end
