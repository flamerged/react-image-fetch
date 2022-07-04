import { useState } from "react";

const PhotoListItem = ({ photo }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleClick = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div
      className="card-container p-6 bg-white rounded-lg mb-6 w-full max-w-md"
      onClick={() => handleClick()}
    >
      <div className="">Show photo</div>
      {isCardOpen ? (
        <img className="mb-6" src={photo.url} alt={photo.title} />
      ) : (
        ""
      )}
      <span className="break-words mb-6">{photo.title}</span>
      <div className="flex justify-center items-center"></div>
      <style jsx="true">{`
        .card-container {
          position: relative;

          .show-notification {
            position: relative;
          }
        }
      `}</style>
    </div>
  );
};

export default PhotoListItem;
