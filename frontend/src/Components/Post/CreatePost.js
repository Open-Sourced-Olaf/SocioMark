import React, { useState } from "react";
import axios from "axios";
import { navigate } from "hookrouter";

export default function CreatePost() {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState({ fileUpload: null });
  const access = localStorage.getItem("access_token");

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFile({
      fileUpload: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var bodyFormData = new FormData();
    bodyFormData.append("description", description);
    if (file.fileUpload) {
      bodyFormData.append("image", file.fileUpload);
    }
    axios
      .post("http://localhost:8000/post/create", bodyFormData, {
        headers: {
          accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + access,
        },
      })
      .then((resp) => {
        console.log(resp.data.message); //later we can change log to notifications
        navigate("/profile");
      })
      .catch((err) => {});
  };

  return (
    <div>
      <div class="max-w-3xl w-full mx-auto relative bg-white shadow rounded-lg">
        <form onSubmit={handleSubmit} class="flex w-full flex-col p-4 md:p-6">
          <textarea
            aria-label="description"
            onChange={handleChange}
            name="description"
            value={description}
            type="description"
            className="appearance-none block w-full bg-white text-red-900 font-normal border border-primary-400 rounded py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
            placeholder="Description..."
          />
          <div class="md:flex justify-between items-center">
            <div class="md:w-2/3">
              <span class="w-full">
                <input
                  aria-label="profile_picture"
                  name="profile_picture"
                  onChange={handleFileUpload}
                  type="file"
                  accept="image/*"
                  className="appearance-none border rounded py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                />{" "}
              </span>
            </div>
            <div class="w-1/4 mt-2 md:mt-0">
              <button className="bg-green-600 w-full hover:bg-green-500 text-center text-xl font-semibold text-white rounded-md p-2 mt-2 md:mt-0">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}