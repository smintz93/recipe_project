import Search from './models/Search'
import * as searchView from './views/searchView'
import { elements, renderLoader, clearLoader } from './views/base'

// GLOBAL STATE OF APP 
// - Search object
// Current recipe object
// Shopping list object
// Liked recipes 
const state = {}

const controlSearch = async () => {
	// get the query from view 
	const query = searchView.getInput()
	// console.log(query)

	if(query) {
		// new search obkect and add it to state 
		state.search = new Search(query)

		// Prepare UI for results 
		searchView.clearInput();
		searchView.clearResults();
		renderLoader(elements.searchResult)


		// Search for recipe 
		await state.search.getResults();

		// render results on UI 
		clearLoader();
		searchView.renderResults(state.search.result)

	}
}	

elements.searchForm.addEventListener('submit', e => {
	e.preventDefault()
	controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
	const btn = e.target.closest('.btn-inline');
	if(btn) {
		const goToPage = parseInt(btn.dataset.goto, 10);
		searchView.clearResults();
		searchView.renderResults(state.search.result, goToPage);

	}
	
})


