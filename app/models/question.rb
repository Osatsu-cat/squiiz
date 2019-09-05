class Question < ApplicationRecord
  belongs_to :user, optional: true
  has_many :corrects, dependent: :destroy
  has_many :correct_users, through: :corrects
  has_many :cfs, dependent: :destroy
  has_many :dummies, dependent: :destroy
  accepts_nested_attributes_for :cfs, allow_destroy: true
  accepts_nested_attributes_for :dummies, allow_destroy: true

  validates :question, presence: true,length: { maximum: 200 }
  validates :answer, presence: true,length: { maximum: 500 }
  validates :publicness, presence: true
  validates :q_type, presence: true
end
