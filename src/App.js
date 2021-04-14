import { Box, CssBaseline, Container } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container component={Box} py={3}>
        <h1>hello material ui</h1>
      </Container>
    </div>
  );
}

export default App;
