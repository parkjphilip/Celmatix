class Api::ProductsController < ApplicationController
  def index
    @products = Product.all.order(created_at: :asc, id: :asc)
  end

  def create
    if params[:products]
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
    else
      @product = Product.new(
                              name: params[:name],
                              brand: params[:brand],
                              model: params[:model],
                              sku: params[:sku],
                              price: Integer(params[:price]),
                              desc: params[:desc]
                            )
      if !@product.save
        render json: @product.errors.full_messages, status: 422
      end
    end
    @products = Product.all
    render "api/products/index"
  end
end
