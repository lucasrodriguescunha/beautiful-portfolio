import * as Sentry from "@sentry/react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import './i18n.js';

Sentry.init({
    dsn: "https://3771a8a2226b666585ff88e749ec987a@o4509408313475072.ingest.us.sentry.io/4509446265241600",
    sendDefaultPii: true,
});

const container = document.getElementById("root"); // ou "app", depende do seu index.html
const root = createRoot(container);

root.render(
    <StrictMode>
        <Sentry.ErrorBoundary fallback={<p>Algo deu errado.</p>}>
            <App />
        </Sentry.ErrorBoundary>
    </StrictMode>
);
