import React from 'react';
import Transaction from './Transaction';

const TransactionsList = ({ transactions }) => {
  return (
    <ul className="transactions">
      {transactions.slice().map((el) => (
        <Transaction key={el.id} {...el} />
      ))}
    </ul>
  );
};

export default TransactionsList;
