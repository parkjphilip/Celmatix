class Api::CartsController < ApplicationController
  def update
    debugger
    @cart_item = CartItem.new(product_id: params[:])
  end

end
