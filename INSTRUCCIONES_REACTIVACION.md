# Instrucciones para Reactivar el Sitio Web (Poner en Línea)

Cuando el cliente haya efectuado el pago y desees reactivar el sitio web completamente, tienes **2 opciones muy sencillas**:

---

### Opción 1: Pedírmelo directamente en el chat
Solo dime:
> *"El cliente ya pagó, pon el sitio web en línea"*
Y yo retiraré la capa de bloqueo de forma inmediata y definitiva.

---

### Opción 2: Hacerlo tú mismo en el código
En el archivo [`src/App.tsx`](src/App.tsx):

Busca las líneas (alrededor de la línea 87):
```tsx
{/* Capa de suspensión / control de pago con reversión para admin */}
<SuspensionOverlay defaultPin="admin2026" />
```

**Para desactivar el bloqueo**, simplemente puedes:
1. Cambiarlo a:
   ```tsx
   <SuspensionOverlay enabled={false} />
   ```
2. O simplemente eliminar / comentar esa línea:
   ```tsx
   {/* <SuspensionOverlay defaultPin="admin2026" /> */}
   ```

---

### Opción 3: Desbloqueo temporal secreto mientras esté activa la capa
Si necesitas entrar a la web sin tocar código:
1. Presiona en tu teclado: **`Ctrl` + `Shift` + `A`** (o haz **5 clics rápidos** en el icono de alerta rojo).
2. Se abrirá la ventana secreta de Administrador.
3. Ingresa el PIN: **`admin2026`** y pulsa **Desbloquear**.
