import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';
class App extends React.Component {
	state = {
		movies: [],
		searchQuery: '',
	};


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

	searchProps = (event) => {
	
		this.setState({ searchQuery: event.target.value });
	};

	render() {
		let filteredMovies = this.state.movies.filter((movie) => {
			return movie.name.toLowerCase().includes(this.state.searchQuery.toLowerCase());
		});

		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<SearchBar searchProps={this.searchProps} />
					</div>
				</div>
				<MovieList movies={filteredMovies} delete={this.deleteMovie} />
			</div>
		);
	}
}
export default App;