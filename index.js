
const select = document.querySelector('select');
    const color = document.querySelector('input');
    const colorsDiv = document.querySelector('#colors-Div');
    const colorsNamesDiv = document.querySelector('#colors-names');
document.querySelector('button').addEventListener('click', function (){
    fetch(`https://www.thecolorapi.com/scheme?hex=${color.value.slice(1)}&mode=${select.value}`)
    .then(res => res.json())
    .then(data => {
        for(let i = 0; i < 5; i++)
        {
            colorsDiv.children[i].style.backgroundColor = `#${data.colors[i].hex.clean}`;
            colorsNamesDiv.children[i].textContent = `#${data.colors[i].hex.clean}`;
        }
        
    })


})
