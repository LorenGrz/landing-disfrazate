# landing-disfrazate

Sitio estático de portfolio para [Disfrazate](https://github.com/LorenGrz/Disfrazate) —
app para Halloween que "scrapea" tiendas de mentira, linkea a búsquedas reales de
MercadoLibre y, con un botón, disfraza al usuario con IA en situaciones absurdas
(Next.js + Supabase + SageMaker).

No tiene servidor ni llamadas a API propias; solo enlaza al repositorio y a la app,
y muestra fotos generadas y capturas.

## Stack

- Next.js 16 (App Router, `output: 'export'`)
- Tailwind CSS
- TypeScript

## Desarrollo local

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build

```bash
npm run build   # genera ./out
```

Se despliega automáticamente a GitHub Pages vía GitHub Actions en cada push a `master`.

**URL en vivo:** https://lorengrz.github.io/landing-disfrazate/

## Proyecto relacionado

- Repo principal: [LorenGrz/Disfrazate](https://github.com/LorenGrz/Disfrazate)
