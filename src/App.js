import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import IpDetails from "./components/IpDetails";
import MapView from './components/MapView';
import useFetch from './hooks/useFetch';

function App() {

const API_KEY =  process.env.REACT_APP_API_KEY;


const [ipUrl, setIpUrl] = useState(
  `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`
);


 const { data, isLoading, isError } = useFetch(ipUrl);

const handleSearch = (query) => {
  const isIp = /^(\d{1,3}\.){3}\d{1,3}$/.test(query);

  if (isIp) {
    setIpUrl(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${query}`
    );
  } else {
    setIpUrl(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&domain=${query}`
    );
  };
};



  return (
    <>
    <header>
   
      <h1>IP Address Tracker</h1>
      <SearchBar handleSearch={handleSearch} />
    </header>
     <IpDetails data={data} isLoading={isLoading} isError={isError} />
    <div className="map-container">
      <MapView
        lat={data?.location?.lat}
        lng={data?.location?.lng}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
    </>
  );
};

export default App;
