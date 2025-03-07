export const buyItem = (item, money, setMoney, resource, setResource) => {
    if (money >= 2) {
      setMoney(money - 2);
      setResource(resource + 1);
    } else {
      alert("Not enough money!");
    }
  };
  