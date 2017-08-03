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
      render 'api/products/index'
    else
      price = params[:price] == "" ? 0 : Integer(params[:price])
      @product = Product.new(
                              name: params[:name],
                              brand: params[:brand],
                              model: params[:model],
                              sku: params[:sku],
                              price: price,
                              desc: params[:desc]
                            )
      if @product.save
        render 'api/products/show'
      else
        render json: @product.errors.full_messages, status: 422
      end
    end
  end

  def show
    @product = Product.find(params[:id])
    if @product
      render 'api/products/show'
    else
      render json: ["Product not found."], status: 422
  end
end
