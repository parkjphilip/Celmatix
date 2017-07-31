class NewUserMailer < ApplicationMailer
  def notify_user(user)
    @user = user
    mail(to: @user.email, subject: "Welcome to the Celmatix Coding Challenge")
  end
end
