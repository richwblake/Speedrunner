class SplitsController < ApplicationController 
    def show
        split = Split.find_by(id: params[:id])
        render json: split
    end

    def create
        game = Game.find_by(name: params[:gameName])
        params[:splits].each_value do |value|
            split = game.splits.build(title: value)
            split.save!
        end
        render json: {name: game.name, category: game.category, splits: game.splits }
    end
end 