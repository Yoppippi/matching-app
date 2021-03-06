class MatchingsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    if user_signed_in?
      @user = User.find(current_user.id)
      if Character.exists?(user_id: @user.id) && Favorite.exists?(user_id: @user.id)
        curr_chara = Character.find_by(user_id: @user.id)
        @curr_cha = Character.find_by(user_id: @user.id)
        @curr_ext = curr_chara.extra / 10.to_f
        @curr_ner = curr_chara.nervous / 10.to_f
        @curr_hon = curr_chara.honesty / 10.to_f
        @curr_har = curr_chara.harmony / 15.to_f
        @curr_ope = curr_chara.openness / 15.to_f

        chara_all = Character.all
        chara_match = []
        chara_all.each do |chara|
          if (chara.extra == curr_chara.extra || chara.extra == curr_chara.extra - 1 || chara.extra == curr_chara.extra + 1)\
             && (chara.nervous == curr_chara.nervous || chara.nervous == curr_chara.nervous - 1 || chara.nervous == curr_chara.nervous + 1)\
             && (chara.honesty == curr_chara.honesty || chara.honesty == curr_chara.honesty - 1 || chara.honesty == curr_chara.honesty + 1)\
             && (chara.harmony == curr_chara.harmony || chara.harmony == curr_chara.harmony - 1 || chara.harmony == curr_chara.harmony + 1)\
             && (chara.openness == curr_chara.openness || chara.openness == curr_chara.openness - 1 || chara.openness == curr_chara.openness + 1)
              chara_match << chara
          end
        end

        @favo_match = []
        chara_match.each do |chara|
          @favo_match << Favorite.find_by(user_id: chara.user_id)
        end

        @user_match = []
        chara_match.each do |chara|
          @user_match << User.find_by(id: chara.user_id)
        end

        @character = Character.where(extra: curr_chara.extra)
        @favorite = Favorite.all
      end
    end
  end

  def update
  end
end
