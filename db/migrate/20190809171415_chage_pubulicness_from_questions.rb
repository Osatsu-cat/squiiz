class ChagePubulicnessFromQuestions < ActiveRecord::Migration[5.2]
  def change
    change_column :questions, :publicness, :integer, default: "0"
  end
end
