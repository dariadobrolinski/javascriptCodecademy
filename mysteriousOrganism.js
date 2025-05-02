// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  function pAequorFactory(specimenNum, dna) {
    return {
      specimenNum: specimenNum,
      dna: dna,
      mutate() {
        const randomIndex = Math.floor(Math.random() * this.dna.length);
        let newBase = returnRandBase();
        while (this.dna[randomIndex] === newBase) {
          newBase = returnRandBase();
          this.dna[randomIndex] = newBase;
          return this.dna;
        }
      },
      compareDNA(other) {
        let matches = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === other.dna[i]) {
            matches++;
          }
        }
        const percent = ((matches / this.dna.length) * 100).toFixed(2);
        console.log(`specimen #${this.specimenNum} and specimen #${other.specimenNum} have ${percent}% DNA in common`);
      },
      willLikelySurvive() {
        let cG = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          cG++;
          }
        }
        const percent = (cG / this.dna.length) * 100;
        return percent >= 60;
      },
    };
  };
  
  
  
  
  
  
  
  
  