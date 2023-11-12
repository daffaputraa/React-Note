import React, { Profiler, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Local = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const dataProduk = [
    { id: 1, title: "Ice Cream" },
    { id: 2, title: "Soda" },
  ];
  const [produk, setProduk] = useState(dataProduk);

  let newData = "";

  useEffect(() => {
    const lokal = localStorage.getItem("addData");
    if (lokal) {
      setProduk(JSON.parse(lokal));
      console.log(produk);
    }
  }, []);
  const addData = (e) => {
    e.preventDefault();
    setProduk((prev) => [...prev, { id: produk.length + 1, title: newData }]);
    localStorage.setItem(
      "addData",
      JSON.stringify([...produk, { id: produk.length + 1, title: newData }])
    );
  };

  const delateData = (e) => {
    setProduk(produk.filter((ele, index) => ele.id !== e));
    localStorage.setItem(
      "addData",
      JSON.stringify(produk.filter((ele, index) => ele.id !== e))
    );
  };

  return (
    <>
      <form onSubmit={addData}>
        <input type="text" onChange={(e) => (newData = e.target.value)} />
        <button type="submit">Add Produk</button>
      </form>
      <div>
        {openEdit ? (
          <input type="text" />
        ) : (
          <div>
            {produk.map((ele, index) => (
              <div className="btn">
                <p>{ele.title}</p>
                <button onClick={() => delateData(ele.id)}>Delete</button>
                <Link to={`${ele.id}`}>Edit</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Local;
