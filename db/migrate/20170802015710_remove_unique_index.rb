class RemoveUniqueIndex < ActiveRecord::Migration[5.0]
  def change
    remove_index(:cart_items, :name => 'index_cart_items_on_cart_id')
    add_index :cart_items, :cart_id
  end
end
