/* eslint-disable no-undef */
import {
  CardActions,
  CardContent,
  CardActionArea,
  Card,
  Typography,
  Box,
  Button,
  CardMedia,
  Grid,
} from "@mui/material";

export default function ListaServicios(servicios) {
  const getServicesDisplay = () => {
    let tarjetas = [];
    servicios.forEach((servicio) => {
      tarjetas.push(
        <Card
          sx={{
            display: "inline-block",
            m: 1,
            width: 400,
            border: "1p #0CA8C7",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <CardMedia
                      component="img"
                      sx={{ display: "inline-block", width: 40 }}
                      src={servicio.imagenlink}
                      alt="prueba"
                    />
                  </Grid>
                  <Typography variant="h6">{servicio.titulo}</Typography>
                  <Typography component="div">
                Contenido: {servicio.contenido}
              </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <CardActionArea
                  component="callToAction"
                  href={servicio.botonlink}
                  onClick={() =>
                    console.log(
                      "CardActionArea clicked in + " + servicio.titulo
                    )
                  }
                >
                  <Button variant="outlined">Visitar</Button>
                </CardActionArea>
              </Grid>
            </CardContent>
          </Box>
        </Card>
      );
    });
    return tarjetas;
  };

  return (
    <div>
      <Box sx={{ p: 2 }}>{getServicesDisplay()}</Box>
    </div>
  );
}
