class RemoveUniqueConstraintOrders < ActiveRecord::Migration[5.0]
  def change
    remove_index(:order_items, :name => 'index_order_items_on_order_id')
    add_index :order_items, :order_id
  end
end
