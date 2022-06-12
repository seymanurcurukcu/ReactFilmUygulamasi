import React from 'react';


const MovieList=(props)=>{
     const truncateOverview=(string, maxLenght)=>{
         if(!string) return null;
         if(string.lenght<=maxLenght) return string;
         return `${string.substring(0,maxLenght)}...`;
     }
        return (
            <div className='row'>
                {props.movies.map((movie,i) => (
                    <div className='col-lg-4' key={i}>
                        <div className='card mb-4 shadow-sm'>
                            <img src={movie.imageURL} className='card-img-top' alt='Sample Movie' />
                            <div className='card-body'>
                                <h5 className='card-title'>{movie.name}</h5>
                                <p className='card-text'>{truncateOverview(movie.overview,100)}</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <button type='button' onClick={(event)=>props.deleteMovieProp(movie)} className='btn btn-md btn-outline-danger'>Delete</button>
                                    <a href={`edit/${movie.id}`} type="button" className="btn btn-md btn-outline-primary">Edit</a>
                                      {/* <Link type="button"
                                      className="btn btn-md btn-outline-primary"
                                      to={`/edit/${movie.id}`}
                                      >Edit </Link> */}

                                    <h2><span className="badge bg-info">{movie.rating}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        )
    
}

export default MovieList;