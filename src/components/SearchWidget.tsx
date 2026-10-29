import { useState } from 'react';
import { SEARCH_TABS, TRIP_TYPES } from '@/lib/content';

export function SearchWidget() {
  const [activeTab, setActiveTab] = useState(SEARCH_TABS[0]?.label);

  return (
    <div className="search-wrap">
      <div className="container">
        <div className="search-card">
          <div className="search-tabs" style={{ gridColumn: '1 / -1' }}>
            {SEARCH_TABS.map((tab) => (
              <button
                key={tab.label}
                type="button"
                className={activeTab === tab.label ? 'active' : undefined}
                onClick={() => setActiveTab(tab.label)}
              >
                <i className={`fa-solid ${tab.icon}`}></i> {tab.label}
              </button>
            ))}
          </div>
          <div className="field">
            <label>Destination</label>
            <input type="text" placeholder="Where to? e.g. Bali" defaultValue="Goa, India" />
          </div>
          <div className="field">
            <label>Check-in</label>
            <input type="date" />
          </div>
          <div className="field">
            <label>Trip type</label>
            <select>
              {TRIP_TYPES.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>Travelers</label>
            <input type="text" placeholder="2 adults" defaultValue="1 traveler" />
          </div>
          <div className="search-go">
            <button className="btn btn-primary" type="button">
              <i className="fa-solid fa-magnifying-glass"></i> Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
