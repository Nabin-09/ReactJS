import { useEffect, useState } from 'react'

function useCurrencyInfo(curr) {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${curr}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[curr]))
      .catch((err) => {
        console.error('Error fetching currency info:', err)
        setData({})
      })
  }, [curr])

  return data
}

export default useCurrencyInfo
