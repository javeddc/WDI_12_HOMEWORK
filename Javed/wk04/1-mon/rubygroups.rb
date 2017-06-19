require 'pry'

print 'enter a comma separated list of things: '
input = gets.chomp.split(/\s*,\s*/)

print 'enter group size: '
size = gets.to_i

result = []

while input.length > 0
  result.push([])
  count1 = 0
  while count1 < size && input.length > 0 do
    result[-1].push(input.slice!(rand(input.length)))
    count1 += 1
  end
end

if result[-1].length < size
  result[-2] += result[-1]
  result.pop
end

resultString = ''
result.each {|x| resultString += x.join(' & ') + '  ::  '}
puts resultString

# this, that, them, those, thunk, tank, tink, tonk, tunk
