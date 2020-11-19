class MatchingsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @favorite = Favorite.all
  end
end
