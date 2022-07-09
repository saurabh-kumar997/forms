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
import Input from "../Input";

const CustomCardContent = ({
  options,
  question,
  handleChange,
  flags,
  handleMcqOptions,
  handleMcqOthers,
  handleDropdownOptions,
  handleDeleteOption,
  handleOptionsChange,
}) => {
  return (
    <>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={12} md={9}>
          <Input
            name="question"
            type="text"
            required
            label={"Question"}
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
        <Input
          name="description"
          type="text"
          required
          label={"Description"}
          value={question.description}
          onChange={handleChange}
        />
      </Grid>

      <Grid container sx={{ mb: 2 }}>
        {flags.shortAnswer && (
          <Grid item xs={12} sm={12} md={5}>
            <Input type="text" required label={"Short answer"} disabled />
          </Grid>
        )}
        {flags.longAnswer && (
          <Grid item xs={12} sm={12} md={8}>
            <Input type="text" required label={"Long answer"} disabled />
          </Grid>
        )}
      </Grid>
      {flags.mcq && (
        <Grid container sx={{ mb: 2 }}>
          <Grid item xs={12} sm={12} md={8}>
            {question.options.map((it, key) => (
              <Grid container alignItems={"center"} key={`Option ${key + 1}`}>
                {it.label === "Others" ? (
                  <Grid item>
                    <Input
                      type="text"
                      required
                      placeholder={`Others`}
                      disabled
                    />
                  </Grid>
                ) : (
                  <Grid item>
                    <Input
                      type="text"
                      required
                      placeholder={`Option ${key + 1}`}
                      value={it.value}
                      onChange={(e) => handleOptionsChange(e, key)}
                    />
                  </Grid>
                )}
                <Grid item>
                  <IconButton
                    aria-label="Delete"
                    color="primary"
                    onClick={() => handleDeleteOption(key)}
                  >
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
              <Grid container alignItems="center" key={`Option ${key + 1}`}>
                <Grid item>
                  <Input
                    type="text"
                    required
                    placeholder={`Option ${key + 1}`}
                    value={it.value}
                    onChange={(e) => handleOptionsChange(e, key)}
                  />
                </Grid>
                <Grid item>
                  <IconButton
                    aria-label="Delete"
                    color="primary"
                    onClick={() => handleDeleteOption(key)}
                  >
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
            <CustomDatePicker disabled />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CustomCardContent;
