// src/api.js
const API_URL = "http://localhost:3000";

export async function apiFetch(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    credentials: "include", // обязательно для сессии (куки)
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  let data = null;
  if (res.status !== 204) {
    try {
      data = await res.json();
    } catch {
      data = null;
    }
  }

  return { ok: res.ok, status: res.status, data };
}