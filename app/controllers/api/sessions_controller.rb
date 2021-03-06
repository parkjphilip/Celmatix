class Api::SessionsController < ApplicationController
  def create
		email = params[:user][:email]
		password = params[:user][:password]
		@user = User.find_by_credentials(email, password)
    if @user
			login(@user)
			render "api/users/show"
		else
			case
			when email == "" && password != ""
				render(
					json: ["Username can't be blank"],
					status: 401
				)
			when email != "" && password == ""
				render(
					json: ["Password can't be blank"],
					status: 401
				)
			when email == "" && password == ""
				render(
					json: ["Username & password can't be blank"],
					status: 401
				)
			else
				render(
					json: ["Invalid login credentials- please try again"],
					status: 401
				)
			end
		end
	end

	def destroy
		@user = current_user
		if @user
			logout
			render "api/users/show"
		else
			render(
        json: ["Nobody signed in"],
        status: 404
      )
		end
	end
end