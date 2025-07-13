// MajorCredits interface with branding for nominal typing
interface MajorCredits {
  credits: number;
  brand: "MajorCredits";
}

// MinorCredits interface with branding for nominal typing
interface MinorCredits {
  credits: number;
  brand: "MinorCredits";
}

// sumMajorCredits function: returns a MajorCredits object
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits",
  };
}

// sumMinorCredits function: returns a MinorCredits object
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits",
  };
}

// ✅ Example test calls (optional)
// const major1: MajorCredits = { credits: 3, brand: 'MajorCredits' };
// const major2: MajorCredits = { credits: 4, brand: 'MajorCredits' };
// console.log(sumMajorCredits(major1, major2));

// const minor1: MinorCredits = { credits: 2, brand: 'MinorCredits' };
// const minor2: MinorCredits = { credits: 5, brand: 'MinorCredits' };
// console.log(sumMinorCredits(minor1, minor2));
