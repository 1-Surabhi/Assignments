import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./LazyLoading/Components/Header";
import Footer from "./LazyLoading/Components/Footer";
import Main from "./LazyLoading/Pages/Main";


const Home = React.lazy(() => import("./LazyLoading/Pages/Main")); 
const Product = React.lazy(() => import("./LazyLoading/Pages/Item"));


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route index path="/" element={<> <Header/> <div  className="container d-flex justify-content-center align-items-center"
                style={{ minHeight: "85vh" }}>
                  <Suspense fallback={
                  <>
                   <div class="text-center">
                        <div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                  </>
                }> <Main/> </Suspense>
                  </div>
                  <Footer/></>}>

    </Route>
    <Route path="/product" element={<><Header />
              <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "85vh" }}>
                <Suspense fallback={
                    <>
                      <div class="text-center">
                        <div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </>}><Product />
                </Suspense>
              </div>
              <Footer/>
            </>
          }
        ></Route>
      </Routes></BrowserRouter>
  );
}

export default App;

      
      
