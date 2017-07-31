class Order < ApplicationRecord
  validates :user_id, presence: true
end
