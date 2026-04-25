Project
JarvisCo — lead-generation website for a Lithuanian web dev micro-agency targeting home-service businesses.

The 10 things you must not get wrong

Lithuanian only. Every word the user sees — copy, buttons, labels, errors, alt text, meta tags — must be in Lithuanian. <html lang="lt">. "SEO", "hosting", "landing" are fine as-is.
Contact info is exact. Email: jarvisworks.co@gmail.com · Phone: +370 676 99395 (href: tel:+37067699395). Never placeholder, never change.
Pricing is fixed copy. Starter 350€ + 15€/mėn · Standard 600€ + 20€/mėn · Premium 1200€ + 30€/mėn. Do not rewrite or paraphrase the feature lists.
Match the design file. Colors, fonts, spacing, radii, hover states — follow the uploaded design. Ask before substituting anything.
Mobile-first. Test every section at 375px before moving on.
Stack: Next.js 15 (App Router) · TypeScript strict · Tailwind v4 · shadcn/ui · lucide-react · next/font/google. No other libraries without asking.
Server components by default. "use client" only when you need state, effects, or browser APIs.
No dead links. No href="#". Either link to a real anchor or don't render it.
npm run build must pass clean before anything is considered done. Fix all errors and warnings.
One section per commit. Conventional commit messages: feat: add pricing section, fix: mobile nav overlap.