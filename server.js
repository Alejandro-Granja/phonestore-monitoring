import express from "express";
import client from "prom-client";

const app = express();
const port = 3000;

// Registro base de métricas
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// Métrica personalizada
const httpRequestDuration = new client.Histogram({
  name: "phonestore_http_request_duration_seconds",
  help: "Duración de solicitudes HTTP en PhoneStore",
  labelNames: ["route", "method", "status_code"],
  buckets: [0.05, 0.1, 0.3, 0.5, 1, 2]
});

register.registerMetric(httpRequestDuration);

// Endpoints
app.get("/api", async (req, res) => {
  const end = httpRequestDuration.startTimer();

  // Simulación de procesamiento para PhoneStore
  await new Promise(resolve => setTimeout(resolve, Math.random() * 500));

  end({ route: "/api", method: "GET", status_code: 200 });

  res.status(200).send("Microservicio PhoneStore funcionando correctamente");
});

app.get("/health", (req, res) => {
  res.status(200).send("PhoneStore OK");
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.listen(port, () => {
  console.log(`Microservicio PhoneStore activo en puerto ${port}`);
});
