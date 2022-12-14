import { Form, Formik } from "formik";
import EditAvatar from "Components/Avatars/EditAvatar";

interface UpdateSettingsFormProps {}

const UpdateSettingsForm: React.FunctionComponent<
  UpdateSettingsFormProps
> = () => {
  return (
    <>
      <Formik
        initialValues={{
          avatar: "",
          fname: "Max",
          lname: "Smith",
          company: "MonteDelgallo",
          phone: "044 3276 454 932",
        }}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {({ handleChange, handleSubmit, values }) => {
          return (
            <Form className="row gap-lg-5 gap-2" onSubmit={handleSubmit}>
              <div className="row justify-content-between align-items-center">
                <label className="col-lg-2 col-3 h5">Avatar </label>
                <div className="col-lg-10 col-6">
                  <EditAvatar />
                </div>
              </div>
              <div className="row row justify-content-between align-items-center">
                <label className="col-lg-2 col-12 h5">Full Name </label>
                <div className="form-group mb-4 col-6 col-lg-5">
                  <input
                    type="text"
                    className="form-control"
                    name="fname"
                    onChange={handleChange}
                    value={values.fname}
                  />
                </div>

                <div className="form-group mb-4 col-6 col-lg-5">
                  <input
                    type="text"
                    className="form-control"
                    name="lname"
                    onChange={handleChange}
                    value={values.lname}
                  />
                </div>
              </div>
              <div className="row row justify-content-between align-items-center">
                <label className="col-lg-2 col-6  h5">Company</label>
                <div className="form-group mb-4 col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    name="company"
                    onChange={handleChange}
                    value={values.company}
                  />
                </div>
              </div>
              <div className="row row justify-content-between align-items-center">
                <label className="col-lg-2 col-6 h5">Contact Phone</label>
                <div className="form-group mb-4 col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    onChange={handleChange}
                    value={values.phone}
                  />
                </div>
              </div>
              <div className="row row justify-content-between align-items-center">
                <label className="col-lg-2 col-6  h5">Language</label>
                <div className="form-group mb-4 col-md-10">
                  <div className="select-wrapper">
                    <select defaultValue="en">
                      <option value="en">English</option>
                      <option value="it">Italian</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row row justify-content-between align-items-center">
                <label className="col-lg-2 col-6 h5">Communication</label>
                <div className="form-group mb-4 col-md-10">
                  <div>
                    <div className="form-check form-check-inline">
                      <input id="checkbox2" type="checkbox" />
                      <label htmlFor="checkbox2">Email </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input id="checkbox3" type="checkbox" />
                      <label htmlFor="checkbox3">Phone</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row row justify-content-between align-items-center checkbox-postion">
                <div className="form-check col-lg-3 col-12">
                  <div className="toggles">
                    <label
                      className="col-lg-1 col-6  h5"
                      htmlFor="toggleEsempio1a"
                    >
                      Allow Marketing
                      <input type="checkbox" id="toggleEsempio1a" />
                      <span className="lever"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                {false ? (
                  <div className="spinner-grow text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <button type="submit" className="btn btn-outline-primary">
                    Save Changes
                  </button>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default UpdateSettingsForm;
