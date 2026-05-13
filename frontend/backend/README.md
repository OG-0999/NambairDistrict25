# Nambiar District 25 Backend

A clean, production-ready backend for the Nambiar District 25 landing page. This server handles lead collection, stores leads in MongoDB, and sends new lead notifications via Resend.

---

## What this backend does

- Exposes a REST API for capturing lead inquiries.
- Validates required fields and phone/email format.
- Saves lead data to MongoDB.
- Sends a notification email to the configured receiver using Resend.
- Provides a health-ready / API structure for frontend and deploy targets.

---

## How lead collection works

1. Frontend sends a `POST /api/leads` request with lead data.
2. The backend validates required fields:
   - `firstName`
   - `lastName`
   - `mobileNumber`
   - `email`
3. Valid leads are saved into the `leads` MongoDB collection.
4. The backend attempts to send an email via Resend.
5. The response includes `success`, optional `emailSent`, and a message.

---

## Setup

### 1. Install dependencies

```bash
cd backend
npm install
```

### 2. Run in development

```bash
npm run dev
```

### 3. Run in production mode

```bash
npm start
```

---

## Required environment variables

Create a `.env` file in `backend/` with the following values:

```env
PORT=5000
MONGO_URI=
RESEND_API_KEY=
RECEIVER_EMAIL=
```

- `PORT` — Port used by the backend server (defaults to `5000` if omitted).
- `MONGO_URI` — MongoDB connection string.
- `RESEND_API_KEY` — Resend API key used to send email notifications.
- `RECEIVER_EMAIL` — Destination email address for lead alerts.

---

## MongoDB integration

This backend uses `mongoose` to connect to MongoDB. The connection is configured in `backend/config/db.js`.

### MongoDB Atlas setup

1. Go to MongoDB Atlas and create a free cluster.
2. Create a database user with password access.
3. Add your current IP address to the cluster network access whitelist.
4. Copy the connection string and paste it into `MONGO_URI` in `backend/.env`.
5. Example Atlas URI:

```env
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
```

---

## Resend email integration

The backend creates lead notification emails using the Resend Node client.

### Resend setup

1. Sign in to [Resend](https://resend.com/).
2. Generate an API key.
3. Set `RESEND_API_KEY` in `backend/.env`.
4. Set `RECEIVER_EMAIL` to the email address that should receive lead notifications.

If Resend is unavailable or misconfigured, lead data is still saved but the response will indicate email delivery failure.

---

## Render deployment steps

1. Push the repository to your Git provider.
2. Create a new Render Web Service.
3. Set the build command to:

```bash
npm install
```

4. Set the start command to:

```bash
npm start
```

5. Add the environment variables in Render:
- `PORT`
- `MONGO_URI`
- `RESEND_API_KEY`
- `RECEIVER_EMAIL`

6. Ensure the Render service can access MongoDB Atlas and Resend.

7. Deploy.

---

## Frontend connection

The frontend uses `VITE_API_URL` to point to this backend.

Example frontend `.env`:

```env
VITE_API_URL=https://your-backend-service.onrender.com
```

If `VITE_API_URL` is not set, the frontend defaults to `http://localhost:5000`.

---

## API documentation

### `POST /api/leads`

Submit a new lead to the backend.

#### Request body

```json
{
  "firstName": "Aarav",
  "lastName": "Nambiar",
  "mobileNumber": "9876543210",
  "email": "aarav@example.com"
}
```

#### Expected success response

```json
{
  "success": true,
  "lead": {
    "_id": "...",
    "firstName": "Aarav",
    "lastName": "Nambiar",
    "mobileNumber": "9876543210",
    "email": "aarav@example.com",
    "preferredUnit": "",
    "message": "",
    "createdAt": "2026-05-10T00:00:00.000Z",
    "updatedAt": "2026-05-10T00:00:00.000Z",
    "__v": 0
  },
  "emailSent": true,
  "message": "Lead saved and email sent successfully."
}
```

If email delivery fails but the lead is saved, the backend returns:

```json
{
  "success": true,
  "lead": { ... },
  "emailSent": false,
  "message": "Lead saved but email notification could not be sent."
}
```

---

## Troubleshooting

### MongoDB connection issues

- Verify `MONGO_URI` is correct.
- Confirm Atlas network access allows your IP or Render's outbound IP.
- Check credentials and database name in the URI.
- Review server logs for DNS or authentication errors.

### CORS issues

- This backend uses `cors()` globally.
- If the frontend still fails, ensure the frontend is sending requests to the correct `VITE_API_URL`.
- Confirm the request URL matches `http://localhost:5000/api/leads` in local development.

### Resend issues

- Verify `RESEND_API_KEY` is valid and active.
- Confirm `RECEIVER_EMAIL` is a properly formatted email.
- Check logs for Resend response errors.
- The backend will still save leads even if email sending fails.

### Render deployment issues

- Ensure all environment variables are set in Render.
- Use `npm install` as the build step and `npm start` as the start command.
- Confirm Render has network access to MongoDB Atlas and Resend.
- Check Render logs for runtime, build, or connection errors.

---

## Notes

- The API is designed to be simple and production-ready.
- Required fields are validated before saving.
- The backend supports safe degraded mode if email delivery cannot complete.

---

## Folder structure

```
backend/
  config/
    db.js
    resend.js
  controllers/
    leadController.js
  models/
    Lead.js
  routes/
    leadRoutes.js
  middleware/
    errorMiddleware.js
  utils/
    validators.js
  .env
  package.json
  server.js
  README.md
```
