import { useEffect } from "react";
import axios from "axios";

export function useDefaultLocation(setCityLocation, setAppIsLoading) {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;

        const res = await axios.get(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
        );
        const resData = res.data;

        const userLocation = {
          name: resData.city,
          country: resData.countryName,
          longitude: resData.longitude,
          latitude: resData.latitude,
        };
        setCityLocation(userLocation);
        setAppIsLoading(false);
      },
      (error) => {
        /*  ERROR.CODE RETURNS THREE NUMBERS, NAMELY: 1,2,3
          1	PERMISSION_DENIED:	The user clicked "Block" on the browser popup or turned off browser permissions.
          2	POSITION_UNAVAILABLE:	The device/network couldn't calculate coordinates (e.g., offline or network error).
          3	TIMEOUT:	It took too long to get a location fix and gave up. 
          
          ERROR.MESSAGE RETURNS A STRING DESCRIBING THE ERROR
        */

        if (error.code === 1 || error.code === 2) {
          const defaultLocation = {
            name: "Lagos",
            country: "Nigeria",
            latitude: 6.5244,
            longitude: 3.3792,
          };
          setCityLocation(defaultLocation);
          setAppIsLoading(false);
        }
      },
    );
  }, [setCityLocation, setAppIsLoading]);
}
