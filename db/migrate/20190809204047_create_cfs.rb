class CreateCfs < ActiveRecord::Migration[5.2]
  def change
    create_table :cfs do |t|
      t.string :link
      t.references :question, foreign_key: true
      t.timestamps
    end
  end
end
