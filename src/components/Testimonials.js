import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Александр П.',
      company: 'Tech Solutions',
      text: 'Отличный опыт работы! Бот, который был разработан, значительно улучшил нашу систему поддержки клиентов.',
    },
    {
      name: 'Мария С.',
      company: 'Digital Marketing Agency',
      text: 'Профессиональный подход и отличное качество работы. Бот помог автоматизировать многие рутинные процессы.',
    },
    {
      name: 'Дмитрий К.',
      company: 'E-commerce Platform',
      text: 'Впечатляющие результаты! Наши клиенты довольны быстрыми ответами и точностью работы бота.',
    },
  ];

  return (
    <Box id="testimonials" sx={{ py: 8, backgroundColor: '#21252b' }}>
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
          Отзывы Клиентов
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              style={{ flex: 1 }}
            >
              <Paper
                sx={{
                  p: 4,
                  height: '100%',
                  backgroundColor: '#282c34',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    backgroundColor: '#61dafb',
                  },
                }}
              >
                <FormatQuoteIcon
                  sx={{
                    fontSize: 40,
                    color: '#61dafb',
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    color: '#fff',
                    mb: 3,
                    fontStyle: 'italic',
                  }}
                >
                  "{testimonial.text}"
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#61dafb',
                    mb: 1,
                  }}
                >
                  {testimonial.name}
                </Typography>
                <Typography
                  sx={{
                    color: '#ccc',
                  }}
                >
                  {testimonial.company}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
