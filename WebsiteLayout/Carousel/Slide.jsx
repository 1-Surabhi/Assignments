import React from 'react'
import Button from '@mui/material/Button';

function Slide({ img, mainText1, mainText2, subText }) {
    return (
        <div style={{ height: "80vh", backgroundImage: `url(${img})`, backgroundPosition:"center", borderRadius: "20px" }}>

            <div style={{ width: "80%", padding: "100px 100px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <h1 style={{ fontSize: "4.5rem", lineHeight: "1", color: "#253d4e" }}>{mainText1}<br />{mainText2}</h1>
                <p style={{ fontSize: "2rem", color: "#7e7e7e" }}>{subText}</p>
                <div style={{ padding: "20px 0" , display:"flex" }}>
                    <input type="text" placeholder='Your email address' style={{ padding: "20px", borderRadius: "50px", width: "50%", border: "none", fontSize: "1.2rem" ,outline:"none" }} />
                    <Button size='large' variant="contained" style={{ backgroundColor: "#3bb77e" , borderRadius:"50px" , marginLeft:"-50px", padding:"0 30px" , textTransform:"capitalize"}}>
                        Subscribe
                    </Button>

                </div>
            </div>
        </div>
    )
}
export default Slide