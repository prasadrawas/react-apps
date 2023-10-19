import React from 'react'
import GlobalApi from '../../services/GlobalApi'

function Movie({movie}) {
  return (
    <>
       <img src={`${GlobalApi.imageBaseUrl}${movie.poster_path}`} alt="" className='w-[110px] md:w-[200px] rounded-md hover:border-[4px] border-white hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'/>
    </>
  )
}

export default Movie