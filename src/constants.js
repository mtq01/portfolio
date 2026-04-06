// +++++++++ roles
export const ROLES = {
  GUEST: 'guest',
  DEVELOPER: 'developer'
};


// ++++++++++ log types & messages
export const LOG_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  SECURITY: 'security'
};

export const LOG_MESSAGES = {
  [LOG_TYPES.ERROR]: [
    "API_GATEWAY_TIMEOUT: Response > 500ms",
    "RATE_LIMIT_REACHED: Too many requests to /v1/products",
    "WEBHOOK_VERIFICATION_FAILED: Signature mismatch",
    "FILESYSTEM_READ_ERROR: Could not fetch local manifest",
    "CORS_POLICY_VIOLATION: Origin 'dev-local' blocked"
  ],
  [LOG_TYPES.INFO]: [
    "HEADLESS_SYNC: Successfully ingested 42 content nodes",
    "PRODUCTION_BUILD: Deployment successful to Edge network",
    "DATA_STREAM_OPEN: Listening for inventory updates",
    "CACHE_INVALIDATED: Purging global CDN nodes",
    "SSL_VERIFIED: Secure handshake established"
  ]
};

// helper: grab rando msg
export const getRandomLog = (type) => {
  const pool = LOG_MESSAGES[type];
  if (!pool) return "SYSTEM_UPDATE: Unknown status";
  return pool[Math.floor(Math.random() * pool.length)];
};

// helper: hex ID
export const generateHexId = () => {
  return "0x" + Math.floor(Math.random() * 16777215)
  .toString(16)
  .toUpperCase()
  .padStart(6, '0');
};

/* [research notes]:
 useContext & createContext work perfectly fine for my portfolio & its "user roles" bcuz its small, but if i was 
 managing a massive catalog of 10,000+ items & heavy filtering there are better options for performance & caching. (maybe redux)

 - createContext avoided having to pass isSystemHealthy down thru various components (prop drilling). its also pretty simple and global

 - a shortfall of createContext is everytime a new log is added (value changes), all components using 'useActivityLog' re-render.

 - for this project, redux would be overkill since i'm only tracking a few logs and a toggle.
*/