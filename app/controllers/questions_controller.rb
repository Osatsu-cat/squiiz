class QuestionsController < ApplicationController
  before_action :set_question, only: [:show, :edit, :update, :destroy]

  # GET /questions
  # GET /questions.json
  def top
  end

  def test
    @questions = Question.where(publicness: 1).shuffle
  end

  def count
    @correct = Correct.find_or_initialize_by(user_id: current_user.id, question_id: params[:id])
    @correct.update_attributes(
      y_count: @correct.y_count += params[:y_count].to_i,
      n_count: @correct.n_count += params[:n_count].to_i,
      sum: @correct.sum += 1
    )
    @correct.update_attributes(accuracy: (@correct.y_count * 100) / @correct.sum )
  end


  def index
    @questions = Question.where(publicness: 1)
    @user_questions = @questions.left_joins(:corrects).where(corrects:{user_id: current_user.id})
    @yet_questions = @questions.where.not(id: @user_questions.ids)
  end

  def index_p
    @questions = current_user.questions.where(publicness: 0)
    @user_questions = @questions.left_joins(:corrects).where(corrects:{user_id: current_user.id})
    @yet_questions = @questions.where.not(id: @user_questions.ids)
  end

  def index_m
    @questions = current_user.questions
    @user_questions = @questions.left_joins(:corrects).where(corrects:{user_id: current_user.id})
    @yet_questions = @questions.where.not(id: @user_questions.ids)
  end

  # GET /questions/1
  # GET /questions/1.json
  def show
  end

  # GET /questions/new
  def new
    @question = Question.new
    @question.dummies.build
    @question.cfs.build
  end

  # GET /questions/1/edit
  def edit
  end

  # POST /questions
  # POST /questions.json
  def create
    @question = Question.new(question_params)
    respond_to do |format|
      if @question.save
        format.html { redirect_to @question, notice: 'Question was successfully created.' }
        format.json { render :show, status: :created, location: @question }
      else
        format.html { render :new }
        format.json { render json: @question.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /questions/1
  # PATCH/PUT /questions/1.json
  def update
    respond_to do |format|
      if @question.update(update_question_params)
        format.html { redirect_to @question, notice: 'Question was successfully updated.' }
        format.json { render :show, status: :ok, location: @question }
      else
        format.html { render :edit }
        format.json { render json: @question.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /questions/1
  # DELETE /questions/1.jsonb
  def destroy
    @question.destroy
    respond_to do |format|
      format.html { redirect_to questions_url, notice: 'Question was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_question
      @question = Question.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def question_params
      if params[:question][:q_type] == "select"
        if params[:question][:cfs_attributes]["0"][:link] == ""
          params.require(:question).permit(
            :question,
            :answer,
            :publicness,
            :q_type,
            dummies_attributes: [:answer, :_destroy]
          ).merge(user_id: current_user.id)
        else
          params.require(:question).permit(
            :question,
            :answer,
            :publicness,
            :q_type,
            cfs_attributes: [:link, :_destroy],
            dummies_attributes: [:answer, :_destroy]
          ).merge(user_id: current_user.id)
        end
      else
        if params[:question][:cfs_attributes]["0"][:link] == ""
          params.require(:question).permit(
            :question,
            :answer,
            :publicness,
            :q_type,
          ).merge(user_id: current_user.id)
        else
          params.require(:question).permit(
            :question,
            :answer,
            :publicness,
            :q_type,
            cfs_attributes: [:link, :_destroy]
          ).merge(user_id: current_user.id)
        end
      end
    end

    def update_question_params
      params.require(:question).permit(
        :question,
        :answer,
        :publicness,
        cfs_attributes: [:link, :_destroy, :id],
        dummies_attributes: [:answer, :_destroy, :id]
      ).merge(user_id: current_user.id)
    end
end
