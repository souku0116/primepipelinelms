# Vercel Deployment TODO

## Completed:
- [x] Created & fixed vercel.json (removed conflicting functions property)
- [x] Installed Vercel CLI
- [x] Fixed build error (removed Next.js incompatible SpeedInsights)

## Remaining (Run these commands):
1. Set up Supabase project at https://supabase.com/dashboard (new project), copy SQL from SUPABASE_SETUP.sql to SQL Editor > Run.
2. Get your Supabase URL and anon key, add to local.env:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```
3. `vercel login`
4. `vercel` (deploys; follow prompts to confirm scope/project, optionally link GitHub repo for auto-deploys)
5. Visit deployed URL, go to Vercel Dashboard > your project > Settings > Environment Variables:
   - Add VITE_SUPABASE_URL (Production/Preview/Development)
   - Add VITE_SUPABASE_ANON_KEY (Production/Preview/Development)
6. `vercel --prod` to redeploy with env vars.
7. Test site, auth, portal features.

Your app is now Vercel-ready! API routes handled automatically.
