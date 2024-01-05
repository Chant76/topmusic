import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://deezerdevs-deezer.p.rapidapi.com/infos',
  headers: {
    'X-RapidAPI-Key': '3517d334bamsha22c5cbf9dd5314p1e61dcjsnfdbfea34cf42',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}