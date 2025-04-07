export const calculateProfite = async (buy_price: number, sell_price: number, buy_fee:number, sell_fee: number, withdrawal_fee:number, amount: number): Promise<number> => {
    const buyCost = buy_price * amount + buy_fee;
    const sellCost = sell_price * amount - sell_fee - withdrawal_fee;
    const profit = sellCost - buyCost;

    return profit;
}

export const calculateProfitePercentage = async (buy_price: number, sell_price: number, buy_fee:number, sell_fee: number, withdrawal_fee:number, amount: number): Promise<number> => {
    const buyCost = buy_price * amount + buy_fee;
    const sellCost = sell_price * amount - sell_fee - withdrawal_fee;
    const profit = sellCost - buyCost;
    const profitPercentage = (profit / buyCost) * 100;

    return profitPercentage;
}

