import React from "react";
import {
  Box,
  Text,
  Stack,
  Circle,
  Container,
  Center,
  SimpleGrid,
  Grid,
  Avatar,
  Flex,
  Badge,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Logo } from "../svg/logos";
import { SliderComponent, TextInputComponent } from "./inputs/postInputs";

const copy = [
  { title: "Post", body: "You create either a poll or an open-ended question" },
  {
    title: "Engage",
    body: "The Herd votes, comments, and discusses the topic in a civil manner",
  },
  {
    title: "Outcome",
    body:
      "State & Local elected officials learn about new policy ideas and how their constituents feel about issues",
  },
];

function AboutTheAppSection(props) {
  const { posts } = props;

  return (
    <>
      <TopWave />
      <ExplainerRow />
      <ExamplePostRow posts={posts} />
      <BottomWave />
    </>
  );
}

const TopWave = () => {
  return (
    <Box
      id="about-herd"
      backgroundImage="url('/img/hiwTop.png')"
      backgroundPosition="top"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      pt={{ base: 48, md: 64 }}
      pb={{ base: 64, md: 64 }}
    >
      <Text textStyle={{ base: "h3", md: "h2" }} textAlign="center" px={12}>
        Herd is a social polling tool that centralizes communication between
        politicians and their constituents.
      </Text>
    </Box>
  );
};

const ExplainerRow = () => {
  const ContentCard = (props) => {
    const { source, index } = props;
    const bgColors = ["fig.300", "broccoli.500", "fig.500"];
    return (
      <Container maxW="xs" p={5} bg="light" borderRadius={20}>
        <Stack direction="row" textStyle="h3">
          <Circle bg={bgColors[index]} size="40px">
            <Text>{index + 1}</Text>
          </Circle>
          <Text>{source.title}</Text>
        </Stack>
        <Text mt={4} textStyle="body">
          {source.body}
        </Text>
      </Container>
    );
  };

  const contentCards = copy.map(function (item, index) {
    return <ContentCard source={item} index={index} key={index} />;
  });

  return (
    <Box bg="broccoli.300" p={{ lg: 20, base: 10 }} pt={0} mt={-2}>
      <Text
        textStyle="h2"
        mb={{ base: 5, md: 10 }}
        textAlign={{ base: "center", md: "left" }}
      >
        How it works
      </Text>
      <Center>
        <Stack
          direction={{ md: "row", base: "column" }}
          justify={{ base: "space-between" }}
          spacing={{ base: 5 }}
        >
          {contentCards}
        </Stack>
      </Center>
    </Box>
  );
};

const ExamplePostRow = (props) => {
  const ExamplePost = ({
    text,
    type,
    votes,
    comments,
    _id,
    rightSliderBound,
    leftSliderBound,
  }) => {
    const color =
      type == "brainstorm" ? "fig.100" : type == "crowdtest" && "broccoli.100";

    const subtitleText =
      type == "brainstorm" ? "Brainstorm" : type == "crowdtest" && "Crowd Test";

    return (
      <WrapItem w="400px">
        <Box m={{ base: 0, md: 2 }} pl={5} pt={2} borderRadius={20} bg={color}>
          <Text pb={1} textStyle="h3" color="light">
            {subtitleText} Post
          </Text>
          <Box p={6} bg="light" borderRadius={20} h="full">
            <Flex align="center">
              <Avatar bg="miso" icon={<Logo boxSize={7} color="fig.100" />} />
              <Text mx={2} textStyle="subtitle">
                Herd
              </Text>
            </Flex>

            <Badge m={4} mx={2} borderRadius={5} color={color}>
              {type}
            </Badge>
            <Stack direction="column" spacing={5}>
              <Text mx={2} textStyle="body">
                {text}
              </Text>
              {type == "brainstorm" ? (
                <TextInputComponent _id={_id} comments={comments} />
              ) : (
                type == "crowdtest" && (
                  <SliderComponent
                    _id={_id}
                    votes={votes}
                    rightSliderBound={rightSliderBound}
                    leftSliderBound={leftSliderBound}
                  />
                )
              )}
            </Stack>
          </Box>
        </Box>
      </WrapItem>
    );
  };
  const posts = props.posts.map(function (post, index) {
    return (
      <ExamplePost
        key={`${post.type}__${index}`}
        text={post.text}
        type={post.type}
        votes={post.votes}
        comments={post.comments}
        _id={post._id}
        rightSliderBound={post.rightSliderBound}
        leftSliderBound={post.leftSliderBound}
      />
    );
  });

  return (
    <Box bg="broccoli.300" pt={24} mt={-2}>
      <Text px={{ lg: 20, base: 10 }} textStyle="h2">
        Types of Posts
      </Text>
      <Box p={{ lg: 20, md: 10, sm: 10, base: 5 }}>
        {/* <SimpleGrid columns={{ md: 2, base: 1 }} spacing={{ base: 16, md: 10 }}>
          {posts}
        </SimpleGrid> */}
        <Wrap
          spacing={{ base: 16, md: 10 }}
          align="flex-start"
          justify="center"
        >
          {posts}
        </Wrap>
      </Box>
    </Box>
  );
};

const BottomWave = () => {
  return (
    <Box
      backgroundImage="url('/img/hiwBottom.png')"
      backgroundPosition="top"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      pt={{ base: 32, md: 64 }}
    />
  );
};

export default AboutTheAppSection;
