interface memberPriceArrayProps {
  title: string;
  price: number;
}
const FinalPrice = () => {
  const memberPriceArray: memberPriceArrayProps[] = [
    {
      title: "Non Member",
      price: 0,
    },
    {
      title: "BRONZE",
      price: 0,
    },
    {
      title: "SILVER",
      price: 0,
    },
    {
      title: "GOLD",
      price: 0,
    },
  ];

  return (
    <div>
      <div>Choose Your Option to pay</div>
    </div>
  );
};
export default FinalPrice;
