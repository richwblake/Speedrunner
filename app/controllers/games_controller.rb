class GamesController < ApplicationController 
    def show
        game = Game.find_by(id: params[:id])
        render json:  game
    end

    def create
        game = Game.new()
        game.name = params[:name][:name]
        game.category = params[:name][:category]
        game.save!
        render json: game
    end

    private

    def game_parameters
        params.require(:game).permit(
            name: [
                :name,
                :category
            ]
        )
    end
end