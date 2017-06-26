require "pry"


pack = [
  "Pikachu|40",
  "Rattata|20",
  "Pidgeot|60",
  "Alakazam|80",
  "Butterfree|30",
  "Gengar|70",
  "Moltres|100",
  "Vulpix|40",
  "Blastoise|80",
  "Hitmonchan|50"
]

# Firstly, keeping the cards faced down (so they cannot see), they reverse the order of the cards.

pack.reverse!



# They then split the cards into groups of 3, so they end up with 4 piles of cards (the first three with 3, and the last pile with just 1)

piles = []

while pack.size > 0
  count = 1
  pile = []
  while count <= 3 && pack.size > 0
    pile.push pack.shift
    count += 1
  end
  piles.push pile
end



# Alfred takes the first pile of cards, and Peter takes the second pile. Create a new data structure for Alfred and Peter to hold these cards.

alfred = []
peter = []

alfred.push piles.shift
peter.push piles.shift


# At this point only two piles of cards are leftover, one with 3 cards, and one with 1 card. They decide to arm-wrestle, where the winner gets the pile with 3 cards, and the loser gets the remaining pile.
# They both have a 50% chance of winning, so write some randomising code that decides which pile each person gets.

winner = [0,1].sample

puts ''

if winner == 0
  alfred.push piles.shift
  peter.push piles.shift
  puts "Alfred won the arm wrestle."
else
  peter.push piles.shift
  alfred.push piles.shift
  puts "Peter won the arm wrestle."
end

puts ''
puts "Alfred's cards are: "
puts "#{alfred.join(", \n")}"
puts ''
puts "Peter's cards are: "
puts "#{peter.join(", \n")}"




# TERNARY OPERATORS: another way to do if statements
winner = rand(0..1) == 0 ? 'alfred' : 'peter'
puts "another winner is #{winner}"




binding.pry
