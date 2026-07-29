# LOGIA V0.1

Version hébergée sur Vercel, sans dépendances npm.

Fonctions :
- connexion Supabase ;
- tableau de bord ;
- liste et filtre des actifs ;
- hiérarchie actif / sous-actif ;
- ajout d'un actif via une interface normale.

## Variables à ajouter dans Vercel

- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`

Ne jamais utiliser la secret key ou `service_role`.

## Sécurité Supabase

Les politiques RLS doivent permettre aux utilisateurs `authenticated` de lire les catégories, et de lire/ajouter les actifs.
