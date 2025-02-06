import "./MainCard.css"; // Import the CSS file

export function MainCard({ id, title, description, media }) {
  const image = media && media.length > 0 ? media[0] : null;

  return (
    <div data-id={id} className="card">
      {image ? (
        <img src={image.url} alt={image.alt || "No image available"} className="card-image" />
      ) : (
        <div className="no-image">No image available</div>
      )}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}
