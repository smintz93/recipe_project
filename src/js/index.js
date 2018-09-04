import axios from 'axios';

//  http://food2fork.com/api/search

// 592d87178e875f403f816544a1cf57cb

async function getResults(query) {
	const proxy = 'https://cors-anywhere.herokuapp.com/'
	const key = '592d87178e875f403f816544a1cf57cb'
	const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
	console.log(res)

}

getResults('pizza');