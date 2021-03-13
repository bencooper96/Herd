import React from "react";
import {
  Box,
  Text,
  Stack,
  Circle,
  Container,
  Center,
  chakra,
  SimpleGrid,
  Grid,
  Avatar,
  Flex,
  Badge,
  Wrap,
  WrapItem,
  Tooltip,
} from "@chakra-ui/react";
import { Logo } from "../svg/logos";
import { SliderComponent, TextInputComponent } from "./inputs/postInputs";

// const copy = [
//   { title: "Post", body: "You create either a poll or an open-ended question" },
//   {
//     title: "Engage",
//     body: "The Herd votes, comments, and discusses the topic in a civil manner",
//   },
//   {
//     title: "Outcome",
//     body:
//       "State & Local elected officials learn about new policy ideas and how their constituents feel about issues",
//   },
// ];

function AboutTheAppSection(props) {
  const { posts } = props;

  return (
    <>
      <TopWave />
      <UseCases />
      <ExplainerRow />
      <ExamplePostRow posts={posts} />
      {/* <WhyHerd /> */}
      <BottomWave />
    </>
  );
}

const TopWave = () => {
  return (
    <Box
      direction="column"
      align="center"
      spacing={20}
      id="about-herd"
      backgroundImage="url('/img/hiwTop.png')"
      backgroundPosition="top"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      pt={{ base: 48, md: 64 }}
      pb={{ base: 32, md: 40 }}
    >
      <Text textStyle={{ base: "h3", md: "h2" }} textAlign="center" px={12}>
        Herd is a free, nonpartisan, user-friendly polling tool for State
        Representatives to get real-time feedback.
      </Text>
    </Box>
  );
};

const UseCases = () => {
  const FlexCircleGrow = () => {
    return (
      <Center>
        <Flex justify="center" align="center" h={450}>
          <Box
            bg="fig.500"
            color="light"
            borderRadius="full"
            align="center"
            justify="center"
            minW="250px"
            minH="250px"
            style={{ transition: "all .9s ease-in-out" }}
            _hover={{ w: "450px", h: "450px" }}
          >
            hello
          </Box>
          <Box
            bg="fig.600"
            borderRadius="full"
            align="center"
            justify="center"
            color="light"
            minW="250px"
            minH="250px"
            transition="1000ms"
            _hover={{ w: "450px", h: "450px" }}
          >
            hello
          </Box>
          <Box
            bg="fig.800"
            borderRadius="full"
            align="center"
            justify="center"
            color="light"
            minW="250px"
            minH="250px"
            _hover={{ w: "450px", h: "450px" }}
          >
            hello
          </Box>
        </Flex>
      </Center>
    );
  };

  return (
    <Box bg="broccoli.700" p={{ lg: 20, base: 10 }} pb={40} mt={-2}>
      <Box p={{ lg: 20, base: 10 }} p={0}>
        <Text textStyle="h3" mb={{ base: 5, md: 10 }} textAlign="center">
          You can use Herd to...
        </Text>
        {/* <FlexCircleGrow /> */}
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-around"
          align="center"
          p={10}
          pb={20}
          spacing={5}
        >
          <Circle
            bg="fig.900"
            p={6}
            size="200px"
            _hover={{ size: "250", boxShadow: "dark-lg" }}
          >
            <Text textStyle="subtitle" textAlign="center">
              Learn more about policy
            </Text>
          </Circle>
          <Circle
            bg="fig.900"
            p={6}
            size="200px"
            _hover={{ size: "250", boxShadow: "dark-lg" }}
          >
            <Text textStyle="subtitle" textAlign="center">
              Discuss policy ideas
            </Text>
          </Circle>
          <Circle
            bg="fig.900"
            p={6}
            size="200px"
            _hover={{ size: "250", boxShadow: "dark-lg" }}
          >
            <Text textStyle="subtitle" textAlign="center">
              Contribute to policy decisions
            </Text>
          </Circle>
        </Stack>
      </Box>

      <Text textStyle="subtitle" textAlign="center">
        Herd is an easy way to make a difference in your community and
        participate in policy that affects all of us.
      </Text>
    </Box>
  );
};

const ExplainerRow = () => {
  // const ContentCard = (props) => {
  //   const { source, index } = props;
  //   const bgColors = ["fig.700", "broccoli.900", "fig.500"];
  //   return (
  //     <Container maxW="xs" p={5} bg="light" borderRadius={20}>
  //       <Stack direction="row" textStyle="h3">
  //         <Circle bg={bgColors[index]} size="40px">
  //           <Text>{index + 1}</Text>
  //         </Circle>
  //         <Text>{source.title}</Text>
  //       </Stack>
  //       <Text mt={4} textStyle="body">
  //         {source.body}
  //       </Text>
  //     </Container>
  //   );
  // };

  // const contentCards = copy.map(function (item, index) {
  //   return <ContentCard source={item} index={index} key={index} />;
  // });

  return (
    <Box bg="broccoli.700" p={{ lg: 20, base: 10 }} py={0} mt={-2}>
      <Text textStyle="h2" textAlign={{ base: "center", md: "left" }}>
        How it works
      </Text>

      <Text textStyle="subtitle" textAlign={{ base: "center", md: "left" }}>
        Using our <strong>brainstorming posts</strong>, State reps can generate
        ideas for new bills pre-session. Using our{" "}
        <strong>crowdtesting posts</strong>, State Reps can make constituent
        informed decisions about{" "}
        <Tooltip
          label="This session, State Reps in Oklahoma will vote on 3,000 bills. Looping constituents into that many bills requires a powerful tool - Herd"
          aria-label="This session, State Reps in Oklahoma will vote on 3,000 bills. Looping constituents into that many bills requires a powerful tool - Herd"
          closeDelay={500}
          placement="bottom-end"
        >
          <u> bills that they are voting on during session.</u>
        </Tooltip>{" "}
      </Text>
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
      type == "brainstorm" ? "fig.500" : type == "crowdtest" && "broccoli.500";

    const subtitleText =
      type == "brainstorm" ? "Brainstorm" : type == "crowdtest" && "Crowd Test";

    return (
      <WrapItem w="400px">
        <Box m={{ base: 0, md: 2 }} pl={5} pt={2} borderRadius={20} bg={color}>
          <Text pb={1} textStyle="h3" color="light">
            {subtitleText} Post
          </Text>
          <Box
            p={6}
            mb="2"
            bg="light"
            borderRadius={20}
            h="full"
            // _hover={{ ml: 1, mr: -1, boxShadow: "xl" }}
          >
            <Flex align="center">
              <Avatar bg="miso" icon={<Logo boxSize={7} color="fig.500" />} />
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
    <Box bg="broccoli.700" p={{ lg: 20, base: 10 }} mt={-2}>
      {/* <SimpleGrid columns={{ md: 2, base: 1 }} spacing={{ base: 16, md: 10 }}>
          {posts}
        </SimpleGrid> */}
      <Wrap spacing={{ base: 16, md: 10 }} align="flex-start" justify="center">
        {posts}
      </Wrap>
    </Box>
  );
};

const WhyHerd = () => {
  return (
    <Box
      bg="broccoli.700"
      p={{ lg: 20, md: 10, sm: 10, base: 5 }}
      pt={0}
      mt={-2}
    >
      <Text textStyle="h2" textAlign={{ base: "center", md: "left" }}>
        Why Herd is better than social media for policy conversations
      </Text>
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
      mt={-2}
    />
  );
};

export default AboutTheAppSection;
