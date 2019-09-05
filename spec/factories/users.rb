FactoryBot.define do
  factory :user do
    nickname              {"test-user"}
    sequence(:email)      {Faker::Internet.free_email}
    password              {"fortest"} 
    password_confirmation {"fortest"}
  end
end