import { maybe } from 'tsmonad'

const catWithdrawMoney = (balance: number): boolean => {
  if (balance > 0) {
    return true
  } else {
    return false
  }
}

catWithdrawMoney(null)

const catWithdrawMoneyPatternMatching = (balance: number): boolean => {
  return maybe(balance).caseOf({
    just: (balance) => balance > 0,
    nothing: () => false,
  })
}

catWithdrawMoneyPatternMatching(null)
