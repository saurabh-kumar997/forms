import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import CustomCardContent from "./CardContent";
import { Grid, Typography } from "@mui/material";

export default function CustomCardView({ question, onClick }) {
  return (
    <Card onClick={onClick}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>Q</Avatar>}
        title="Question"
      />
      <CardContent>
        <Grid container>
          <Grid item>
            <Typography>{question.question}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
