import React, { useEffect, useState } from 'react';
import PieChart from './PieChart';
import { Pool } from './PieChart'; // Import the Pool interface

interface ApiData {
  pools: Pool[];
  blockCount: number;
}

const DistributionChart: React.FC = () => {
  const [apiData, setApiData] = useState<ApiData | null>(null);

  useEffect(() => {
    fetch('https://mempool.space/api/v1/mining/pools/24h')
      .then(response => response.json())
      .then((data: ApiData) => {
        console.log(data);
        setApiData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {apiData && <PieChart pools={apiData.pools} blockCount={apiData.blockCount} />}
    </div>
  );
};

export default DistributionChart;
