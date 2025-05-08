import React from "react";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";

export default function Spiner() {
  let { isLoading } = useSelector((state) => state.spinnerSlice);

  return isLoading ? (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <HashLoader color="#e90f71" size={50} speedMultiplier={1} />
    </div>
  ) : (
    <></>
  );
}
