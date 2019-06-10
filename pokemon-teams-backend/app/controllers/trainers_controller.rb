class TrainersController < ApplicationController
  before_action :show, :index
def index
     trainers = Trainer.all
    render json: trainers
end
def show

end

end
