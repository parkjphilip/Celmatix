class EditCartIdColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :order_items, :cart_id, :order_id
  end
end
