import "./home-item.styles.scss";
import { useNavigate } from "react-router-dom";

const HomeItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <div className="home-container" onClick={onNavigateHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h1>{title}</h1>
        <h3>Shop now</h3>
      </div>
    </div>
  );
};
export default HomeItem;
