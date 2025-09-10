
# Zarandooz Website

This project is a static website served with Nginx using Docker. All content is static HTML, CSS, JS, and assets. No backend or Node.js is required.

## Prerequisites

- Docker installed (for production or preview)
- Python 3 or Node.js (for local development, optional)

---

## Local Development

You can preview the static site locally using a simple static server:

**With Python 3:**
```
python -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your browser.

**With Node.js (if installed):**
```
npx serve .
```
Or install globally:
```
npm install -g serve
serve .
```

---

## Production Deployment with Docker

Build the Docker image:
```
docker build -t zarandooz-website .
```

Run the container (serves on port 80):
```
docker run -d -p 80:80 zarandooz-website
```

The website will be available at [http://localhost](http://localhost) or your server's IP.

## Notes

- All HTML files use shared header, nav, and footer components for maintainability.
- No backend or environment variables are required.

## Troubleshooting

- Check Docker logs with:
  ```
  docker logs <container_id>
  ```

---

For any issues, please contact the maintainer.
