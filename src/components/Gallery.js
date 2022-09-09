import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicGrid() {
  return (
    <>
      <div
        className="gallery-wrapper"
        display="flex"
        justify-content="center"
        margin-top="5px"
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0.5}>
            <Grid xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="335"
                  image={require("../images/vaca_1.jpg")}
                  alt="Vaca 1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Poolside Code
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    "Code, waterslide, code, waterslide, snowcone, code ..."
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Like</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="335"
                  image={require("../images/vaca_1.jpg")}
                  alt="Vaca 1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Poolside Code
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    "Code, waterslide, code, waterslide, snowcone, code ..."
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Like</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="335"
                  image={require("../images/vaca_1.jpg")}
                  alt="Vaca 1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Poolside Code
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    "Code, waterslide, code, waterslide, snowcone, code ..."
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Like</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="335"
                  image={require("../images/vaca_1.jpg")}
                  alt="Vaca 1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Poolside Code
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    "Code, waterslide, code, waterslide, snowcone, code ..."
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Like</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
