require 'sinatra'
require 'sinatra/activerecord'
require './models/video.rb'
require 'aws-sdk'
require 'dotenv'

Dotenv.load
configure :development, :production do
  ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database =>  ENV['DATABASE']
  )
end

get '/' do
  @videos = Video.all
  @first_title = @videos.first.title
  @first_date = @videos.first.date.strftime("%-m/%d/%Y")
  erb :index
end

get '/upload' do
  erb :upload
end

post '/upload' do
  s3 = Aws::S3::Client.new(region: 'us-east-1', credentials: Aws::Credentials.new(ENV["AWS_ACCESS_KEY_ID"], ENV["AWS_SECRET_ACCESS_KEY"]))
  bucket = Aws::S3::Resource.new(client: s3).bucket(ENV["AWS_BUCKET"])
  obj = bucket.object("#{params[:title]}.mp4")
  obj.upload_file(params[:file][:tempfile], acl: "public-read")
  new_video = Video.new(title: params[:title], date: Time.now, url: obj.public_url)
  new_video.save
  redirect '/'
end
