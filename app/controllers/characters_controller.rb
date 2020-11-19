class CharactersController < ApplicationController
  
  def index
  end

  def new
    @character = Character.new
  end

  def create
    Character.create(character_params)
    redirect_to root_path
  end

private
  def character_params
    params.permit(:extra, :nervous, :honesty, :harmony, :openness).merge(user_id: current_user.id)
  end
end