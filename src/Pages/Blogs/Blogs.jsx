import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blogs = () => {
  useTitle('Blog');
  return (
    <div>
      <div className="sm:w-full md:w-10/12 lg:w-9/12 mx-auto mb-12">
        <h1 className="text-4xl font-semibold m-10 text-center">
          This is Blog page QnA section
        </h1>
        <div className="mb-12 w-9/12 mx-auto">
          <hr />
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
          <div className="collapse mb-4 mx-auto card w-full sm:w-11/12 md:w-5/12 lg:w-5/12 bg-base-100 shadow-xl">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium flex gap-5">
              <h2 className="text-2xl text-black">
                <span className=" bg-purple-400 rounded-lg p-1"> 1.</span> What
                is an access token and refresh token? How do they work and where
                should we store them on the client-side?
              </h2>
              <span className="bg-green-700 rounded-lg  p-2">&#8595;</span>
            </div>
            <div className="collapse-content">
              <p className="ml-16 text-md bg-green-700 rounded-lg p-8 text-white font-semibold secondary">
                <span className="text-xl font-bold italic bg-yellow-400 p-1 rounded-lg">
                  Ans:
                </span>
                <span className=""></span> <br />
                <br />
                Access tokens are like digital keys that grant permission to
                access specific resources. They are stored securely on the
                client-side, such as in browser memory or HTTP-only cookies.{" "}
                <br />
                <br /> Refresh tokens work alongside access tokens, allowing for
                the issuance of new access tokens when they expire, eliminating
                the need for users to repeatedly log in. Refresh tokens require
                even stricter security measures and should be stored in secure
                mechanisms, such as secure cookies or OS/framework-provided
                storage.
              </p>
            </div>
          </div>
          <div className="collapse mb-4 mx-auto card w-full sm:w-11/12 md:w-5/12 lg:w-5/12 bg-base-100 shadow-xl">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium flex gap-5">
              <h2 className="text-2xl text-black">
                <span className=" bg-purple-400 rounded-lg p-1"> 2.</span>{" "}
                Compare SQL and NoSQL databases?
              </h2>
              <span className="bg-green-700 rounded-lg  p-2">&#8595;</span>
            </div>
            <div className="collapse-content">
              <p className="ml-16 text-md bg-green-700 rounded-lg p-8 text-white font-semibold secondary">
                <span className="text-xl font-bold italic bg-yellow-400 p-1 rounded-lg">
                  Ans:
                </span>
                <span className=""></span>
                <br />
                <br /> SQL databases: <br /> &#x2022; Use structured data models
                with predefined schemas (tables with rows and columns). <br />{" "}
                &#x2022; Ensure data integrity through relationships and
                constraints. <br /> &#x2022; Provide strong ACID (Atomicity,
                Consistency, Isolation, Durability) properties, making them
                suitable for complex transactions and data consistency. <br />
                <br /> NoSQL databases: <br /> &#x2022; Use flexible,
                schema-less data models (key-value, document, columnar, or
                graph). <br /> &#x2022; Offer horizontal scalability and high
                performance for handling large amounts of unstructured or
                semi-structured data. <br /> &#x2022; Sacrifice some data
                consistency and transactional support for increased scalability
                and flexibility.
              </p>
            </div>
          </div>
          <div className="collapse mb-4 mx-auto card w-full sm:w-11/12 md:w-5/12 lg:w-5/12 bg-base-100 shadow-xl">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium flex gap-5">
              <h2 className="text-2xl text-black">
                <span className=" bg-purple-400 rounded-lg p-1"> 3.</span> What
                is express js? What is Next js?
              </h2>
              <span className="bg-green-700 rounded-lg  p-2">&#8595;</span>
            </div>
            <div className="collapse-content">
              <p className="ml-16 text-md bg-green-700 rounded-lg p-8 text-white font-semibold secondary">
                <span className="text-xl font-bold italic bg-yellow-400 p-1 rounded-lg">
                  Ans:
                </span>
                <span className=""></span> <br />
                <br />
                Express.js is a flexible framework for building web servers and
                APIs, while Next.js is a React framework specifically designed
                for server-side rendering and static site generation, providing
                enhanced performance and SEO benefits.
              </p>
            </div>
          </div>
          <div className="collapse mb-4 mx-auto card w-full sm:w-11/12 md:w-5/12 lg:w-5/12 bg-base-100 shadow-xl">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium flex gap-5">
              <h2 className="text-2xl text-black">
                <span className=" bg-purple-400 rounded-lg p-1"> 4.</span> What
                is MongoDB aggregate and how does it work ?
              </h2>
              <span className="bg-green-700 rounded-lg  p-2">&#8595;</span>
            </div>
            <div className="collapse-content">
              <p className="ml-16 text-md bg-green-700 rounded-lg p-8 text-white font-semibold secondary">
                <span className="text-xl font-bold italic bg-yellow-400 p-1 rounded-lg">
                  Ans:
                </span>{" "}
                <br />
                <br />
                MongoDB's aggregate is a feature that allows advanced data
                analysis by combining multiple stages in a pipeline. Each stage
                performs specific operations like filtering, grouping, sorting,
                and calculations. It enables extraction of meaningful insights
                and manipulation of data. The aggregation pipeline acts as a
                series of steps that transform input data, apply operations at
                each stage, and produce desired output. It provides a flexible
                and efficient way to aggregate and analyze data within MongoDB,
                enhancing data processing capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
