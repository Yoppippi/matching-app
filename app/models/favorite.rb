class Favorite < ApplicationRecord
  validates :novel, :comic, :movie, :music, :hobby, presence: true

  belongs_to :user
end
