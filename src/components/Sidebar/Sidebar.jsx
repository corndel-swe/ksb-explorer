import { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  FormControlLabel,
  Checkbox,
  Toolbar,
  Divider,
  FormGroup,
  Drawer,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DEFAULT_FILTERS } from "../../utils/constants";

const Sidebar = ({ onSubmit, filters }) => {
  const { search: initialSearch, ksbs, assessmentMethods } = filters;
  const [search, setSearch] = useState(initialSearch);

  const handleChangeSearch = (event) => setSearch(event.target.value);

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    onSubmit({
      search,
      ksbs: { ...ksbs },
      assessmentMethods: { ...assessmentMethods },
    });
  };

  const handleChangeCheckBox = (event) => {
    const { name, checked } = event.target;
    const updatedFilters = {
      search,
      ksbs: {
        ...ksbs,
      },
      assessmentMethods: {
        ...assessmentMethods,
      },
    };

    const keyToUpdate =
      name === "AM1" || name === "AM2" ? "assessmentMethods" : "ksbs";
    updatedFilters[keyToUpdate][name] = checked;

    onSubmit(updatedFilters);
  };

  const handleClickReset = () => onSubmit(DEFAULT_FILTERS);

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
      }}
    >
      <form onSubmit={handleSubmitSearch}>
        <Toolbar sx={{ mb: 2 }} />
        <Divider />
        <Stack direction="column" spacing={2} p={2}>
          <TextField
            label="Search KSBs"
            variant="outlined"
            value={search}
            onChange={handleChangeSearch}
          />
          <Button
            variant="contained"
            onClick={handleSubmitSearch}
            type="submit"
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
          <Divider />

          <FormGroup>
            <Typography gutterBottom>KSB</Typography>

            <FormControlLabel
              control={<Checkbox checked={ksbs.K} name="K" />}
              label="Knowledge"
              onChange={handleChangeCheckBox}
            />
            <FormControlLabel
              control={<Checkbox checked={ksbs.S} name="S" />}
              label="Skills"
              onChange={handleChangeCheckBox}
            />
            <FormControlLabel
              control={<Checkbox checked={ksbs.B} name="B" />}
              label="Behaviors"
              onChange={handleChangeCheckBox}
            />
            <Divider />
            <Typography mt={2} gutterBottom>
              Assessment Methods
            </Typography>
            <FormControlLabel
              control={<Checkbox checked={assessmentMethods.AM1} name="AM1" />}
              label="AM1"
              onChange={handleChangeCheckBox}
            />
            <FormControlLabel
              control={<Checkbox checked={assessmentMethods.AM2} name="AM2" />}
              label="AM2"
              onChange={handleChangeCheckBox}
            />
          </FormGroup>

          <Divider />
          <Button variant="outlined" onClick={handleClickReset}>
            Reset Filters
          </Button>
        </Stack>
      </form>
    </Drawer>
  );
};

export default Sidebar;
