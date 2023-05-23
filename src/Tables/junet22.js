import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./upload.module.css";

const JuneT22 = () => {
  const [addData, setAddData] = useState([]);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/tables/getAllDataJunet22")
      .then((response) => {
        setAddData(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    alert("Attention! Transaction has been deleted successfully");
    axios
      .delete(`http://localhost:4000/tables/deleteJunet22/${id}`)
      .then((response) => {
        console.log(response);
        setAddData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpload = () => {
    if (date === "") return alert("Enter Date");
    if (description === "") return alert("Enter Description");
    if (amount === "") return alert("Enter Amount");
    if (amount.length === 0) return alert("Amount cannot be zero!");
    if (status === "") return alert("Enter Status");
    if (category === "") return alert("Enter Category");

    const body = { date, description, amount, status, category };
    console.log(body);
    axios
      .post("http://localhost:4000/tables/addNewJunet22", body)
      .then((response) => {
        console.log(response);

        alert("Updated Successfully");
        clearFields();
        refreshTable();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clearFields = () => {
    setDate("");
    setDescription("");
    setAmount("");
    setStatus("");
    setCategory("");
  };

  const refreshTable = () => {
    axios
      .get("http://localhost:4000/tables/getAllDataJunet22")
      .then((response) => {
        setAddData(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formatDateString = (dateString) => {
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString();
  };

  return (
    <>
      <div className={style.trans}>
        <div>
          <h1>Add Transaction</h1>
        </div>
        <div className={style.trans_info}>
          <label>
            Date: &emsp;
            <input
              type="date"
              placeholder="yy-mm-dd"
              onChange={(e) => setDate(e.target.value)}
              min="2022-06-01"
              max="2022-06-30"
              value={date}
            />
          </label>
          &emsp;
          <br />
          <label>
            Description: &emsp;
            <input
              type="text"
              placeholder="Short Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </label>
          &emsp;
          <br />
          <label>
            Amount: &emsp;
            <input
              type="number"
              placeholder="Enter Amount"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
          </label>
          &emsp;
        </div>
        <br />
        <div className={style.trans_info2}>
          <label className={style.Rlabel}>
            <span>Income: </span>
            <input
              className={style.radio}
              type="radio"
              value="Income"
              checked={status === "Income"}
              onChange={(e) => setStatus(e.target.value)}
            />
          </label>
          <label className={style.Rlabel}>
            Expense:
            <input
              className={style.radio}
              type="radio"
              value="Expense"
              checked={status === "Expense"}
              onChange={(e) => setStatus(e.target.value)}
            />
          </label>
          &emsp;&emsp;
          <label>
            Category: &emsp;
            <input
              type="text"
              placeholder="Enter Category"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
          </label>
        </div>

        <button className={style.btn} onClick={() => handleUpload()}>
          Add
        </button>
        &emsp;&emsp;
      </div>
      <div>
        <div>
          <div className={style.File_p}>
            <table id="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {addData.map((data) => {
                  const { id, date, description, amount, status, category } =
                    data;
                  const formattedDate = formatDateString(date);
                  return (
                    <tr key={id}>
                      <td>{formattedDate}</td>
                      <td>{description}</td>
                      <td>{amount}</td>
                      <td>{status}</td>
                      <td>{category}</td>
                      <td>
                        <button onClick={() => handleDelete(id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default JuneT22