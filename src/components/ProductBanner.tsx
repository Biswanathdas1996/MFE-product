import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <Card style={{ marginTop: 20 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image="https://cdna.artstation.com/p/assets/images/images/031/586/906/large/murugendra-hiremath-00001212.jpg?1604034460"
          alt="green iguana"
        />
      </CardActionArea>
    </Card>
  );
}
