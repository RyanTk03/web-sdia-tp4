# TP4

## Introduction

Dans ce projet, nous avons implémenter plusieurs exercices
d'algorithmique réalisés en JavaScript.\
Les programmes utilisent des fonctions simples, l'instruction `prompt()`
pour la saisie utilisateur et `console.log()` pour l'affichage des
résultats dans la console.

------------------------------------------------------------------------

## Exercice 1 : Conversion de températures

L'objectif est d'écrire une fonction `degreC` permettant de convertir
une température exprimée en degrés Fahrenheit vers les degrés Celsius.

Formule utilisée :

tempC = (5 / 9) × (tempF − 32)

Fonction JavaScript :

``` javascript
function degreC() {
  const fahrenheit = prompt("Une température en Fahrenheit :");
  const celsius = (5/9) * (fahrenheit - 32);

  console.log("cette température équivaut a", celsius, "degrés Celsius");
}
```

------------------------------------------------------------------------

## Exercice 2 : Conversion de durées

La fonction `hjms` convertit une durée exprimée en secondes en jours,
heures, minutes et secondes.

Principe : - 1 jour = 86400 secondes - 1 heure = 3600 secondes - 1
minute = 60 secondes

Le programme utilise des divisions entières et des restes pour effectuer
la conversion.

------------------------------------------------------------------------

## Exercice 2-bis : Amélioration de l'affichage

Une version améliorée du programme évite d'afficher les valeurs nulles
et gère le singulier et le pluriel des unités.

Exemple : - `1 heure` - `2 heures`

------------------------------------------------------------------------

## Exercice 3 : Classement de trois nombres

Le programme `troisNombres` demande trois valeurs à l'utilisateur et les
affiche dans l'ordre croissant.

La méthode utilisée consiste à effectuer plusieurs comparaisons et
échanges de variables pour trier les nombres.

------------------------------------------------------------------------

## Exercice 4 : Affichage de motifs (triangle)

Deux fonctions permettent d'afficher un motif triangulaire composé
d'étoiles.

### Version avec `while`

La fonction `triangle1` utilise uniquement des boucles `while`.

### Version avec `for`

La fonction `triangle2` utilise uniquement des boucles `for`.

Exemple pour une taille de 6 :

    *
    **
    ***
    ****
    *****
    ******

------------------------------------------------------------------------

## Exercice 4-bis : Affichage d'une pyramide

La fonction `pyramide` affiche un motif pyramidal centré.

Principe : - ajouter des espaces avant les étoiles - afficher un nombre
d'étoiles égal à `(2 × i − 1)`

Exemple :

       *
      ***
     *****
    *******

------------------------------------------------------------------------

## Exercice 5 : Test de nombre premier

Un nombre premier possède exactement deux diviseurs : 1 et lui‑même.

Le programme `premier` : 1. demande un entier positif 2. cherche un
diviseur entre 2 et n−1 3. indique si le nombre est premier ou non

------------------------------------------------------------------------

## Exercice 6 : Suite de Fibonacci

### Fibo1

Calcule le nième terme de la suite de Fibonacci définie par :

-   u0 = 0
-   u1 = 1
-   u(n+2) = u(n+1) + u(n)

### Fibo2

Détermine le premier terme de la suite supérieur à une valeur donnée par
l'utilisateur et affiche également son rang.

------------------------------------------------------------------------

## Exercice 7 : Approximation de la racine carrée

La fonction `raca1` calcule une approximation de la racine carrée d'un
nombre réel positif en utilisant une méthode itérative.

Principe : u(n+1) = 1/2 × (u(n) + A / u(n))

Le calcul s'arrête lorsque :

\|u² − A\| \< 0.0001

La valeur obtenue constitue une approximation de √A.

------------------------------------------------------------------------

## Conclusion

Ces exercices permettent d'appliquer les notions fondamentales de
programmation en JavaScript : - utilisation des fonctions - saisie
utilisateur - boucles `for` et `while` - conditions - manipulation de
variables et d'algorithmes simples.

Ils constituent une base solide pour comprendre la logique algorithmique
avant d'aborder des structures de données ou des programmes plus
complexes.
