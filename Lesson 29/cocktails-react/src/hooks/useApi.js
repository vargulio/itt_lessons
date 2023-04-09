import { useEffect, useState } from "react";

export default function useApi(url, options) {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
            const response = await fetch(url, options);

            if (response.ok) {
                setIsLoading(false);
                const resBody = await response.json();
                setData(resBody);
            } else {
                setIsLoading(false);
                setError({ status: response.status, error: response.responseText });
            }


        }


        fetchData();


    }, [url]);


    return { data, isLoading, error };
}