days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

days_of_the_week.unshift(days_of_the_week.pop)

days_of_the_week.push(days_of_the_week.shift)

week = [days_of_the_week.slice(0..4), days_of_the_week.slice(5..6)]

week.pop

week = week[0].sort
