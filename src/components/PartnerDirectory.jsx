
import { useState } from 'react';
import BusinessCard from './BusinessCard';
import './PartnerDirectory.css';

const businesses = [
  {
    id: 1,
    name: 'ABC Engineering',
    industry: 'Engineering',
    location: 'London',
    description: 'Engineering design and manufacturing services.',
  },
  {
    id: 2,
    name: 'Tech Solutions Ltd',
    industry: 'Technology',
    location: 'Manchester',
    description: 'Software development and IT consulting.',
  },
  {
    id: 3,
    name: 'Midlands Manufacturing',
    industry: 'Manufacturing',
    location: 'Birmingham',
    description: 'Industrial manufacturing and production.',
  },
];

function PartnerDirectory({ businesses: providedBusinesses }) {
  const [search, setSearch] = useState('');
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');

  function clearFilters() {
    setSearch('');
    setIndustry('');
    setLocation('');
  }

  const directoryBusinesses = providedBusinesses ?? businesses;

const filteredBusinesses = directoryBusinesses.filter((business) => {
    const matchesSearch = business.name
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    const matchesIndustry =
      industry === '' || business.industry === industry;

    const matchesLocation =
      location === '' || business.location === location;

    return matchesSearch && matchesIndustry && matchesLocation;
  });

  return (
    <main className="directory">
      <header className="directory-header">
        <h1>Partner Directory</h1>
        <p>
          Discover businesses and explore potential
          partnership opportunities.
        </p>
      </header>

      <section className="directory-filters">
        <input
          type="search"
          aria-label="Search businesses"
          placeholder="Search businesses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          aria-label="Filter by industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
        >
          <option value="">All Industries</option>
          <option value="Engineering">Engineering</option>
          <option value="Technology">Technology</option>
          <option value="Manufacturing">Manufacturing</option>
        </select>

        <select
          aria-label="Filter by location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="London">London</option>
          <option value="Manchester">Manchester</option>
          <option value="Birmingham">Birmingham</option>
        </select>

        <button
          type="button"
          className="clear-filters"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </section>

      <section className="directory-results">
        <h2>Available Businesses</h2>

        <p aria-live="polite">
          {filteredBusinesses.length} businesses found
        </p>

        {filteredBusinesses.length > 0 ? (
          <div className="business-grid">
            {filteredBusinesses.map((business) => (
              <BusinessCard
                key={business.id}
                business={business}
              />
            ))}
          </div>
        ) : (
          <p>No businesses match your search or filters.</p>
        )}
      </section>
    </main>
  );
}

export default PartnerDirectory;
