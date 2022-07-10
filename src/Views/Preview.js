import { Close } from "@mui/icons-material";
import { Card, CardContent, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import CustomDatePicker from "../components/Date";
import Input from "../components/Input";
import CustomRadio from "../components/Radio";
import Select from "../components/Select";

const Preview = ({ questionList, handleClose, formDetails }) => {
  const renderView = (question) => {
    switch (question.type) {
      case "SimpleText":
        return <Input type="text" required={question.isRequired} />;
      case "Paragraph":
        return <Input type="text" required={question.isRequired} />;

      case "MultipleChoice":
        return (
          <CustomRadio
            label={question.question}
            options={question.options}
            required={question.isRequired}
          />
        );

      case "Dropdown":
        return (
          <Select options={question.options} required={question.isRequired} />
        );

      case "Date":
        return <CustomDatePicker required={question.isRequired} />;

      default:
        return <></>;
    }
  };
  return (
    <Card
      sx={{
        width: "40em",
        padding: "10px",
        backgroundColor: "#CAD5E2",
        minHeight: "100vh",
        overflow: "auto",
      }}
    >
      <CardContent>
        <Grid container>
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
                {questionList.map((question, key) => {
                  return (
                    <Grid container key={question.questionId} rowSpacing={2}>
                      <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="subtitle1">
                          {`${key + 1}. ${question.question}`}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="subtitle2">
                          {question.description}
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
      </CardContent>
    </Card>
  );
};

export default Preview;
