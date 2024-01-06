import React, { useState } from "react";
import axios from "axios";
import { IoCloseSharp } from "react-icons/io5";

export default function Upload() {
  const [Name, setName] = useState("");
  const [Content, setContent] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    if (Name === "" || Content === "") {
      return alert("모든 항목을 채워주세요.");
    }

    let body = {
      name: Name,
      content: Content,
    };

    axios
      .post("/api/post/submit", body)
      .then(response => {
        if (response.data.success) {
          alert("방명록 작성이 완료되었습니다.");
        } else {
          alert("방명록 작성에 실패하였습니다.");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="upload-box">
      <form className="upload-form" onSubmit={onSubmit}>
        <div className="upload-container">
          <div>
            <IoCloseSharp color="#ccc" size="20" />
          </div>
          <div className="upload upload-name">
            <div className="flex-start margin-b03">
              <div className="title-upload">이름</div>
              <hr></hr>
              <input
                id="name"
                type="text"
                value={Name}
                autocomplete="off"
                onChange={e => {
                  setName(e.currentTarget.value);
                }}
              />
            </div>
            <div className="upload-content relative">
              <div className="flex-start z-index">
                <div className="title-upload">내용</div>
                <hr></hr>
              </div>
              <textarea
                id="content"
                value={Content}
                cols="5"
                maxLength="110"
                style={{ height: "165px" }}
                onChange={e => {
                  setContent(e.currentTarget.value);
                }}
              />
            </div>

            <div
              className="btn btn-upload-submit"
              onClick={e => {
                onSubmit(e);
              }}
            >
              글쓰기
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
