import React from "react";

export default function usePreload() {
  const [loading, setLoading] = React.useState(true);

  setTimeout(() => setLoading(false), 3 * 1000);

  return { loading };
}
