class Dummy < ApplicationRecord
  belongs_to :question, optional: true
  validates :answer,presence: true,length: { maximum: 500 }, if: :select?

  private
  def select?
    self.question.q_type == "select"
  end
end
