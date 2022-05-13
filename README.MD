<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jabibamman/Bot-Vinted-Discord-JS/blob/master/logo.png">
    <img src="logo.png" alt="Logo" width="180" height="180">
  </a>

<h1 align="center">💲 Vinted Bot JS 💲</h1>

  <p align="center">
    Ce projet à été réalisé dans le cadre d'un loisir et la volonté de rendre gratuit ce que certains vendent des dizaines d'euros. C'est un BOT discord permettant de retourner les bons plans de ce site sous la forme de message discord.
    <br />
    <a href="https://github.com/jabibamman/Bot-Vinted-Discord-JS"><strong>Explorer la documentation »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jabibamman/Bot-Vinted-Discord-JS">Démonstration</a>
    ·
    <a href="https://github.com/jabibamman/Bot-Vinted-Discord-JS/issues">Signaler un Bug</a>
    ·
    <a href="https://github.com/jabibamman/Bot-Vinted-Discord-JS/issues">Demander des fonctionalitées </a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table des matières</summary>
  <ol>
    <li>
      <a href="#À-Propos-du-projet">À Propos du projet</a>
      <ul>
        <li><a href="#Réalisé-avec">Réalisé avec</a></li>
      </ul>
    </li>
    <li>
      <a href="#Installation">Installation</a>
      <ul>
        <li><a href="#Prérequis">Prérequis</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#Exemple-d\'utilisation">Utilsations</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#Contributeurs">Contributeurs</a></li>
    <li><a href="#Licence">Licence</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## À Propos du projet

[![Product Name Screen Shot][product-screenshot1]](https://abib-james.fr)
<p>Ce BOT permet le recensement d'articles Vinted selon un filtre appliqué par l'utilisateur.</p>

<p>Les données sont récupérées via l'api non-officielle de Androz2091 sur Github, elles sont ensuite mises en forme et envoyées sous la forme de message</p> 

<p>Le BOT s'occupe de traiter les informations afin de les rendre lisibles pour les utilisateurs</p>

<p align="right">(<a href="#top">retourner en haut</a>)</p>



### Réalisé avec

* [NodeJS](https://nodejs.dev/)
* [API Vinted (non officielle)](https://github.com/Androz2091/vinted-api)
* [DiscordJS](https://discord.js.org/#/)


<p align="right">(<a href="#top">retourner en haut</a>)</p>



<!-- GETTING STARTED -->
## Début de l'installation

Pour obtenir une copie opérationnelle, suivez ces étapes d'exemple simples.

### Prérequis

Installer la dernière version de DiscordJS si ce n'est pas déjà fait :
* DiscordJS
  ```sh
  npm install discord.js
  ```

### Installation

1. Cloner le repo Git
   ```sh
   git clone https://github.com/jabibamman/Bot-Vinted-Discord-JS.git
   ```
2. Configurez la commande automatique à votre convenance dans le index.js
   ```sh
        // Exécute la commande vinted (pull) 
        commande.execute(client, "votre_marque_1","votre_marque_2", "votre_marque_3", "votre_marque_4", "votre_marque_5","votre_marque_6","prix_min", "prix_max", "pull");
    ```
   ***Si vous souhaitez ne pas mettre autant de marque, laissez la case vide " ".**<br>
   ***Pour les sneakers ça ce fait de la même manière.**<br>
   **ATTENTION** : Ne pas changer le dernier paramètre, il est vraiment important (c'est soit snkrs ou pull pour l'instant).

<p align="right">(<a href="#top">retourner en haut</a>)</p>



<!-- USAGE EXAMPLES -->
## Exemple d'utilisation
Utilisation de la commande :
``!vinted votre_marque votre_taille type_produit prix_min prix_max``

**Information** :
Pour faire des recherches sur des marques comportant des espaces ex 'The North Face', il faut juste mettre des '-' entre chaque espaces tel que
```!vinted the-north-face m doudoune 0 150```





Pour plus d'exemples, veuillez vous référer à la [Documentation](https://github.com/jabibamman/Bot-Vinted-Discord-JS/wiki).

<p align="right">(<a href="#top">retourner en haut</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [✅] Traitement des données en json
    - [✅] Récuperation des Nouveaux produits toutes les dix minutes
    - [❌] L'état du produit n'est pas encore récupéré
- [✅] La commande peut être configurée à votre convenance
- [✅] Mise en place de la partie graphique (message embedded)

Voir les [problèmes ouverts](https://github.com/github_username/repo_name/issues) pour une liste complète des fonctionnalités proposées (et des problèmes connus).

<p align="right">(<a href="#top">retourner en haut</a>)</p>



<!-- CONTRIBUTING -->
## Contributeurs

Les contributions sont ce qui fait de la communauté open source un endroit incroyable pour apprendre, inspirer et créer. Toutes les contributions que vous faites sont **grandement appréciées**.

Si vous avez une suggestion qui améliorerait cela, veuillez aller sur la repo et créer une "pull request". Vous pouvez aussi simplement ouvrir un ticket avec le tag "amélioration".
N'oubliez pas de mettre une étoile au projet !

Merci encore!

1. Forkez le projet
2. Créer votre Branche d'amélioration (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Faites un Push à la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez un Pull Request

<p align="right">(<a href="#top">retourner en haut</a>)</p>



<!-- LICENSE -->
## Licence

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">retourner en haut</a>)</p>



<!-- CONTACT -->
## Contact

James - [Linkedin](https://fr.linkedin.com/in/jamesabib) - james.abibamman@gmail.com
- [Portfolio](https://abib-james.fr)

Project Link: [https://github.com/jabibamman/Bot-Vinted-Discord-JS](https://github.com/jabibamman/Bot-Vinted-Discord-JS)

<p align="right">(<a href="#top">retourner en haut</a>)</p>





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/jabibamman/Bot-Vinted-Discord-JS.svg?style=for-the-badge

[contributors-url]: https://github.com/jabibamman/Bot-Vinted-Discord-JS/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/jabibamman/Bot-Vinted-Discord-JS.svg?style=for-the-badge

[forks-url]: https://github.com/jabibamman/Bot-Vinted-Discord-JS/network/members

[stars-shield]: https://img.shields.io/github/stars/jabibamman/Bot-Vinted-Discord-JS.svg?style=for-the-badge

[stars-url]: https://github.com/jabibamman/Bot-Vinted-Discord-JS/stargazers

[issues-shield]: https://img.shields.io/github/issues/jabibamman/Bot-Vinted-Discord-JS.svg?style=for-the-badge

[issues-url]: https://github.com/jabibamman/Bot-Vinted-Discord-JS/issues

[license-shield]: https://img.shields.io/github/license/jabibamman/Bot-Vinted-Discord-JS.svg?style=for-the-badge

[license-url]: https://github.com/jabibamman/Bot-Vinted-Discord-JS/blob/main/LICENSE

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://linkedin.com/in/jamesabib

[product-screenshot1]: screenshot-1.png



