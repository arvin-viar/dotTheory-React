import React, {useState, useEffect} from "react";
import axios from "axios";

import PageHeader from "../../PageHeader";
import Photos from "../Photos";

const Axios = ({title}) => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos?_limit=24")
      .then(response => {
        if (response.data.length > 0) {
          setPhotos(response.data);
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

export default Axios;
