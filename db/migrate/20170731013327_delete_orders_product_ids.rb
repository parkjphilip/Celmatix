class DeleteOrdersProductIds < ActiveRecord::Migration[5.0]
  def change
    remove_column :orders, :product_ids
  end
end
