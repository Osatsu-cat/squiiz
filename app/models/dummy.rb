class Dummy < ApplicationRecord
  belongs_to :question, optional: true
end
