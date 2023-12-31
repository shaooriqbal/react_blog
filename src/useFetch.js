import { useState, useEffect } from "react";

const useFetch = (url) => { 
 
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const abortController = new AbortController();
        fetch(url, { signal: abortController.signal })
            .then((res) => {
                if (!res.ok) {
                    throw Error('Failed to load. Try again...');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
                setError(null);
                console.log(data);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log('ignore');
                }
                else {
                    setError(err.message);
                    setLoading(false);
                }
            });
        return () => { abortController.abort(); }
    }, [url]);
    
    return { data, isLoading, error };
}
export default useFetch;