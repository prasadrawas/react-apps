import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../../services/GlobalApi";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
function Slider() {
  const [movieList, setMovieList] = useState([]);
  const imageRef = useRef();

  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = () => {
    GlobalApi.getTrending().then((res) => {
      setMovieList(res.data.results);
    });
  };

  const scrollLeft = (element) => {
    element.scrollLeft -= window.innerWidth-31;
  };

  const scrollRight = (element) => {
    element.scrollLeft += window.innerWidth-31;
  };

  return (
    <div className="text-white px-1 md:px-4">
      <HiChevronLeft
        className="hidden md:block text-4xl cursor-pointer absolute mt-[180px] left-1"
        onClick={() => scrollLeft(imageRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-4xl cursor-pointer absolute mt-[180px] right-1" 
        onClick={() => scrollRight(imageRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full scrollbar-hide scroll-smooth"
        ref={imageRef}
      >
        {movieList.map((movie, index) => (
          <div
            key={index}
            className="min-w-full md:h-[400px] px-4 md:px-10 py-2 rounded-lg"
          >
            <img
              src={`${GlobalApi.imageBaseUrl}${movie.backdrop_path}`}
              alt=""
              className="w-full h-full object-cover object-left-top rounded-lg  hover:border-[4px] border-white transition-all ease-in"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
