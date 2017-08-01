class Api::CartItemsController < ApplicationController
  def index
  end

  def create
    debugger
    @cart_item = CartItem.new(product_id: params[:product_id],
                              cart_id: params[:cart_id])
  end

  def destroy
  end
end
