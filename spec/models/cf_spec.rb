require "rails_helper"

describe Cf do
  describe '#create' do
    context 'can save' do
      it "is valid with full" do
        cf = build(:cf)
        expect(cf).to be_valid
      end
    end
    context "can't save" do
      it "is invalid without link" do
        cf = build(:cf, link: "httpwwwwww")
        cf.valid?
        expect(cf.errors[:link]).to include("正しいURLを入力してください")
      end
    end
  end
end 