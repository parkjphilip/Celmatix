class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

 private

# if someone is loggeds in, there will be a session token available
# the current user is found by using that session token
 def current_user
   return nil unless session[:session_token]
   @current_user ||= User.find_by(session_token: session[:session_token])
 end

 def logged_in?
   !!current_user
 end

# when loggin in a user, their session token is reset and the session's
# session token is set to the user's new session token
 def login(user)
   user.reset_session_token!
   session[:session_token] = user.session_token
   @current_user = user
 end

# when logging out a user, the current user's session token is reset
# and the session's session token is set to nil
 def logout
   current_user.reset_session_token!
   session[:session_token] = nil
   @current_user = nil
 end

 def require_logged_in
   render json: {base: ['invalid credentials']}, status: 401 if !current_user
 end

end
