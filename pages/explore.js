import React from "react";
import { Card, Layout } from "../components";
const Explore = () => {
  return (
    <Layout title="Explore" rightBar={false}>
      <div className="flex flex-wrap gap-6 p-6 items-center justify-center">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item} type="explore" />
        ))}
      </div>
    </Layout>
  );
};

export default Explore;
