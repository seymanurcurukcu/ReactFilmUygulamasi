import React from 'react';
class SearchBar extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className='form-row mb-5'>
                    <div className='col-10'>
                        <input
                            onChange={this.props.searchMovieProps}
                            type='text' className='form-control'
                            placeholder='Search a movie'
                        //value={this.state.searchQuery}
                        />
                    </div>
                    <div className='col-2'>
                    <a href="/add" type="button" className="btn btn-md btn-danger" style={{ float: 'right' }}>Add Movie</a>
                        {/* <Link
                            to="/add"
                            type="button"
                            className="btn btn-md btn-danger"
                            style={{ float: 'right' }}>Add Movie
                        </Link> */}
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar;