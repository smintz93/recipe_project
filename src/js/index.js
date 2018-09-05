import Search from './models/Search'

// GLOBAL STATE OF APP 
// - Search object
// Current recipe object
// Shopping list object
// Liked recipes 
const state = {}

const controlSearch = async () => {
	// get the query from view 
	const query = 'pizza' // TODO LATER

	if(query) {
		// new search obkect and add it to state 
		state.search = new Search(query)

		// Prepare UI for results 

		// Search for recipe 
		await state.search.getResults();

		// render results on UI 

	}
}	

document.querySelector('.search').addEventListener('submit', e => {
	e.preventDefault()
	controlSearch();
})


