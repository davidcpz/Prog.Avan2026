# TP_4 - Microservicio de Pagos con Stripe

Trabajo práctico de Programación Avanzada.

Microservicio HTTP desarrollado con NestJS para crear sesiones de pago mediante Stripe Checkout y recibir notificaciones de Stripe mediante Webhooks.

## Instalación y ejecución

Instalar las dependencias:

```bash
npm install
```

Ejecutar el proyecto en modo desarrollo:

```bash
npm run start:dev
```

El microservicio se ejecuta por defecto en:

```text
http://localhost:3003
```

## Variables de entorno

Crear un archivo `.env` tomando como referencia `.env.template`.

Variables utilizadas:

```env
PORT=3003
STRIPE_SECRET=
STRIPE_ENDPOINT_SECRET=
STRIPE_SUCCESS_URL=http://localhost:3003/payments/success
STRIPE_CANCEL_URL=http://localhost:3003/payments/cancel
```

El archivo `.env` contiene las claves privadas y no debe subirse al repositorio.


## Rutas

### Crear una sesión de pago

```http
POST /payments/create-payment-session
```

Crea una sesión de Stripe Checkout y devuelve el `id` y la `url` de la sesión.

### Pago exitoso

```http
GET /payments/success
```

Devuelve un mensaje indicando que el pago fue exitoso.

### Pago cancelado

```http
GET /payments/cancel
```

Devuelve un mensaje indicando que el pago fue cancelado.

### Webhook de Stripe

```http
POST /payments/webhook
```

Recibe y valida las notificaciones enviadas por Stripe.  
Cuando recibe el evento `charge.succeeded`, obtiene el `orderId` desde los metadatos del pago.

