class EditCartIdName < ActiveRecord::Migration[5.0]
  def change
    rename_column :cart_items, :shopping_cart_id, :cart_id
    rename_column :order_items, :shopping_cart_id, :cart_id
  end
end
