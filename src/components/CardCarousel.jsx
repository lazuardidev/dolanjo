import React from "react";
// import bromo from "../assets/home/bromo.png"
// import bali from "../assets/home/cliff.png"
// import { wisataData } from "../assets/namaTempatWisata";

const CardCaraousel = ({prop}) => {
    // let id = [1,2,3.4,5,6]
    // const topTempatWisata = wisataData.slice(0,3)
    if (!prop) return null;

    const { nama, foto } = prop;
    // if (!deskripsi || !nama || !foto || foto.length === 0) return null;
    // console.log({prop})
    return (
        
        <article className="bg-white shadow-lg rounded-xl overflow-hidden w-[430px] h-[232px] flex mb-10">
                <h1 className="text-center w-full text-2xl text-white font-sans font-extrabold z-10" style={{
                    position: 'absolute',
                    bottom: '50%',
                    left: '40%',
                    transform: 'translate(-50%, -50%)',
                    // padding: '20px',
                    // backgroundColor: 'rgba(255, 255, 255, 0.75)',
                    borderRadius: '5px',
                    cursor: "pointer"
                    
                }}> 
                    {nama}
                </h1>
                <img className="object-fill w-full h-full inset-0"
                alt={nama}
                // alt=""
                src= {foto[0]}
                // src= {foto[0]}
                objectFit="cover"
                objectPosition="center"
                // text="bromo"
                />
        </article>
    )
}

export default CardCaraousel