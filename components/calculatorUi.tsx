import React from 'react'

const CalculatorUI = () => {
  return (
    <section>
        <div>
            <h1 className="text-4xl font-bold text-center">Crypto Arbitrage Calculator</h1>
            <p className="mt-5 text-lg text-center">
                Compare prices across exchanges and calculate potential profits.
            </p>
            <div className="mt-10">
                
                    
                <label htmlFor="exchange1" className="block text-sm font-medium text-gray-700">
                    Exchange 1 Price:
                </label>
                <input
                    type="number"
                    id="exchange1"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                />
                
                <label htmlFor="exchange2" className="block text-sm font-medium text-gray-700 mt-4">
                    Exchange 2 Price:
                </label>
                <input
                    type="number"
                    id="exchange2"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                />
                
                <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Calculate Arbitrage
                </button>

                <div className="mt-4">
                    <h2 className="text-lg font-semibold">Results:</h2>
                    <p id="profit" className="text-green-600"></p>
                    <p id="profitPercentage" className="text-green-600"></p>
                
                    <h2 className="text-lg font-semibold">Fees:</h2>
                    <label htmlFor="buyFee" className="block text-sm font-medium text-gray-700">
                        Buy Fee:
                    </label>
                    <input
                        type="number"
                        id="buyFee"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                    />
                    <label htmlFor="sellFee" className="block text-sm font-medium text-gray-700 mt-4">
                        Sell Fee:
                    </label>
                    <input
                        type="number"
                        id="sellFee"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                    />
                    <label htmlFor="withdrawalFee" className="block text-sm font-medium text-gray-700 mt-4">
                        Withdrawal Fee:
                    </label>
                    <input
                        type="number"
                        id="withdrawalFee"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                    /> 
                </div>
                <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Calculate Fees
                </button>
                <div className="mt-4">
                    <h2 className="text-lg font-semibold">Fee Results:</h2>
                    <p id="totalBuyFee" className="text-green-600"></p>
                    <p id="totalSellFee" className="text-green-600"></p>
                    <p id="totalWithdrawalFee" className="text-green-600"></p>
                    <p id="totalFees" className="text-green-600"></p>
                    <p id="totalProfit" className="text-green-600"></p>
                    <p id="totalProfitPercentage" className="text-green-600"></p>   
            </div>
            </div>
        </div>
    </section>
  )
}

export default CalculatorUI