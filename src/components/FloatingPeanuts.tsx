const FloatingPeanuts = () => {
  const peanuts = [
    { top: "10%", left: "5%", delay: "0s" },
    { top: "25%", right: "8%", delay: "1s" },
    { top: "50%", left: "10%", delay: "2s" },
    { top: "70%", right: "15%", delay: "3s" },
    { top: "85%", left: "20%", delay: "1.5s" },
    { top: "15%", left: "85%", delay: "2.5s" },
    { top: "60%", left: "5%", delay: "1s" },
    { top: "40%", right: "5%", delay: "3.5s" },
  ];

  return (
    <>
      {peanuts.map((peanut, index) => (
        <div
          key={index}
          className="peanut"
          style={{
            top: peanut.top,
            left: peanut.left,
            right: peanut.right,
            animationDelay: peanut.delay,
          }}
        >
          🥜
        </div>
      ))}
    </>
  );
};

export default FloatingPeanuts;
