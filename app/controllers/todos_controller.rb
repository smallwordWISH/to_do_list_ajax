class TodosController < ApplicationController

  before_action :set_todo, :only => [:show, :edit, :update, :destroy, :complete]


  def index
    asc_date_todos = Todo.all.order(due_date: :asc)

    @todos = asc_date_todos.order(due_time: :asc)

    @todos_uniq_date = asc_date_todos.pluck(:due_date).uniq
  end

  def new
    @todo = Todo.new
  end 

  def create
    @todo = Todo.new(todo_params)
    
    if @todo.save
      redirect_to todos_url
    else
      render :action => :new
    end

  end


  def update
    
    if @todo.update_attributes(todo_params)
      redirect_to todos_url
    else
      render :action => :update

    end
  end

  def destroy
    @todo.destroy

    redirect_to todos_url
  end


  def complete
    @todo.update_attributes(todo_check_params)
    
  end


  private

    def set_todo
      @todo = Todo.find(params[:id])
    end

    def todo_params
      params.require(:todo).permit(:title, :note, :due_date, :due_time,  :check_box)
    end

    def todo_check_params
      params.permit(:check_box)
    end

end
