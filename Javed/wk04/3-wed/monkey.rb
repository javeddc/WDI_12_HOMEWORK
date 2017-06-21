require 'pry'

class Monkey

  def initialize(given_name, given_species)
    @name = given_name
    @species = given_species
    @foods_eaten = []
  end

  def eat(food_str)
    @foods_eaten.push food_str
  end

  def introduce
    print "Hi my name is #{@name}. I am a #{@species}. "
    if @foods_eaten.size > 0
      print "I had #{@foods_eaten.join(' and ')} for brunch."
    end
    puts ''
  end


end






binding.pry
