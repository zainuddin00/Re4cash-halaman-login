import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gambar"></div>
      <div className="logincontainer">
        <div className="logincontent">
          <h2>Masuk Akun Re4Cash</h2>
          <div className="inputcontent">
            <input placeholder="Email" />
            <input placeholder="Password" />
            <div className="checkboxcontent">
              <div className="inputcheckbox">
                <input type="checkbox" />
                <p>Keep me logged in</p>
              </div>
              <p>Forgot password</p>
            </div>
            <div className="gariscontent">
              <div className="garis"/>
              <p>atau masuk dengan</p>
              <div className="garis"/>
            </div>
            <div className="logingf">
              <button><iconify-icon icon="logos:google-icon"></iconify-icon>Login Google</button>
              <button><iconify-icon icon="logos:facebook"></iconify-icon>Login Facebook</button>
            </div>
            <h4>Belum punya akun? <span>Daftar</span></h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
