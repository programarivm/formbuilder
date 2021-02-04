import { Container, Grid } from '@material-ui/core';
import Buttons from './Buttons';
import DndCards from './DndCards';
import AddInputDialog from './Dialog/Add/Input';
import AddSelectDialog from './Dialog/Add/Select';
import AddTextareaDialog from './Dialog/Add/Textarea';
import TheForm from './TheForm';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function Dashboard() {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} style={{ marginTop: 15 }}>
            <Buttons />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <DndProvider backend={HTML5Backend}>
              <DndCards />
            </DndProvider>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TheForm />
          </Grid>
        </Grid>
      </Container>
      <AddInputDialog />
      <AddSelectDialog />
      <AddTextareaDialog />
    </div>
  );
}
