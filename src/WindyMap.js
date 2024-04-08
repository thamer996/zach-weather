// WindyMap.js
import React, { useEffect, useState } from "react";

function WindyMap() {
  const [mapUrl, setMapUrl] = useState("");

  useEffect(() => {
    // Assuming Flask is running on localhost:5000
    // Adjust the URL as needed, especially in production
    const url = " http://127.0.0.1:5001/ ";
    setMapUrl(url);
  }, []);

  return (
    <div>
      {mapUrl && (
        <iframe
          src={mapUrl}
          title="WindyMap"
          style={{ width: "100%", height: "600px", border: "none" }}
        ></iframe>
      )}
    </div>
  );
}

export default WindyMap;
