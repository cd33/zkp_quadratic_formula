# zkp_quadratic_formula
projet découverte (ZKP)[https://betterprogramming.pub/how-to-create-a-zk-smart-contract-cd948a673749]
Problème de bug sur windows
```
hardhat-circom:error invalid input file
hardhat-circom:error previous errors were found +0ms
Error in plugin hardhat-circom: Unable to compile circuit named: quadratic
```

## Infos
Le circuit est le composant hors chaîne qui vérifie en privé une solution et crée une preuve.
* Signals: Les signaux sont des valeurs d'entrée et de sortie, mais ils peuvent également être intermédiaires dans le circuit.Considérez-les comme des tremplins à l'intérieur du circuit.
* Constraints: Les contraintes imposent une condition à chaque étape du système. === est un exemple de contrainte, et <== est un exemple de contrainte ET d'affectation.

## Installation et Configuration
```
yarn add hardhat-circom snarkjs
```

Dans hardhat.config.ts
```
import "hardhat-circom";
circom: {
    inputBasePath: "./circuits",
    ptau: "https://hermez.s3-eu-west-1.amazonaws.com/powersOfTau28_hez_final_15.ptau",
    circuits: [
      {
        name: "quadratic",
      },
    ],
},
```
Le ptau (Powers of Tau) est un fichier contenant des paramètres de confiance nécessaires à la génération de preuves ZKP. Il est utilisé pour garantir la confidentialité des informations tout en permettant la vérification de déclarations sans révéler les détails spécifiques de ces déclarations.

## Tests
* Les contraintes sont valides lorsqu'elles sont données en entrée.
* Les valeurs des témoins sont correctes.
* La sortie est correcte lorsque la valeur correcte est donnée.
* Le circuit échoue lorsqu'on lui donne une valeur incorrecte.

## Génération Smart Contract Verifier
Circom génère pour nous un smart contract vérificateur, en utilisant le circuit écrit.
Nous devons lui donner des données valides, quadratic.json :
{
    "x": [2, -3]
}

```
yarn hardhat circom --deterministic --debug --verbose
```

