class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      # whenever a new user signs up, a cart is crated for that user as well
      @cart = Cart.new(user_id: @user.id)
      @cart.save
      login(@user)
      # mail is sent to user
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
