import React from 'react';

class SearchBar extends React.Component {


	preventSubmit = (event) => {
		event.preventDefault();
	};

	render() {
		return (
			<form onSubmit={this.preventSubmit}>
				<div className="form-row mt-1 mb-5">
					<div className="col-12">
						<input
							onChange={this.props.searchProps}
							
							type="text"
							className="form-control"
							placeholder="Search for a movie"
						></input>
					</div>
				</div>
			</form>
		);
	}
}

export default SearchBar;
