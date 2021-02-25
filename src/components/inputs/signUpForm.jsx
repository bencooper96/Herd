import React, { useState } from "react";
import {
  Text,
  Box,
  Center,
  VStack,
  Button,
  Input,
  Stack,
  chakra,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
import fetch from "isomorphic-unfetch";

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
        description: "You've been added to our newsletter.",
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
    <VStack width="100%">
      <chakra.form width="100%" onSubmit={handleSubmit(onSubmit)}>
        <Stack direction={{ base: "column", md: "row" }} spacing={2} px={0}>
          <Input
            bg="miso"
            width={{ base: "100%", md: "300%" }}
            placeholder="Enter your email to stay updated"
            isInvalid={errors.email != null}
            isReadOnly={success}
            type="text"
            name="email"
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
            bg={{ md: "fig.200", base: "fig.100" }}
            color="light"
            type="submit"
            isDisabled={success}
            _hover={{ bg: "fig.100" }}
          >
            Submit
          </Button>
        </Stack>
      </chakra.form>
      {success && (
        <Text color="broccoli.100">Sucess! We'll keep in touch.</Text>
      )}
      <Text color="red.500">{errors.email?.message}</Text>

      {error && <Text color="fig.100">Oops, something went wrong.</Text>}
    </VStack>
  );
}

export { HubSpotForm };
