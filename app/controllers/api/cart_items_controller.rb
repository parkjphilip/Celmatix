class Api::CartItemsController < ApplicationController
  def index
  end

  def create
    debugger
    @cart_item = CartItem.new(product_id: Integer(params[:product_id]),
                              cart_id: Integer(params[:cart_id]),
                              quantity: null)
    if @cart_item.save
      render "api/cart_items/show"
    else
      render json: @cart_item.errors.full_messages, status: 422
    end
  end

  def destroy
  end
end
