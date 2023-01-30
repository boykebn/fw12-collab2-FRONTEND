import Image from "next/image";
import Link from "next/link";
import {
  Edit2,
  Facebook,
  Instagram,
  Search,
  Twitter,
} from "feather-icons-react/build/IconComponents";
import React, { useState, useEffect } from "react";
import http from "../helpers/http";
import Footer from "../components/footer";
import withAuthUser from '../components/hoc/withAuthUser'
import Navbar from "../components/navbar";

const History = () => {
  const [history, setHistory] = useState([]);
  const fetchHistory = async () => {
    try {
      const { data } = await http().get("/history", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data)
      setHistory(data.results);
    } catch (error) {
      if (error) throw error;
    }
  };
  React.useEffect(() => {
    fetchHistory()
  },[]);
  return (
    <div className="">
      <Navbar />

      <div className="bg-history_bg bg-no-repeat bg-cover pb-[100px]">
        <div className="flex flex-col justify-center items-center pl-[5%] leading-10 pt-[100px]">
          <h1 className="text-white text-4xl font-bold">
            Let’s see what you have bought!
          </h1>
          <p className="text-white">Long press to delete item</p>
        </div>

        <div className="flex flex-col justify-center items-center pt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {history?.map((history) => (
              <div key={history.id} className="w-[250px] h-[126px] md:w-[394px] h-[126px] bg-white rounded-2xl hover:opacity-50">
                <div className="py-5 px-5 flex gap-5">
                  <Image
                    src={require("../images/tomato.png")}
                    width="70"
                    height="60"
                    alt="tomato"
                    className="rounded-full md:w-[80px] h-[70px]"
                  />
                  <div className="flex-1 text-lg md:w-[150px] h-[150px]">
                    <p className="font-bold md:text-2xl text-lg">{history?.name}</p>
                    <p>IDR {Number(history?.totalPrice
                      ).toLocaleString('id')}</p>
                    <p>{history?.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

<Footer />
    </div>
  );
};

// export default withAuthUser(History);
export default History;