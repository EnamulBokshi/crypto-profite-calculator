"use client"
import { calculateProfite, calculateProfitePercentage } from "@/lib/actions/calculateProfite";
import Image from "next/image";
import { getBinancePrice } from "@/lib/actions/getBinancePrice";
import { getOKXPrice } from "@/lib/actions/getOkxPrice";
import { getKrakenPrice } from "@/lib/actions/getKrakenPrice";
import { BINANCE_FEE,
  OKX_FEE,
  KRAKEN_FEE,
  BINANCE_WITHDRAWAL,
  OKX_WITHDRAWAL,
  KRAKEN_WITHDRAWAL } from "@/const";

import { useState } from "react";
export default function Home() {

  const[amount, setAmount] = useState<number>(0);
  const [results,setResults] = useState<{profit: number, profitPercentage:number}[]| null>(null);
  const calculateArbitrage = async (exchange1Price: number, exchange2Price: number, amount: number) => {
    const buyPrice = exchange1Price;
    const sellPrice = exchange2Price;
    const buyFee = 0.001; // Example fee for buying
    const sellFee = 0.001; // Example fee for selling
    const withdrawalFee = 0.0005; // Example withdrawal fee
    const profit = await calculateProfite(buyPrice, sellPrice, buyFee, sellFee, withdrawalFee, amount);
    const profitPercentage = await calculateProfitePercentage(buyPrice, sellPrice, buyFee, sellFee, withdrawalFee, amount);
    return { profit, profitPercentage };
  };
  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    const buPrice = await getBinancePrice();
    const okxPrice = await getOKXPrice();
    const krakenPrice = await getKrakenPrice();
    console.log("Binance Price:", buPrice);
    console.log("OKX Price:", okxPrice);
    console.log("Kraken Price:", krakenPrice);
    console.log("Amount:", amount);
    // if (buPrice && okxPrice && amount > 0 ){
    //   const { profit, profitPercentage } = await calculateArbitrage(buPrice, okxPrice, amount);
    //   console.log(`Profit: ${profit}, Profit Percentage: ${profitPercentage}`);
    //   // Display results in the UI
    //   setResults([{ profit, profitPercentage }]);
    // } else {
    //   console.error("Invalid input values");
    // }
  };
  
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">Crypto Arbitrage Calculator</h1>
      <div className="mt-10">
        <Image
          src="/crypto-arbitrage.png"
          alt="Crypto Arbitrage"
          width={500}
          height={300}
        />
      </div>
      <p className="mt-5 text-lg text-center">
        Compare prices across exchanges and calculate potential profits.
      </p>

      {/* <CalculatorUI />
       */}
       <div className="mt-10">
        <form className="space-y-4" onSubmit={handleCalculate}>
          <div className="mb-4 flex flex-col gap-4">
            <label htmlFor="exchange1" className="block text-sm font-medium text-gray-700">
              Exchange 1 Price:
            </label>
            <input
              type="number"
               min={0}
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 bg-gray-300 p-2 text-gray-800"
            />
            <button type="submit" className="py-2 rounded-lg bg-blue-600">Calculate</button>
          </div>
        </form>
        <div className="rounded-lg shadow-lg p-6 bg-white text-gray-800">
        <h2>Results: </h2>
          <div>
            {
              results && results.length > 0 ? (
                <>
                  <p className="text-green-600">Profit: {results[0].profit}</p>
                  <p className="text-green-600">Profit Percentage: {results[0].profitPercentage}%</p>
                </>
              ) : (
                <p className="text-red-600">No results available</p>
              )
            }
          </div>
        </div>

       </div>


    </main>
  <footer className="mt-10">
    <p className="text-sm text-center">
      &copy; 2023 Crypto Arbitrage Calculator. All rights reserved.
    </p>
  </footer> 
    </>
    
  );
}
