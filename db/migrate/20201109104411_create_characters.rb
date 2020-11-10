class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.references :user,        null: false, foreign_key: true
      t.integer    :extra,       null: false 
      t.integer    :nervous,     null: false
      t.integer    :honesty,     null: false
      t.integer    :harmony,     null: false
      t.integer    :openness,    null: false
      t.timestamps
    end
  end
end
