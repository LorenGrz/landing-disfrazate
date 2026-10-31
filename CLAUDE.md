# Contexto del proyecto

Landing estática de portfolio para **Disfrazate** (repo aparte,
`LorenGrz/Disfrazate`): app para Halloween que "scrapea" tiendas de mentira,
linkea a MercadoLibre y disfraza al usuario con IA. Este repo **no tiene lógica
propia** — solo enlaza al repositorio y a la app, y muestra fotos y capturas.
Next.js 16 con `output: 'export'`, deploy automático a GitHub Pages en cada push
a `master` (https://lorengrz.github.io/landing-disfrazate/).

Repo hermano del mismo patrón (landing estática + app aparte): también hay
`landing-booklibre`, `landing-frauddetector`, `landing-humandetector`,
`landing-openruleta`, `landing-prioria`, `landing-serverlessscanner`,
`landing-studyquest`.

## Notas

- La paleta y la fuente Archivo (con eje de ancho) siguen los tokens de
  `app/globals.css` de Disfrazate, no los del resto de las landings. Todo va
  alineado a la izquierda y sin tarjetas redondeadas, como la app.
- Las fotos de `public/` (`choripan`, `carpincho`, `astronauta`, `gaucho`,
  `wifi-caido`) son de Lorenzo, generadas con la app el 2026-10-30. Las capturas
  `app-home.png` y `app-catalogo.png` son de la app.
- Única animación: la cinta roja; se detiene con `prefers-reduced-motion`.

## Última revisión

2026-10-31 — versión inicial.
