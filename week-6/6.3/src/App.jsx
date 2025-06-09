import {useState, useEffect, useCallback, memo} from 'react'

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});
  
  useEffect(() => {
    setExchange1Data({
      returns: 300
    });
  }, [])

  useEffect(() => {
    setExchange2Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setBankData ({
        income: 100
      });
    }, 1000); 
    }, [])

  const cryptoReturns = useCallback(function() {
    return exchange1Data.returns + exchange2Data.returns;

  }, [exchange1Data]);
  
  // const incomeTax = (bankData.income + cryptoReturns) * 0.3;
  
  return (
    <div>
      <CrypotGain  cryptoReturns={cryptoReturns} />
    </div>
  )
}

const CrypotGain = memo(function({cryptoReturns}) {
    return <div>
      Your crypto returns are: {cryptoReturns()}
    </div>
})


export default App