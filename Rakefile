require './app'
require 'active_record'
require './models/video.rb'

task 'delete_videos' do
  Video.delete_all
end

task 'list_videos' do
  Video.all.each.with_index do |v, index|
    print("Video ##{index + 1}:")
    print("\tTitle: #{v.title}\tUrl: #{v.url}\tUploaded On: #{v.created_at.strftime('%-m/%d/%Y')}")
  end
end
