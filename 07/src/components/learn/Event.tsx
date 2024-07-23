import React from "react";

const Event = () => {
  // button event
  const onClickHandler = (
    //
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    msg: string
  ) => {
    console.log(e);
    alert(msg);
  };
  const onDoubleClickHandler = () => {
    alert("더블클릭 되었습니다.");
  };
  // input event
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    console.log("change event");
    console.log(e.target.value); // 텍스트, 라디오버튼
    // console.log(e.target.checked); // 체크박스 true, false
  };

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 이벤트 객체의 기본값 방지
    // 이메일 입력한 값 가져오고
    // 비밀번호 입력한 값 가져오고
    // API 통신 해서 통신 서버로 이메일과 비밀번호 전송
    // 서버에서 응답 받은 결과에 따라서
    // 로그인 성공 혹은 실패
    console.log("로그인");
  };

  return (
    <>
      <div>App</div>
      <button onClick={(e) => onClickHandler(e, "hello event")}>click</button>
      <button onDoubleClick={onDoubleClickHandler}>double</button>
      {/* 텍스트 */}
      <input type="text" onChange={onChangeHandler} />
      {/* 체크박스 */}
      <input type="checkbox" onChange={onChangeHandler} />
      {/* 라디오버튼 */}
      <input type="radio" name="gender" value={"male"} onChange={onChangeHandler} />
      male
      <input type="radio" name="gender" value={"female"} onChange={onChangeHandler} />
      female
      {/* 셀렉트박스 */}
      {/* 이벤트 객체의 타입이 위와 다름 => 타입추론 된 것을 참고할 것 */}
      <select onChange={(e) => onChangeHandler(e)}>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Carrot">Carrot</option>
      </select>
      {/* 폼 */}
      <form action="" onSubmit={(e) => login(e)}>
        <input type="text" placeholder="이메일" />
        <input type="password" placeholder="비밀번호" />
        <button type="submit">전송</button>
      </form>
    </>
  );
};

export default Event;
