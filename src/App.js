import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import TrangChu from './pages/trang-chu';
import SanPham from './pages/san-pham';
import ChiTietSanPham from './pages/chi-tiet-san-pham';
import GioHang from './pages/gio-hang';
import ThanhToan from './pages/thanh-toan';
import DangNhap from './pages/dang-nhap';
import DangKy from './pages/dang-ky';

function App() {
  return (
    <div className="App">
      <TrangChu/>
      {/* <SanPham /> */}
      {/* <ChiTietSanPham /> */}
      {/* <GioHang /> */}
      <ThanhToan/>
      {/* <DangNhap/> */}
      {/* <DangKy/> */}
    </div>
  );
}

export default App;
