import { useEffect } from "react";
import axios from "axios";

export function useDefaultLocation(
  setCityLocation,
  setAppIsLoading,
  setLocationResolved,
  setAppError,
) {
  useEffect(() => {
    const fetchLocation = async () => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;

          try {
            const res = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
            );
            const resData = res.data;

            const userLocation = {
              name:
                resData.address.city ||
                resData.address.town ||
                resData.address.village ||
                resData.address.state ||
                "Unknown",
              country: resData.address.country,
              longitude: resData.lon,
              latitude: resData.lat,
            };

            setCityLocation(userLocation);
            setLocationResolved(true);
          } catch (error) {
            console.log("An error occured in App", error);
            setAppError(true);
          }
        },
        (error) => {
          /*  ERROR.CODE RETURNS THREE NUMBERS, NAMELY: 1,2,3
          1	PERMISSION_DENIED:	The user clicked "Block" on the browser popup or turned off browser permissions.
          2	POSITION_UNAVAILABLE:	The device/network couldn't calculate coordinates (e.g., offline or network error).
          3	TIMEOUT:	It took too long to get a location fix and gave up. 
          
          ERROR.MESSAGE RETURNS A STRING DESCRIBING THE ERROR
        */

          if (error.code === 1 || error.code === 2 || error.code === 3) {
            const defaultLocation = {
              name: "Lagos",
              country: "Nigeria",
              latitude: 6.5244,
              longitude: 3.3792,
            };
            setCityLocation(defaultLocation);
            setLocationResolved(true);
          }
        },
      );
    };

    fetchLocation();
  }, [setCityLocation, setAppIsLoading, setLocationResolved]);
}
