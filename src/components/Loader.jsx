import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-40">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-pink-400 border-t-transparent"></div>
    </div>
  );
}
