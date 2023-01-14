const CURRENCY_FORMATER = new Intl.NumberFormat('en-US', {
    currency: "USD", style: "currency"
})

export function formatCurrency(number: number) {
    return CURRENCY_FORMATER.format(number)
}
