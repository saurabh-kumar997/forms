import { Close } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import CustomDatePicker from "../components/Date";
import Input from "../components/Input";
import CustomRadio from "../components/Radio";
import Select from "../components/Select";

const Preview = ({ questionList, handleClose, formDetails }) => {
  const renderView = (question) => {
    switch (question.type) {
      case "SimpleText":
        return <Input type="text" required label={"Short answer"} disabled />;
      case "Paragraph":
        return <Input type="text" required label={"Long answer"} disabled />;

      case "MultipleChoice":
        return (
          <CustomRadio label={question.question} options={question.options} />
        );

      case "Dropdown":
        return <Select options={question.options} />;

      case "Date":
        return <CustomDatePicker disabled />;

      default:
        return <></>;
    }
  };
  return (
    <Grid container sx={{ width: "40em", padding: "10px" }}>
      <Grid item xs={12} sm={12} md={12}>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <IconButton
              aria-label="Delete"
              color="primary"
              onClick={handleClose}
            >
              <Close />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h3">{formDetails.title}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="subtitle1">
              {formDetails.description}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            {questionList.map((question) => {
              return (
                <Grid container key={question.questionId}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="subtitle1">
                      {question.question}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    {renderView(question)}
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Preview;
