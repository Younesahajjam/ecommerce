import React from "react"
import MainCrosel from "../../components/navigation/HomeCarosel/MainCrosel"
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";
import { carr_produit } from "../../../Data/carr_produit";
const HomePage= () =>{
    return (
        <div>
            <MainCrosel/>
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
            <HomeSectionCarosel data={carr_produit} sectionName={"Produits de construction"}/>   
            <HomeSectionCarosel data={carr_produit} sectionName={"Produits mitalique"}/>   
            <HomeSectionCarosel data={carr_produit} sectionName={"Produits fond"}/>   
            <HomeSectionCarosel data={carr_produit}sectionName={"Produits cuivre"}/>   
            <HomeSectionCarosel data={carr_produit}sectionName={"Produits cimat"}/>   
            </div>
        </div>
    )
} 
export default HomePage ;