import KSBCard from "../KSBCard/KSBCard";
import { Box, Container, Divider, Grid, Pagination } from "@mui/material";
import { useState, useEffect } from "react";

const KSBList = ({ KSBS }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPage(1);
  }, [KSBS]);

  const pageSize = 10;
  const pageCount = Math.ceil(KSBS.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedKSBS = KSBS.slice(startIndex, endIndex);

  const handlePageChange = (_, newPage) => {
    setPage(newPage);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 2, mb: 20 }}>
      <Grid container spacing={2} rowGap={2} columns={9}>
        {paginatedKSBS.map((ksb) => (
          <Grid item size={3} key={ksb.Code}>
            <KSBCard
              code={ksb.Code}
              description={ksb.Description}
              gradingCriteria={ksb.GradingCriteria}
              assessmentMethod={ksb.AssessmentMethod}
              distinctionCriteria={ksb.DistinctionCriteria}
            />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: "240px",
          width: "calc(100vw - 240px)",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 2,
          m: 0,
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <Pagination
          count={pageCount}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default KSBList;
const primary = {
  main: "#1976d2",
  light: "#42a5f5",
  dark: "#1565c0",
  contrastText: "#fff",
};
