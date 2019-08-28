class ChangeTypeFromQuestions < ActiveRecord::Migration[5.2]
  def change
    change_column_null :questions, :q_type, null: false
  end
end
