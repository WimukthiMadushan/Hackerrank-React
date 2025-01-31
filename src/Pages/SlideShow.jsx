import React, { useState } from "react";

const SlideShow = () => {
  const [currentSlide, setCurrentSilde] = useState(0);
  const slides = [
    { title: "Slide 1", text: "Slide 1 Text Here" },
    { title: "Slide 2", text: "Slide 2 Text Here" },
    { title: "Slide 3", text: "Slide 3 Text Here" },
  ];

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          disabled={currentSlide === 0}
          data-testid="button-restart"
          className="small outlined"
          onClick={() => setCurrentSilde(0)}
        >
          Restart
        </button>
        <button
          disabled={currentSlide === 0}
          data-testid="button-prev"
          className="small"
          onClick={() => setCurrentSilde(currentSlide - 1)}
        >
          Prev
        </button>
        <button
          disabled={currentSlide === slides.length - 1}
          data-testid="button-next"
          className="small"
          onClick={() => setCurrentSilde(currentSlide + 1)}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[currentSlide].title}</h1>
        <p data-testid="text">{slides[currentSlide].text}</p>
      </div>
    </div>
  );
};

export default SlideShow;
