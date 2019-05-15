import React from "react";
import Layout from "../components/Layout";
import HeaderTags from "../components/HeaderTags";

const About = () => (
  <Layout>
    <HeaderTags 
      title="About Page - My Website" 
      description="This is the site description and if you are seeing this, this is from the server." 
      featuredImg="https://loremflickr.com/600/400/business?lock=2" 
    />
    <div className="container">
      <h2>About Us</h2>
      <img
        src="https://loremflickr.com/600/400/business?lock=2"
        alt="welcome"
        className="img"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sit,
        consectetur deleniti, molestias architecto vero error at iure officia
        rem voluptatum itaque a tempora. Neque laboriosam voluptatem dignissimos
        itaque error?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sit,
        consectetur deleniti, molestias architecto vero error at iure officia
        rem voluptatum itaque a tempora. Neque laboriosam voluptatem dignissimos
        itaque error?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sit,
        consectetur deleniti, molestias architecto vero error at iure officia
        rem voluptatum itaque a tempora. Neque laboriosam voluptatem dignissimos
        itaque error?
      </p>
    </div>
  </Layout>
);

export default About;
