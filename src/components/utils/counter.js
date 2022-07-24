import React from 'react';
import CountUp from 'react-countup';

export default function Counter(props) {
  const [loading, setLoading] = React.useState(false);

  const onStart = () => {
    setLoading(true);
  };

  const onEnd = () => {
    setLoading(false);
  };

  const containerProps = {
    'aria-busy': loading,
  };

  return (
    <>
      <CountUp
        end={props.data}
        duration="3"
        onStart={onStart}
        onEnd={onEnd}
        containerProps={containerProps}
        numerals={["০","১","২","৩","৪","৫","৬","৭","৮","৯"]}
      />
      {/* <div id="counter" aria-busy={loading} /> */}
    </>
  );
}