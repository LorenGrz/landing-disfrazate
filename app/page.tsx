import Image from 'next/image';
import Icon from '@/components/Icon';

const REPO = 'https://github.com/LorenGrz/Disfrazate';
const APP = 'https://disfrazate.vercel.app';
const PORTFOLIO = 'https://lorengrz.github.io/';
const EMAIL = 'lorenzograizzaro55@gmail.com';

// GitHub Pages serves the site under /landing-disfrazate, and next/image with
// `unoptimized` does not add basePath to src — same manual prefix as the sibling landings.
const base = process.env.GITHUB_ACTIONS ? '/landing-disfrazate' : '';

const RIBBON = [
  '84 tiendas revisadas',
  'ignorando Temu por razones legales',
  'encontramos 14 vampiros en Quilmes',
  'Todo por $999.999 no contestó el teléfono',
];

const PHOTOS = [
  { file: 'choripan.jpg', caption: 'Choripán en un asado de domingo', alt: 'Lorenzo disfrazado de choripán en un asado de domingo' },
  { file: 'carpincho.jpg', caption: 'Carpincho en el subte en hora pico', alt: 'Lorenzo disfrazado de carpincho en el subte en hora pico' },
  { file: 'astronauta.jpg', caption: 'Astronauta en Mar del Plata en enero', alt: 'Lorenzo disfrazado de astronauta en Mar del Plata en enero' },
  { file: 'gaucho.jpg', caption: 'Gaucho en llanto de telenovela', alt: 'Lorenzo disfrazado de gaucho en una escena de llanto de telenovela' },
  { file: 'wifi-caido.jpg', caption: 'Wifi caído en el sillón del dentista', alt: 'Lorenzo disfrazado de wifi caído en el sillón del dentista' },
];

const SHOTS = [
  {
    file: 'app-home.png',
    caption: "La home, con el buscador que 'scrapea' tiendas",
    alt: 'Captura de la home de Disfrazate con el buscador de disfraces',
  },
  {
    file: 'app-catalogo.png',
    caption: 'El catálogo: 60 disfraces en 8 categorías, más los que crean los usuarios',
    alt: 'Captura del catálogo de Disfrazate con la grilla de disfraces',
  },
];

const STEPS = [
  {
    title: 'Entrás con el código del evento',
    text: 'Un portón con cookie firmada evita que cualquiera gaste GPU.',
    color: 'text-accent',
  },
  {
    title: 'Elegís un disfraz y te sacás una foto',
    text: 'La foto se achica en el navegador y se manda con tu consentimiento.',
    color: 'text-orange',
  },
  {
    title: 'La app elige 4 escenas',
    text: 'Salen de 48 escenas y 6 estilos de foto, priorizando las menos usadas.',
    color: 'text-sky',
  },
  {
    title: 'La GPU te disfraza',
    text: 'Cuatro generaciones en paralelo con FLUX.2 klein 4B. Cada tarjeta se actualiza sola y se puede pedir otra escena.',
    color: 'text-lime',
  },
];

const DECISIONS = [
  {
    title: 'GPU a demanda',
    text: 'El modelo corre en un endpoint de SageMaker que cobra por hora, así que se prende antes del evento y se apaga al terminar, con un runbook y una prueba de humo contra producción.',
  },
  {
    title: 'El buscador también crea disfraces',
    text: 'Si no existe lo que buscás, Nova Lite traduce y modera el texto, la misma GPU genera la foto de producto y el disfraz queda en Supabase para todos.',
  },
  {
    title: 'Fotos con consentimiento',
    text: 'Las fotos solo se guardan si aceptás los términos, van a un bucket privado y se borran a los 30 días del evento.',
  },
];

const STACK = [
  'Next.js 16',
  'React 19',
  'TypeScript',
  'Tailwind CSS 4',
  'Supabase',
  'AWS SageMaker',
  'FLUX.2 klein 4B',
  'Amazon Bedrock (Nova Lite)',
  'Zod',
  'Vitest',
  'Vercel',
];

