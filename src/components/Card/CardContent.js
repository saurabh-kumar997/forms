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
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const CustomCardContent = ({
  options,
  question,
  handleChange,
  flags,
  handleMcqOptions,
  handleMcqOthers,
  handleDropdownOptions,
}) => {
  return (
    <>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={12} md={9}>
          <TextField
            name="question"
            type="text"
            required
            label={"Question"}
            fullWidth
            value={question.question}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Select
            options={options}
            label="Type"
            name={"type"}
            onChange={handleChange}
            value={question.type}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} sx={{ mb: 2 }}>
        <TextField
          name="description"
          type="text"
          required
          label={"Description"}
          fullWidth
          value={question.description}
          onChange={handleChange}
        />
      </Grid>

      <Grid container sx={{ mb: 2 }}>
        {flags.shortAnswer && (
          <Grid item xs={12} sm={12} md={5}>
            <TextField
              type="text"
              required
              label={"Short answer"}
              disabled
              fullWidth
            />
          </Grid>
        )}
        {flags.longAnswer && (
          <Grid item xs={12} sm={12} md={8}>
            <TextField
              type="text"
              required
              label={"Long answer"}
              disabled
              fullWidth
            />
          </Grid>
        )}
      </Grid>
      {flags.mcq && (
        <Grid container sx={{ mb: 2 }}>
          <Grid item xs={12} sm={12} md={8}>
            {question.options.map((it, key) => (
              <Grid container alignItems={"center"}>
                {it.label === "Others" ? (
                  <Grid item>
                    <TextField
                      type="text"
                      required
                      placeholder={`Others`}
                      fullWidth
                      disabled
                    />
                  </Grid>
                ) : (
                  <Grid item>
                    <TextField
                      type="text"
                      required
                      placeholder={`Option ${key + 1}`}
                      fullWidth
                    />
                  </Grid>
                )}
                <Grid item>
                  <IconButton aria-label="Delete" color="primary">
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Stack direction={"row"} spacing={2} sx={{ alignItems: "center" }}>
              <Button variant="outlined" onClick={handleMcqOptions}>
                Add Option
              </Button>
              <p>OR</p>
              <Button onClick={handleMcqOthers}>Add "Others"</Button>
            </Stack>
          </Grid>
        </Grid>
      )}
      {flags.dropdown && (
        <Grid container sx={{ mb: 2 }}>
          <Grid item xs={12} sm={12} md={8}>
            {question.options.map((it, key) => (
              <Grid container alignItems="center">
                <Grid item>
                  <TextField
                    type="text"
                    required
                    placeholder={`Option ${key + 1}`}
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <IconButton aria-label="Delete" color="primary">
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Button variant="outlined" onClick={handleDropdownOptions}>
              Add Option
            </Button>
          </Grid>
        </Grid>
      )}
      {flags.date && (
        <Grid container sx={{ mb: 2 }}>
          <Grid item xs={12} sm={12} md={4}>
            <CustomDatePicker />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CustomCardContent;
