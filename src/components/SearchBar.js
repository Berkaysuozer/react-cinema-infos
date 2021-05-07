import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {


	preventSubmit = (event) => {
		event.preventDefault();
	};

	render() {
		return (
	 <React.Fragment>
			<div className='navbar'>
			
			
			<h5>BerkaySuozer</h5>
			<ul>
					
					<li>
					<form onSubmit={this.preventSubmit}>
					<input
							onChange={this.props.searchProps}
							
							type="text"
							className="form-control"
							placeholder="Search for a movie"
						></input>
							</form>

					</li>
					
					
					<li>FAVORİLER</li>
				</ul>
					
						
		
					
				
		
		</div>
	  </React.Fragment>
		);
	}
}

export default SearchBar;