const btn =
  'display inline-flex items-center gap-2 px-6 py-4 text-xl leading-none';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="px-4 pt-6 sm:px-6">
        <h1 className="display text-[21vw]">Disfrazate</h1>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <p className="max-w-xl text-lg text-foreground">
            Una app para Halloween que busca disfraces en todas las tiendas del planeta (de
            mentira), te lleva a una búsqueda real de MercadoLibre y, con un botón, te saca una
            foto y te muestra disfrazado con IA en situaciones absurdas.
          </p>
          <div className="flex flex-wrap items-start gap-4 md:justify-start">
            <a href={REPO} className={`${btn} bg-accent text-white`}>
              <Icon name="code" /> Ver el código
            </a>
            <a href={APP} className={`${btn} border-2 border-foreground text-foreground`}>
              Abrir la app
            </a>
          </div>
        </div>
        <p className="mt-6 max-w-xl text-sm text-muted">
          La generación de imágenes usa una GPU que se prende solo para eventos. El catálogo y el
          buscador andan siempre.
        </p>
      </section>

      <div className="mt-12 overflow-hidden bg-accent py-3 text-white">
        <div className="ribbon-track">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex shrink-0"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {RIBBON.map((phrase) => (
                <li
                  key={phrase}
                  className="display whitespace-nowrap px-6 text-2xl before:mr-12 before:content-['✦']"
                >
                  {phrase}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <section className="px-4 pt-20 sm:px-6">
        <h2 className="display text-5xl sm:text-7xl">Una foto, cualquier disfraz</h2>
        <p className="mt-4 max-w-xl text-muted">
          Estas imágenes son reales: salieron de la app con una sola foto de frente.
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">
          {PHOTOS.map((p, i) => (
            <li key={p.file} className={i === 0 ? 'col-span-2 md:col-span-1' : ''}>
              <Image
                src={`${base}/${p.file}`}
                alt={p.alt}
                width={768}
                height={960}
                className="aspect-[4/5] w-full object-cover"
              />
              <p className="mt-2 text-sm text-muted">{p.caption}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-4 pt-20 sm:px-6">
        <h2 className="display text-5xl sm:text-7xl">Cómo se ve</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {SHOTS.map((s) => (
            <figure key={s.file}>
              <Image
                src={`${base}/${s.file}`}
                alt={s.alt}
                width={1440}
                height={900}
                className="h-auto w-full border border-outline"
              />
              <figcaption className="mt-2 text-sm text-muted">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="como-funciona" className="px-4 pt-20 sm:px-6">
        <h2 className="display text-5xl sm:text-7xl">Cómo funciona</h2>
        <ol className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <span className={`display block text-8xl ${s.color}`} aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="px-4 pt-20 sm:px-6">
        <h2 className="display text-5xl sm:text-7xl">Decisiones que tomé</h2>
        <div className="mt-8 max-w-3xl border-t border-outline">
          {DECISIONS.map((d) => (
            <div key={d.title} className="border-b border-outline py-6">
              <h3 className="text-xl font-bold">{d.title}</h3>
              <p className="mt-2 text-muted">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pt-20 sm:px-6">
        <h2 className="display text-5xl sm:text-7xl">Cómo está hecho</h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {STACK.map((t) => (
            <li key={t} className="border border-outline px-3 py-2 text-sm">
              {t}
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-24 border-t border-outline px-4 py-12 sm:px-6">
        <p className="display text-5xl">Disfrazate</p>
        <p className="mt-4 text-muted">Proyecto de portfolio — Lorenzo Graizzaro.</p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a href={REPO} className="underline underline-offset-4">
              Repositorio
            </a>
          </li>
          <li>
            <a href={PORTFOLIO} className="underline underline-offset-4">
              Portfolio
            </a>
          </li>
          <li>
            <a href={`mailto:${EMAIL}`} className="break-all underline underline-offset-4">
              {EMAIL}
            </a>
          </li>
        </ul>
      </footer>
    </main>
  );
}
