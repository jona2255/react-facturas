import { useEffect, useState } from "react";


const useApi = (url) => {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    if (url) {
      fetch(url)
        .then(resp => resp.json())
        .then(datosAPI => {
          setDatos(datosAPI);
        });
    }
  }, [url]);

  return datos;
};

export default useApi;
