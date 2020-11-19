class FavoritesController < ApplicationController
  before_action :authenticate_user!

  def index
  end

  def new
    @favorite = Favorite.new
  end

  def create
    @favorite = Favorite.new(favorite_params)
    if @favorite.save
      redirect_to root_path
    else
      render :new
    end
  end

private
  def favorite_params
    params.permit(:novel, :comic, :movie, :music, :hobby).merge(user_id: current_user.id)
  end
end
