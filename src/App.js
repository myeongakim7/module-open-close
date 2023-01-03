import { useState } from "react";
import "./App.css";
// import ColorButton from "./components/ColorButton";

function App() {
  // 창 닫기
  const closeModal = () => {
    setModal(false);
  };
  // true = 열림, false = 닫힘
  const [modal, setModal] = useState(false);
  const modalJSX = (
    <div className="modal">
      <h2>모달창</h2>
      <button onClick={closeModal}>닫기</button>
    </div>
  );

  // 창 열기
  const openModal = () => {
    setModal(true);
  };

  return (
    <div className="title">
      <h1>모달창 연습</h1>
      {/* 버튼 클릭시 모달창 열기 */}
      <a href="#" onClick={openModal} className="openbtn">
        모달창 열기
      </a>

      {modal == true ? modalJSX : null}
      {/* modal이 true이면 modal창 보임 <-> modal이 false면 modal창 안보임 */}
      {/* jsx 안에서는 if문 사용 못함 => 이럴 때는 삼항연산자 - 조건?참:거짓 */}

      {/* ejs는 %써야되는데, 리액트는 {} 이렇게만 씀  */}
    </div>
  );
}

export default App;
