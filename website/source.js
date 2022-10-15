const genBtn = document.getElementById('Generate');
var prompt = document.getElementById("prompt");
const progress = document.getElementById('pg');
const artist = document.getElementById('artist')
const style = document.getElementById('style1')
const model = document.getElementById('model')



async function generateImage() {
console.log(artist.value, style.value, model.value)
const encodedParams = new URLSearchParams();
encodedParams.append("prompt", `${prompt.value},${style.value},made by ${artist.value}`);
encodedParams.append("guidance", "10");
encodedParams.append("width", "512");
encodedParams.append("sampler", model.value);
encodedParams.append("height", "512");
encodedParams.append("steps", "50");
console.log(`${prompt.value},${style.value},made by ${artist.value}`)

const options = {
	method: 'POST',
	url: 'https://dezgo.p.rapidapi.com/text2image',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '56075dc1cdmshdd2da87524546fbp122840jsn54a3136b483d',
		'X-RapidAPI-Host': 'dezgo.p.rapidapi.com'
	},
	body: encodedParams
};

var response = await fetch('https://dezgo.p.rapidapi.com/text2image', options)
var pngBlob = await response.blob();    

prompt.value = ''
document.getElementById("image").src = URL.createObjectURL(pngBlob);
progress.classList.remove('animation')
}

genBtn.addEventListener('click', (e)=>{
e.preventDefault()

genBtn.disabled = true
if(prompt.value){
	progress.classList.add('animation')
	generateImage()
}
genBtn.disabled = false


})

