import React, { useState } from "react";
import Head from "next/head";
import {
  Text,
  Box,
  Center,
  VStack,
  Container,
  Button,
  Input,
} from "@chakra-ui/react";
import Image from "next/image";

import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
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
          bg="light.100"
          w={"100%"}
          minHeight="100vh"
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
        <Box
          bg="light.100"
          borderTop="1px"
          borderColor="accent.100"
          w={"100%"}
          p={2}
        >
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
    <Center
      h={{ base: "100vh", sm: "100%" }}
      p={{
        base: 5,
        sm: 7,
      }}
      bg="accent.100"
      borderRadius={{ base: 0, sm: 40 }}
    >
      <VStack mt={{ base: "-20", sm: 0 }}>
        <Image
          src="/polly.png"
          width="150"
          height="150"
          alt="Polly the Parrot"
        />
        <Text textStyle="h1" align="center" color="dark.100">
          Herd
        </Text>
        <Text
          textStyle="subtitle"
          align="center"
          color="dark.100"
          mb={{ base: 4 }}
        >
          Your Digital Townhall
        </Text>

        <Text textStyle="body" align="center" color="dark.100" my={{ base: 4 }}>
          Local politics made easy, effective, & engaging.
        </Text>

        <HubSpotForm />
      </VStack>
    </Center>
  );
}

function HubSpotForm() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { register, handleSubmit, errors } = useForm();
  const toast = useToast();

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
      toast({
        title: "Thanks!",
        description: "We’ll update you when we’re live.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      setError(true);
      toast({
        title: "An error occurred.",
        description:
          "Something went wrong. If you're having trouble subscribing, please email us at HeardByHerd@Gmail.com",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack mt={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Enter your email for early access"
          bg="light.100"
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
          _hover={{ bg: "primary.200" }}
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
