import React, { useEffect, Fragment } from "react";
import { stringify } from "query-string";
import useFetch from "../../hooks/useFetch";
import { Feed } from "../components/Feed";
import { Pagination } from "../components/Pagination";
import { getPagination, limit } from "../../utils/utils";
import { PopularTags } from "../components/PopularTags";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import FeedToggler from "../components/FeedToggler";

const TagFeed = ({ location, match }) => {
  const tagName = match.params.slug;
  const { offset, currentPage } = getPagination(location.search);
  const url = match.url;
  const stringifyParams = stringify({
    limit,
    offset,
    tag: tagName
  });
  const apiUrl = `/articles?${stringifyParams}`;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage, tagName]);

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1>Medium Clone</h1>
          <p>A place where you can improve knowledge</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedToggler />
            {isLoading && <Loading />}
            {error && <ErrorMessage />}
            {!isLoading && response && (
              <Fragment>
                <Feed articles={response.articles} />

                <Pagination
                  total={response.articlesCount}
                  limit={limit}
                  url={url}
                  currentPage={currentPage}
                />
              </Fragment>
            )}
          </div>
          <div className="col-md-3">
            <PopularTags />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TagFeed;
