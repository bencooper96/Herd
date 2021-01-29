import React, { useState } from "react";
import Head from "next/head";
import {
  Text,
  Box,
  Center,
  VStack,
  Image,
  Container,
  Button,
  Input,
} from "@chakra-ui/react";

// import HubspotForm from "react-hubspot-form";
import { useForm } from "react-hook-form";
import fetch from "isomorphic-unfetch";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Herd - Your digital town hall</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box
          bg="primary.100"
          w={"100%"}
          // h="100vh"
          py={{
            base: 0,
            sm: 5,
            md: 7,
            lg: 10,
          }}
        >
          <Center>
            <FormContainer />
          </Center>
        </Box>
      </main>

      <footer>
        <Box bg="accent.100" w={"100%"} p={2}>
          <Center>
            <VStack>
              <img src="/logo/monocolor.svg" alt="Herd Logo" />
              <Text color="text.100">HeardByHerd@gmail.com</Text>
            </VStack>
          </Center>
        </Box>
      </footer>
    </div>
  );
}

function FormContainer() {
  return (
    <Box
      h={{ base: "100vh", sm: "100%" }}
      w={{
        base: "100vw",
        sm: "80vw",
        md: "45vw",
        xl: "30vw",
      }}
      p={{
        base: 5,
        sm: 10,
      }}
      bg="light.100"
      borderRadius={{ base: 0, sm: 40 }}
    >
      <VStack>
        <Image src="/polly.png" boxSize="40vh" alt="Polly the Parrot" />
        <Container>
          <Text textStyle="h2" align="center">
            Herd
          </Text>
          <Text textStyle="subtitle" align="center">
            Your Digital Townhall
          </Text>
          <Text textStyle="body" align="center">
            Local politics made easy, effective, & engaging.
          </Text>

          <HubSpotForm />
        </Container>
      </VStack>
    </Box>
  );
}

function HubSpotForm() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/emailForm", {
        method: "POST",
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

  return (
    <VStack mt={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Please Enter Your Email"
          isInvalid={errors.email != null}
          isReadOnly={success}
          type="text"
          name="email"
          mb={2}
          ref={register({
            required: "Please enter your email address",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />

        <Button
          isFullWidth
          bg="primary.100"
          color="light.100"
          type="submit"
          isDisabled={success}
        >
          Submit
        </Button>
      </form>
      {success && (
        <Text color="secondary.100">Sucess! We'll keep in touch.</Text>
      )}
      <Text color="red.500">{errors.email?.message}</Text>

      {error && <Text color="primary.100">Oops, something went wrong.</Text>}
    </VStack>
  );
}

// function HubSpotForm() {
//   return (
//     <HubspotForm
//       portalId="your_portal_id"
//       formId="your_form_id"
//       onSubmit={() => console.log("Submit!")}
//       onReady={(form) => console.log("Form ready!")}
//       loading={<div>Loading...</div>}
//     />
//   );
// }
