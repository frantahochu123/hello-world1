document.addEventListener('DOMContentLoaded', function () {
    const cryptoList = document.getElementById('cryptoList');
   
    function loadCryptos() {
      const data = [
        { name: 'Bitcoin', price: '1 652 620,83 CZK' },
        { name: 'Ethereum', price: '85 053,51 CZK' },
        { name: 'Litecoin', price: '2 132,13 CZK' },
        { name: 'Cardano', price: '15,78 CZK' },
        { name: 'Polkadot', price: '219,24 CZK' },
        { name: 'Chainlink', price: '428.919 CZK' },
        { name: 'Solana', price: '4464,85 CZK' },
        { name: 'Uniswap', price: '276,92 CZK' }
      ];
   
      data.forEach(crypto => {
        const cryptoItem = document.createElement('div');
        cryptoItem.classList.add('crypto-item');
        cryptoItem.innerHTML = `
  ${crypto.name}</h2>
          <p>Price: ${crypto.price}</p>
        `;
        cryptoList.appendChild(cryptoItem);
      });
    }
   
    loadCryptos();
  });