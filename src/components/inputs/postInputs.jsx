import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
// import { theme } from "../../../styles/chartTheme";

import {
  Box,
  Slider,
  SliderTrack,
  Text,
  SliderThumb,
  Input,
  Button,
  Center,
  InputGroup,
  InputRightElement,
  chakra,
  Flex,
} from "@chakra-ui/react";

function SliderComponent(props) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(null);
  let votes = props.votes;

  function handleInput(val) {
    setIsSubmitting(true);
    const roundedVal = Math.round(val / 10) * 10;
    let data = { vote: roundedVal, timestamp: new Date() };
    onSubmit(data);
    votes.push(data);
  }

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`/api/post/${props._id}?updatedField=votes`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setSuccess(true);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const VoteChart = () => {
    const values = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const colors = [
      "#9565c6",
      "#7770bc",
      "#5f79b4",
      "#4882ac",
      "#338aa5",
      "#17959b",
      "#139f9c",
      "#14a79f",
      "#13b2a1",
      "#14bda4",
      "#15cca8",
    ];
    const data = values.map(function (value, index) {
      let count = votes.filter((x) => x.vote === value).length;

      return { value: value, count: count, color: colors[index] };
    });

    return (
      <Box>
        <VictoryChart
          domainPadding={45}
          padding={0}
          animate={{
            duration: 500,
            onLoad: { duration: 100 },
          }}
          height={200}
        >
          <VictoryAxis />
          <VictoryBar
            alignment="start"
            barRatio={1.25}
            data={data}
            style={{
              data: {
                fill: ({ datum }) => datum.color,
              },
            }}
            x="value"
            y="count"
          />
        </VictoryChart>
      </Box>
    );
  };

  return (
    <Box>
      <Flex justify="space-between">
        <Text align="left" textStyle="small">
          {props.leftSliderBound ? props.leftSliderBound : "disagree"}
        </Text>
        <Text align="right" textStyle="small">
          {props.rightSliderBound ? props.rightSliderBound : "agree"}
        </Text>
      </Flex>
      {success || isSubmitting ? (
        <>
          <VoteChart />
          <Text align="right" textStyle="small">{`${votes.length} votes`}</Text>
        </>
      ) : (
        <>
          <Slider
            aria-label="Agreement-Slider"
            defaultValue={50}
            // step={10}
            onChangeEnd={handleInput}
            disabled={isSubmitting}
          >
            <SliderTrack
              bgGradient="linear(to-r,fig.500,broccoli.500)"
              boxSize={8}
              borderRadius={32}
              boxShadow="lg"
            ></SliderTrack>
            <SliderThumb boxSize={10} boxShadow="dark-lg"></SliderThumb>
          </Slider>
          <Text align="right" textStyle="small">{`${votes.length} votes`}</Text>
          {error && (
            <Text align="center" color="red.400">
              Oops, something went wrong
            </Text>
          )}
        </>
      )}
    </Box>
  );
}

function TextInputComponent(props) {
  const { register, handleSubmit, errors } = useForm();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [numComments, setNumComments] = useState(props.comments.length);

  const onSubmit = async (data) => {
    data.timeStamp = new Date();
    try {
      const res = await fetch(`/api/post/${props._id}?updatedField=comments`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setSuccess(true);
      setNumComments(numComments + 1);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <chakra.form width="100%" onSubmit={handleSubmit(onSubmit)}>
      <InputGroup size="lg">
        <Input
          placeholder="What do you think?"
          isInvalid={error != null}
          isReadOnly={success}
          type="text"
          name="comment"
          ref={register({
            required: "Please enter your comment",
          })}
          borderRadius={1000}
        />
        <InputRightElement width="4.5rem">
          <Button
            borderRadius={100}
            bg="fig.600"
            color="light"
            _hover={{ bg: "fig.500" }}
            type="submit"
            disabled={success}
          >
            Post
          </Button>
        </InputRightElement>
      </InputGroup>
      <Text align="right" textStyle="small">{`${numComments} comments`}</Text>
      {error && (
        <Text align="center" color="red.400">
          Oops, something went wrong
        </Text>
      )}
      {success && (
        <Text align="center" color="broccoli.500">
          Success! Thanks for your input!
        </Text>
      )}
    </chakra.form>
  );
}

export { SliderComponent, TextInputComponent };
