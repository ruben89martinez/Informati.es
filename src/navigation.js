import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Páginas web',
      links: [
        {
          text: 'Crea tu web',
          href: getPermalink('#pagina-web'),
        },
        {
          text: 'Renueva tu web',
          href: getPermalink('#pagina-web'),
        },
        {
          text: 'Mantenimiento y gestión',
          href: getPermalink('#pagina-web'),
        },
        {
          text: 'Posicionamiento SEO',
          href: getPermalink('#pagina-web'),
        },
      ],
    },
    {
      text: 'Reparaciones',
      links: [
        {
          text: 'Móbiles y tablets',
          href: getPermalink('#reparaciones'),
        },
        {
          text: 'Portatiles y sobremesa',
          href: getPermalink('#reparaciones'),
        },
        {
          text: 'Patinetes',
          href: getPermalink('#reparaciones'),
        },
        {
          text: 'Consolas',
          href: getPermalink('#reparaciones'),
        },
        {
          text: 'Robots aspiradores',
          href: getPermalink('#reparaciones'),
        },
        {
          text: 'Impresoras',
          href: getPermalink('#reparaciones'),
        },
      ],
    },
    {
      text: 'Datos',
      links: [
        {
          text: 'Sistema Operativo',
          href: getPermalink('#datos'),
        },
        {
          text: 'Rendimiento equipo',
          href: getPermalink('#datos'),
        },
        {
          text: 'Recuperación de datos',
          href: getPermalink('#datos'),
        },
        {
          text: 'Copias de seguridad',
          href: getPermalink('#datos'),
        },
        {
          text: 'Gestión empresarial',
          href: getPermalink('#datos'),
        }
      ],
    },
    /*
        {
      text: 'Diseño web',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },*/
    {
      text: 'Contacto',
      href: '#contacto',
    },
  ],
  actions: [{ text: 'Pide presupuesto', href: 'https://www.informaticka.es/presupuesto'}],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
  <a href="https://www.informaticka.es/">
  <span
  class="self-center ml-2 mr-1 rtl:ml-0 rtl:mr-2 text-2xl md:text-4xl font-bold text-gray-900 whitespace-nowrap dark:text-white">
   Informati
</span>
<img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" 
src="/_astro/volver_azul.DOUJG5a0.png" 
alt="logo" loading="lazy" style="width:2rem; display:inline-block;"/>
</a>
  `,
};
