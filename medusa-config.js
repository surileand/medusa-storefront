// CORS when consuming Medusa from admin
const ADMIN_CORS = process.env.ADMIN_CORS || 
  "http://localhost:7000,http://localhost:7001"

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = 
  process.env.STORE_CORS || "http://localhost:8000"