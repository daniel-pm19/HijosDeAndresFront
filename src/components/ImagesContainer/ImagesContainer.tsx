import "./ImagesContainer.css";

export default function ImagesContainer() {
  const images = [
    "https://picsum.photos/id/1018/400/300",
    "https://picsum.photos/id/1025/400/300",
    "https://picsum.photos/id/1015/400/300",
    "https://picsum.photos/id/1020/400/300",
    "https://picsum.photos/id/1003/400/300",
    "https://picsum.photos/id/1035/400/300",
  ];

  return (
    <div className="gallery-container">
      <h2>Your Image Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
