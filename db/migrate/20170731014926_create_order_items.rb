class CreateOrderItems < ActiveRecord::Migration[5.0]
  def change
    create_table :order_items do |t|
      t.integer :product_id, null: false
      t.integer :quantity, null: false
      t.integer :shopping_cart_id, null: false

      t.timestamps
    end
    add_index :order_items, :product_id, unique: true
    add_index :order_items, :shopping_cart_id, unique: true
  end
end