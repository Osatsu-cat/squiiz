class AddTypeToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :q_type, :string
  end
end
