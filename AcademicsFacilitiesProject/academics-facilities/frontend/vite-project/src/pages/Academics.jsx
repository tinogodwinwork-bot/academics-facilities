import Sidebar from "../components/Sidebar";
import PageContainer from "../components/PageContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Academics.css";

function Academics() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  // FETCH DATA
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/academics");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // IMAGE UPLOAD
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/upload",
        formData
      );
      setImage(res.data.imageUrl);
    } catch (err) {
      console.log(err);
    }
  };

  // ADD / UPDATE
  const handleAdd = async () => {
    try {
      let finalImage = image;

      if (editId) {
        const existing = data.find((i) => i._id === editId);
        if (!image) finalImage = existing?.image;
      }

      const payload = {
        title,
        description,
        image: finalImage || ""
      };

      if (editId) {
        await axios.put(
          `http://localhost:5000/api/academics/${editId}`,
          payload
        );
        setEditId(null);
      } else {
        await axios.post(
          "http://localhost:5000/api/academics",
          payload
        );
      }

      // RESET
      setTitle("");
      setDescription("");
      setImage("");
      setShowForm(false);

      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/academics/${id}`);
    fetchData();
  };

  // EDIT
  const handleEdit = (item) => {
    setTitle(item.title);
    setDescription(item.description);
    setImage(item.image || "");
    setEditId(item._id);
    setShowForm(true);
  };

  // SEARCH
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Sidebar />

      <PageContainer>
        <div className="academics-container">

          <h1 className="title">Academics</h1>

          {/* ADD BUTTON */}
          <div className="center">
            <button
              className="main-btn"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? "Close" : "+ Add Academic"}
            </button>
          </div>

          {/* FORM */}
          {showForm && (
            <div className="form-box">

              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
              />

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
              />

              <input
                type="file"
                onChange={(e) => uploadImage(e.target.files[0])}
              />

              <button className="main-btn" onClick={handleAdd}>
                {editId ? "Update" : "Add"}
              </button>

            </div>
          )}

          {/* SEARCH */}
          <div className="center">
            <input
              className="search-box"
              placeholder="Search academics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* CARDS */}
          <div className="card-grid">
            {filteredData.map((item) => (
              <div className="card" key={item._id}>

                {item.image && (
                  <img
                    src={item.image}
                    alt="academic"
                    className="card-img"
                  />
                )}

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="card-buttons">
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </PageContainer>
    </>
  );
}

export default Academics;