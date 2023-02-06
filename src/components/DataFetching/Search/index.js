import React, {useState, useEffect} from "react";
import axios from "axios";

import PageHeader from "../../PageHeader";
import Photos from "../Photos";
import SearchForm from "./SearchForm";

const Search = ({title}) => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `http://api.giphy.com/v1/gifs/trending?api_key=endnxTLRg690nxKjuhMeWQTV0L36Kmlq`;
    fetcher(url);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatData = (data) => {
    return data.map(item => {
      return {
        id: item.id,
        url: item.images.fixed_height.url,
        title: item.title,
      };
    });
  };

  const fetcher = (url) => {
    setIsLoading(true);
    axios.get(url)
      .then(response => {
        if (response?.data?.data.length > 0) {
          const photos = formatData(response.data.data);
          setPhotos(photos);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
        setIsLoading(false);
      });
  };

  const performSearch = (query) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=endnxTLRg690nxKjuhMeWQTV0L36Kmlq`;
    fetcher(url);
  };

  return (
    <div className="content-wrapper">
      <PageHeader title={title} />

      {isLoading ? (
        <div className="content-loader">
          Content is loading...
        </div>
      ) : (
        <>
          <SearchForm performSearch={performSearch} />
          <Photos items={photos} />
        </>
      )}
    </div>
  );
}

export default Search;
