import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos }) => {
  return (
    <div className="flex flex-col items-center">
      {photos.map((photo) => (
        <PhotoListItem photo={photo} key={photo.id}></PhotoListItem>
      ))}
      <style jsx="true">{``}</style>
    </div>
  );
};

export default PhotoList;
