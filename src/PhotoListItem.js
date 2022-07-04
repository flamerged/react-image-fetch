import { useState } from "react";

const PhotoListItem = ({ photo }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleClick = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div
      className="card-container p-6 bg-white rounded-lg mb-6 w-full max-w-md drop-shadow-md hover:drop-shadow-2xl hover:cursor-pointer"
      onClick={() => handleClick()}
    >
      <div
        className={`show-notification flex justify-center items-center w-full h-full ${
          isCardOpen
            ? "hover:backdrop-blur-sm hover:bg-white/30"
            : "hover:bg-white"
        }  rounded-lg text-gray-500 text-2xl`}
      >
        {isCardOpen ? "Hide photo" : "Show photo"}
      </div>
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
        }

        .show-notification {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
        }

        .card-container:hover > .show-notification {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default PhotoListItem;
