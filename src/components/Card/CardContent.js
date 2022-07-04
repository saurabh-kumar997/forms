import {
  Button,
  Grid,
  InputAdornment,
  Radio,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import CustomDatePicker from "../Date";
import Select from "../Select";

const CustomCardContent = () => {
  const options = [
    {
      label: "Simple Text",
      value: "Simple Text",
    },
    {
      label: "Paragraph",
      value: "Paragraph",
    },
    {
      label: "Multiple Choice",
      value: "MultipleChoice",
    },
    {
      label: "Dropdown",
      value: "Dropdown",
    },
    {
      label: "Date",
      value: "Date",
    },
  ];

  return (
    <>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={12} md={9}>
          <TextField
            name="Question"
            type="text"
            required
            label={"Question"}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Select options={options} label="Type" name={"type"} />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} sx={{ mb: 2 }}>
        <TextField
          name="Description"
          type="text"
          required
          label={"Description"}
          fullWidth
        />
      </Grid>

      <Grid container sx={{ mb: 2 }}>
        <Grid item xs={12} sm={12} md={5}>
          <TextField
            type="text"
            required
            label={"Short answer"}
            disabled
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <TextField
            type="text"
            required
            label={"Long answer"}
            disabled
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container sx={{ mb: 2 }}>
        <Grid item xs={12} sm={12} md={4}>
          <TextField
            type="text"
            required
            placeholder="Option 1"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Radio disabled />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container sx={{ mb: 2 }}>
        <Grid item xs={12} sm={12} md={4}>
          <Stack direction={"row"} spacing={2}>
            <Button variant="outlined">Add Option</Button>
            <p>OR</p>
            <Button>Add "Others"</Button>
          </Stack>
        </Grid>
      </Grid>
      <Grid container sx={{ mb: 2 }}>
        <Grid item xs={12} sm={12} md={4}>
          <TextField type="text" required label={"Option 1"} fullWidth />
        </Grid>
      </Grid>
      <Grid container sx={{ mb: 2 }}>
        <Grid item xs={12} sm={12} md={4}>
          <Button variant="outlined">Add Option</Button>
        </Grid>
      </Grid>
      <Grid container sx={{ mb: 2 }}>
        <Grid item xs={12} sm={12} md={4}>
          <CustomDatePicker />
        </Grid>
      </Grid>
    </>
  );
};

export default CustomCardContent;
