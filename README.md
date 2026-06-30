# Benny's Auto Detail — Web

Next.js 14 · TypeScript · Tailwind CSS · Framer Motion

---

## Arrancar en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

---

## Imagen de portada (Hero)

La imagen principal de la portada debe estar en:

```
public/images/landing-page-bennys.jpg
```

Coloca ahí el archivo con ese nombre exacto y la imagen aparecerá automáticamente en la web sin tocar ningún código.

---

## Configurar el envío de mensajes del formulario de contacto

El formulario de contacto ya está integrado con **[Resend](https://resend.com)**, un servicio profesional de envío de emails. Para que los mensajes que los clientes envíen desde la web lleguen al correo del negocio, sigue estos pasos:

### Paso 1 — Crear cuenta gratuita en Resend

1. Ve a [resend.com](https://resend.com) y crea una cuenta gratuita.
2. El plan gratuito permite hasta 3.000 emails/mes, más que suficiente para un negocio local.

### Paso 2 — Verificar el dominio (o usar el dominio de pruebas)

**Si ya tienes un dominio propio** (p. ej. `bennysautodetail.com`):
1. En el panel de Resend, ve a **Domains** → **Add Domain**.
2. Sigue las instrucciones para añadir los registros DNS que te indican (son unos registros TXT/MX que añades en el panel donde tengas el dominio: GoDaddy, Namecheap, etc.).
3. Una vez verificado, podrás enviar correos desde `web@bennysautodetail.com` o similar.

**Si todavía no tienes dominio propio:**
- Resend proporciona un dominio de pruebas (`onboarding@resend.dev`) que puedes usar mientras tanto. En ese caso, cambia `RESEND_FROM_EMAIL` en el paso siguiente por `onboarding@resend.dev`.

### Paso 3 — Generar una API Key

1. En el panel de Resend, ve a **API Keys** → **Create API Key**.
2. Dale un nombre descriptivo (p. ej. "Benny's Web") y pulsa **Add**.
3. Copia la clave que aparece (empieza por `re_`). **Solo se muestra una vez**, guárdala bien.

### Paso 4 — Crear el archivo `.env.local`

En la carpeta raíz del proyecto (donde está el `package.json`), crea un archivo llamado exactamente `.env.local` y pega esto dentro:

```env
RESEND_API_KEY=re_TuClaveAquí
RESEND_FROM_EMAIL=web@bennysautodetail.com
CONTACT_EMAIL=elgaunax093@gmail.com
```

Cambia los valores:
- `RESEND_API_KEY` → la clave que copiaste en el paso anterior.
- `RESEND_FROM_EMAIL` → la dirección desde la que se enviarán los emails (debe ser de tu dominio verificado, o `onboarding@resend.dev` si aún no tienes dominio).
- `CONTACT_EMAIL` → **el email donde quieres recibir los mensajes de los clientes**. Cámbialo si en el futuro quieres usar otra dirección.

> ⚠️ El archivo `.env.local` **nunca se sube a GitHub** (ya está en `.gitignore`). Es solo para tu máquina o para el panel de variables de entorno del hosting.

### Paso 5 — Reiniciar el servidor

- En local: para el servidor (`Ctrl+C`) y vuelve a ejecutar `npm run dev`.
- En producción (Vercel, etc.): añade las mismas variables de entorno en el panel del hosting (Settings → Environment Variables) y haz un nuevo deploy.

A partir de ese momento, cada vez que alguien rellene el formulario de contacto de la web, **recibirás un email en `CONTACT_EMAIL`** con el nombre, teléfono, email, servicio de interés y mensaje del cliente. No hay que tocar nada más del código.

---

## Despliegue en producción

La forma más sencilla es usar **[Vercel](https://vercel.com)**:

1. Sube el proyecto a un repositorio de GitHub.
2. Entra en [vercel.com](https://vercel.com), conecta tu cuenta de GitHub e importa el repositorio.
3. En **Settings → Environment Variables**, añade las tres variables del paso 4 anterior.
4. Pulsa **Deploy**. Vercel construye y publica la web automáticamente.

Cada vez que hagas cambios y los subas a GitHub, Vercel redespliega la web en segundos.
