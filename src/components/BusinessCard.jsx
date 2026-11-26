function BusinessCard({ business }) {
  return (
    <article className="business-card">
      <div className="business-card-header">
        <span className="industry-badge">
          {business.industry}
        </span>
      </div>

      <h3>{business.name}</h3>

      <p className="business-location">
        <span aria-hidden="true">📍</span>
        {business.location}
      </p>

      <p className="business-description">
        {business.description}
      </p>
    </article>
  );
}

export default BusinessCard;