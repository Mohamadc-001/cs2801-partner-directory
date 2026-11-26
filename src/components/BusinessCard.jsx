function BusinessCard({ business }) {
  return (
    <article className="business-card">
      <h3>{business.name}</h3>

      <p>
        <strong>Industry:</strong> {business.industry}
      </p>

      <p>
        <strong>Location:</strong> {business.location}
      </p>

      <p>{business.description}</p>
    </article>
  );
}

export default BusinessCard;