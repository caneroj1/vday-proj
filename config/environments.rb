configure :development, :production do
  ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database =>  ENV['DATABASE']
)
end
