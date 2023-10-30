import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  price: "",
  year: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const { name, price, year } = state;

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5051/api/get/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !year) {
      toast.error("Please provide value into each input field");
    } else {
      if (!id) {
        axios
          .post("http://localhost:5051/api/post", {
            name,
            price,
            year,
          })
          .then(() => {
            setState({ name: "", price: "", year: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("year Added Successfully");
      } else {
        axios
          .put(`http://localhost:5000/api/update/${id}`, {
            name,
            price,
            year,
          })
          .then(() => {
            setState({ name: "", price: "", year: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("year Updated Successfully");
      }

      setTimeout(() => history.push("/"), 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name ..."
          value={name || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="price">price</label>
        <input
          type="number"
          id="email"
          name="price"
          placeholder="Your price ..."
          value={price || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="year">year</label>
        <input
          type="number"
          id="year"
          name="year"
          placeholder="Your year No ..."
          value={year || ""}
          onChange={handleInputChange}
        />
        <input type="submit" value={id ? "Update" : "Save"} />
        <Link to="/">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;
