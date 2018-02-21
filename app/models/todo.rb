class Todo < ApplicationRecord
  validates_presence_of :title, :note, :due_date, :due_time
end
