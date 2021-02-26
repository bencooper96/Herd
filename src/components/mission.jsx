import React from "react";

import {
  Box,
  Center,
  UnorderedList,
  ListItem,
  Stack,
  Text,
  Divider,
  List,
  chakra,
} from "@chakra-ui/react";

export default function MissionSection() {
  return (
    <Box bg="light" p={{ md: 20, base: 4 }} pt={40} id="mission">
      <Stack direction="column">
        <Mission />
        {/* <Divider /> */}
        {/* <Values /> */}
      </Stack>
    </Box>
  );
}

const Mission = () => {
  return (
    <Box my={8}>
      <Text textStyle="h2" mb={5}>
        Our Mission
      </Text>
      <Text textStyle="body">
        We want to make constructive, thoughtful policy conversations - that
        teach and generate policy solutions - accessible for constituents. Then
        we aim to place that feedback directly in the hands of policymakers.
      </Text>
    </Box>
  );
};

const Values = () => {
  return (
    <Box my={8}>
      <Text textStyle="h2" mb={5}>
        Our Vision
      </Text>
      <UnorderedList spacing={5}>
        <ListItem>
          <Text textStyle="subtitle">
            A community that talks with each other instead of at each other
          </Text>
          <Text textStyle="body">
            Herd begins with questions instead of answers to create open,
            meaningful dialogue.
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="subtitle">
            A community that is represented by its politicians
          </Text>
          <Text textStyle="body">
            Herd verifies your location and empowers you to meaningfully connect
            to your reps. When they know that you are THEIR constituent, it’s in
            their best interest to listen to you.
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="subtitle">
            A community based on ideas instead of identity
          </Text>
          <Text textStyle="body">
            Herd allows for users to interact anonymously. This is to ensure you
            can speak up without the fear of being immediately written off or
            ostracized by your friends. We want our users to hear people out
            before making a judgement about that person's character and ideas.
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="subtitle">
            A community that embraces complicated conversations
          </Text>
          <Text textStyle="body">
            Herd dialogue is rated on a spectrum instaed of a like or dislike.
            The comment section is categorized by subject for structured,
            in-depth conversation. We strive to make easy insights from nuanced
            issues.
          </Text>
        </ListItem>
        <ListItem>
          <Text textStyle="subtitle">
            A community that generates actionable insights for all
          </Text>
          <Text textStyle="body">
            Herd is open with our data. We track, structure, and distribute
            knowledge so that it can be called on and used by anyone.
          </Text>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

const oldMissionList = () => {
  return (
    <List spacing={5}>
      <ListItem>
        <Text textStyle="subtitle" mb={2}>
          We know that Local matters.
        </Text>
        <Text textStyle="body">
          Federal politicians make headlines. Local politicians make decisions
          that shape our lives and livelihoods.{" "}
          <chakra.strong textStyle="bold">
            Herd focuses on our city, our people.
          </chakra.strong>
        </Text>
      </ListItem>
      <ListItem>
        <Text textStyle="subtitle" mb={2}>
          We are stronger when we act as a Herd.
        </Text>
        <Text textStyle="body">
          One person standing up is powerful. One-thousand people standing is
          transformational. Herd connects people to collective ideas.{" "}
          <chakra.strong textStyle="bold">
            We empower citizens speak up and shape the future of their
            community.
          </chakra.strong>
        </Text>
      </ListItem>
      <ListItem>
        <Text textStyle="subtitle" mb={2}>
          We are more alike than different.
        </Text>
        <Text textStyle="body">
          We all want better schools, better jobs, and safer neighborhoods. The
          first step to making strides on any of these goals is to open the
          difficult conversations about how we get there.{" "}
          <chakra.strong textStyle="bold">
            Herd brings people from across ideologies, identities, and
            experiences to the table.
          </chakra.strong>
        </Text>
      </ListItem>
    </List>
  );
};
