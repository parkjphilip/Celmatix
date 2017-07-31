class Product < ApplicationRecord
  validates :name, :brand, :model, :sku, :price, :desc, presence: true

end
