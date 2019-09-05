require "rails_helper"

describe Question do
  describe '#create' do
    context 'can save' do
      it "is valid with full" do
        question = build(:question)
        expect(question).to be_valid
      end
    end
    context "can't save" do
      it "is invalid without question" do
        question = build(:question, question: nil)
        question.valid?
        expect(question.errors[:question]).to include("can't be blank")
      end
      it "is invalid without answer" do
        question = build(:question, answer: nil)
        question.valid?
        expect(question.errors[:answer]).to include("can't be blank")
      end
      it "is invalid without publicness" do
        question = build(:question, publicness: nil)
        question.valid?
        expect(question.errors[:publicness]).to include("can't be blank")
      end
      it "is invalid without q_type" do
        question = build(:question, q_type: nil)
        question.valid?
        expect(question.errors[:q_type]).to include("can't be blank")
      end
    end
  end
end