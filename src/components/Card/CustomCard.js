import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import CustomSwitch from "../Switch";
import Input from "../Input";
import { Divider, Grid } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Select from "../Select";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomCardContent from "./CardContent";

export default function CustomCard() {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            Q
          </Avatar>
        }
        title="Question"
      />
      <CardContent>
        <CustomCardContent />
      </CardContent>
      <Divider />
      <CardActions disableSpacing>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <IconButton aria-label="Duplicate">
              <ContentCopyIcon />
            </IconButton>
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item>
            <CustomSwitch label="Required" />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
