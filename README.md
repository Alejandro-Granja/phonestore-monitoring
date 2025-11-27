# 📱 PhoneStore  
## Arquitectura Cloud con Microservicios, Monitoreo y CI/CD

---

## 👥 Integrantes y roles

| Integrante | Rol en el proyecto |
|----------|----------------------|
| **Ellin Alejandro Granja Torres** | Diseño de arquitectura, monitoreo, optimización y CI/CD |
| **Yover Cilo Preciado Castillo** | Desarrollo del microservicio (Node.js - Express) |
| **Jhonatan Alexander Ocampo Angulo** | Pruebas de carga, validación y documentación |

Proyecto desarrollado en equipo, con colaboración activa en todas las etapas: diseño, implementación, pruebas y documentación.

---

## 📄 Descripción general del sistema

**PhoneStore** es una aplicación basada en microservicios que simula una tienda online de celulares de gama alta y sus servicios complementarios.

El sistema fue diseñado usando una arquitectura modular que incluye:

- Varios microservicios en Node.js
- Un balanceador de carga (Nginx)
- Monitoreo con Prometheus
- Visualización con Grafana
- Contenedores gestionados con Docker

La solución fue implementada en una máquina virtual con Ubuntu 22 usando VirtualBox, garantizando un entorno controlado y reproducible.

---

## 🛠 Tecnologías y herramientas utilizadas

- **Sistema operativo:** Ubuntu 22 (VirtualBox)
- **Lenguaje:** Node.js (JavaScript)
- **Framework:** Express.js
- **Contenedores:** Docker / Docker Compose
- **Monitoreo:** Prometheus
- **Visualización:** Grafana
- **Balanceo de carga:** Nginx
- **Pruebas de carga:** curl / k6 (opcional)
- **Control de versiones:** Git + GitHub
- **CI/CD:** GitHub Actions

Todas las herramientas utilizadas son gratuitas, cumpliendo con las restricciones del proyecto.

---

## ▶️ Guía para ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/phonestore-monitoring.git
cd phonestore-monitoring
2. Construir y levantar los contenedores
bash
Copiar código
docker-compose up -d --build
3. Verificar que todo esté funcionando
bash
Copiar código
docker ps
4. Acceder a los servicios
Microservicio balanceado: http://localhost:8080/api

Prometheus: http://localhost:9090

Grafana: http://localhost:3004

5. Detener el entorno
bash
Copiar código
docker-compose down
📚 Aplicación de los temas del curso
En este proyecto se aplicaron los siguientes conceptos vistos en la asignatura Arquitectura de Sistemas Computacionales:

✅ Diseño de arquitectura cloud
Se creó una arquitectura basada en microservicios, cada uno ejecutándose en contenedores independientes, orquestados mediante Docker Compose.

✅ Monitoreo y métricas
Prometheus se configuró para recolectar métricas del microservicio y Grafana permitió visualizar la latencia y el número de solicitudes en un dashboard.

✅ Estimación de costos y sostenibilidad
Se realizó una simulación de costos de infraestructura, además de aplicar límites de CPU y RAM en los contenedores para optimizar el consumo de recursos.

✅ Pipeline CI/CD
Se implementó un flujo de integración continua con GitHub Actions, el cual valida el código cada vez que se realiza un push al repositorio.

✅ Pruebas de rendimiento y estrés
Se utilizaron comandos de carga (curl y k6) para simular múltiples solicitudes concurrentes y evaluar el rendimiento del sistema.

✅ Simulación de balanceo de carga
Nginx fue configurado como balanceador de carga para distribuir las peticiones entre varias instancias del microservicio.

Este proyecto permitió integrar teoría y práctica, reforzando los conocimientos en arquitectura cloud, microservicios, monitoreo, optimización y DevOps.

✅ Nota final
Este repositorio representa una implementación funcional y documentada de los conceptos aprendidos durante el curso, desarrollada completamente con herramientas gratuitas y en un entorno local controlado.