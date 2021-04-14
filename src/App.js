import {
  Box,
  CssBaseline,
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const loadPosts = async () => {
    const res = await axios.get(`http://localhost:3001/posts?_page=${page}`);
    setPosts(res.data);
  };
  useEffect(() => {
    loadPosts();
  }, [page]);

  return (
    <div className="App">
      <CssBaseline />
      <Container component={Box} py={3}>
        <Grid container spacing={2}>
          {posts.map((post) => (
            <Grid item sm={3}>
              <Card key={post.id} style={{ height: 250 }}>
                <CardContent>
                  <Typography variant="h6">
                    {post.id}. {post.title}
                  </Typography>
                  <Typography variant="body1">{post.content}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box py={3} display="flex" justifyContent="center">
          <Pagination
            count={10}
            color="secondary"
            variant="outlined"
            onChange={(e, value) => setPage(value)}
          />
        </Box>
      </Container>
    </div>
  );
}

export default App;
