import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';
import {
	BrowserRouter as Router,

	Route,

  } from "react-router-dom";

  class App extends React.Component {
	state = {
		movies: [],
		searchQuery: '',
		Favorites : [],
		
	};

	//FETCHLEYEREK JSONDAN VERİ ALMAK

	async componentDidMount() {
		const response = await axios.get('http://localhost:3002/movies');

		this.setState({ movies: response.data });
	}
	




	deleteMovie = async (movie) => {
		axios.delete(`http://localhost:3002/movies/${movie.id}`);

		const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
		this.setState((state) => ({
			movies: newMovieList,
		}));
	};

     /* addFavorite =  async (movie) => {
		
		await axios.post(`http://localhost:3002/movies/`,movie)
		
		this.setState((state) => ({
			movies : [...state.movies,movie]

			}));
	
	
	} */

			


	searchProps = (event) => {
		// console.log(event.target.value);
		this.setState({ searchQuery: event.target.value });
	};

	render() {
		let filteredMovies = this.state.movies.filter((movie) => {
			return movie.name.toLowerCase().includes(this.state.searchQuery.toLowerCase());
		});
		
		return (
<div>

<SearchBar searchProps={this.searchProps} />
			
	<Router>
		<Route path='/' exact render={()=> (


			<div className="container">
		
				<div className="row">
					<div className="col-lg-12">
					
					
			</div>
			</div>
				<MovieList
					movies={filteredMovies} 
					buttonFunc={this.addFavorite}
					buttonType={'success'}
					buttonText={'Add '}
					/>
			</div>
			)}>

		</Route>
		
		<Route path="/fav">

			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<SearchBar searchProps={this.searchProps} />
					</div>
					</div>
						<MovieList
							movies={this.state.Favorites} 
							buttonFunc={this.deleteMovie}
							buttonType={'danger'}
							buttonText={'Delete'}
							/>
			</div>

	    </Route>
    </Router>



</div>
			);
		}
	}
			
				

			
			
			




			
			
			
			

export default App;