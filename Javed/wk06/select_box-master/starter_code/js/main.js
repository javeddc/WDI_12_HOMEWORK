var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];
var citySelector = document.getElementById('city-type');

for (var i = 0; i < cities.length; i++) {
  var new_opt = document.createElement('option');
  new_opt.label = cities[i];
  new_opt.value = cities[i];
  citySelector.add(new_opt)
}

var change_bg = function(ev) {
  for (var i = 0; i < cities.length; i++) {
    document.body.classList.remove(cities[i].toLowerCase());
  }
  document.body.classList.add(ev.target.value.toLowerCase());
}

citySelector.addEventListener("change", change_bg);
