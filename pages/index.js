import React from 'react';

const Index = ({name}) => (
  <div>
    <style jsx>{`
      p {
        color: red;
      }
    `}</style>
    <p>Hello World, {name}</p>
    <header>
    <div className="menu">
    <div className="logo">
    
    </div>
    <nav>
      Menu
    </nav>
    </div>  
    </header>
    
  </div>
);

export default Index;