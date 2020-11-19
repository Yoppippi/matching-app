class CreateFavorites < ActiveRecord::Migration[6.0]
  def change
    create_table :favorites do |t|
      t.references :user,             null: false, foreign_key: true
      t.string     :novel,            null: false
      t.string     :comic,            null: false
      t.string     :movie,            null: false
      t.string     :game,             null: false
      t.string     :hobby,            null: false
      t.timestamps
    end
  end
end
