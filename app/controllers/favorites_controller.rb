class FavoritesController < ApplicationController
  def index
  end

  def new
    @facorite = Favorite.new
  end

  def create
    Favorite.create(favorite_params)
    redirect_to root_path
  end

private
  def character_params
    params.permit(:novel, :comic, :movie, :game, :hobby).merge(user_id: current_user.id)
  end
end
