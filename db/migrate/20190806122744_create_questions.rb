class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.text         :question, null: false
      t.text         :answer, null: false
      t.timestamps
    end
  end
end
