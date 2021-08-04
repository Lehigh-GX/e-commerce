import React from "react";
import SHOP_DATA from "./shopPage_Data.js";
import CollectionPreview from "../../Components/collection-preview/collection-preview.jsx";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: SHOP_DATA,
    };
  }
  render() {
    const { collection } = this.state;
    return (
      <div className="collection-preview">
        {collection.map(({ id, ...props }) => (
          <CollectionPreview key={id} {...props} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
