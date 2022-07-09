import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import CustomSwitch from "../Switch";
import { Avatar, CardHeader, Divider, Grid, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomCardContent from "./CardContent";
import { red } from "@mui/material/colors";

export default function CustomCard({
  handleRequiredSwitch,
  deleteQuestion,
  duplicateCard,
  ...rest
}) {
  const { question } = rest;
  return (
    <Card sx={{ margin: "15px" }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>Q</Avatar>}
        title="Question"
      />
      <CardContent>
        <CustomCardContent {...rest} />
      </CardContent>
      <Divider />
      <CardActions disableSpacing>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Tooltip title="Duplicate" placement="bottom">
              <IconButton
                aria-label="Duplicate"
                onClick={() => duplicateCard(question.questionId)}
              >
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete" placement="bottom">
              <IconButton
                aria-label="Delete"
                onClick={() => deleteQuestion(question.questionId)}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item>
            <CustomSwitch
              label="Required"
              checked={question.isRequired}
              onChange={handleRequiredSwitch}
            />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
