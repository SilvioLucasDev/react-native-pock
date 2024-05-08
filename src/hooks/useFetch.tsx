import React from 'react';
import axios, { AxiosRequestConfig } from 'axios';

type FetchOptions<T> = {
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  url: string;
  options?: AxiosRequestConfig<any>;
};

export default function useFetch<T>({ method, url, options }: FetchOptions<T>) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | Array<any> | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios[method]<T>(url, options?.data, options);
        setData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          if (error.response.status === 422) {
            setError(error.response.errors);
          } else {
            setError(error.message);
          }
        } else {
          setError(String(error));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
