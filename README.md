## CI/CD funcionando c# 📱 PhoneStore

## Diseño, Monitoreo, Optimización y CI/CD de una Arquitectura Cloud Basada en Microservicios

**Proyecto Formativo Integrador – Arquitectura de Sistemas Computacionales**

> Implementación, monitoreo y optimización de una arquitectura cloud basada en microservicios para una tienda online de celulares de gama alta (PhoneStore).  
> El proyecto fue desarrollado en Ubuntu 22 (máquina virtual en VirtualBox), utilizando herramientas gratuitas: Docker, Prometheus, Grafana, Nginx, k6 y GitHub Actions.

---

## 👥 Integrantes

- **Ellin Alejandro Granja Torres**
- **Yover Cilo Preciado Castillo**
- **Jhonatan Alexander Ocampo Angulo**

Trabajo colaborativo con apoyo mutuo en todas las etapas: diseño, implementación, pruebas, documentación y sustentación.

---

## 🔎 Descripción general del proyecto

PhoneStore es una aplicación modular basada en microservicios que simula el funcionamiento de una tienda especializada en celulares de gama alta y sus servicios complementarios (accesorios, garantías y mantenimiento).

Este proyecto demuestra la aplicación práctica de los siguientes conceptos:

- Diseño de arquitectura cloud basada en microservicios.
- Uso de contenedores con Docker y Docker Compose.
- Monitoreo con Prometheus y visualización con Grafana.
- Pruebas de carga y estrés.
- Optimización de recursos (CPU y RAM).
- Simulación de balanceo de carga con Nginx.
- Implementación de un pipeline CI/CD con GitHub Actions.

---

## 🏗 Arquitectura general del sistema

Componentes principales:

- 3 instancias del microservicio PhoneStore (Node.js + Express)
  - `phonestore-app1`
  - `phonestore-app2`
  - `phonestore-app3`
- **Nginx** como balanceador de carga (puerto `8080`)
- **Prometheus** para recolección de métricas (puerto `9090`)
- **Grafana** para visualización de métricas (puerto `3004`)
- Orquestación con **Docker Compose**
- Control de versiones y CI/CD con **GitHub Actions**

El diagrama completo se encuentra en el archivo:
arquitectura_phonestore.tex

yaml
Copiar código

---

## 📂 Estructura del repositorio

phonestore-monitoring/
├─ app/
├─ docker/
│ └─ prometheus.yml
├─ nginx/
│ └─ nginx.conf
├─ tests/
│ └─ load_test.js
├─ .github/
│ └─ workflows/ci-cd.yml
├─ docker-compose.yml
├─ arquitectura_phonestore.tex
├─ README.md
└─ evidencia/

yaml
Copiar código

---

## ▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio:
```bash
git clone https://github.com/TU_USUARIO/phonestore-monitoring.git
cd phonestore-monitoring
Construir y levantar los contenedores:

bash
Copiar código
docker-compose up -d --build
Verificar el estado:

bash
Copiar código
docker ps
Acceso a los servicios:

API balanceada (Nginx): http://localhost:8080/api

Prometheus: http://localhost:9090

Grafana: http://localhost:3004

Detener el entorno:

bash
Copiar código
docker-compose down
🧪 Pruebas de carga
Las pruebas de carga se realizaron utilizando curl para simular múltiples solicitudes concurrentes al microservicio balanceado.

Comando utilizado:

bash
Copiar código
for i in {1..100}; do curl -s http://localhost:8080/api > /dev/null; done
También se pueden realizar pruebas con k6 (opcional):

bash
Copiar código
k6 run tests/load_test.js
♻️ Optimización aplicada
Para mejorar el uso de recursos, se implementaron límites en los contenedores:

CPU: 0.5 cores por contenedor

Memoria RAM: 300 MB por contenedor

Estos límites se configuraron en el archivo docker-compose.yml.

Adicionalmente, se hizo una correcta gestión del entorno usando:

bash
Copiar código
docker-compose down
cuando los servicios no estaban en uso.

⚙️ Integración y Despliegue Continuo (CI/CD)
Se implementó un pipeline en GitHub Actions, el cual:

Valida el repositorio

Simula la construcción del proyecto

Confirma el correcto funcionamiento del flujo DevOps

Archivo ubicado en:

bash
Copiar código
.github/workflows/ci-cd.yml
Evidencia: pipeline con ejecuciones en estado ✅ verde.

📸 Evidencias
En la carpeta /evidencia se incluyen las siguientes capturas:

Estado de microservicios (docker ps)

Interfaz de Prometheus (targets UP)

Conexión entre Grafana y Prometheus

Panel de métricas en Grafana

Resultados de pruebas de carga (curl/k6)

Uso de recursos antes y después de optimizar

Pipeline CI/CD funcionando

Balanceo de carga por Nginx

Ejecución de docker-compose down

Ejemplo de inserción en Markdown:

md
Copiar código
![Microservicios activos](evidencia/docker_ps.png)
✅ Resultados obtenidos
La arquitectura de microservicios funcionó correctamente.

Prometheus recolectó las métricas del sistema.

Grafana visualizó latencia y número de solicitudes.

Nginx balanceó las peticiones entre las réplicas.

La optimización redujo el consumo excesivo de CPU y RAM.

El pipeline CI/CD aseguró un flujo ordenado de integración.

📌 Conclusión
El proyecto PhoneStore permitió aplicar de forma práctica los principales conceptos de la arquitectura de sistemas computacionales, demostrando que es posible construir, monitorear, optimizar y automatizar una solución cloud funcional utilizando únicamente herramientas gratuitas.

Este trabajo fortaleció los conocimientos en:

Arquitecturas basadas en microservicios

Contenerización

DevOps

Observabilidad

Optimización de recursos

Trabajo colaborativo

📚 Referencias
Docker Inc. (2024). Docker Documentation.

Prometheus Authors. (2024). Prometheus Documentation.

Grafana Labs. (2024). Grafana Documentation.

NGINX, Inc. (2024). NGINX Documentation.

GitHub. (2024). GitHub Actions Documentation.

k6 (Grafana Labs). (2024). k6 Load Testing Documentation.orrectamente
