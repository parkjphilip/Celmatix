class DeleteCartsProductIds < ActiveRecord::Migration[5.0]
  def change
    remove_column :carts, :product_ids
  end
end
