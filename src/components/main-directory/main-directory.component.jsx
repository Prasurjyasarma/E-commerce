import "./main-directory.style.scss";
import HomeItem from "../category-item/home-item.component";

const Directory = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      route: "shop/hats",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl:
        "https://images.pexels.com/photos/7679866/pexels-photo-7679866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      route: "shop/jackets",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl:
        "https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      route: "shop/sneakers",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      route: "shop/womens",
    },
    {
      id: 5,
      title: "mens",
      imageUrl:
        "https://images.pexels.com/photos/175697/pexels-photo-175697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      route: "shop/mens",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <HomeItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
