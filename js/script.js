document.getElementById('button-input').addEventListener('click', function(){
    const searchValue = document.getElementById('input-field');
    const searchText = searchValue.value ;
    const url = `https://api.openweathermap.org/data/2.5/find?q=${searchText}&units=metric&appid=cc859b38975d313bab0f2544cd15a6a6`
    fetch(url)
    .then(res => res.json())
    .then(data => displayResult(data))

    searchValue.value = '';
})

const displayResult = (tem) => {
    console.log(tem)
    const tempareture = document.getElementById('tempareture');
    tempareture.textContent = ''
    const div = document.createElement('div')
    let icon = tem.list[0].weather[0].icon;
	const IMG_URL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    div.innerHTML = `
    <div  class="d-flex justify-content-center"><img src="${IMG_URL}"></div>
    <h4 class="text-center text-white">City: ${tem.list[0].name}, ${tem.list[0].sys.country}</h4>
    <h4 class="text-center text-info">Current temp: ${Math.round(tem.list[0].main.temp)} <spain>&deg;c</spain></h4>
    <h5 class="text-center">Min Temp: ${Math.round(tem.list[0].main.temp_min)}<spain>&deg;c</spain></h5>
    <h5 class="text-center">Max Temp: ${Math.round(tem.list[0].main.temp_max)}<spain>&deg;c</spain></h5>
    <h5 class="text-center">Weather: ${tem.list[0].weather[0].description}</h5>`

    tempareture.appendChild(div)
}