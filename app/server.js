import express from "express";
import client from "prom-client";

const app = express();
const port = 3000;

// Registro de métricas
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// Métrica personalizada
const httpRequestDuration = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "Duración de solicitudes HTTP",
  labelNames: ["route", "method", "status_code"],
  buckets: [0.05, 0.1, 0.3, 0.5, 1, 2],
});

register.registerMetric(httpRequestDuration);

app.get("/api", async (req, res) => {
  const end = httpRequestDuration.startTimer();
  await new Promise((r) => setTimeout(r, Math.random() * 500));
  end({ route: "/api", method: "GET", status_code: 200 });
  res.status(200).send("Solicitud procesada correctamente");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
