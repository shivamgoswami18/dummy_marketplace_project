# Netlify Deployment Guide for Next.js

## Option 1: Automatic Build (Recommended) ✅

**What to push:** Push your **source code** (all files except `node_modules` and `.next`)

### Steps:
1. **Install Netlify CLI** (optional, for local testing):
   ```bash
   npm install -g netlify-cli
   ```

2. **Push your code to Git** (GitHub, GitLab, or Bitbucket):
   - Make sure `.next/` is in `.gitignore` (it already is)
   - Commit and push your code

3. **Connect to Netlify**:
   - Go to [Netlify](https://www.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Netlify will auto-detect Next.js and use the `netlify.toml` configuration

4. **Build Settings** (should auto-detect):
   - **Build command:** `npm run build`
   - **Publish directory:** `.next` (handled by Netlify plugin)
   - **Node version:** 20 (set in netlify.toml)

5. **Environment Variables** (if needed):
   - Add any `.env` variables in Netlify dashboard:
     - Site settings → Environment variables

6. **Deploy:**
   - Netlify will automatically build and deploy when you push to your main branch

---

## Option 2: Manual Deploy (Using .next folder) 📦

If you want to manually upload the built `.next` folder:

### Steps:
1. **Build your project locally:**
   ```bash
   npm run build
   ```
   This creates the `.next` folder

2. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

3. **Login to Netlify:**
   ```bash
   netlify login
   ```

4. **Deploy the .next folder:**
   ```bash
   netlify deploy --prod --dir=.next
   ```

   OR if you want to deploy the entire project:
   ```bash
   netlify deploy --prod
   ```

---

## Important Notes:

⚠️ **You should NOT commit the `.next` folder to Git** - it's already in `.gitignore`

✅ **Recommended:** Use Option 1 (Automatic Build) - Netlify will build your project automatically

✅ **The `netlify.toml` file** I created will handle the configuration automatically

---

## Troubleshooting:

- If build fails, check Node version (should be 20)
- Make sure all environment variables are set in Netlify dashboard
- Check Netlify build logs for errors

