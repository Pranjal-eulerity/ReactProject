import React from 'react';

const FunctionRunner = ({ run }) => {

  React.useEffect(() => {
    run();
  }, []);

  return (
    <div>
      <h2>The stuff!</h2>
    </div>
  );
};

export default FunctionRunner;
