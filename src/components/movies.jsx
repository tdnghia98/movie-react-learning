import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService.js";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/ListGroup";
import MoviesTable from "./MoviesTable";
import _ from "lodash";
import NavBar from "./NavBar";

class Movies extends Component {
    state = {
        movies: getMovies(),
        genres: [],
        sortedColumn: { path: "title", order: "asc" },
        selectedGenre: null,
        currentPage: 1,
        pageSize: 4
    };

    componentDidMount() {
        const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
        this.setState({ movies: getMovies(), genres });
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
    };

    handleSort = sortedColumn => {
        this.setState({ sortedColumn });
    };

    getPageData = () => {
        const {
            currentPage,
            pageSize,
            movies: allMovies,
            selectedGenre,
            sortedColumn
        } = this.state;
        const filteredMovies =
            selectedGenre && selectedGenre._id
                ? allMovies.filter(m => m.genre._id === selectedGenre._id)
                : allMovies;

        const sortedMovies = _.orderBy(
            filteredMovies,
            [sortedColumn.path],
            [sortedColumn.order]
        );

        const movies = paginate(sortedMovies, currentPage, pageSize);

        return { totalCount: filteredMovies.length, data: movies };
    };

    render() {
        const { length: count } = this.state.movies;
        const { currentPage, pageSize, sortedColumn } = this.state;

        if (count === 0) return <p>There are no movies in the database.</p>;

        // Get the data fiel and name it movies
        const { totalCount, data: movies } = this.getPageData();
        return (
            <div className="row mt-5">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <h1>Movies</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <ListGroup
                                items={this.state.genres}
                                selectedItem={this.state.selectedGenre}
                                onItemSelect={this.handleGenreSelect}
                            ></ListGroup>
                        </div>
                        <div className="col">
                            <p>Showing {totalCount} movies in the database.</p>
                            <MoviesTable
                                movies={movies}
                                onDelete={this.handleDelete}
                                sortedColumn={sortedColumn}
                                onSort={this.handleSort}
                            ></MoviesTable>
                            <Pagination
                                pageSize={pageSize}
                                itemsCount={totalCount}
                                currentPage={currentPage}
                                onPageChange={this.handlePageChange}
                            ></Pagination>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Movies;
