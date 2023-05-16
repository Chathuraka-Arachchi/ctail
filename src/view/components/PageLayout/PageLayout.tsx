import React from "react";
import { Container, createStyles } from "@mantine/core";
import { BaseComponent } from "../../../app/interfaces/BaseComponent";
import { Navbar } from "../Navbar/Navbar";

const useStyles = createStyles(() => ({
  navbar: {
    marginBottom: 40,
  },
}));

export function PageLayout({ children }: BaseComponent) {
  const { classes } = useStyles();
  return (
    <>
      <Navbar className={classes.navbar} />
      <Container>{children}</Container>
    </>
  );
}
