import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div>
      <div className={`${styles.sideBar}`}>
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
};

export default SideBar;
