class Video < ActiveRecord::Base
  validates_presence_of :title
  validates_presence_of :url
  validates_presence_of :date
end

