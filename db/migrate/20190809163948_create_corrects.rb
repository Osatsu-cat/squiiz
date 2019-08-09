class CreateCorrects < ActiveRecord::Migration[5.2]
  def change
    create_table :corrects do |t|
      t.references :user,      foreign_key: true
      t.references :question,  foreign_key: true
      t.integer    :y_count,   null: false, default: "0"
      t.integer    :n_count,   null: false, default: "0"
      t.integer    :accuracy,  null: false, default: "0"
      t.integer    :sum,  null: false, default: "0"
      t.integer    :pick,  null: false, default: "0"
      t.timestamps
    end
  end
end
