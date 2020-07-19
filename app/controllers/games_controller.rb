class GamesController < ApplicationController 
    def show
        game = Game.find_by(id: params[:id])
        render json:  game
    end

    def create
        game = Game.new()
        game.name = params[:name]
        game.category = params[:category]
        game.save!
        render json: game
    end

    private

    def game_parameters
        params.require(:game).permit(:name, :category)
    end
end