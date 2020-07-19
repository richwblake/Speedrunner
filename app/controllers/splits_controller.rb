class SplitsController < ApplicationController 
    def show
        split = Split.find_by(id: params[:id])
        render json: split
    end
end