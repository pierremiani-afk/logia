export function config(){const url=process.env.SUPABASE_URL;const key=process.env.SUPABASE_PUBLISHABLE_KEY;if(!url||!key)throw new Error('Variables Supabase manquantes dans Vercel.');return{url,key};}
export function bearer(req){const value=req.headers.authorization||'';if(!value.startsWith('Bearer '))throw new Error('Connexion requise.');return value.slice(7);}
export function send(res,status,data){res.status(status).setHeader('Content-Type','application/json').send(JSON.stringify(data));}
