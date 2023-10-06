function Menu() {
    return (
        <>
            <div class="container-fluid px-0">
                <nav class="navbar navbar-expand-sm navbar-dark py-0 px-0">
                    <a class="navbar-brand" href="#"><img id="logo" src="https://i.imgur.com/K7Nwq4V.jpg"/> &nbsp;&nbsp;&nbsp;Acme Inc</a>
                    <span class="v-line"></span>
                    <button class="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Trang chủ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Sản phẩm</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Tin tức</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Về chúng tôi</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Liên hệ</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Menu;