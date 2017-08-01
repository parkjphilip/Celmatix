class Api::CartsController < ApplicationController
  def update
    debugger
    @cart_item = CartItem.new(product_id: params[:product][:product_id],
    )
  end


end
