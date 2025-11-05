README

# HijosDeAndresFront (PixelScribe)

Este es el proyecto frontend para **PixelScribe**, una aplicación web de galería de imágenes. Permite a los usuarios crear una cuenta, iniciar sesión, subir sus propias imágenes y verlas en una galería personal.

Este proyecto está construido con React + TypeScript y está diseñado para conectarse con el backend [HijosDeAndresBack](https://github.com/daniel-pm19/HijosDeAndresBack.git).

## 🚀 Tecnologías Utilizadas

* **React** (v18+)
* **TypeScript**
* **Vite** (Como entorno de desarrollo)
* **React Router DOM** (Para la navegación entre páginas)
* **Axios** (Para hacer peticiones HTTP al backend)
* **react-icons** (Para los íconos)
* **CSS Puro** (Todo el estilo se maneja con archivos `.css` por componente)

---

## 🛠️ Instalación y Puesta en Marcha

Sigue estos pasos para levantar el proyecto en tu máquina local.

### 1. Prerrequisitos

* [Node.js](https://nodejs.org/) (v16 o superior)
* Un editor de código (Se recomienda [VS Code](https://code.visualstudio.com/))

### 2. Instalación

1.  **Clona el repositorio** (o descarga el ZIP) en tu máquina.
2.  Abre una terminal en la carpeta raíz del proyecto.
3.  **Instala las dependencias** de Node.js:
    ```bash
    npm install
    ```
    (Esto instalará React, React Router, Axios, y todo lo demás que necesites).

### 3. Ejecutar el Proyecto

1.  **Inicia el backend**: Asegúrate de que tu servidor de Spring Boot (HijosDeAndresBack) esté corriendo, típicamente en `http://localhost:8080`.

2.  **Inicia el frontend**: En la terminal de tu proyecto frontend, ejecuta:
    ```bash
    npm run dev
    ```

3.  ¡Listo! Vite te dará una URL local. Ábrela en tu navegador, usualmente es **http://localhost:5173/**.

---

## 🏗️ Estructura del Proyecto

El proyecto está organizado por funcionalidades dentro de la carpeta `src/pages`.

* `src/main.tsx`
    * Punto de entrada de la aplicación.
    * Configura el `createBrowserRouter` de React Router para definir las rutas públicas.

* `src/pages/Login/`
    * Contiene la pantalla de **Inicio de Sesión** (`Login.tsx`).
    * Maneja el estado del formulario y envía las credenciales al backend (`/auth/login`) usando `axios`.
    * Si tiene éxito, guarda el token JWT en `localStorage` y redirige a `/home`.

* `src/pages/Register/`
    * Contiene la pantalla de **Registro** (`Register.tsx`).
    * Maneja el formulario para crear un nuevo usuario.
    * *Nota: Aún falta implementar la lógica de `axios.post()` a tu endpoint de registro.*

* `src/pages/Home/`
    * Contiene la pantalla **Principal** (`Home.tsx`) donde el usuario ve su galería.
    * Utiliza `useEffect` para cargar las imágenes del usuario al montar el componente (requiere token).
    * Permite subir nuevos archivos (`handleUpload`).
    * Permite borrar imágenes (`handleDelete`).
    * Tiene un botón de "Logout" que limpia `localStorage` y redirige a `/`.

---

## 🔌 Conexión con el Backend

Este frontend está diseñado para fallar si no puede conectarse al backend.

### Endpoints Esperados

El frontend hace peticiones a las siguientes rutas (hardcodeadas):

* **Login:** `POST http://localhost:8080/auth/login`
* **Ver Imágenes:** `GET http://localhost:8080/api/images/my-images`
* **Subir Imagen:** `POST http://localhost:8080/api/images/upload`
* **Borrar Imagen:** `DELETE http://localhost:8080/api/images/{imageId}`

### ⚠️ ¡IMPORTANTE! Configuración de CORS

Para que el frontend (`localhost:5173`) pueda comunicarse con el backend (`localhost:8080`), **debes** habilitar CORS en tu proyecto de Spring Boot.

Si ves errores de CORS en la consola del navegador, asegúrate de tener una clase de configuración en tu backend similar a esta:

**`WebConfig.java` (Ejemplo para el Backend)**
```java
package edu.hackaton.config; // (o tu paquete de config)

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Permite a todas las rutas
            .allowedOrigins("http://localhost:5173") // El origen de tu frontend
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Métodos permitidos
            .allowedHeaders("*") // Todos los headers
            .allowCredentials(true);
    }
}
