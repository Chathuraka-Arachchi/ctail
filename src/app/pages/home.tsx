import React from "react";
import { Paper, createStyles, Center } from "@mantine/core";
import { PageLayout } from "../../view/components/PageLayout/PageLayout";
import { colors } from "../constants/colors";
import { Cocktails } from "../components/organisms/index";

const useStyles = createStyles(() => ({
  formContainer: {
    width: 500,
    minHeight: 500,
  },
  header: {
    marginTop: 0,
    textAlign: "center",
    color: colors.blue,
  },
}));

export function HomePage() {
  const { classes } = useStyles();
  return (
    <PageLayout>
      <Center>
        <Paper p="xl" shadow="md" className={classes.formContainer}>
          <h3 className={classes.header}>Cocktails</h3>
          <Cocktails />
        </Paper>
      </Center>
    </PageLayout>
  );
}
