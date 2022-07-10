import { Drawer, Grid, Stack, TextField, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomCardView from "../components/Card/CardView";
import CustomCard from "../components/Card/CustomCard";
import { options } from "./Costant";
import { v4 as uuidv4 } from "uuid";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import usePrevious from "./Refs";
import {
  AutoAwesome,
  Delete,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import Preview from "./Preview";
import Input from "../components/Input";
import data from "../SampleData.json";

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

  const [formDetails, setFormDetails] = useState({
    title: "",
    description: "",
  });

  const [flags, setFlags] = useState({
    shortAnswer: false,
    longAnswer: false,
    mcq: false,
    date: false,
    dropdown: false,
  });

  const [visibility, setVisibility] = useState(false);
  const [preview, setPreview] = useState(false);

  const [questionList, setQuestionList] = useState([
    {
      questionId: "1",
      question: "Question 1",
      type: "",
      description: "",
      options: [],
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

      default:
        setFlags({
          longAnswer: false,
          mcq: false,
          date: false,
          dropdown: false,
          shortAnswer: false,
        });
        break;
    }
  }, [question.type]);

  let prevQuestionState = usePrevious(question);

  useEffect(() => {
    if (question.questionId !== "" && prevQuestionState.questionId !== "") {
      let index = questionList.findIndex(
        (it) => it.questionId === prevQuestionState.questionId
      );
      if (index > -1) {
        questionList[index] = { ...prevQuestionState };
        setQuestionList([...questionList]);
      }
    }
  }, [question.questionId, preview]);

  useEffect(() => {
    setVisibility(questionList.length > 0);
  }, [questionList.length]);

  //Events

  const handleFormDetails = (e) => {
    setFormDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange = (e) => {
    setQuestion((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      options: [],
    }));
  };

  const handleRequiredSwitch = (e) => {
    debugger;
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
    debugger;
    let index = questionList.findIndex((it) => it.questionId === qId);

    let ques = {
      ...questionList[index],
      questionId: uuidv4(),
    };

    questionList.splice(index + 1, 0, { ...ques });
    setQuestionList([...questionList]);
    setQuestion(ques);
  };

  const handleViewCardClick = (qId) => {
    let quesData = questionList.filter((it) => it.questionId === qId)[0];
    setQuestion({ ...quesData });
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

  const handleAddQuestion = () => {
    let ques = {
      questionId: uuidv4(),
      question: "",
      type: "",
      description: "",
      options: [],
      isRequired: false,
    };

    let index = questionList.findIndex(
      (it) => it.questionId === question.questionId
    );

    if (index === -1) {
      setQuestionList([...questionList, { ...ques }]);
      setQuestion(ques);
    } else {
      questionList.splice(index + 1, 0, { ...ques });
      setQuestionList([...questionList]);
      setQuestion(ques);
    }
  };

  const handleOptionsChange = (e, optionId) => {
    let { options } = question;
    options[optionId] = { label: e.target.value, value: e.target.value };
    setQuestion((prevState) => ({ ...prevState, options: [...options] }));
  };

  const handleDeleteOption = (optionId) => {
    question.options.splice(optionId, 1);
    setQuestion({ ...question });
  };

  const handlePreview = () => {
    setPreview((prevState) => !prevState);
  };

  const handleDiscard = () => {
    if (window.confirm("Are you sure you want to discard everything?")) {
      setQuestion({
        questionId: "",
        question: "",
        type: "",
        description: "",
        options: [],
        isRequired: false,
      });

      setQuestionList([]);
      setFormDetails({
        title: "",
        description: "",
      });

      setFlags({
        shortAnswer: false,
        longAnswer: false,
        mcq: false,
        date: false,
        dropdown: false,
      });
      return;
    }
  };

  const handleLoadSampleData = () => {
    setFormDetails({ title: data.titlle, description: data.description });
    setQuestionList(data.questions);
  };
  return (
    <>
      <Grid container>
        <Grid item xs={10} md={8} sm={10}>
          <Grid container rowSpacing={2}>
            <Grid item xs={8} md={8} sm={8}>
              <Input
                variant="filled"
                name="title"
                label="Title"
                required
                value={formDetails.title}
                onChange={handleFormDetails}
              />
            </Grid>
            <Grid item xs={8} md={8} sm={8}>
              <Input
                variant="filled"
                label="Description"
                name="description"
                value={formDetails.description}
                onChange={handleFormDetails}
              />
            </Grid>
            <Grid item xs={8} md={8} sm={8}>
              {questionList.map((item) =>
                question.questionId === item.questionId ? (
                  <CustomCard
                    key={item.questionId}
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
                    handleDeleteOption={handleDeleteOption}
                    handleOptionsChange={handleOptionsChange}
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
        <Grid item xs={2} md={4} sm={2}>
          <Stack sx={{ position: "fixed" }} direction="column" spacing={2}>
            <Tooltip title="Add Question" placement="right">
              <Fab
                size="small"
                color="primary"
                aria-label="add"
                onClick={handleAddQuestion}
              >
                <AddIcon />
              </Fab>
            </Tooltip>
            <Tooltip title="Preview" placement="right">
              <Fab
                size="small"
                color="primary"
                aria-label="add"
                onClick={handlePreview}
                disabled={!visibility}
              >
                {visibility ? <Visibility /> : <VisibilityOff />}
              </Fab>
            </Tooltip>
            <Tooltip title="Discard" placement="right">
              <Fab
                size="small"
                color="error"
                aria-label="add"
                onClick={handleDiscard}
                disabled={!visibility}
              >
                <Delete />
              </Fab>
            </Tooltip>
            <Tooltip title="See Sample" placement="right">
              <Fab size="small" color="warning" aria-label="add">
                <AutoAwesome onClick={handleLoadSampleData} />
              </Fab>
            </Tooltip>
          </Stack>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Drawer open={preview} onClose={handlePreview} anchor={"right"}>
            <Preview
              handleClose={handlePreview}
              questionList={questionList}
              formDetails={formDetails}
            />
          </Drawer>
        </Grid>
      </Grid>
    </>
  );
};

export default FormView;
