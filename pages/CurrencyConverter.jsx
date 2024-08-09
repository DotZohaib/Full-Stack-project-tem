import { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [currency, setCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [conversionRate, setConversionRate] = useState(null);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConversionRate = async () => {
      setIsLoading(true);
      setError(null);
      
       
      try {
        const response = await axios.get(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        setConversionRate(response.data.conversion_rates[toCurrency]);
      } catch (error) {
        console.error('Error fetching conversion rate:', error);
        setError('Failed to fetch conversion rate');
      } finally {
        setIsLoading(false);
      }
    };

    fetchConversionRate();
  }, [currency, toCurrency, amount]);

  useEffect(() => {
    if (conversionRate !== null) {
      setResult(amount * conversionRate);
    }
  }, [amount, conversionRate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Currency Converter</h1>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-transform transform hover:scale-105"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            From:
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-transform transform hover:scale-105"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              {/* Add more currencies as needed */}
            </select>
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            To:
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-transform transform hover:scale-105"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              {/* Add more currencies as needed */}
            </select>
          </label>
        </div>
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <h2 className="text-xl font-semibold text-center mt-4">
              Result: {result !== null ? result.toFixed(2) : 'Calculating...'}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
