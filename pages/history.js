import Image from "next/image";
import Link from "next/link";
import {
  Edit2,
  Facebook,
  Instagram,
  Search,
  Twitter,
  Trash2,
} from "feather-icons-react/build/IconComponents";
import React, { useState, useEffect } from "react";
import http from "../helpers/http";
import Footer from "../components/footer";
import withAuthUser from "../components/hoc/withAuthUser";
import Navbar from "../components/navbar";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

const History = () => {
  const token = useSelector((state) => state.auth.token);
  const { id: idUser } = jwt_decode(token);
  const [history, setHistory] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [messageDelete, setMessageDelete] = useState(false);
  const [loading, setLoading] = useState(false)
  const fetchHistory = async () => {
    try {
      const { data } = await http(token).get(`/history/${idUser}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setHistory(data.results);
    } catch (error) {
      if (error) throw error;
    }
  };
  const deleteHistory = async () => {
    try {
      setLoading("loading...")
      await http(token).delete(`/history/${deleteId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false)
      setMessageDelete("Delete History Successfully");
      setTimeout(() => {
        setMessageDelete(false);
      }, 3000);
    } catch (error) {
      if (error) throw error;
    }
  };
  console.log(deleteId);
  React.useEffect(() => {
    fetchHistory();
    if (deleteId) {
      deleteHistory();
    }
  }, [deleteId]);
  return (
    <div className="">
      <Navbar />

      <div className="bg-history_bg bg-no-repeat bg-cover pb-[100px]">
        <div className="flex flex-col justify-center items-center pl-[5%] leading-10 pt-[100px]">
          <h1 className="text-white text-4xl font-bold">
            Let’s see what you have bought!
          </h1>
          <p className="text-white">Long press to delete item</p>
          {loading && <p className="text-blue-400">{loading}</p>}
          {messageDelete && <p className="text-green-500">{messageDelete}</p>}
        </div>

        <div className="flex flex-col justify-center items-center pt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {history?.map((history) => (
              <button
                onClick={() => setToggle(!toggle)}
                key={String(history.id)}
                className="w-[250px] h-[126px] md:w-[394px] bg-white rounded-2xl hover:opacity-50 relative"
              >
                {toggle && (
                  <button
                    onClick={() => setDeleteId(history.id)}
                    className="absolute right-3 top-3"
                  >
                    <Trash2 className="" />
                  </button>
                )}

                <div className="py-5 px-5 flex gap-5">
                  <Image
                    src={history.picture}
                    width="70"
                    height="60"
                    alt="tomato"
                    className="rounded-full md:w-[80px] h-[70px]"
                  />
                  <div className="flex-1 text-lg md:w-[150px] h-[150px]">
                    <p className="font-bold md:text-2xl text-lg">
                      {history?.name}
                    </p>
                    <p>
                      IDR {Number(history?.totalPrice).toLocaleString("id")}
                    </p>
                    <p>{history?.status}</p>
                  </div>
                </div>
              </button>
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
