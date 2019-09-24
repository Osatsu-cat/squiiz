class Correct < ApplicationRecord
  belongs_to :user
  belongs_to :question

  validates :last,length: { maximum: 1000 }
end
