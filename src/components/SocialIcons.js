import React from 'react';
import { IconButton, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send'; // Using SendIcon instead of TelegramIcon

const SocialIcons = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <IconButton
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: '#61dafb' }}
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: '#61dafb' }}
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        href="https://t.me/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: '#61dafb' }}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default SocialIcons;
