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
          </div>
          <Bounce bottom>
            <div className="col-lg-12 py-5 col-md-12 col-12">
              <h2 className="text-white1 text-center">COURS COLLECTIFS</h2>
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
                    <th>
                      LUNDI <br /> MIX
                    </th>
                    <th>
                      MARDI <br />
                      100% FEMMES
                    </th>
                    <th>
                      MERCREDI <br />
                      MIX
                    </th>
                    <th>
                      JEUDI <br />
                      100% FEMMES
                    </th>
                    <th>
                      VENDREDI <br />
                      100% FEMMES
                    </th>
                    <th>
                      SAMEDI <br />
                      MIX
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <small>18H30-19H30</small>
                    </td>
                    <td>
                      <b className="day"> Lun</b>
                      <strong>R.M.G</strong>
                      <small
                        style={{
                          color: "#ffffff80",
                          textTransform: "lowercase",
                        }}
                      >
                        renforcement musculaire générale
                      </small>
                    </td>
                    <td>
                      <b className="day"> Mar</b>

                      <strong>C.A.F</strong>

                      <small
                        style={{
                          color: "#ffffff80",
                          textTransform: "lowercase",
                        }}
                      >
                        cuisses abdos et fessiers
                      </small>
                    </td>
                    <td>
                      <b className="day"> Mer</b>

                      <strong> SPINNING</strong>
                    </td>
                    <td>
                      <b className="day"> Jeu</b>

                      <strong>CARDIO BOXING</strong>
                    </td>
                    <td>
                      <b className="day"> Ven</b>

                      <strong>SPINNING</strong>
                    </td>
                    <td>
                      <b className="day"> Sam</b>

                      <strong> CIRCUIT TRAINING</strong>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <small>19H30-20H30</small>
                    </td>
                    <td>
                      <b className="day"> Lun</b>
                      <strong>SPINNING</strong>
                    </td>
                    <td>
                      <b className="day"> Mar</b>
                      <strong>SPINNING</strong>
                    </td>
                    <td>
                      <b className="day"> Mer</b>
                      <strong>FIT COMBAT</strong>
                    </td>
                    <td>
                      <b className="day"> Jeu</b>
                      <strong>T.A.F</strong>
                      <small
                        style={{
                          color: "#ffffff80",
                          textTransform: "lowercase",
                        }}
                      >
                        Taille Abdos Fessiers
                      </small>
                    </td>
                    <td>
                      <b className="day"> Ven</b>
                      <strong>BODY BARRE</strong>
                    </td>
                    <td>
                      <b className="day"> Sam</b>
                      <strong>BODY BARRE</strong>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <small>20H30-21H00</small>
                    </td>
                    <td>
                      <b className="day"> Lun</b>
                      <strong>STRETCHING ABDOS</strong>
                    </td>
                    <td>
                      <b className="day"> Mar</b>
                      <strong>YOGA STRETCHING</strong>
                    </td>
                    <td>
                      <b className="day"> Mer</b>
                      <strong>BELGA GRIT</strong>
                    </td>
                    <td>
                      <b className="day">Jeu</b>
                      <strong>AEROBIC ZUMBA</strong>
                    </td>
                    <td>
                      <b className="day">Ven</b>
                      <strong>BELGA ATTACK</strong>
                    </td>
                    <td>
                      <b className="day">Sam</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Bounce>
          <Bounce top>
            <div className="col-lg-12 py-5 col-md-12 col-12">
              <h2
                className="text-white1 text-center "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                PLANNING ARTS MARTIAUX
              </h2>
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
                    <th>JUDO</th>
                    <th>TEAKWONDO</th>
                    <th>KARATE</th>
                    <th>KUNG-FU</th>
                    <th>MMA</th>
                    <th>KICK-BOXING</th>
                    <th>GYMASTIQUE (max 12 ans)</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <small>KIDS DE 4 à 10 ANS : 18H00-19H00</small>
                    </td>
                    <td>
                      <b className="day"> JUDO</b>
                      <strong>LUN-MER-VEN</strong>
                    </td>
                    <td>
                      <b className="day"> TEAKWONDO</b>

                      <strong>
                        MAR-JEUDI-SAMEDI <br />
                        SAM: DE 15H00-16H00
                      </strong>
                    </td>
                    <td>
                      <b className="day"> KARATE</b>

                      <strong> LUN-MER-VEN</strong>
                    </td>
                    <td>
                      <b className="day"> KUNG-FU </b>
                    </td>
                    <td>
                      <b className="day"> MMA</b>
                    </td>
                    <td>
                      <b className="day"> KICK-BOXING</b>

                      <strong> LUN-MER-VEN</strong>
                    </td>
                    <td>
                      <b className="day"> GYMASTIQUE (MAX 12 ANS)</b>

                      <strong>
                        MARDI : DE 18H30-19H30 <br />
                        SAMEDI : DE 10H-11H00
                      </strong>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <small>ADO DE 10 à 16 ANS : 19H00-20H00</small>
                    </td>
                    <td>
                      <b className="day"> JUDO</b>
                      <strong>LUN-MER-VEN</strong>
                    </td>
                    <td>
                      <b className="day"> TEAKWONDO</b>
                      <strong>
                        MAR-JEU-SAMEDI <br />
                        SAM: DE 16H00-17H00
                      </strong>
                    </td>
                    <td>
                      <b className="day"> KARATE</b>
                      <strong>
                        LUN-MER-VEN <br />
                        DE 19H00--20H00
                      </strong>
                    </td>
                    <td>
                      <b className="day"> KUNG-FU</b>

                      <strong>MAR-JEUDI-SAMEDI</strong>
                    </td>
                    <td>
                      <b className="day"> MMA</b>
                    </td>
                    <td>
                      <b className="day"> KICK-BOXING </b>
                      <strong>LUN-MER-VEN</strong>
                    </td>
                    <td>
                      <b className="day"> GYMASTIQUE (MAX 12 ANS)</b>
                      <strong>
                        MARDI : DE 18H00-19H00 <br />
                        SAMEDI : DE 11H-12H00
                      </strong>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <small>SENIOR + 16 ANS : 20H00-21H30</small>
                    </td>
                    <td>
                      <b className="day"> JUDO</b>
                      <strong>LUN-MER-VEN</strong>
                    </td>
                    <td>
                      <b className="day"> TEAKWONDO</b>
                      <strong>
                        MAR-JEU-SAMEDI <br />
                        SAM : DE 17H00-18H00
                      </strong>
                    </td>
                    <td>
                      <b className="day"> KARATE</b>
                      <strong>
                        LUN-MER-VEN <br /> DE 19H00--20H00
                      </strong>
                    </td>
                    <td>
                      <b className="day">KUNG-FU </b>
                    </td>
                    <td>
                      <b className="day">MMA</b>
                      <strong>
                        MAR-JEUDI-SAMEDI** <br />
                        DE 19H00--21H00
                      </strong>
                    </td>
                    <td>
                      <b className="day">KICK-BOXING</b>
                      <strong>LUN-MER-VEN</strong>
                    </td>
                    <td>
                      <b className="day">GYMASTIQUE (MAX 12 ANS)</b>
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
