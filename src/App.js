import Rating from "./components/Rating";
import itemsData from "./data/itemsData";

const App = () => {
  // const productItems = itemsData.filter((item) => item.category === 'product');
  const productItems = itemsData.filter((item) => item.category === 'design');
  // const productItems = itemsData.filter((item) => item.category === 'ETC');

  const selectedItems = (() => {
    const tmpArray = [];
    const selectedArray = [];
    let index;

    for (let i = 0; i < 5; i++) {
      index = Math.ceil(Math.random() * productItems.length);
      let item = productItems[index - 1];

      if (selectedArray.includes(item)) {
        tmpArray.push(item);
        i--;
      } else {
        selectedArray.push(item);
      }
    }

    return selectedArray;
  })();

  return (
    <>
      {selectedItems.map((item) => (
        <div key={item.id} className="item">
          <div className="image">
            <a href={item.link}>
              <img src={item.image} alt={item.name} />
            </a>
          </div>
          <div className="info">
            <h4>{item.name}</h4>
            <p className="price">{item.price.toLocaleString()}원</p>
            <p className="rating">
              <Rating rating={item.score} />
              <span className="rating-number">{' '}({item.score})</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default App;
