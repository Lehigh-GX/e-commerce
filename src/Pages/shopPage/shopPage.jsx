import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../Components/collection-overview/collection.overview";
import CollectionPage from "../collection/collection";
const ShopPage = ({ match }) => (
  <div className="collection-preview">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
