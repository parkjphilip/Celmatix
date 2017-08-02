class Api::OrdersController < ApplicationController
  def create
    @order = Order.new(user_id: Integer(params[:user_id]))
    @order.save
    @order.user.cart.cart_items.each do |cart_item|
      @order_item = OrderItem.new(
                                    product_id: cart_item.product_id,
                                    order_id: @order.id
                                 )
      @order_item.save!
    end
    render "api/orders/show"
  end
end
