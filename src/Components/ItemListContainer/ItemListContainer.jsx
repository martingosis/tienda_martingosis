import React from "react";
import styles from "./ItemListContainer";

const ItemListContainer = ({ greeting }) => {
  return <div className={styles.containerItemList}>{greeting}</div>;
};

export default ItemListContainer;
