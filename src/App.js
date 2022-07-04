import { useEffect, useState } from "react";
import PhotoList from "./PhotoList";

/* Task */
// Get data from API: https://jsonplaceholder.typicode.com/photos
// Save 20 images
// Display image and title
// create hide/show toggle button

function App() {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const [photos, setPhotos] = useState([]);

  const fetchPictures = (urlToPictures) => {
    return fetch(urlToPictures)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((response) => {
        return response;
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const getTwentyPictures = async () => {
      const pictures = await fetchPictures(url);
      setPhotos(pictures.slice(0, 20));
    };

    getTwentyPictures();
  }, []);

  return (
    <div className="bg-sky-400 h-full pt-6">
      <h1 className="mb-8 text-center text-5xl text-white font-bold">
        Random photo list
      </h1>
      <PhotoList photos={photos}></PhotoList>
      <style jsx="true">{``}</style>
    </div>
  );
}

export default App;
