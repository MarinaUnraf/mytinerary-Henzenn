

function CarrouselPic({src, content}) {
  return (
    <div className=" flex flex-col rounded-lg bg-fuchsia-200 p-3 ">
        <img className="aspect-square drop-shadow-xl " src={src} alt="" />
        <p className="text-center text-base mt-2"> {content} </p>
    </div>
  )
}

export default CarrouselPic