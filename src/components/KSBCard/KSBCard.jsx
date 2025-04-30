import { useState } from "react";
import { formatSentence } from "../../utils/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Collapse,
  Divider,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const KSBCard = ({
  code,
  description,
  gradingCriteria,
  assessmentMethod,
  distinctionCriteria,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => setExpanded((prev) => !prev);

  let subheader = assessmentMethod;

  if (distinctionCriteria) {
    subheader += ", DISTINCTION";
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={"#" + code} subheader={subheader} sx={{ pb: 0 }} />

      <CardContent>
        <Typography mb={1}>{formatSentence(description)}</Typography>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Divider />
          <Typography variant="h6" my={1}>
            Grading Criteria
          </Typography>
          <Typography mb={1}>{formatSentence(gradingCriteria)}</Typography>

          {distinctionCriteria && (
            <>
              <Divider />
              <Typography variant="h6" my={1}>
                Distinction Criteria
              </Typography>
              <Typography mb={2}>
                {formatSentence(distinctionCriteria)}
              </Typography>
            </>
          )}
        </Collapse>

        <CardActions>
          <ExpandMore
            onClick={handleExpandClick}
            aria-label="show more"
            sx={{
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "0.3s",
            }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default KSBCard;
