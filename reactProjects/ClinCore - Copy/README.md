# React + Vite

## Password-reset session storage

When the forgot-password request succeeds, `src/pages/forgotpassword.jsx` saves reset details in the browser's `sessionStorage`:

| Key | Value |
| --- | --- |
| `resetEmail` | The submitted email address |
| `resetStaffId` | The staff ID returned by the API, when present |
| `resetOtp` | The OTP returned by the API, when present |

The app then opens the reset-password page. `src/pages/resetpassword.jsx` displays the email passed in router state, falling back to `resetEmail` in session storage if that state is unavailable. The current reset form does not yet read or prefill `resetStaffId` or `resetOtp`.

`sessionStorage` is scoped to the current browser tab and origin. It survives page reloads in that tab and is cleared when the tab's browsing session ends. The app does not explicitly remove these reset keys after use, so they remain available until then or until overwritten/cleared by the browser. These values are client-side convenience data, not a substitute for server-side OTP validation.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
