json.extract! cart, :user_id
json.cart_items cart.cart_items
cart.cart_items.each do |cart_item|
  debugger
  json.product cart_item.product
end