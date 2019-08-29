class Question < ApplicationRecord
  belongs_to :user, optional: true
  has_many :corrects, dependent: :destroy
  has_many :correct_users, through: :corrects
  has_many :cfs, dependent: :destroy
  has_many :dummies, dependent: :destroy
  accepts_nested_attributes_for :cfs, allow_destroy: true
  accepts_nested_attributes_for :dummies, allow_destroy: true
end
