class AddTimestampsToCartItems < ActiveRecord::Migration[5.0]
  def change
    add_timestamps(:cart_items)
  end
end
