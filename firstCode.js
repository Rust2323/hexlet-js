const calculateLiability = (arturPaid, rustPaid, rustPercent = 0.4) => {
  const totalPaid = arturPaid + rustPaid;
  const rustLiability = rustPercent * totalPaid;
  const balance = rustPaid - rustLiability;
  if (balance > 0) {
    console.log('dolg Artura=' + balance);
  } else {
    console.log('dolg Rustema=' + balance);
  }
};
calculateLiability(8107, 24345);
