class CartItem < ApplicationRecord
  validates :product_id, :quantity, :cart_id, presence: true

  belongs_to :cart
end
