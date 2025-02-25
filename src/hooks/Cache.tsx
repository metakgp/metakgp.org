import { useEffect, useState } from "react";

const useCache = (cacheKey: string, ttl: number) => {
  const [data, setData] = useState(null);
  const [isCached, setIsCached] = useState<boolean>(false);

  useEffect(() => {
    const cachedData = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(`${cacheKey}_time`);

    const isExpired = () => {
      if (!cachedTime) return true;
      const now = new Date().getTime();
      console.log("Current time: ", now);
      console.log("Expiry time: ", parseInt(cachedTime) + ttl);
      return now > parseInt(cachedTime) + ttl;
    };

    if (cachedData && !isExpired()) {
      console.log("Data is already present in cache")
      setIsCached(true);
      setData(JSON.parse(cachedData));
    } else {
      console.log("Data is not in cache");
      setIsCached(false);
    }
  }, [cacheKey, ttl])

  const setCache = (newData: any) => {
    setData(newData);
    localStorage.setItem(cacheKey, JSON.stringify(newData));
    localStorage.setItem(`${cacheKey}_time`, new Date().getTime().toString());
  }

  return { data, isCached, setCache };
}

export default useCache;
