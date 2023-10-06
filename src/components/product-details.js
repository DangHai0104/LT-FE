function ProductDetails() {
    return (
        <>
            <section class="py-5">
                <div class="container">
                    <div class="row gx-5">
                        <aside class="col-lg-6">
                            <div class="border rounded-4 mb-3 d-flex justify-content-center">
                                <a data-fslightbox="mygalley" class="rounded-4" target="_blank" data-type="image" href="avatar/DPTK.png">
                                    <img style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }} class="rounded-4 fit" src="avatar/DPTK.png" />
                                </a>
                            </div>
                            <div class="d-flex justify-content-center mb-3">
                                <a data-fslightbox="mygalley" class="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" href="">
                                    <img width="60" height="60" class="rounded-2" src="avatar/DPTK.png" />
                                </a>
                                <a data-fslightbox="mygalley" class="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" href="" >
                                    <img width="60" height="60" class="rounded-2" src="avatar/DPTK.png" />
                                </a>
                                <a data-fslightbox="mygalley" class="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" href="" >
                                    <img width="60" height="60" class="rounded-2" src="/big3.webp" />
                                </a>
                                <a data-fslightbox="mygalley" class="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" href="" >
                                    <img width="60" height="60" class="rounded-2" src="/big4.webp" />
                                </a>
                                <a data-fslightbox="mygalley" class="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" href="" >
                                    <img width="60" height="60" class="rounded-2" src="/big.webp" />
                                </a>
                            </div>

                        </aside>
                        <main class="col-lg-6">
                            <div class="ps-lg-3">
                                <h4 class="title text-dark">
                                    Fashion <br />
                                    Casual Hoodie
                                </h4>
                                <div class="mb-3">
                                    <span class="h5">$75.00</span>
                                    <span class="text-muted"></span>
                                </div>

                                <p>
                                    Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
                                    men.
                                </p>

                                <div class="row">
                                    <dt class="col-3">Type:</dt>
                                    <dd class="col-9">Regular</dd>

                                    <dt class="col-3">Color</dt>
                                    <dd class="col-9">Brown</dd>

                                    <dt class="col-3">Material</dt>
                                    <dd class="col-9">Cotton</dd>

                                    <dt class="col-3">Brand</dt>
                                    <dd class="col-9">Reebook</dd>
                                </div>

                                <hr />

                                <div class="row mb-4">
                                    {/* <div class="col-md-4 col-6">
                                        <label class="mb-2">Size</label>
                                        <select class="form-select border border-secondary" style={{ height: '35px' }}>
                                            <option>Small</option>
                                            <option>Medium</option>
                                            <option>Large</option>
                                        </select>
                                    </div> */}
                                    <div class="col-md-4 col-6 mb-3">
                                        <label class="mb-2 d-block">Quantity</label>
                                        <div class="input-group mb-3" style={{ width: '170px' }}>
                                            <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                                                <i class="fas fa-minus"></i>
                                            </button>
                                            <input type="text" class="form-control text-center border border-secondary" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                            <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                                                <i class="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-warning shadow-0"> Buy now </a>
                                <a href="#" class="btn btn-primary shadow-0"> <i class="me-1 fa fa-shopping-basket"></i> Add to cart </a>
                                <a href="#" class="btn btn-light border border-secondary py-2 icon-hover px-3"> <i class="me-1 fa fa-heart fa-lg"></i> Save </a>
                            </div>
                        </main>
                    </div>
                </div>
            </section>

            <section class="bg-light border-top py-4">
                <div class="container">
                    <div class="row gx-4">
                        <div class="col-lg-8 mb-4">
                            <div class="border rounded-2 px-3 py-2 bg-white">
                                <div><h5>Thông tin chi tiết</h5></div>

                                <div class="tab-content" id="ex1-content">
                                    <div class="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                                        <p>
                                            With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur.
                                        </p>
                                        <table class="table">
                                            <thead class="thead-light">
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">First</th>
                                                    <th scope="col">Last</th>
                                                    <th scope="col">Handle</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="px-0 border rounded-2 shadow-0">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Similar items</h5>
                                        <div class="d-flex mb-3">
                                            <a href="#" class="me-3">
                                                <img src="avatar/DPTK.png" style={{ minWidth: '96px', height: '96px' }} class="img-md img-thumbnail" />
                                            </a>
                                            <div class="info">
                                                <a href="#" class="nav-link mb-1">
                                                    Rucksack
                                                </a>
                                                <strong class="text-dark"> $38.90</strong>
                                            </div>
                                        </div>

                                        <div class="d-flex mb-3">
                                            <a href="#" class="me-3">
                                                <img src="avatar/DPTK.png" style={{ minWidth: '96px', height: '96px' }} class="img-md img-thumbnail" />
                                            </a>
                                            <div class="info">
                                                <a href="#" class="nav-link mb-1">
                                                    Summer
                                                </a>
                                                <strong class="text-dark"> $29.50</strong>
                                            </div>
                                        </div>

                                        <div class="d-flex mb-3">
                                            <a href="#" class="me-3">
                                                <img src="avatar/DPTK.png" style={{ minWidth: '96px', height: '96px' }} class="img-md img-thumbnail" />
                                            </a>
                                            <div class="info">
                                                <a href="#" class="nav-link mb-1"> T-lady </a>
                                                <strong class="text-dark"> $120.00</strong>
                                            </div>
                                        </div>

                                        <div class="d-flex">
                                            <a href="#" class="me-3">
                                                <img src="avatar/DPTK.png" style={{ minWidth: '96px', height: '96px' }} class="img-md img-thumbnail" />
                                            </a>
                                            <div class="info">
                                                <a href="#" class="nav-link mb-1"> Blazer </a>
                                                <strong class="text-dark"> $339.90</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default ProductDetails;