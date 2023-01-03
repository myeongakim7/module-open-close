import React from "react";

export default function ColorButton(props) {
  // 분할대입
  const { bgColor, color, children } = props;
  const style = {
    backgroundColor: bgColor,
    color: color,
  };
  return <button style={style}>{children}</button>;
  //children은 text
  //children도 props의 속성 값
}

// 이해를 위한 예시
// const 사람 = { 이름: ‘홍길동’, 나이 : 30 }

// // const.name = 사람.이름;
// const { 이름 } = 사람;
// clg(이름)
