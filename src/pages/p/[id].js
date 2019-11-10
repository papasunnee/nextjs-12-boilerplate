import React, { Fragment } from "react";
import { useRouter } from "next/router";
import withLayout from "../../hocs/withLayout";

const Post = () => {
  const router = useRouter();
  return (
    <Fragment>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </Fragment>
  );
};

export default withLayout(Post);
