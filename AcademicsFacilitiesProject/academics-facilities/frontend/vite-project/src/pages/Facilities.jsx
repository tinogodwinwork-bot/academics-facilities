import Sidebar from "../components/Sidebar";
import PageContainer from "../components/PageContainer";
import { useEffect, useState } from "react";
import axios from "axios";

function Facilities() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // FETCH
  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/facilities");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // CATEGORIES
  const categories = [
    ...new Set(data.map((item) => item.category).filter(Boolean))
  ];

  // ADD / UPDATE
  const handleAdd = async () => {
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/facilities/${editId}`, {
          name,
          description,
          category,
          image
        });
        setEditId(null);
      } else {
        await axios.post("http://localhost:5000/api/facilities", {
          name,
          description,
          category,
          image
        });
      }

      setName("");
      setDescription("");
      setCategory("");
      setImage("");

      fetchData();
      setShowForm(false); // 🔥 auto close

    } catch (err) {
      console.log(err);
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this facility?")) return;
    await axios.delete(`http://localhost:5000/api/facilities/${id}`);
    fetchData();
  };

  // EDIT
  const handleEdit = (item) => {
    setName(item.name);
    setDescription(item.description);
    setCategory(item.category);
    setImage(item.image);
    setEditId(item._id);
    setShowForm(true); // 🔥 open form
  };

  // FILTER
  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory === "" || item.category === selectedCategory)
    );
  });

  return (
    <>
      <Sidebar />

      <PageContainer>
        <div style={{ padding: "30px" }}>
          <h1 style={{ textAlign: "center" }}>Facilities</h1>

          {/* ADD BUTTON */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <button
              onClick={() => setShowForm(!showForm)}
              style={{
                padding: "12px 25px",
                borderRadius: "10px",
                border: "none",
                background: "#22c55e",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              {showForm ? "Close" : "+ Add Facility"}
            </button>
          </div>

          {/* FORM */}
          {showForm && (
            <div style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "20px"
            }}>
              <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
              />

              <input
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={inputStyle}
              />

              <input
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={inputStyle}
              />

              <input
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                style={inputStyle}
              />

              <button onClick={handleAdd} style={addBtn}>
                {editId ? "Update" : "Add"}
              </button>
            </div>
          )}

          {/* IMAGE PREVIEW */}
          {image && showForm && (
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <img
                src={image}
                alt="preview"
                style={{ width: "200px", borderRadius: "10px" }}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/200";
                }}
              />
            </div>
          )}

          {/* SEARCH BUTTON */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <button
              onClick={() => setShowSearch(!showSearch)}
              style={{
                padding: "10px 20px",
                borderRadius: "10px",
                border: "none",
                background: "#3b82f6",
                color: "white",
                cursor: "pointer"
              }}
            >
              {showSearch ? "Close Search" : "Search"}
            </button>
          </div>

          {/* SEARCH INPUT */}
          {showSearch && (
            <div style={{ textAlign: "center" }}>
              <input
                placeholder="Search facility..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ ...inputStyle, width: "350px", padding: "12px" }}
              />
            </div>
          )}

          {/* CATEGORY FILTER */}
          <div style={filterContainer}>
            <button onClick={() => setSelectedCategory("")} style={filterBtn}>
              All
            </button>

            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  ...filterBtn,
                  background:
                    selectedCategory === cat ? "#4CAF50" : "#334155"
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* EMPTY */}
          {filteredData.length === 0 && (
            <p style={{ textAlign: "center", color: "#aaa", marginTop: "30px" }}>
              No facilities available 🚫
            </p>
          )}

          {/* CARDS */}
          <div style={cardContainer}>
            {filteredData.map((item) => (
              <div key={item._id} style={cardStyle}>

                <img
                  src={item.image || "https://via.placeholder.com/300"}
                  alt=""
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300";
                  }}
                  style={imgStyle}
                />

                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <small>{item.category}</small>

                <div style={btnContainer}>
                  <button onClick={() => handleEdit(item)} style={editBtn}>
                    Edit
                  </button>

                  <button onClick={() => handleDelete(item._id)} style={deleteBtn}>
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

/* STYLES */

const inputStyle = {
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #444",
  background: "#1e293b",
  color: "#fff"
};

const addBtn = {
  padding: "8px 15px",
  border: "none",
  borderRadius: "6px",
  background: "#4CAF50",
  color: "#fff",
  cursor: "pointer"
};

const filterContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  margin: "20px 0"
};

const filterBtn = {
  padding: "6px 12px",
  borderRadius: "6px",
  border: "none",
  color: "#fff",
  cursor: "pointer"
};

const cardContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px"
};

const cardStyle = {
  padding: "20px",
  width: "220px",
  borderRadius: "12px",
  background: "#1e293b",
  color: "#fff",
  border: "1px solid #334155",
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
};

const imgStyle = {
  width: "100%",
  height: "120px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "10px"
};

const btnContainer = {
  marginTop: "12px",
  display: "flex",
  justifyContent: "center",
  gap: "10px"
};

const editBtn = {
  padding: "6px 12px",
  border: "none",
  borderRadius: "6px",
  background: "#2196F3",
  color: "#fff",
  cursor: "pointer"
};

const deleteBtn = {
  padding: "6px 12px",
  border: "none",
  borderRadius: "6px",
  background: "#f44336",
  color: "#fff",
  cursor: "pointer"
};

export default Facilities;