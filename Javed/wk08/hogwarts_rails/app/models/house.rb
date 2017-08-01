class House < ActiveRecord::Base

  def students
    Student.where(house_id: self.id)
  end

end
