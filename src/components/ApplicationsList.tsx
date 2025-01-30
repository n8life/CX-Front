import { useEffect, useState } from 'react';
import { api } from '../config/axios';
import { ApplicationsResponse } from '../types/application';

export function ApplicationsList() {
  const [data, setData] = useState<ApplicationsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await api.get<ApplicationsResponse>('/api/applications');
        setData(response.data);
      } catch (err) {
        setError('Failed to fetch applications');
        console.error('Error fetching applications:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) return <div>Loading applications...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!data) return null;

  return (
    <div className="applications-list">
      <h2>Applications ({data.totalCount})</h2>
      <div className="applications-grid">
        {data.applications.map((app) => (
          <div key={app.id} className="application-card">
            <h3>{app.name}</h3>
            <p className="description">{app.description || 'No description'}</p>
            <div className="metadata">
              <p>Criticality: {app.criticality}</p>
              <p>Projects: {app.projectIds.length}</p>
            </div>
            {Object.keys(app.tags).length > 0 && (
              <div className="tags">
                {Object.keys(app.tags).map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}