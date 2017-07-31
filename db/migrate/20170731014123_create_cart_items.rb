class CreateCartItems < ActiveRecord::Migration[5.0]
  def change
    create_table :cart_items do |t|
      t.integer :product_id, null: false
      t.integer :quantity, null: false
      t.integer :shopping_cart_id, null: false

      t.timestamp
    end
    add_index :cart_items, :product_id, unique: true
    add_index :cart_items, :shopping_cart_id, unique: true
  end
end
