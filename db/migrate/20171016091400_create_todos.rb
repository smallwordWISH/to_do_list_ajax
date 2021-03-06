class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.string :title
      t.date :due_date
      t.time :due_time
      t.text :note
      t.boolean :check_box
      t.timestamps
    end
  end
end
