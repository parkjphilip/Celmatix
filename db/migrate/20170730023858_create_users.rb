class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.boolean :is_admin, null: false, default: false
      
      t.timestamps
    end
    add_index :users, :email, unique: true
  end
end
