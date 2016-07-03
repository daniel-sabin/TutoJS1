function calcul (chiffreA, chiffreB) {
  var objetCalcul = {
    resultat_division: null,
    resultat_multiplication: null
  }
    objetCalcul.resultat_division = division(chiffreA, chiffreB)
    objetCalcul.resultat_multiplication = multiplication (chiffreA, chiffreB)

  return objetCalcul
}


function division(a, b) {
  return a/b
}

function multiplication(a, b) {
  return a*b
}
