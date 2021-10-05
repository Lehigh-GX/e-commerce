import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForOverview } from "../../redux/shop/shop.selector.js";

import CollectionPreview from "../collection-preview/collection-preview.jsx";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...props }) => (
      <CollectionPreview key={id} {...props} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForOverview,
});
export default connect(mapStateToProps)(CollectionOverview);
