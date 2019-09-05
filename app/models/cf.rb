class Cf < ApplicationRecord
  belongs_to :question, optional: true
  validates :link, length: { maximum: 150 }, format: { with: /(http|https)\:\/\/([\w-]+\.).+/, message: "正しいURLを入力してください"} 
end