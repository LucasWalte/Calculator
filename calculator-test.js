
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 200000,
    years: 30,
    rate: 9
  };
  expect(calculateMonthlyPayment(values)).toEqual('1609.25')
})


it("should return a result with 2 decimal places", function() {
  const values ={
    amount: 29000,
    years: 5,
    rate: 9
  };
  expect(calculateMonthlyPayment(values)).toEqual('601.99')
});

it("should not calculate the rate with invalid inputs", function() {
  const invalidValues = [
    { amount: "abc", years: 10, rate: 4.5 },
    { amount: 10000, years: ",.1.,", rate: 4.5 },
    { amount: 10000, years: 10, rate: "" }
  ];
  invalidValues.forEach(values => {
    const result = calculateMonthlyPayment(values);
    expect(result).toBe("NaN");
  });
});

it("should handle ludicrous numbers", function() {
  const values ={
    amount: 900000000,
    years: .1,
    rate: 999999999
  };
  expect(calculateMonthlyPayment(values)).toEqual('750000899250000.00')
});




