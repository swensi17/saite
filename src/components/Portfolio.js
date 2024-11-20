import React from 'react';
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A modern web application built with React and Material-UI.',
      image: 'https://source.unsplash.com/random/400x300?website',
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Project 2',
      description: 'Mobile-responsive e-commerce platform with dynamic features.',
      image: 'https://source.unsplash.com/random/400x300?tech',
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Project 3',
      description: 'Interactive dashboard with real-time data visualization.',
      image: 'https://source.unsplash.com/random/400x300?code',
      demoLink: '#',
      codeLink: '#',
    },
  ];

  return (
    <Box id="portfolio" sx={{ py: 8, backgroundColor: '#282c34' }}>
      <Container>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: '#61dafb',
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#21252b',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" sx={{ color: '#fff' }}>
                    {project.title}
                  </Typography>
                  <Typography sx={{ color: '#ccc' }}>{project.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href={project.demoLink}
                    target="_blank"
                    sx={{ color: '#61dafb' }}
                  >
                    Live Demo
                  </Button>
                  <Button
                    size="small"
                    href={project.codeLink}
                    target="_blank"
                    sx={{ color: '#61dafb' }}
                  >
                    View Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;
