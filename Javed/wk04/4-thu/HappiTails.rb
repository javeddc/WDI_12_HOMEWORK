require 'pry'

class Animal
  def initialize(name, age, gender, species, toys)
    @name = name.downcase
    @age = age.to_i
    @gender = gender.downcase
    @species = species.downcase
    @toys = toys.map {|toy| toy.downcase}
  end

  def name
    @name
  end

  def age
    @age
  end

  def gender
    @gender
  end

  def species
    @species
  end

  def toys
    @toys
  end
end

class Client
  def initialize(name, num_children, age)
    @name = name.downcase
    @age = age
    @num_children = num_children
    @pets = []
  end

  def name
    @name
  end

  def age
    @age
  end

  def num_children
    @num_children
  end

  def pets
    @pets
  end

  def add_pet(pet)
    @pets.push pet
  end

  def get_animal(animal_name)
    @pets.each do |pet|
      if pet.name.downcase == animal_name.downcase
        return pet
      end
    end
  end

  def minus_pet(animal_to_minus)
    if @pets.any? {|animal| animal.name.downcase == animal_to_minus.downcase}
      return @pets.slice!(@pets.index {|animal| animal.name.downcase == animal_to_minus.downcase})
    end
  end

end

class Shelter
  def initialize
    @clients = []
    @no_human = []
  end

  def clients
    @clients
  end

  def animals
    result = []
    @clients.each do |client|
      client.pets.each do |pet|
        result.push pet
      end
    end
    return result
  end

  def add_client(client)
    @clients.push client
    return client
  end

  def get_client(client_name)
    @clients.each do |client|
      if client.name == client_name.downcase
        return client
      end
    end
    return
  end

  def get_adoptee(animal_name)
    @no_human.each do |animal|
      if animal.name == animal_name.downcase
        return animal
      end
    end
    return
  end

  def add_to_shelter(animal)
    @no_human.push animal
  end

  def add_for_adoption(client, animal)
    @no_human.push client.get_animal(animal)
    client.minus_pet animal
  end

  def up_for_adoption
    @no_human
  end

  def list_up_for_adoption
    result = []
    @no_human.each do |animal|
        result.push animal.name
      end
    return result
  end

  def adopt(new_pet)
    if @no_human.any? {|animal| animal.name == new_pet}
      return @no_human.slice!(@no_human.index {|animal| animal.name.downcase == new_pet.downcase})
    end
  end

  # def minus_pet(animal_to_minus)
  #   if @pets.any? {|animal| animal.name.downcase == animal_to_minus.downcase}
  #     return @pets.slice!(@pets.index {|animal| animal.name.downcase == animal_to_minus.downcase})
  #   end
  # end


  def list_animals
    result = []
      HappiTails.animals.each do |animal|
        result.push "#{animal.name.capitalize}: a #{animal.age}-year old #{animal.species}"
      end
    return result
  end

  def list_clients
    result = []
      HappiTails.clients.each do |client|
         str = "#{client.name.capitalize}: is #{client.age} and owns #{client.pets.size} pets. "
         if client.num_children > 0
           str += "They also have #{client.num_children} children."
         end
         result.push str
      end
    return result
  end

end

