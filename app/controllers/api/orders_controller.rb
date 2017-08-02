class Api::OrdersController < ApplicationController
  def create
    @order = Order.new(user_id: Integer(params[:user_id]))
    @order.save
    params[:order_items].each do |order_item|
      debugger
      @order_item = OrderItem.new(
                                  product_id: @order_item.product.id,
                                  order_id: @order.id
                                  )
      @order_item.save!
    end
    render "api/orders/show"
  end
end
