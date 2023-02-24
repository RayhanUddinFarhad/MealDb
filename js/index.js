const loadMeals = (names) => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${names}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayMeals(data.meals))

}


const displayMeals = (mealsData) => {


    const container = document.getElementById('container');
    container.innerHTML = ''


    mealsData.map(items => {



        const div = document.createElement('div')

        div.innerHTML = `


    <div id= "card" class="card card-side p-10 bg-base-100 border-2 border-gray-200">
    <figure><img src="${items.strMealThumb}" alt="Movie"/></figure>
    <div class="card-body">
      <h2 class="card-title">${items.strMeal}</h2>
      <p>${items.strTags}</p>
      <div class="card-actions justify-end">
        <label  onclick="getDetails(${items.idMeal})" for="my-modal-3" class="btn">Instructions</label>

      </div>
    </div>
  </div>
    
    
    `

        container.appendChild(div)





    })





}




const searcbtn = () => {
    const searcbtn = document.getElementById('searchInput').value;

    loadMeals(searcbtn)







}


const getDetails = (DetailsLoad) => {


    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${DetailsLoad}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayDetails(data.meals[0]))




}



const displayDetails = (DetailsLoad) => {

    const details = document.getElementById('details')
    const itemsname = document.getElementById('items-name')
    const imgs = document.getElementById('images-container')
    imgs.innerHTML = ''
    const div = document.createElement('div')

    details.innerText = `

    ${DetailsLoad.strInstructions}
    
    `

    itemsname.innerText = `  Instructions  Of
    ${DetailsLoad.strMeal}
    `

    div.innerHTML = `
    <img id="imags" class="w-full" src="${DetailsLoad.strMealThumb}" alt="">

    
    `

    imgs.appendChild(div)





}







loadMeals('fish')