class MatchingsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @character = Character.where(extra: 3)
    @favorite = Favorite.all
  end
end
