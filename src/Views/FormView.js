import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomCard from "../components/Card/CustomCard";
import { options } from "./Costant";

const FormView = () => {
  //state
  const [question, setQuestion] = useState({
    questionId: "",
    question: "",
    type: "",
    description: "",
    options: [],
    isRequired: false,
  });

  const [flags, setFlags] = useState({
    shortAnswer: false,
    longAnswer: false,
    mcq: false,
    date: false,
    dropdown: false,
  });

  const [questionList, setQuestionList] = useState([
    {
      questionId: "",
      question: "",
      type: "",
      description: "",
      options: [],
      isRequired: false,
    },
    {
      questionId: "",
      question: "",
      type: "",
      description: "",
      options: [],
      isRequired: false,
    },
  ]);

  //Side Effects
  useEffect(() => {
    switch (question.type) {
      case "SimpleText":
        setFlags({
          longAnswer: false,
          mcq: false,
          date: false,
          dropdown: false,
          shortAnswer: true,
        });
        break;
      case "Paragraph":
        setFlags({
          longAnswer: true,
          mcq: false,
          date: false,
          dropdown: false,
          shortAnswer: false,
        });
        break;
      case "MultipleChoice":
        setFlags({
          longAnswer: false,
          mcq: true,
          date: false,
          dropdown: false,
          shortAnswer: false,
        });
        break;
      case "Dropdown":
        setFlags({
          longAnswer: false,
          mcq: false,
          date: false,
          dropdown: true,
          shortAnswer: false,
        });
        break;
      case "Date":
        setFlags({
          longAnswer: false,
          mcq: false,
          date: true,
          dropdown: false,
          shortAnswer: false,
        });
        break;
    }
  }, [question.type]);

  //Events
  const handleChange = (e) => {
    setQuestion((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRequiredSwitch = (e) => {
    setQuestion((prevState) => ({
      ...prevState,
      isRequired: e.target.checked,
    }));
  };

  return (
    <Grid container justifyContent="center" rowSpacing={2}>
      <Grid item xs={12} md={8} sm={12}>
        <TextField
          variant="filled"
          fullWidth
          name="title"
          label="Title"
          required
        />
      </Grid>
      <Grid item xs={12} md={8} sm={12}>
        <TextField
          variant="filled"
          label="Description"
          fullWidth
          name="description"
        />
      </Grid>
      <Grid item xs={12} md={8} sm={12}>
        {questionList.map((item) => (
          <CustomCard
            key={item.questionId}
            options={options}
            handleChange={handleChange}
            question={item}
            flags={flags}
            handleRequiredSwitch={handleRequiredSwitch}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default FormView;
