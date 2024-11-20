import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';

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
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              mb: 4,
              color: '#fff',
              opacity: 0.9,
            }}
          >
            Автоматизация бизнес-процессов с помощью современных технологий
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
              mt: 2,
              backgroundColor: '#61dafb',
              padding: '12px 32px',
              fontSize: '1.2rem',
              '&:hover': {
                backgroundColor: '#4fa8c7',
                transform: 'translateY(-2px)',
                boxShadow: '0 5px 15px rgba(97, 218, 251, 0.4)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Связаться со мной
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
