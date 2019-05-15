import React from "react";
import { Helmet } from "react-helmet";

const HeaderTags = ({ title, description, featuredImg }) => {
  return (
    <Helmet>
      {/* <!-- Place this data between the <head> tags of your website --> */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* <!-- Twitter Card data --> */}
      <meta name="twitter:card" content="summary" />>
      <meta name="twitter:site" content="@kay_kenshin" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@kay_kenshin" />
      {/* <-- Twitter Summary card images must be at least 120x120px --> */}
      <meta
        name="twitter:image"
        content={featuredImg || "http://loremflickr.com/400/400/book"}
      />
      {/* <!-- Open Graph data --> */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="http://www.example.com/" />
      <meta
        property="og:image"
        content={featuredImg || "http://loremflickr.com/400/400/book"}
      />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Learn - Organization Dashboard" />
      <meta property="fb:admins" content="Facebook numeric ID" />
    </Helmet>
  );
};

export default HeaderTags;
