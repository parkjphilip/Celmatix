class EditQuantityOrderItems < ActiveRecord::Migration[5.0]
  def change
    change_column_null :order_items, :quantity, true
    change_column_default :order_items, :quantity, 1
  end
end
