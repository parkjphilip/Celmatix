# == Schema Information
#
# Table name: order_items
#
#  id         :integer          not null, primary key
#  product_id :integer          not null
#  quantity   :integer          not null
#  cart_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class OrderItem < ApplicationRecord
  validates :product_id, :quantity, :cart_id, presence: true

  belongs_to :order
end
