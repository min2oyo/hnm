// 1. 전체 상품 페이지, 로그인, 상품 상세 페이지
//  - 네비게이션 바
// 2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다
//  - 상품 디테일을 눌렀으나 고르인이 안 되어 있으면 로그인 페이지로 이동한다
// 4. 로그인이 되어 있으면 상품 디테일 페이지를 볼 수 있다
// 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다
//  - 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다
// 6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다
// 7. 상품을 검색할 수 있다

import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./component/Navbar";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
