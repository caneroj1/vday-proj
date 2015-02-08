class CreateVideo < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :url
      t.string :title
      t.datetime :date
    end
  end
end
