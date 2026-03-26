import React from 'react';

function IpDetails({ data, isLoading, isError }) {

  return (
    <div className="ip-details">
      <div className="ip-details-item">
        <p className="ip-details-label">IP Address</p>
        <p className="ip-details-value">
          {isLoading ? 'Loading...' : isError ? 'Error' : data?.ip}
        </p>
      </div>
      <div className="ip-details-item">
        <p className="ip-details-label">Location</p>
        <p className="ip-details-value">
          {isLoading ? 'Loading...' : isError ? 'Error' : `${data?.location.city}, ${data?.location.country} ${data?.location.postalCode}`}
        </p>
      </div>
      <div className="ip-details-item">
        <p className="ip-details-label">Timezone</p>
        <p className="ip-details-value">
          {isLoading ? 'Loading...' : isError ? 'Error' : `UTC ${data?.location.timezone}`}
        </p>
      </div>
      <div className="ip-details-item">
        <p className="ip-details-label">ISP</p>
        <p className="ip-details-value">
          {isLoading ? 'Loading...' : isError ? 'Error' : data?.isp}
        </p>
      </div>
    </div>
  );
};

export default IpDetails;