import React, {useState, useEffect} from "react";

import PageHeader from "../../PageHeader";
import Photos from "../Photos";

const FetchAPI = ({title}) => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=24")
      .then(response => response.json())
      .then(responseData => {
        if (responseData.length > 0) {
          setPhotos(responseData);
        } else {
          console.log("0 Data");
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }, []);

  return (
    <div className="content-wrapper">
      <PageHeader title={title} />

      {isLoading === true ? (
        <div className="content-loader">
          Content is loading...
        </div>
      ) : (
        <div className="">
          <Photos items={photos} />
        </div>
      )}
    </div>
  );
}

export default FetchAPI;
