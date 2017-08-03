# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  is_admin        :boolean          default("false"), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

# ensures that after a user is created, that the user has a session token
  after_initialize :ensure_session_token

  has_one :cart
  has_many :orders

# almost like an attr_reader for the newly created bcrpyt password
  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

# Password.new grabs the password out of the password digest and checks
# it with the inputted password
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom.base64
  end
end
