class Api::CartsController < ApplicationController
  def show
    @cart = Cart.find(Integer(params[:id]))
  end
end
