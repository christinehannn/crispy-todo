import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

const TodoAccordions = ({ todos }) => {
  return todos.map((item, index) => 
    <Accordion key={index}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${index}-panel-content`}
        id={`${index}-panel-header`}
      >
        <Typography>{item["todo"]}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{item["details"]}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default TodoAccordions