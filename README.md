This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Énoncé

<body class="c8"><p class="c0"><span class="c3">Vous allez utiliser l&rsquo;API gratuite theMovieDb pour r&eacute;aliser une r&eacute;plique du site Netflix.</span></p><p class="c0 c2"><span class="c3"></span></p><p class="c0"><span class="c3">Je vous laisse vous familiariser avec la documentation technique afin de comprendre comment fonctionne les endpoints.</span></p><p class="c0 c2"><span class="c3"></span></p><p class="c0"><span class="c7">Documentation de l&rsquo;API : </span></p><p class="c0 c2"><span class="c3"></span></p><p class="c0"><span class="c6"><a class="c10" href="https://www.google.com/url?q=https://developers.themoviedb.org/3/getting-started/introduction&amp;sa=D&amp;source=editors&amp;ust=1647274944027609&amp;usg=AOvVaw35jRaKb-x24EL_7ioogJES">https://developers.themoviedb.org/3/getting-started/introduction</a></span></p><p class="c0 c2"><span class="c3"></span></p><p class="c0"><span class="c7">Fonctionnalit&eacute;s :</span></p><p class="c0 c2"><span class="c3"></span></p><ul class="c1 lst-kix_a48vnwv1qzt6-0 start"><li class="c4 li-bullet-0"><span class="c3">L&rsquo;application Netflix que vous allez r&eacute;aliser ne pr&eacute;sente que des films (pas de s&eacute;ries)</span></li><li class="c4 li-bullet-0"><span class="c3">pr&eacute;voir un filtre par cat&eacute;gories sur la page des films</span></li><li class="c4 li-bullet-0"><span class="c3">Pr&eacute;voir un formulaire de recherche sur le titre d&rsquo;un film</span></li><li class="c4 li-bullet-0"><span class="c3">Pr&eacute;voir une wishlist des films (avec le localstorage)</span></li><li class="c4 li-bullet-0"><span class="c3">Pas de multi profil</span></li><li class="c4 li-bullet-0"><span class="c3">Pas d&rsquo;abonnement, l&rsquo;application est gratuite</span></li><li class="c4 li-bullet-0"><span class="c3">Login &amp; register &agrave; partir d&rsquo;un JSON (voir quelles sont les m&eacute;thodes NodeJS pour &eacute;crire dans un fichier JSON)</span></li><li class="c4 li-bullet-0"><span class="c3">Pr&eacute;voir des alertes et notifications (validations et erreurs)</span></li><li class="c4 li-bullet-0"><span class="c3">L&rsquo;application doit &ecirc;tre modularis&eacute;es en composants, structur&eacute;s en services, middlewares etc..</span></li></ul><p class="c0 c2"><span class="c3"></span></p><p class="c0 c2"><span class="c3"></span></p><p class="c0"><span class="c7">Pr&eacute;requis techniques : </span></p><p class="c0 c2"><span class="c3"></span></p><ul class="c1 lst-kix_9f5xkrqxlatg-0 start"><li class="c4 li-bullet-0"><span class="c3">Front NextJs </span></li><li class="c4 li-bullet-0"><span class="c3">Authentification avec un fake JWT</span></li><li class="c4 li-bullet-0"><span class="c3">Pas de bootstrap (utilisation autoris&eacute;e de tailwind)</span></li></ul><p class="c0 c2"><span class="c3"></span></p><p class="c0"><span class="c7">Bonus : </span></p><p class="c0 c2"><span class="c3"></span></p><ul class="c1 lst-kix_bn1o3hv2dvrn-0 start"><li class="c4 li-bullet-0"><span class="c3">Utilisation de sass</span></li><li class="c4 li-bullet-0"><span class="c3">Responsive design (mobile)</span></li><li class="c4 li-bullet-0"><span class="c3">Couche API sur next avec des controllers + bdd (mongoDb etc&hellip;)</span></li><li class="c4 li-bullet-0"><span class="c3">Mise en ligne: Vercel, Netlify, Heroku</span></li></ul><p class="c0 c2"><span class="c3"></span></p><p class="c0"><span class="c7">Rendu :</span></p><p class="c0 c2"><span class="c3"></span></p><ul class="c1 lst-kix_iyih2jcia91z-0 start"><li class="c4 li-bullet-0"><span class="c3">Sur un repos github</span></li><li class="c4 li-bullet-0"><span class="c3">Dans un readme &agrave; la racine de votre projet, mettre votre nom &amp; pr&eacute;nom </span></li><li class="c4 li-bullet-0"><span class="c3">M&rsquo;inviter sur le repo : ynovzelab</span></li><li class="c4 li-bullet-0"><span class="c3">&Agrave; rendre pour le 11/04.</span></li></ul><p class="c0 c2"><span class="c9"></span></p></body>

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
