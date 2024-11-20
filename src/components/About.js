import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import DevicesIcon from '@mui/icons-material/Devices';

const About = () => {
  const skills = [
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: '#61dafb' }} />,
      title: 'Web Development',
      description: 'Experienced in both frontend and backend development with modern frameworks and technologies.',
    },
    {
      icon: <BrushIcon sx={{ fontSize: 40, color: '#61dafb' }} />,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces with attention to detail and user experience.',
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 40, color: '#61dafb' }} />,
      title: 'Responsive Design',
      description: 'Building websites that work seamlessly across all devices and screen sizes.',
    },
  ];

  return (
    <Box id="about" sx={{ py: 8, backgroundColor: '#21252b' }}>
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
          About Me
        </Typography>
        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: '#282c34',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                  },
                }}
              >
                <Box sx={{ textAlign: 'center', mb: 2 }}>{skill.icon}</Box>
                <Typography
                  variant="h5"
                  sx={{ mb: 2, textAlign: 'center', color: '#fff' }}
                >
                  {skill.title}
                </Typography>
                <Typography sx={{ textAlign: 'center', color: '#ccc' }}>
                  {skill.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
