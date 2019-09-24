class AddLastAnswerToCorrects < ActiveRecord::Migration[5.2]
  def change
    add_column :corrects, :last, :string
  end
end
