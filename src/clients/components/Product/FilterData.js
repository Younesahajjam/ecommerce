export const color = [
    "Red",
    "orange",
    "Black",
    "marun",
     "pink",
     "Green",
    "yellow",

];

export const filtres = [
{
id:"color",
name:"Color",
options: [
  { value:"white", label: "White" },
  { value:"orange", label: "Orange" },
  { value:"red", label: "Red" },
  { value:"marun", label: "Marun" },
  { value:"pink", label: "Pink" },
  { value:"Green", label: "Green" },
  { value:"yellow", label: "Yellow" },
  
 ],
}, 

{
id:"size",
name:"size",
options:[
{value:"25",label:"25"},
{value:"35",label:"35"},
{value:"45",label:"45"},
],
},

];
export const singleFilter=[
{
id:"price",
name:"price",
options: [
{value: "1-3", label: "1dh To 3dh"},
{value: "17-27", label: "17dh To 27dh"},
{value: "19-29", label: "19dh To 29dh"},
{value: "22-30", label: "22dh To 30dh"},
{value: "25-33", label: "25dh To 33dh"},
],
},
{id: "disccount",
name:"Disccount Range",
options: [
{
value: "10",
label: "10% And Above",
},
{value:"20", label: "20% And Above"},
{value:"30", label: "30% And Above"},
{value:"40", label: "40% And Above"},
{value:"50", label: "50% And Above"},
{value:"60", label: "60% And Above"},
{value:"70", label: "70% And Above"},
],
},
{id:"stock",
name:"Availability",
options: [
{value : "in_stock",label:"In Stock"},
{value : "out_of_stock",label:"Out Of Stock"},
],
},
]
export const sortOptions = [
{name:"Price: Low to Hight", query:"price_low",current: false},
{name:"Price: Hight to Low", query:"price_hight",current: false},
];

  