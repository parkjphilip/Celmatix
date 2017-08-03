class Api::ProductsController < ApplicationController
  def index
    @products = Product.all.order(created_at: :asc, id: :asc)
  end

  def create
    # this is for the case of a JSON file upload.
    # the file must be nested under products for the upload to be successful
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
      # this code is for an upload through the upload form
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

  def update
    @product = Product.find(params[:id])
    if @product.update(price: Integer(params[:price]))
      render 'api/products/show'
    else
      render json: ["Product not found."], status: 422
    end
  end
end
