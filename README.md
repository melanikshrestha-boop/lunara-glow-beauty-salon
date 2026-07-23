# Lunara Glow Beauty Salon

Astoria salon site — waxing, brows, lashes, facials.

**Address:** 38-02 Broadway, Astoria, NY 11103  
**Phone:** (347) 242-2127

## Run

```bash
npm install
npm run dev -- --hostname 127.0.0.1 --port 5190
```

Open http://127.0.0.1:5190/

## Design rules

- No glow orbs, glassmorphism, or gradient “luxury” mush
- No glass-skin / speed-of-light marketing copy
- Service **tables** with real prices from the salon menu
- One accent color; one sans family

## Source of truth

Menu + contact live in `lib/lunara.ts` (ported from the older Lunara branch on the personal site, cleaned up).
