import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function FetchData(query, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  
  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res = await axios.get(
        `https://xoosha.com/ws/1/test.php?offset=${page}`
      );
      await setList((prev)=>
        [...prev, ...res.data.map((d) =>  d)]
      );
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [page]);

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page]);

  return { loading, error, list };
}

export default FetchData;
