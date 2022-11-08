import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (axiosParams) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  const fetchData = async (params, prevData) => {
    try {
      const response = await axios.request(params);
      prevData?.results?.length > 0 && response?.data?.page >= 1
        ? setData({
            prevData: response?.data,
            ...response?.data,
            results: [...prevData?.results, ...response?.data?.results],
          })
        : setData({ prevData, ...response?.data });
    } catch (error) {
      setError(error?.response?.data?.status_message || error?.response?.data?.errors || error?.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, fetchData };
};
