import React from "react";

const ProtectedPage = () => {
  return (
    <div className="page-container">
      <h1>Protected Page</h1>
      <p>If you're seeing this, you're definitely logged in. Try navigating to the path manually in a new tab: /protected</p>
    </div>
  );
};
export default ProtectedPage;
