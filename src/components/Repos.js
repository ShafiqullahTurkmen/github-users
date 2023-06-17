import React from 'react';
import styled from 'styled-components';
import { useGithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
const Repos = () => {
  const { repos } = useGithubContext()
  const chartData = [
    {
      label: "Javascript",
      value: "44"
    },
    {
      label: "CSS",
      value: "55"
    },
    {
      label: "Html",
      value: "33"
    }
  ];
  
  return <Wrapper>
    {/* <ExampleChart data={chartData} /> */}
    <Pie3D data={chartData} />
  </Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
