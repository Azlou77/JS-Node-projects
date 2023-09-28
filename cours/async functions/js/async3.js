function genererNbPremiers(quota) {
    function estPremier(n) {
      // Loop for 
      // Return sqtr: ou racine carrée of numbers
      for (let c = 2; c <= Math.sqrt(n); ++c) {
        if (n % c === 0) {
          return false;
        }
      }
      return true;
    }
  
    const nbPremiers = [];
    const maximum = 1000000;

    // Loop while
    // lenght is for the number of elements in the array
    while (nbPremiers.length < quota) {
      /*floor : return the largest integer less than or equal to a given number.
        random : return a random number between 0 (inclusive), and 1 (exclusive)*/
      const candidat = Math.floor(Math.random() * (maximum + 1));
      if (estPremier(candidat)) {
        nbPremiers.push(candidat);
      }
    }
  
    return nbPremiers;
  } 

  // Event listener onclick to generate the numbers
  document.querySelector("#generer").addEventListener("click", () => {
    const quota = document.querySelector("#quota").value;
    const nbPremiers = genererNbPremiers(quota);
    document.querySelector(
      "#output",
    
    // Add text to the output
    ).textContent = `Génération de ${quota} nombres premiers terminée !`;
  });
  
  // Event listener onclick to reload the page
  document.querySelector("#recharger").addEventListener("click", () => {
    document.location.reload();
  });
  