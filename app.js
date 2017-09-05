// grab the form from HTML
var form = document.getElementById("dateRandom")

// create action for form (submit), then prevent refresh
form.addEventListener("submit", function(element){
  element.preventDefault()
  document.getElementsByClassName("drinks")[0].innerHTML = ""
  document.getElementsByClassName("dates ")[0].innerHTML = ""


  fetch("http://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(function(response){
      return response.json()
        .then(function(drinkContent){
          console.log(drinkContent);
          var img = document.createElement("img")
          var h2 = document.createElement("h2")

          var drinkResults = document.getElementsByClassName("drinks")[0]

          img.setAttribute("src", drinkContent.drinks["0"].strDrinkThumb)
          drinkResults.append(img);
          h2.innerText = drinkContent.drinks["0"].strDrink
          drinkResults.append(h2);
        })
    })
  fetch("https://randomuser.me/api/")
    .then(function(response){
      return response.json()
        .then(function(datesContent){
          console.log(datesContent);
          var img = document.createElement("img")
          var h2a = document.createElement("h2")
          var h2b = document.createElement("h2")
          var h3a = document.createElement("h3")
          var h3b = document.createElement("h3")

          var dateResults = document.getElementsByClassName("dates")[0]

          img.setAttribute("src", datesContent.results["0"].picture.large)
          dateResults.append(img);
          h2a.innerText = datesContent.results["0"].name.first
          dateResults.append(h2a);
          h2b.innerText = datesContent.results["0"].name.last
          dateResults.append(h2b);
          // h3a.innerText = datesContent.results["0"].location.city
          // dateResults.append(h3a);
          // h3b.innerText = datesContent.results["0"].location.state
          // dateResults.append(h3b);



        })
    })
})
