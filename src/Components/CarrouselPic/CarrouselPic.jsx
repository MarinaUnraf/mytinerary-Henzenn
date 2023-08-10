

function CarrouselPic({ image, currentIndex, imageIndex }) {
  const isVisible = currentIndex === imageIndex;

  return (
    <div
      className={`transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <img src={image} alt={`Image ${imageIndex + 1}`} className="w-full" />
    </div>
  );
}


export default CarrouselPic