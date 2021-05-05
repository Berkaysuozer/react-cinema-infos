import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';
class App extends React.Component {
	state = {
		movies: [],
		searchQuery: '',
	};

	//FETCHLEYEREK JSONDAN VERİ ALMAK
	/* async componentDidMount() {
		const baseURL = 'http://localhost:3002/movies';
		const response = await fetch(baseURL);
		const data = await response.json();
		console.log(data);
		this.setState({ movies: data });
	} */

	// AXİOUS KULLANARAK JSONDAN VERİ ALMAK
	async componentDidMount() {
		const response = await axios.get('http://localhost:3002/movies');

		this.setState({ movies: response.data });
	}

	//
	/* 	deleteMovie = (moviedb) => {
		const newMovieList = this.state.movies.filter((movie) => movie.id !== moviedb.id);

		this.setState((state) => ({
			movies: newMovieList,
		}));
	}; */

	//JSON DOSYASINDAN SİLMEK İÇİN  FETCH APİ İLE
	/* 	//deleteMovie = async (movie) => {
		const baseURL = `http://localhost:3002/movies/${movie.id}`;
		await fetch(baseURL, {
			method: 'DELETE',
		});
		const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
		this.setState((state) => ({
			movies: newMovieList,
		}));
	}; */

	// AXİOS API İLE JSONDAN DOSYA SİLMEK

	deleteMovie = async (movie) => {
		axios.delete(`http://localhost:3002/movies/${movie.id}`);

		const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
		this.setState((state) => ({
			movies: newMovieList,
		}));
	};

	searchProps = (event) => {
		// console.log(event.target.value);
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
