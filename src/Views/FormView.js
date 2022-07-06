import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomCardView from "../components/Card/CardView";
import CustomCard from "../components/Card/CustomCard";
import { options } from "./Costant";
import { v4 as uuidv4 } from "uuid";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

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
      questionId: "1",
      question: "Question 1",
      type: "",
      description: "",
      options: [1],
      isRequired: false,
    },
    {
      questionId: "2",
      question: "Question 2",
      type: "",
      description: "",
      options: [],
      isRequired: false,
    },
    {
      questionId: "3",
      question: "Question 3",
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
      options: [],
    }));
  };

  const handleRequiredSwitch = (e) => {
    setQuestion((prevState) => ({
      ...prevState,
      isRequired: e.target.checked,
    }));
  };

  const deleteQuestion = (qId) => {
    let questData = questionList.filter((it) => it.questionId !== qId);
    setQuestionList(questData);
  };

  const duplicateCard = (qId) => {
    // let index = questionList.findIndex((it) => it.questionId === qId);
    // question.questionId = uuidv4();
    // questionList.splice(index, 0, question);
    // setQuestionList([...questionList]);
  };

  const handleViewCardClick = (qId) => {
    let quesData = questionList.filter((it) => it.questionId === qId)[0];
    setQuestion(quesData);
  };

  const handleMcqOptions = () => {
    let othersIndex = question.options.findIndex((it) => it.label === "Others");
    let opt;
    if (othersIndex <= 0) {
      opt = [...question.options, { label: "", value: "" }];
    } else {
      question.options.splice(othersIndex - 1, 0, { label: "", value: "" });
      opt = [...question.options];
    }

    setQuestion((prevState) => ({ ...prevState, options: opt }));
  };

  const handleMcqOthers = () => {
    if (!question.options.some((it) => it.label === "Others")) {
      let opt = [...question.options, { label: "Others", value: "Others" }];
      setQuestion((prevState) => ({ ...prevState, options: opt }));
    }
  };

  const handleDropdownOptions = () => {
    let opt = [...question.options, { label: "", value: "" }];
    setQuestion((prevState) => ({ ...prevState, options: opt }));
  };

  return (
    <Grid container justifyContent={"center"}>
      <Grid item>
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
            {questionList.map((item) =>
              question.questionId === item.questionId ? (
                <CustomCard
                  options={options}
                  handleChange={handleChange}
                  question={question}
                  flags={flags}
                  handleRequiredSwitch={handleRequiredSwitch}
                  deleteQuestion={deleteQuestion}
                  duplicateCard={duplicateCard}
                  handleMcqOthers={handleMcqOthers}
                  handleMcqOptions={handleMcqOptions}
                  handleDropdownOptions={handleDropdownOptions}
                />
              ) : (
                <CustomCardView
                  key={item.questionId}
                  question={item}
                  onClick={() => handleViewCardClick(item.questionId)}
                />
              )
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Fab
          size="small"
          color="primary"
          aria-label="add"
          sx={{ position: "fixed" }}
        >
          <AddIcon />
        </Fab>
      </Grid>
    </Grid>
  );
};

export default FormView;
