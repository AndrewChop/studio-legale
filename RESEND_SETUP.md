# Setup Resend per il Form di Prenotazione Consulenza

Hai installato Resend per l'invio automatico delle email dal form di prenotazione. Ecco come configurarlo:

## 1. Registrati su Resend

1. Vai su [https://resend.com](https://resend.com)
2. Registrati con il tuo account
3. Crea un nuovo progetto

## 2. Ottieni la tua API Key

1. Dopo la registrazione, vai a **Settings → API Keys**
2. Copia la tua **API Key** (inizia con `re_`)
3. Incollala nel file `.env`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxx
```

## 3. Verifica il dominio (Opzionale ma consigliato per Production)

Per evitare il dominio di test `onboarding@resend.dev`, verifica un dominio personalizzato:

1. In Resend → **Domains**
2. Aggiungi il tuo dominio (es: `studio-legale-amaranto.com`)
3. Segui le istruzioni per verificare il DNS
4. Una volta verificato, aggiorna l'API route:

In `/app/api/booking/route.ts`, cambia:

```typescript
from: "onboarding@resend.dev",  // ← Cambia questo
```

Con:

```typescript
from: "noreply@studio-legale-amaranto.com",  // ← Con il tuo dominio
```

## 4. Test locale

```bash
npm run dev
```

Vai su `http://localhost:3000/prenota-consulenza` e prova a inviare il form.

## 5. Deploy su Vercel

1. Aggiungi la `RESEND_API_KEY` alle variabili di ambiente in Vercel:

   - Vai a **Project Settings → Environment Variables**
   - Aggiungi `RESEND_API_KEY` con il valore della tua key

2. Deploya il progetto

## Note importanti

- **Dominio di test**: Finché non verifichi un dominio, le email verranno inviate da `onboarding@resend.dev`
- **Rate limiting**: Resend ha limiti di invio. Controlla i dettagli nel tuo account
- **Email di conferma**: L'utente riceve una conferma di ricezione. Se non vuoi, commenta la sezione in `route.ts`
- **Email dello studio**: Le email dello studio vanno a `studiolegaleamaranto@gmail.com` (configurato nel codice)

Domande? Controlla la documentazione: https://resend.com/docs
