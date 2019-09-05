
FactoryBot.define do
  factory :question do
    question  {"？？問題"}
    answer        {"!!解答"}
    publicness    {1}
    q_type        {"text"}
  end
end