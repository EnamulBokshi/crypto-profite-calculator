# Crypto Arbitrage Calculator

The **Crypto Arbitrage Calculator** is a web application that allows users to compare cryptocurrency prices across multiple exchanges and calculate potential arbitrage profits. This tool is designed to help traders identify profitable opportunities by analyzing price differences between exchanges.

## Features

- **Real-Time Price Fetching**: Fetches cryptocurrency prices from multiple exchanges, including Binance, OKX, and Kraken.
- **Arbitrage Calculation**: Calculates potential profit and profit percentage based on user-provided amounts and exchange prices.
- **User-Friendly Interface**: Simple and intuitive UI for entering exchange prices and viewing results.
- **Dynamic Results Display**: Displays calculated profit and profit percentage dynamically in the UI.
- **Error Handling**: Provides feedback for invalid input values.

## How It Works

1. **Input Exchange Prices**: Users enter the prices of a cryptocurrency from two exchanges.
2. **Enter Amount**: Users specify the amount of cryptocurrency they want to trade.
3. **Calculate Arbitrage**: The app calculates:
   - Profit: The net gain after considering fees and withdrawal costs.
   - Profit Percentage: The percentage gain relative to the initial investment.
4. **View Results**: The calculated profit and profit percentage are displayed in the results section.

## Technologies Used

- **Frontend**: React with Next.js
- **Styling**: Tailwind CSS
- **Backend Logic**: Custom functions for calculating profit and profit percentage
- **APIs**: Fetches real-time prices from Binance, OKX, and Kraken APIs

## Folder Structure
 ├── app/ │ ├── page.tsx # Main page of the application │ ├── globals.css # Global styles ├── components/ │ ├── calculatorUi.tsx # UI component for the calculator (currently unused) ├── lib/ │ ├── actions/ │ ├── calculateProfite.ts # Functions for profit and profit percentage calculation │ ├── getBinancePrice.ts # Fetch Binance price │ ├── getOkxPrice.ts # Fetch OKX price │ ├── getKrakenPrice.ts # Fetch Kraken price ├── public/ │ ├── crypto-arbitrage.png # Image used in the UI ├── const.ts # Constants for fees and withdrawal costs ├── README.md # Project documentation
## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/EnamulBokshi/crypto-profite-calculator.git
   cd crypto-profite-calculator
