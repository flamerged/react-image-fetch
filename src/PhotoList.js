import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, className }) => {
  return (
    <div className={`${className} flex flex-col items-center`}>
      {photos.map((photo) => (
        <PhotoListItem photo={photo} key={photo.id}></PhotoListItem>
      ))}
    </div>
  );
};

export default PhotoList;
