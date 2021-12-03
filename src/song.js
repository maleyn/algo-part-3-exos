/*
 * retourner la chanson en fonction du nombre de kilomètres
 *
 * ex: song(2) =>
 *      1 km à pied, ça use, ça use, ça use,
 *      1 km à pied, ça use les souliers
 *      2 km à pied, ça use, ça use, ça use,
 *      2 km à pied, ça use les souliers
 *
 * Voir le fichier de tests associé (spec/songSpec.js)
 */
function song(km) {
    let chanson = "";
    for (let kmbis = 1 ; kmbis <= km ; kmbis++) {
    chanson += kmbis + " km à pied, ça use, ça use, ça use,\n" +
    kmbis + " km à pied, ça use les souliers\n";
}
return chanson;
}
export { song };