class RemoveUniqueIndexOrders < ActiveRecord::Migration[5.0]
  def change
    remove_index(:orders, :name => 'index_orders_on_user_id')
    add_index :orders, :user_id
  end
end
