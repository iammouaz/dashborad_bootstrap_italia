function App() {
  return (
    <>
      <div className="d-flex">
        asdsadsa
        <div className="accordion" id="accordionExample1">
          <div className="accordion-item">
            <h2 className="accordion-header " id="heading1">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
                aria-expanded="true"
                aria-controls="collapse1"
              >
                Elemento Accordion #1
              </button>
            </h2>
            <div
              id="collapse1"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample1"
              role="region"
              aria-labelledby="heading1"
            >
              <div className="accordion-body">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices
                eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget
                semper nibh. Proin enim nulla, egestas ac rutrum eget,
                ullamcorper nec turpis.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header " id="heading2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                Elemento Accordion #2
              </button>
            </h2>
            <div
              id="collapse2"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample1"
              role="region"
              aria-labelledby="heading2"
            >
              <div className="accordion-body">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices
                eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget
                semper nibh. Proin enim nulla, egestas ac rutrum eget,
                ullamcorper nec turpis.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header " id="heading3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
                aria-expanded="false"
                aria-controls="collapse3"
              >
                Elemento Accordion #3
              </button>
            </h2>
            <div
              id="collapse3"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample1"
              role="region"
              aria-labelledby="heading3"
            >
              <div className="accordion-body">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices
                eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget
                semper nibh. Proin enim nulla, egestas ac rutrum eget,
                ullamcorper nec turpis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
