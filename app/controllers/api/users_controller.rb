

class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)

    if @user.save
      debugger
      login(@user)
      NewUserMailer.notify_user(@user).deliver
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # def create_mail(email)
  #   debugger
  #   mail = Mail.new do
  #     from    'challenge@celmatix.com'
  #     to      email
  #     subject 'Celmatix Challenge'
  #     body    'This is the automated Celmatix Challenge email'
  #   end
  # end
  #
  # def send_mail(email)
  #   Mail.deliver do
  #     debugger
  #     from     'challenge@celmatix.com'
  #     to       email
  #     subject  'Celmatix Challenge'
  #     body     'This is the automated Celmatix Challenge email'
  #   end
  # end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end


end
