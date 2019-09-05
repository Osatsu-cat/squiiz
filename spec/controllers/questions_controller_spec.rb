require "rails_helper"

describe QuestionsController do
  let(:user) { create(:user) }
  let(:question) {attributes_for(:question)}
  let(:cf) {attributes_for(:cf)}
  let(:dummy) {attributes_for(:dummy)}
  describe "GET #new" do
    before do
      login(user)
    end

    it 'renders the :new templete' do
      get :new
      expect(response).to render_template :new
    end
  end

  describe "POST #create" do
    before do
      login(user)
    end
    context "can save" do
      it 'is valid withfull' do
        question["cfs_attributes"] = {"0" => cf}
        question["dummies_attributes"] = {"0" => dummy}
        subject {
          post :create,
          params: question.merge(user_id: user.id)
        }
        # expect{response}.to change(Question, :count).by(1).and change(Cf, :count).by(1).and change(Dummy, :count).by(1)  修正中。ストロングパラメータではじかれる？
      end
    end
    # context "can not save" do
    #   let(:invalid_params) { { group_id: group.id, user_id: user.id, message: attributes_for(:message, content: nil, image: nil) } }

    #   subject {
    #     post :create,
    #     params: invalid_params
    #   }

    #   it 'does not count up' do
    #     expect{ subject }.not_to change(Question, :count)
    #   end

    #   it 'renders new' do
    #     subject
    #     expect(response).to render_template :new
    #   end
    # end
  end

  describe "GET #edit" do
    before do
      login(user)
    end
    it "assigns the required contact to @question" do
      question = create(:question)
      get :edit, params: {id: question}
      expect(assigns(:question)).to eq question
    end
    it "renders the :edit templete" do
      question = create(:question)
      get :edit, params: {id: question}
      expect(response).to render_template :edit
    end
  end
end