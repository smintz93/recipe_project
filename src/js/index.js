import Search from './models/Search'
import * as searchView from './views/searchView'
import { elements } from './views/base'

// GLOBAL STATE OF APP 
// - Search object
// Current recipe object
// Shopping list object
// Liked recipes 
const state = {}

const controlSearch = async () => {
	// get the query from view 
	const query = searchView.getInput()
	console.log(query)

	if(query) {
		// new search obkect and add it to state 
		state.search = new Search(query)

		// Prepare UI for results 

		// Search for recipe 
		await state.search.getResults();

		// render results on UI 
		console.log(state.search.result);

	}
}	

elements.searchForm.addEventListener('submit', e => {
	e.preventDefault()
	controlSearch();
})


