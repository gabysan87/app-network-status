import { useEffect, useState } from "react";
import PublicIcon from "@mui/icons-material/Public";
import PublicOffIcon from "@mui/icons-material/PublicOff";
import { Box, Typography } from "@mui/material";

export const AppNetwork = () => {
  const [status, setStatus] = useState(navigator.onLine); // creo el estado donde su valor inicial mostrara el estado en linea del navegador  

  useEffect(() => {
    //funciones que actualizan el estado 
    const handleOnlineStatus = () => setStatus(true);
    const handleOfflineStatus = () => setStatus(false);

    //Escucha el evento
    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    //Limpieza para evitar pérdidas de memoria y efectos secundarios indeseados
    return () => {
      window.addEventListener("online", handleOnlineStatus);
      window.addEventListener("offline", handleOfflineStatus);
    };
  }, []);

  return (
    <Box sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height: "100vh",
        // backgroundImage: "url(https://siaguanta.com/wp-content/uploads/2019/10/redes3.jpg)",
        }}
       >
      {status ? (
        <Box >
          <PublicIcon 
          sx={{ 
            color: "green", 
            fontSize: "50px",
             }} />
          <Typography variant="h5">Online</Typography>
        </Box>
      ) : (
        <Box>
          <PublicOffIcon
            sx={{
              color: "red",
              fontSize: "50px",
            }}
          />
          <Typography variant="h5">Offline</Typography>
        </Box>

      )}
    </Box>
  );
};

// window.navigator objeto contiene información sobre el navegador del visitante
// onLine propiedad devuelve verdadero si el navegador está en línea

//navigator.onLine Retorna el estado en línea del navegador. La propiedad retorna un valor booleano, true significa en línea y false significa desconectado

