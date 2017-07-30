class CreateCarts < ActiveRecord::Migration[5.0]
  def change
    create_table :carts do |t|
      t.integer :user_id, null: false
      t.text :product_ids, array: true, default: []

      t.timestamps
    end
    add_index :carts, :user_id, unique: true
  end
end
