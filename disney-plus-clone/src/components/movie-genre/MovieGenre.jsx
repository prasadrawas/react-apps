import React from 'react'
import GenreList from '../../constants/GenreList'
import MoviesList from '../movie/MoviesList'

export default function MovieGenre() {
  return (
    <div className='p-3 px-4 md:px-16 scrollbar-hide'>
      {GenreList.genre.map((genre) => (
        <div key={genre.id} className='pb-5 pt-10'>
          <h1 className='text-white font-bold text-xl'>{genre.name}</h1>
          <MoviesList genreId={genre.id}/>
        </div>
      ))}
    </div>
  )
}
