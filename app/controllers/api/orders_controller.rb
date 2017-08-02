class Api::OrdersController < ApplicationController
  def create
    @order = Order.new(user_id: Integer(params[:user_id]))
    @order.save
    params[:cart_items].each do |cart_item|
      @order_item = OrderItem.new(
                      product_id: Integer(params[:cart_items][cart_item]["product"]["id"]),
                      order_id: @order.id
                      )
      @order_item.save!
    end
    render "api/orders/show"
  end
end
