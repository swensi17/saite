import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';

const Blog = () => {
  const posts = [
    {
      title: 'Как AI-боты меняют бизнес в 2024 году',
      excerpt: 'Исследование влияния искусственного интеллекта на современный бизнес и автоматизацию процессов.',
      image: 'https://source.unsplash.com/random/400x250?ai',
      author: 'Админ',
      date: '15 Марта 2024',
      link: '#',
    },
    {
      title: 'Топ-5 трендов в разработке чат-ботов',
      excerpt: 'Обзор последних тенденций и инноваций в сфере разработки чат-ботов и виртуальных ассистентов.',
      image: 'https://source.unsplash.com/random/400x250?chatbot',
      author: 'Админ',
      date: '10 Марта 2024',
      link: '#',
    },
    {
      title: 'Руководство по интеграции ботов',
      excerpt: 'Пошаговое руководство по интеграции чат-ботов в существующие бизнес-процессы и системы.',
      image: 'https://source.unsplash.com/random/400x250?integration',
      author: 'Админ',
      date: '5 Марта 2024',
      link: '#',
    },
  ];

  return (
    <Box id="blog" sx={{ py: 8, backgroundColor: '#282c34' }}>
      <Container>
        <Typography
          variant="h2"
          component={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          sx={{
            textAlign: 'center',
            mb: 6,
            color: '#61dafb',
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          Блог
        </Typography>
        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
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
                    image={post.image}
                    alt={post.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{ color: '#61dafb' }}
                    >
                      {post.title}
                    </Typography>
                    <Typography sx={{ mb: 2, color: '#ccc' }}>
                      {post.excerpt}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 2,
                        color: '#888',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <PersonIcon fontSize="small" />
                        <Typography variant="body2">{post.author}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <AccessTimeIcon fontSize="small" />
                        <Typography variant="body2">{post.date}</Typography>
                      </Box>
                    </Box>
                    <Button
                      variant="outlined"
                      href={post.link}
                      sx={{
                        color: '#61dafb',
                        borderColor: '#61dafb',
                        '&:hover': {
                          borderColor: '#4fa8c7',
                          backgroundColor: 'rgba(97, 218, 251, 0.1)',
                        },
                      }}
                    >
                      Читать далее
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;
