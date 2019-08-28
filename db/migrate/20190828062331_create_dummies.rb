class CreateDummies < ActiveRecord::Migration[5.2]
  def change
    create_table :dummies do |t|
      t.text :answer, null: false
      t.references :question, foreign_key: true
      t.timestamps
    end
  end
end
