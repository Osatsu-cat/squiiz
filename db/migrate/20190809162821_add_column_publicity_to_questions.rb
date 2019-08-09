class AddColumnPublicityToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :publicness, :integer
  end
end
