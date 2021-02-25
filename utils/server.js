const local = process.env.NODE_ENV !== "production";

export const server = local ? "http://localhost:3000" : "https://joinherd.us/";
