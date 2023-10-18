1) Dans le HTMl
// Insérer la classe divAnim dans les conteneurs qui doivent effectuer la transition sur son contenu
// Insérer la classe avecContainer pour que le contenu apparaisse une fois tout le contenant visible à l'écran
// Si avecContainer n'est pas présent, le contenu apparaît dès que le contenant commence à apparaître à l'écran
// .elemTrans est la classe à mettre dans les éléments présents dans divAnim afin qu'elle apparaissent en fondu

2) Dans le CSS main
// Insérer le code ci-dessous
.elemTrans{
    opacity: 0;
    transform: opacity 300ms;
}

3) Dans le dossier CSS
//Ajouter anim.less (à compiler en CSS si besoin)

4) Dans le dossier js
//Ajouter main.js (à renomer si besoin)

PS : Ne pas oublier les  <link> et les <script> dans le HTML !

