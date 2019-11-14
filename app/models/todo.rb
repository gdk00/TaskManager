class Todo < ApplicationRecord
belongs_to :project
attr_accessor :isCompleted
end
