import React, { useState, useEffect, useRef } from 'react';
import { Box, TextField, Button, Paper, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import io from 'socket.io-client';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        text: newMessage,
        sender: 'user',
        timestamp: new Date().toISOString()
      };
      setMessages([...messages, message]);
      setNewMessage('');
      // Here you would typically emit the message to your backend
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Box sx={{ 
      width: '100%', 
      maxWidth: 600, 
      margin: '0 auto', 
      padding: 2,
      height: '80vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Paper elevation={3} sx={{ 
        flex: 1, 
        mb: 2, 
        p: 2, 
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: message.sender === 'user' ? '#1976d2' : '#e0e0e0',
              color: message.sender === 'user' ? 'white' : 'black',
              borderRadius: 2,
              p: 1,
              mb: 1,
              maxWidth: '70%'
            }}
          >
            <Typography variant="body1">{message.text}</Typography>
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
              {new Date(message.timestamp).toLocaleTimeString()}
            </Typography>
          </Box>
        ))}
        <div ref={messagesEndRef} />
      </Paper>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          size="small"
        />
        <Button 
          variant="contained" 
          endIcon={<SendIcon />}
          onClick={handleSendMessage}
          disabled={!newMessage.trim()}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chat;
