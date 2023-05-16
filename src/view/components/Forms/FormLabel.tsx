import React from "react";
import classNames from "classnames";
import { createStyles } from "@mantine/core";
import { BaseComponent } from "../../../app/interfaces/BaseComponent";

const useStyles = createStyles((theme) => ({
  label: {
    fontWeight: "bold",
    marginBottom: theme.spacing.lg,
    fontSize: ".875rem",
  },
}));

export function FormLabel({ children, className }: BaseComponent) {
  const { classes } = useStyles();

  return (
    <span className={classNames(className, classes.label)}>{children}</span>
  );
}
