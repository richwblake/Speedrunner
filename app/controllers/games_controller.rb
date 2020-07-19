class GamesController < ApplicationController 
    def show
        game = Game.find_by(id: params[:id])
        render json:  game
    end

    def create
        game = Game.new()
        game.name = params[:game][:name]
        game.category = params[:game][:category]
        game.save!
        render json: game
    end

    private

    def game_parameters
        params.require(:game).permit(
            game: [
                :name,
                :category
            ]
        )
    end
end