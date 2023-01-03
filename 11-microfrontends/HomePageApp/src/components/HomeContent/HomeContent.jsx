import React, { useEffect, useState, Suspense } from 'react';
import QuickBooking from '../QuickBooking/QuickBooking.jsx';
const MovieCard  = React.lazy(() => import('components/MovieCard'))
import './HomeContent.scss';

const dummyItem = [{ name: 'Dummy Movie' }];

const HomeContent = (props) => {
  const [movies, setMovies] = useState(dummyItem);

  useEffect(async () => {
    const movies =await  fetch("http://localhost:5555/movies")
    const data = await movies.json() 
    
  }, []);

  const movieClicked = (item) => {
    if (typeof props.movieClicked === 'function') {
      props.movieClicked(item);
    }
  };

  const renderMovieList = () => {
    let items = movies.map((item) => {
      return (
        <div onClick={() => movieClicked(item)} key={item.name}>
          <div>Load the cards Here</div>
           <Suspense fallback={null}>
             <MovieCard></MovieCard> 
          </Suspense>
        </div>
      );
    });

    return items;
  };

  return (
    <div className="home-content-container">
      <QuickBooking></QuickBooking>
      <div className="movies-container">{renderMovieList()}</div>
    </div>
  );
};

export default HomeContent;
