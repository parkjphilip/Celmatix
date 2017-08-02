class RemoveUniqueIndexOrdsProductId < ActiveRecord::Migration[5.0]
  def change
    remove_index(:order_items, :name => 'index_order_items_on_product_id')
    add_index :order_items, :product_id
  end
end
