import React, { useEffect } from "react";
import useAuth from "../../../../logic/auth";
import PopularDestination from "../../../Elements/PopularDestination";
export default function HomePage() {
  const { checkauth } = useAuth();
  useEffect(() => {
    checkauth();
  });
  return (
    <div className="HomePage">
      <PopularDestination />
    </div>
  );
}
