import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';

const Hero = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #282c34 30%, #21252b 90%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(97, 218, 251, 0.1) 0%, rgba(40, 44, 52, 0) 50%)',
          zIndex: 1,
        }
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 'bold',
              mb: 4,
              color: '#61dafb',
              textShadow: '0 0 10px rgba(97, 218, 251, 0.5)',
            }}
          >
            Разработка Ботов
          </Typography>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: '#fff',
              maxWidth: '600px',
            }}
          >
            Создаем умных ботов для вашего бизнеса
          </Typography>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            variant="contained"
            size="large"
            href="#contact"
            sx={{
              backgroundColor: '#61dafb',
              color: '#282c34',
              '&:hover': {
                backgroundColor: '#4fa8d3',
              },
            }}
          >
            Связаться с нами
          </Button>
        </motion.div>

        <Box sx={{ mt: 4 }}>
          <SocialIcons />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
