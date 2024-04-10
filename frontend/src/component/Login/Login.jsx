import { useState, useEffect } from 'react'
import './Login.css'

function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css';
    link.rel = 'stylesheet';
    link.integrity = 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);

    return () => {
      // Cleanup
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/214b84e5e5.js';
    script.crossOrigin = 'anonymous';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      document.head.removeChild(script);
    };
  }, []);


  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setError('Invalid username or password');
  };

  return (
    <section className="vh-100">
    <div className="wrapper"></div>

      <div className="container-fluid h-custom">
        <div className="contain">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="/images/logo.png" className="img-fluid" alt="Sample image" style={{marginLeft:'20%'}}/>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <div className="logLabel">
                  <h1>Login</h1>
                </div>

                {/* Email input */}
                <div className="form-outline mb-4" >
                  <input type="email" id="email" className="form-control form-control-lg" placeholder="Email address" />
                </div>

                {/* Password input */}
                <div className="form-outline mb-3" >
                  <input type="password" id="password" className="form-control form-control-lg" placeholder="Enter password" />
                </div>

                {error && <div className="text-danger mb-3">{error}</div>}

                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">Forgot password?</a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', borderRadius: '20px', paddingLeft: '2.5rem', paddingRight: '2.5rem', backgroundColor: 'goldenrod',  }}>Login</button>
                  <p className="small fw-bold mt-2 pt-1 mb-0" style={{ marginLeft: '20%' }}>Don't have an account? <a href="#!" className="link-danger">Register</a></p>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <hr />
                </div>

                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button type="button" className="btn btn-primary btn-floating mx-1" style={{ width: '70px', borderRadius: '15px', backgroundColor: 'goldenrod'}}>
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" className="btn btn-primary btn-floating mx-1" style={{ width: '70px', borderRadius: '15px', backgroundColor: 'goldenrod' }}>
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button type="button" className="btn btn-primary btn-floating mx-1" style={{ width: '70px', borderRadius: '15px', backgroundColor: 'goldenrod' }}>
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App
