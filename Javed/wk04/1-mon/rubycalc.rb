print 'enter your desired operator, pick from * / - +: '
operator = gets.chomp

print 'enter your first number: '
input1 = gets.chomp.to_i

print 'enter your second number: '
input2 = gets.chomp.to_i

case operator
when '*'
  result = input1 * input2
when '/'
  result = input1 / input2
when '-'
  result = input1 - input2
when '+'
  result = input1 + input2
end

puts "#{input1} #{operator} #{input2} = #{result}"



# bad method:
# result = eval(input1.to_s + operator + input2.to_s)
