class TodosController < ApplicationController
  def index
    @Projects = Project.all
  end

  def update
    id = params[:todoID]
    @todo = Todo.find(id)
    @todo.update(:isCompleted => true)
  end

  def create
     todo = Todo.new(todo_params)
     todo.isCompleted = false
     Project.find(id=params[:ProjectID]).todos << todo
     redirect_to :root
  end


  private def todo_params
    params.require(:todo).permit(:text)
  end


end
