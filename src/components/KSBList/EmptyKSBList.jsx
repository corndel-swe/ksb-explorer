import { Typography, Container } from "@mui/material";

const EmptyKSBList = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        component={"h1"}
        textAlign={"center"}
      >
        No KSBs found
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        component={"p"}
        textAlign={"center"}
      >
        Please try a different search or filter.
      </Typography>
    </Container>
  );
};

export default EmptyKSBList;
