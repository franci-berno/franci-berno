import { base } from "$app/paths";

export const SHORTCUTS = [
  { name: 'About', url: base },
  { name: 'Blog', url: `${base}/blog` },
  { name: 'Contact', url: `${base}/#contact` },
  { name: 'Imprint', url: `${base}/imprint` },
  { name: 'Login', url: `${base}/` }
];