def menu

  puts "Welcome to HappiTails animal shelter. Menu options are below. Enter the number corresponding to the menu option."
  puts ''
  puts "Display all animals - 1"
  puts "Display all clients - 2"
  puts "Add an animal to the shelter – 3"
  puts "Add a new client – 4"
  puts "Add a pet to a client – 5"
  puts "List animals up for adoption – 6"
  puts "Adopt out a shelter animal to an existing client - 7"
  puts "Client provides a pet for adoption – 8"
  puts "Exit - X"
  print "Enter your choice: "
  input = gets.chomp
  puts ''

  def return_key
    puts "Press enter to return to the menu. "
    input = gets.chomp
    menu
  end

  case input

  when '1'
    puts "All animals:"
    HappiTails.list_animals.each {|animal| puts animal}
    return_key

  when '2'
    puts "All clients:"
    HappiTails.list_clients.each {|client| puts client}
    return_key

  when '3'
    puts "Adding an animal to the shelter. "
    print "Enter the animal's name: "
    name = gets.chomp
    print "Enter the animal's age: "
    age = gets.chomp.to_i
    print "Enter the animal's gender: "
    gender = gets.chomp
    print "Enter the animal's species: "
    species = gets.chomp
    print "Does the animal have any toys? (y/n): "
    input = gets.chomp.downcase
    toys = []
    if input == 'y'
      print "List the toys, separated by commas: "
      toy_input = gets.chomp
      toy_input.split(',').each {|toy| toys.push toy}
    end
    HappiTails.add_to_shelter Animal.new(name, age, gender, species, toys)
    return_key

  when '4'
    puts "Adding a new client. "
    print "Enter the new client's name: "
    name = gets.chomp
    print "Enter the client's number of children: "
    number = gets.chomp.to_i
    print "Enter the client's age: "
    age = gets.chomp.to_i
    HappiTails.add_client(Client.new(name, number, age))
    puts "New client added. Use menu option 5 to add pets to a client. "
    return_key

  when '5'
    puts "Adding pet information for an existing client. "
    puts "Enter the existing client's name: "
    client = HappiTails.get_client(gets.chomp)
    if client == nil then
      puts "Client name could not be found. "
      return_key
    end
    puts "You've selected #{client.name.capitalize} to add a pet. "
    print "Enter the name of the pet to add: "
    name = gets.chomp
    print "Enter the pet's age: "
    age = gets.chomp.to_i
    print "Enter the pet's gender: "
    gender = gets.chomp
    print "Enter the pet's species: "
    species = gets.chomp
    print "Does the pet have any toys? (y/n): "
    input = gets.chomp.downcase
    toys = []
    if input == 'y'
      print "List the toys, separated by commas: "
      toy_input = gets.chomp
      toy_input.split(',').each {|toy| toys.push toy}
    end
    client.add_pet(Animal.new(name, age, gender, species, toys))
    puts "#{name.capitalize} has been added as #{client.name.capitalize}'s pet."
    return_key

  when '6'
    puts "The following animals are up for adoption: "
    puts HappiTails.list_up_for_adoption.join(', ').capitalize
    return_key

  when '7'
    puts "An existing client will adopt an animal from the shelter. "
    print "Enter the existing client's name: "
    client = HappiTails.get_client(gets.chomp)
    if client == nil then
      puts "Client name could not be found. "
      return_key
    end
    puts "You've selected #{client.name.capitalize} to adopt a pet. "

    puts "The following animals are up for adoption: "
    puts HappiTails.list_up_for_adoption.join(', ').capitalize

    print "Enter the name of the animal to adopt: "
    animal = HappiTails.get_adoptee(gets.chomp)
    if animal == nil then
      puts "Animal by that name could not be found. "
      return_key
    end
    puts "You've selected #{animal.name.capitalize} to be adopted by #{client.name.capitalize}. "
    print "Confirm this is correct? (y/n): "
    input = gets.chomp.downcase
    if input == 'y'
      client.add_pet HappiTails.adopt("#{animal.name}")
      puts "#{animal.name.capitalize} has been adopted by #{client.name.capitalize}. "
    else
      return_key
    end

  when '8'
    puts "An existing client will give an existing pet to the shelter. "
    print "Enter the existing client's name: "
    client = HappiTails.get_client(gets.chomp)
    if client == nil then
      puts "Client name could not be found. "
      return_key
    end
    puts "You've selected #{client.name.capitalize} to give up a pet. They own the following pets: "
    client.pets.each do |pet|
      puts "#{pet.name.capitalize}, a #{pet.age}-year old #{pet.species}. "
    end
    print "Enter the name of the pet to be given up: "
    input = gets.chomp
    if client.get_animal(input) == nil
      puts "Client could not be found. "
      return_key
    else
      puts "#{client.name.capitalize} will give up #{pet.name.capitalize}. Are you sure?"
      print "Enter (y/n) to proceed: "
      input2 = gets.chomp.downcase
      if input == 'y'
        HappiTails.add_for_adoption(client, input)
        puts "#{client.name.capitalize} has been given up and added to the shelter #{pet.name.capitalize}. Please remember - a pet is not just for christmas. "
        return_key
      else
        puts "Thank you #{client.name.capitalize} for changing your mind. "
        return_key
      end
    end
  end
end


HappiTails = Shelter.new
c1 = HappiTails.add_client Client.new('Quinn', 2, 36)
HappiTails.get_client('Quinn').add_pet Animal.new('Possum', 8, 'f', 'cat', ['scratchpost','noisy ball'])
HappiTails.get_client('Quinn').add_pet Animal.new('Obie', 7, 'm', 'dog', ['scratchpost','noisy ball'])
c2 = HappiTails.add_client Client.new('Eddie', 1, 29)
HappiTails.get_client('eddie').add_pet Animal.new('Tigger', 3, 'm', 'parrot', [])
HappiTails.add_to_shelter Animal.new('Sooky', 4, 'f', 'tiger', [])


menu




# binding.pry
