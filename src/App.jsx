import ksbs from "./data/ksbs.js";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import KSBList from "./components/KSBList/KSBList";
import EmptyKSBList from "./components/KSBList/EmptyKSBList.jsx";
import { getSearchSet } from "./utils/utils.js";
import { DEFAULT_FILTERS } from "./utils/constants.js";




function App() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const onSubmit = (updatedFilters) => {
    setFilters(updatedFilters);
  };

  const searchSet = getSearchSet(filters.search);

  const filteredKsbs = ksbs.filter(
    (k) =>
      searchSet.has(k.Code) &&
      filters.ksbs[k.Code.charAt(0)] &&
      filters.assessmentMethods[k.AssessmentMethod]
  );

  return (
    <Box
      px={2}
      sx={{
        marginLeft: "240px",
      }}
      component="main"
    >
      <Typography
        variant="h2"
        gutterBottom
        component={"h1"}
        textAlign={"center"}
      >
        KSB Explorer
      </Typography>
      <Sidebar onSubmit={onSubmit} filters={filters} />
      {filteredKsbs.length !== 0 ? (
        <KSBList KSBS={filteredKsbs} />
      ) : (
        <EmptyKSBList />
      )}
    </Box>
  );
}

export default App;
