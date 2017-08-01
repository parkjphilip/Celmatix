class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    @user.cart = Cart.new(user_id: @user.id)
    if @user.save
      login(@user)
      NewUserMailer.notify_user(@user).deliver
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end


end
