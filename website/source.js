const genBtn = document.getElementById('Generate');
var prompt = document.getElementById("prompt");


async function generateImage() {

	

	const encodedParams = new URLSearchParams();
	encodedParams.append("prompt", prompt);
	encodedParams.append("guidance", "7.5");
	encodedParams.append("width", "512");
	encodedParams.append("sampler", "k_lms");
	encodedParams.append("height", "512");
	encodedParams.append("steps", "50");

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
	
	console.log("Got the image as a blob:", pngBlob)

	document.getElementById("image").src = URL.createObjectURL(pngBlob);
}

genBtn.addEventListener('click', (e)=>{
	e.preventDefault()
	if(prompt.value){
		generateImage()
	}
})

