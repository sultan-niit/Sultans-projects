---
description: API communication standards for PHP backend endpoints and auth storage
always_on: true
---
# Tradeflow API & Auth Invariants

1. **Payload Format**:
   - Endpoints ending in `.php` or using PHP `$_POST` must receive `FormData` objects (`new FormData()`).
   - Do NOT send JSON payloads to these endpoints, as PHP `$_POST` will be empty and report missing parameters.

2. **Axios Configuration**:
   - Do NOT set default `Content-Type: application/json` on Axios instances used to transmit `FormData`.
   - Always allow the browser/runtime to generate the appropriate `multipart/form-data; boundary=...` header.
   - Configure only `Accept: "application/json"`.

3. **Session & Auth Storage**:
   - Save the user object under `localStorage.setItem("user", JSON.stringify(data))`.
   - Save token or identifier under `localStorage.setItem("accessToken", token || staffId)`.
