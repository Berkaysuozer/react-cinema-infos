import React from 'react';
import './MovieList.css';
const MovieList = (props) => {
	return (
		<div className="row">
			{props.movies.map((m) => (
				<div className=" col-sm-6 col-md-4 col-lg-3  col-xl-2" key={m.id}>
					<div className="card mb-4 shadow-sm">
						<img className="card-img-top img-fluid" alt="foto" src={m.imageURL}></img>
						<div className="card-body">
							<h5 className="card-title">{m.name}</h5>
							
							<div className="d-flex justify-content-between align-items-center">
								<button
									type="button"
									onClick={() => props.buttonFunc(m)}
									className= {`btn btn-md btn-outline-${props.buttonType}`}
								>
									{props.buttonText}
								</button>
								<h2>
									<span className="badge badge-info">{m.rating}</span>
								</h2>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default MovieList;
