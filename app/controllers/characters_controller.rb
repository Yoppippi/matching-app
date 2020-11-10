class CharactersController < ApplicationController
  
  def index
  end

  def new
    @character = Character.new
  end

  def create
    @character = Character.new
  end
end
