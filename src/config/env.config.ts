export const envConfig = {
  vapi: {
    apiUrl: import.meta.env.VITE_VAPI_API_URL ?? "https://api.vapi.ai",
    token: import.meta.env.VITE_VAPI_WEB_TOKEN ?? "9780018f-4650-4ce8-ac82-12d163ee16d2",
  },
};
