class Question < ApplicationRecord
  belongs_to :user, optional: true
  has_many :corrects, dependent: :destroy
  has_many :correct_users, through: :corrects
  has_many :cfs, dependent: :destroy
  accepts_nested_attributes_for :cfs, allow_destroy: true
end
