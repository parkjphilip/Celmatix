class Api::CartItemsController < ApplicationController
  def index
    @cart_items = CartItem.where(cart_id: Integer(params[:cart_id]))
  end

  def create
    @cart_item = CartItem.new(product_id: Integer(params[:product_id]),
                              cart_id: Integer(params[:cart_id]))
    if @cart_item.save
      render "api/cart_items/show"
    else
      render json: @cart_item.errors.full_messages, status: 422
    end
  end

  def destroy
    @cart_item = CartItem.find(Integer(params[:id]))
    @cart_item.destroy
    render "api/cart_items/show"
  end
end
