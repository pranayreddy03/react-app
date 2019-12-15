import React from 'react';

//Components
import Layout from './components/layout/Layout';
import BurgerBuilder from './components/burgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
