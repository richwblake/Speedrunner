class GamesController < ApplicationController
    def index
        games = Game.all
        render json: games
    end
    
    def show
        game = Game.find_by(name: params[:name])
        render json:  { id: game.id, name: game.name, category: game.category, splits: game.splits }
    end

    def create
        game = Game.create(game_parameters)
        render json: game
    end

    private

    def game_parameters
        params.require(:game).permit(:name, :category)
    end
end 