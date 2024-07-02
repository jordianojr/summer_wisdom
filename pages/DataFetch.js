import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetchingComponent = ({ artist, title }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!artist || !title) return; // Don't fetch if artist or title is empty
      setLoading(true);
      try {
        const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [artist, title]);

  const renderDataAsParagraphs = () => {
    if (loading) return <p>Loading...</p>;
    if (!data || !data.lyrics) return <p>No lyrics available.</p>;

    const lines = data.lyrics.split('\n').slice(2);
    const filteredLines = lines.filter(line => {
      if (line.trim() === '' || (line.trim().startsWith('[') && line.includes(']'))) {
        return false; // Exclude this line
      }
      return true; // Include all other lines
    });

    if (filteredLines.length === 0) {
      return <p>No lyrics available.</p>;
    }

    const randomIndex = Math.floor(Math.random() * filteredLines.length);
    const selectedLyric = filteredLines[randomIndex];

    return <p>{selectedLyric}</p>;
  };

  return (
    <div>
      {renderDataAsParagraphs()}
    </div>
  );
};

export default DataFetchingComponent;

