# Zarandooz Website Deployment Guide

This project uses a single Docker container to serve static files with Nginx and handle contact form submissions securely with a Node.js backend.

## Prerequisites

- Docker installed on your server or local machine

## 1. Configure Environment Variables

Create a `.env` file in the project root with the following content:

```
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
PORT=3001
```

- Replace `your_bot_token_here` with your Telegram bot token.
- Replace `your_chat_id_here` with your Telegram chat ID.

## 2. Build the Docker Image

Run the following command in the project root:

```
docker build -t zarandooz-app .
```

## 3. Run the Container

Run the container, mapping port 80 of the host to the container:

```
docker run -d -p 80:80 --env-file .env zarandooz-app
```

- The website will be available at `http://localhost` (or your server's IP).
- The contact form will securely send messages to your Telegram.

## 4. Notes

- Both Nginx and the Node.js backend run inside the same container using Supervisor.
- For production, keep your `.env` file secure and never commit it to version control.

## 5. Troubleshooting

- Check logs with:
  ```
  docker logs <container_id>
  ```
- Make sure your Telegram bot is active and the chat ID is correct.

---

For any issues, please contact the maintainer.
