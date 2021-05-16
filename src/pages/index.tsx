import React from 'react';

const Home: React.FC = (props) => {
  console.log(props);
  return (
    <div>
      <p>{JSON.stringify(props)}</p>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();
  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, 
  }
}

export default Home;
