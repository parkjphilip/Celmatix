class CartItem < ApplicationRecord
  validates :product_id, :quantity, :cart_id, presence: true
end
