type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
}

type InvestmentResult = {
  year: string;
  totalAmount: number;
  totalContribution: number;
  totalIntererstEarned: number;
}

type CalculationResult = InvestmentResult[] | string

const investmentData: InvestmentData = {
  initialAmount: 10000,
  annualContribution: 1000,
  expectedReturn: 0.08,
  duration: 30
}

function calculateInvestment(data: InvestmentData): CalculationResult {
  const { initialAmount, annualContribution, expectedReturn, duration } = data

  if (initialAmount < 0) {
    return 'Initial investment cannot be lower than 0!'
  }

  if (duration <= 0) {
    return 'Duration cannot be lower than 1!'
  }

  if (expectedReturn <= 0) {
    return 'Expected return must be at least 0!'
  }

  let total = initialAmount
  let totalContribution = 0
  let totalIntererstEarned = 0

  const annualResults: InvestmentResult[] = []

  for (let i = 0; i < duration; i++) {
    total = total * (1 + expectedReturn)
    totalIntererstEarned = total - totalContribution - initialAmount
    totalContribution += annualContribution
    total += annualContribution

    annualResults.push({
      year: `Year ${i + 1}`,
      totalAmount: total,
      totalContribution,
      totalIntererstEarned
    })
  }

  return annualResults
}

function printResults(results: CalculationResult) {
  if (typeof results === 'string') {
    console.log(results)
    return;
  }

  for (const yearEndResults of results) {
    console.log(yearEndResults.year)
    console.log(`Total: ${yearEndResults.totalAmount.toFixed(0)}`)
    console.log(`Total Contributions: ${yearEndResults.totalContribution.toFixed(0)}`)
    console.log(`Total Interest Earned: ${yearEndResults.totalIntererstEarned.toFixed(0)}`)
    console.log('-----------------------------')
  }
}

const results = calculateInvestment(investmentData)

printResults(results)