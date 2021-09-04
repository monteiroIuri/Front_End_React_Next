import Head from 'next/head';
import Script from 'next/script';

function Home() {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <title>Crud-Desenvolvedores</title>
            </Head>
            <nav className="navbars">
                <div className="max-width">
                    <div className="logo">
                        <a href="#top">CRUD - Desenvolvedores</a>
                    </div>
                    <ul className="menu">
                        <li><a href="#top" className="menu-btn">Home</a></li>
                        <li><a href="#devcrud" className="menu-btn">Desenvolvedores</a></li>
                        <li><a href="#contact" className="menu-btn">Contato</a></li>
                    </ul>
                    <div className="menu-btn">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </nav>

            <section className="top" id="top">
                <div className="max-width">
                    <div className="top-content">
                        <div className="text-1">Olá, me chamo Iuri Monteiro</div>
                        <div className="text-2">Tudo bem?</div>
                        <div className="text-3">Seja bem vindo!</div>
                        <a href="#devcrud">Desenvolvedores</a>
                    </div>
                </div>
            </section>

            <section className="devcrud" id="devcrud">
                <div className="max-width">
                    <h2 className="title">Desenvolvedores</h2>
                    <hr></hr>
                    <div className="btn-right">
                        <button type="button" className='btn btn-outline-success btn-md' data-toggle="modal" data-target="#addDevModal">
                            Cadastrar
                        </button>
                    </div>
                    <table className="table table-responsive table-striped table-bordered table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Nome</th>
                                <th class="d-none d-sm-table-cell">Sexo</th>
                                <th>Idade</th>
                                <th>Hobby</th>
                                <th>Nascimento</th>
                                <th className="text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="table-primary">Luiz</td>
                                <td className="d-none d-sm-table-cell table-primary">M</td>
                                <td className="table-primary">28</td>
                                <td className="table-primary">Games</td>
                                <td className="table-primary">10/08/1993</td>
                                <td className="text-center table-primary">
                                    <button type="button" className='btn btn-warning btn-sm' data-toggle="modal" data-target="#editDevModal">
                                        Editar
                                    </button>
                                    <button type="button" className='btn btn-danger btn-sm' data-toggle="modal" data-target="#deleteDevModal">
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="table-primary">Luiz</td>
                                <td className="d-none d-sm-table-cell table-primary">M</td>
                                <td className="table-primary">28</td>
                                <td className="table-primary">Games</td>
                                <td className="table-primary">10/08/1993</td>
                                <td className="text-center table-primary">
                                    <button type="button" className='btn btn-warning btn-sm' data-toggle="modal" data-target="#editDevModal">
                                        Editar
                                    </button>
                                    <button type="button" className='btn btn-danger btn-sm' data-toggle="modal" data-target="#deleteDevModal">
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="table-primary">Luiz</td>
                                <td className="d-none d-sm-table-cell table-primary">M</td>
                                <td className="table-primary">28</td>
                                <td className="table-primary">Games</td>
                                <td className="table-primary">10/08/1993</td>
                                <td className="text-center table-primary">
                                    <button type="button" className='btn btn-warning btn-sm' data-toggle="modal" data-target="#editDevModal">
                                        Editar
                                    </button>
                                    <button type="button" className='btn btn-danger btn-sm' data-toggle="modal" data-target="#deleteDevModal">
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="table-primary">Luiz</td>
                                <td className="d-none d-sm-table-cell table-primary">M</td>
                                <td className="table-primary">28</td>
                                <td className="table-primary">Games</td>
                                <td className="table-primary">10/08/1993</td>
                                <td className="text-center table-primary">
                                    <button type="button" className='btn btn-warning btn-sm' data-toggle="modal" data-target="#editDevModal">
                                        Editar
                                    </button>
                                    <button type="button" className='btn btn-danger btn-sm' data-toggle="modal" data-target="#deleteDevModal">
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="table-primary">Luiz</td>
                                <td className="d-none d-sm-table-cell table-primary">M</td>
                                <td className="table-primary">28</td>
                                <td className="table-primary">Games</td>
                                <td className="table-primary">10/08/1993</td>
                                <td className="text-center table-primary">
                                    <button type="button" className='btn btn-warning btn-sm' data-toggle="modal" data-target="#editDevModal">
                                        Editar
                                    </button>
                                    <button type="button" className='btn btn-danger btn-sm' data-toggle="modal" data-target="#deleteDevModal">
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                            <hr></hr>
                        </tbody>

                    </table>

                    <div className="Paginations">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Anterior</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#devcrud">1</a></li>
                            <li className="page-item"><a className="page-link" href="#devcrud">2</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#devcrud">Próxima</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* MODAL CADASTRAR DESENVOLVEDOR */}
            <div id="addDevModal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addUsuarioModalLabel">Cadastrar Desenvolvedor</h5>
                            <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">
                            <form method="post" id="insert_form">
                                <div className="form-group row">
                                    <label className="col-form-label">Nome</label>
                                    <div className="col-sm-12">
                                        <input name="nome" type="text" className="form-control" id="nome" placeholder="Ex: João" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <label className="col-form-label">Sexo</label>
                                        <select className="form-select col-sm-12">
                                            <option selected>Selecione</option>
                                            <option value="1">Masculino</option>
                                            <option value="2">Feminino</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-form-label">Idade</label>
                                    <div className="col-sm-12">
                                        <input name="idade" type="number" className="form-control" id="idade" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-form-label">Hobby</label>
                                    <div className="col-sm-12">
                                        <input name="hobby" type="text" className="form-control" id="hobby" placeholder="Ex: Pescaria" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-form-label">Data de Nascimento</label>
                                    <div className="col-sm-12">
                                        <input name="dataNascimento" type="date" className="form-control" id="dataNascimento" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <input type="submit" name="CadDev" id="CadDev" value="Cadastrar" className="btn btn-success" />
                        </div>
                    </div>
                </div>
            </div>
            {/*FIM DO MODAL CADASTRAR DESENVOLVEDOR*/}

            {/* MODAL EDIRTAR DESENVOLVEDOR */}
            <div id="editDevModal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="editDevModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editDevModalLabel">Editar Desenvolvedor</h5>
                            <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">
                            <form method="post" id="insert_form">
                                <div className="form-group row">
                                    <label className="col-form-label">Nome</label>
                                    <div className="col-sm-12">
                                        <input name="nome" type="text" className="form-control" id="nome" placeholder="Ex: João" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <label className="col-form-label">Sexo</label>
                                        <select className="form-select col-sm-12">
                                            <option selected>Selecione</option>
                                            <option value="1">Masculino</option>
                                            <option value="2">Feminino</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-form-label">Idade</label>
                                    <div className="col-sm-12">
                                        <input name="idade" type="number" className="form-control" id="idade" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-form-label">Hobby</label>
                                    <div className="col-sm-12">
                                        <input name="hobby" type="text" className="form-control" id="hobby" placeholder="Ex: Pescaria" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-form-label">Data de Nascimento</label>
                                    <div className="col-sm-12">
                                        <input name="dataNascimento" type="date" className="form-control" id="dataNascimento" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <input type="submit" name="EditDev" id="EditDev" value="Editar" className="btn btn-success" />
                        </div>
                    </div>
                </div>
            </div>
            {/*FIM DO MODAL EDITAR DESENVOVEDOR*/}

            {/* MODAL EXCLUIR DESENVOLVEDOR */}
            <div id="deleteDevModal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="deleteDevModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteDevModalLabel">Excluir Desenvolvedor</h5>
                            <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Tem certeza que deseja Excluir o Desenvolvedor Fulano?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-dismiss="modal">Cancelar</button>
                            <input type="submit" name="deleteDev" id="deleteDev" value="Excluir" className="btn btn-danger" />
                        </div>
                    </div>
                </div>
            </div>
            {/*FIM DO MODAL EDITAR DESENVOVEDOR*/}

            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">Contatos</h2>
                    <div className="contact-content">

                        <div className="card">
                            <a href="https://www.linkedin.com/in/luiz-iuri-monteiro-gomes-70973764/" target="_blank">
                                <p>Linkedin</p>
                                <div className="box">
                                    <i className="fab fa-linkedin"></i>
                                </div>
                            </a>
                        </div>

                        <div className="card">
                            <a href="https://github.com/monteiroIuri" target="_blank">
                                <p>GitHub</p>
                                <div className="box">
                                    <i className="fab fa-github"></i>
                                </div>
                            </a>
                        </div>

                        <div className="card">
                            <a href="https://www.instagram.com/iuri.monteiro.3/" target="_blank">
                                <p>Instagram</p>
                                <div className="box">
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <span>Create By <a href="https://monteiroiuri.github.io/" target="_blank">Iuri Monteiro</a></span>
            </footer>

            <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" strategy="beforeInteractive" />
            <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" strategy="beforeInteractive" />
            <Script src="custom.js" strategy="afterInteractive" />

        </div >
    );
}

export default Home;