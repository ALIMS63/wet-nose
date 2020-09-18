import React, { useEffect, useState } from 'react';

function Secret() {
  const [data, setData] = useState('Loading....')
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/secret')
      const json = await response.json();
      setData(JSON.stringify(json));
    })();
  }, []);
  return data;
}

export default Secret;

