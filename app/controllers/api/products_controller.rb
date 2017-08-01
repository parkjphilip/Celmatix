class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def create
    params[:products].each do |product|
      @product = Product.new(
                              name: product[:name],
                              brand: product[:brand],
                              model: product[:model],
                              sku: product[:sku],
                              price: product[:price],
                              desc: product[:desc]
                            )
      if !@product.save
        render json: @product.errors.full_messages, status: 422
      end
    end
  end

end
