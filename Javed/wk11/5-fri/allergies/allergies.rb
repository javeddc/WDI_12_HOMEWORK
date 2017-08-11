require 'pry'

class Allergies

  def initialize(score)
    @allergens = ['cats','pollen','chocolate','tomatoes','strawberries','shellfish','peanuts','eggs','']
    @score_string = score.to_s(2).rjust(8, "0")
  end

  def allergic_to?(str)
    allergen_index = @allergens.index(str)
    return @score_string[allergen_index] == '1'
  end

  def list
    result = []
    @allergens.each do |allergen|
      if self.allergic_to?(allergen)
        result.push allergen
      end
    end
    return result
  end

end


binding.pry


dummy_line = 0
