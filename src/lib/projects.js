// ---------------------------------------------------------------------------
// PROJECTS — the plug-and-play portfolio feed.
//
// To add a project, append one object to the array below. That's it: the
// homepage carousel (src/pages/index.astro) renders a card from this data
// automatically, in array order. No HTML copy-paste needed.
//
// Fields:
//   title   – headline shown on the card
//   tag     – small corner badge (e.g. "RUNNING LIVE", "TBD")
//   href    – internal route ("/todo") or external URL ("https://...").
//             Leave falsy ("" / undefined) for a non-clickable "coming soon" card.
//   image   – cover image URL (any https URL or /public path)
//   meta    – one-line description line under the title
//   accent  – (optional) color for the "Launch →" arrow; defaults to site red
// ---------------------------------------------------------------------------

export const projects = [
  {
    title: 'To Do List',
    tag: 'RUNNING LIVE',
    href: '/todo',
    image:
      'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&q=80',
    meta: 'Orchestration + Multi-Agents',
  },

  // ---- ADD NEW PROJECTS BELOW THIS LINE ----------------------------------
  {
    title: 'TBD',
    tag: 'TBD',
    href: '',
    image:
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80',
    meta: 'Coming soon',
  },
  {
    title: 'TBD',
    tag: 'TBD',
    href: '',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    meta: 'Coming soon',
  },
  {
    title: 'TBD',
    tag: 'TBD',
    href: '',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    meta: 'Coming soon',
  },
  {
    title: 'TBD',
    tag: 'TBD',
    href: '',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    meta: 'Coming soon',
  },
];