import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { nanoid } from "nanoid";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = { ...form, id: nanoid() };
    setUsers([...users, id]);
    setForm({});
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card text-bg-info mt-2">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <input
                    required
                    type="text"
                    name="name"
                    value={form.name || ""}
                    onChange={handleChange}
                    placeholder="Name"
                    className="form-control my-2"
                  />
                  <input
                    required
                    type="text"
                    name="age"
                    value={form.age || ""}
                    onChange={handleChange}
                    placeholder="Age"
                    className="form-control my-2"
                  />
                  <input
                    required
                    type="text"
                    name="phone"
                    value={form.phone || ""}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="form-control my-2"
                  />
                  <input
                    required
                    type="text"
                    name="address"
                    value={form.address || ""}
                    onChange={handleChange}
                    placeholder="Address"
                    className="form-control my-2"
                  />
                  <button className="btn btn-success" type="submit">
                    Add User
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by Name"
              className="form-control my-2"
            />
            <table className="table table-bordered table-hover table-striped mt-2 table-info">
              <thead>
                <tr>
                  <th>T/R</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
