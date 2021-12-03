/*
 * Retourner la moyenne des valeurs du tableau
 * ex: [4, 8] => 6 car (4+8)/2
 * ex: [6, 8, 10] => 8 car (6+8+10)/3
 */
function average(scores) {
    // CODE HERE
    let somme = 0;
    for (let i = 0; i < scores.length; i++) {
        somme += scores[i];
    }
    return scores = somme / scores.length;
}

export { average };