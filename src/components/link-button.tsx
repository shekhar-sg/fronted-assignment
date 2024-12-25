"use client";
import { Button, ButtonProps, styled } from "@mui/material";
import NextLink from "next/link";

const LinkButton = styled((props: ButtonProps<typeof NextLink>) => {
  const { children } = props;
  return (
    <Button component={NextLink} {...props}>
      {children ?? props.title ?? "No Text"}
    </Button>
  );
})({});

export default LinkButton;
