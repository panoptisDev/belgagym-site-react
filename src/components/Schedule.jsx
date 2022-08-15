import Bounce from "react-reveal/Bounce";
function Schedule({ mouse }) {
  return (
    <section
      className="schedule section"
      id="schedule"
      style={{ backgroundColor: "#000" }}
      onMouseEnter={mouse}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 text-center">
            <h6 data-aos="fade-up">Notre programme</h6>

            <h2 className="text-white" data-aos="fade-up" data-aos-delay="200">
              Horaires d'entraînement
            </h2>
          </div>
          <Bounce bottom>
            <div className="col-lg-12 py-5 col-md-12 col-12">
              <table
                className="table table-bordered table-responsive schedule-table"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <thead className="thead-light">
                  <tr>
                    <th>
                      <i className="fa fa-calendar"></i>
                    </th>
                    <th>Lun</th>
                    <th>Mar</th>
                    <th>Mer</th>
                    <th>Jeu</th>
                    <th>Ven</th>
                    <th>Sam</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <small>15:00 - 18:00</small>
                    </td>
                    <td>
                      {" "}
                      <b className="day"> Lun</b>
                    </td>
                    <td>
                      <b className="day"> Mar</b>
                    </td>
                    <td>
                      <b className="day"> Mer</b>
                    </td>
                    <td>
                      <b className="day"> Jeu</b>
                    </td>
                    <td>
                      <b className="day"> Ven</b>
                    </td>
                    <td>
                      <b className="day"> Sam</b>
                      <strong>
                        taekwondo <br /> kids 4ans:10ans
                      </strong>
                      <span>15:00 - 16:00 </span>
                      <strong>10ans:16ans</strong>
                      <span>16:00 - 17:00 </span>
                      <strong>+16ans</strong>
                      <span>17:00 - 17:30 </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <small>18:00 - 22:00</small>
                    </td>
                    <td>
                      <b className="day"> Lun</b>
                      <strong>
                        Karaté <br /> Kids
                      </strong>
                      <span>18:00 - 19:00 </span>
                      <strong>Adulte</strong>
                      <span>19:00 - 20:00 </span>
                    </td>
                    <td>
                      <b className="day"> Mar</b>
                      <strong>
                        taekwondo <br /> kids 4ans:10ans
                      </strong>
                      <span>18:00 - 19:00 </span>
                      <strong>10ans:16ans</strong>
                      <span>19:00 - 20:00 </span>
                      <strong>+16ans</strong>
                      <span>20:00 - 21:30 </span>
                    </td>
                    <td>
                      <b className="day"> Mer</b>
                      <strong>
                        Karaté <br /> Kids
                      </strong>
                      <span>18:00 - 19:00 </span>
                      <strong>Adulte</strong>
                      <span>19:00 - 20:00 </span>
                    </td>
                    <td>
                      <b className="day"> Jeu</b>
                      <strong>
                        taekwondo <br /> kids 4ans:10ans
                      </strong>
                      <span>18:00 - 19:00 </span>
                      <strong>10ans:16ans</strong>
                      <span>19:00 - 20:00 </span>
                      <strong>+16ans</strong>
                      <span>20:00 - 21:30 </span>
                    </td>
                    <td>
                      <b className="day"> Ven</b>
                      <strong>
                        Karaté <br /> Kids
                      </strong>
                      <span>18:00 - 19:00 </span>
                      <strong>Adulte</strong>
                      <span>19:00 - 20:00 </span>
                    </td>
                    <td>
                      <b className="day"> Sam</b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <small>18:00 - 22:00</small>
                    </td>
                    <td>
                      <b className="day"> Lun</b>
                      <strong>Cours collectifs mix</strong>
                      <span>18:00 - 21:00 </span>
                    </td>
                    <td>
                      <b className="day"> Mar</b>
                      <strong>Cours collectifs 100% femmes</strong>
                      <span>18:30 - 21:00 </span>
                    </td>
                    <td>
                      <b className="day"> Mer</b>
                      <strong>Cours collectifs mix</strong>
                      <span>18:00 - 21:00 </span>
                    </td>
                    <td>
                      <b className="day">Jeu</b>
                      <strong>Cours collectifs 100% femmes</strong>
                      <span>18:30 - 21:00 </span>
                    </td>
                    <td>
                      <b className="day">Ven</b>
                      <strong>Cours collectifs 100% femmes</strong>
                      <span>18:30 - 21:00 </span>
                    </td>
                    <td>
                      <b className="day">Sam</b>
                      <strong>Cours collectifs mix</strong>
                      <span>18:00 - 21:00 </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <small>18:00 - 22:00</small>
                    </td>
                    <td>
                      <b className="day"> Lun</b>
                      <strong>
                        Judo,kickboxing <br /> kids 4ans:10ans
                      </strong>
                      <span>18:00 - 19:00 </span>
                      <strong>10ans:16ans</strong>
                      <span>19:00 - 20:00 </span>
                      <strong>+16ans</strong>
                      <span>20:00 - 21:30 </span>
                    </td>
                    <td>
                      <b className="day"> Mar</b>
                      <strong>King fu</strong>
                      <span>19:00 - 20:00 </span>
                    </td>
                    <td>
                      <b className="day"> Mer</b>
                      <strong>
                        Judo,kickboxing <br /> kids 4ans:10ans
                      </strong>
                      <span>18:00 - 19:00 </span>
                      <strong>10ans:16ans</strong>
                      <span>19:00 - 20:00 </span>
                      <strong>+16ans</strong>
                      <span>20:00 - 21:30 </span>
                    </td>
                    <td>
                      <b className="day"> Jeu</b>
                      <strong>King fu</strong>
                      <span>19:00 - 20:00 </span>
                    </td>
                    <td>
                      <b className="day">Ven</b>
                      <strong>
                        Judo,kickboxing <br /> kids 4ans:10ans
                      </strong>
                      <span>18:00 - 19:00 </span>
                      <strong>10ans:16ans</strong>
                      <span>19:00 - 20:00 </span>
                      <strong>+16ans</strong>
                      <span>20:00 - 21:30 </span>
                    </td>
                    <td>
                      <b className="day">Sam</b>
                      <strong>King fu</strong>
                      <span>19:00 - 20:00 </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Bounce>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
