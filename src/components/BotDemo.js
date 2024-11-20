import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';

const BotDemo = () => {
  const bots = [
    {
      name: 'AI Assistant Bot',
      description: 'Интеллектуальный помощник для автоматизации задач',
      demoUrl: '#',
      features: ['Natural Language Processing', 'Task Automation', '24/7 Availability']
    },
    {
      name: 'Support Bot',
      description: 'Бот поддержки клиентов с быстрыми ответами',
      demoUrl: '#',
      features: ['Quick Responses', 'Ticket Management', 'Multi-language Support']
    },
    {
      name: 'Analytics Bot',
      description: 'Бот для анализа данных и генерации отчетов',
      demoUrl: '#',
      features: ['Data Analysis', 'Report Generation', 'Custom Metrics']
    }
  ];

  return (
    <Box id="bot-demo" sx={{ py: 8, backgroundColor: '#282c34' }}>
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
          Демонстрация Ботов
        </Typography>
        <Grid container spacing={4}>
          {bots.map((bot, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Paper
                  sx={{
                    p: 3,
                    height: '100%',
                    backgroundColor: '#21252b',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    },
                  }}
                >
                  <Typography variant="h5" sx={{ color: '#61dafb', mb: 2 }}>
                    {bot.name}
                  </Typography>
                  <Typography sx={{ color: '#fff', mb: 2 }}>
                    {bot.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {bot.features.map((feature, idx) => (
                      <Typography
                        key={idx}
                        sx={{ color: '#ccc', fontSize: '0.9rem', mb: 1 }}
                      >
                        • {feature}
                      </Typography>
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    href={bot.demoUrl}
                    target="_blank"
                    sx={{
                      backgroundColor: '#61dafb',
                      '&:hover': {
                        backgroundColor: '#4fa8c7',
                      },
                    }}
                  >
                    Попробовать Демо
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BotDemo;
