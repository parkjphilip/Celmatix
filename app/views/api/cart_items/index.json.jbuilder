json.array!(@cart_items) do |cart_item|
  json.partial! "api/cart_items/cart_item", cart_item: cart_item
end