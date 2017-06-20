require 'pry'

# Write a function `lengths` that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers. Each number in the array should be the length of the corresponding string.
def length_report(arr_str)
  arr_num = []
  arr_str.each do |str|
    arr_num.push(str.size)
  end
  return arr_num
end


# Write a Ruby function called `transmogrifier`This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result The transmogrified result of three numbers is the product (numbers multiplied together) of the first two numbers, raised to the power (exponentially) of the third number.
def transmogrifier(n1, n2, n3)
  return (n1 * n2) ** n3
end

# Write a function called `toonify` that takes two parameters, `accent` and `sentence`. - If `accent` is the string `"daffy"`, return a modified version of `sentence` with all "s" replaced with "th". - If the accent is `"elmer"`, replace all "r" with "w". - If the accent is not recognized, just return the sentence as-is.
def toonify(accent, sentence)
  if accent == 'daffy'
    return sentence.gsub('s','th')
  elsif accent == 'elmer'
    return sentence.gsub('r','w')
  else
    return sentence
  end
end

#Write a function `wordReverse` that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry about punctuation.
def wordReverse(string)
  return string.split(' ').reverse.join(' ')
end

# Write a function `letterReverse` that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation. This will be very similar to round 4 except you won't need to split them with a space.
def letterReverse(string)
  words = string.split(' ')
  revWords = []
  words.each {|word| revWords.push word.reverse}
  return revWords.join(' ')
end

# Write a function `longest` that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return either.
def longest(arr_str)
  return arr_str[length_report(arr_str).index(length_report(arr_str).max)]
end


# binding.pry
