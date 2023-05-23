import React,{useState} from "react";
import Select from "react-select";
import style from "./Data.module.css"
import Feb22 from "../Charts/feb22";
import Jan22 from "../Charts/jan22";
import March22 from "../Charts/march22";
import April22 from "../Charts/april22";
import May22 from "../Charts/may22";
import June22 from "../Charts/june22";
import July22 from "../Charts/july22";
import Aug22 from "../Charts/aug22";
import Sep22 from "../Charts/sep22";    
import Oct22 from "../Charts/oct22";
import Nov22 from "../Charts/nov22";
import Dec22 from "../Charts/dec22";
import Jan23 from "../Charts/jan23";
import Feb23 from "../Charts/feb23";


function MonthData () {
    var MonthList = [
    {
        label: "January 2022",
        "path": <Jan22 />
    },
    {
        label: "February 2022",
        "path": <Feb22 />
    },
    {
        label: "March 2022",
        "path": <March22 />
        },
    {
        label: "April 2022",
        "path": <April22 />
    },
    {
        label: "May 2022",
        "path": <May22 />
    },{
        label: "June 2022",
        "path": <June22 />
    },{
        label: "July 2022",
        "path": <July22 />
    },{
        label: "August 2022",
        "path": <Aug22 />
    },{
        label: "September 2022",
        "path": <Sep22 />
    },{
        label: "October 2022",
        "path": <Oct22 />
    },{
        label: "November 2022",
        "path": <Nov22 />
    },{
        label: "December 2022",
        "path": <Dec22 />
    },{
        label: "January 2023",
        "path": <Jan23 />
    },{
        label: "February 2023",
        "path": <Feb23 />
    },
    
    ];
    
    const [result, monthvalue] = useState(MonthList.path);
    const monthHandler = e =>
    {
        monthvalue(e.path);
    }
    const [label, monthlabel] = useState(MonthList.label);
    const labelHandler = e => {
        monthlabel(e.label);
    }
    const [isLoggedIn, setIsLoggedIn] = useState(true);
     const handleLogout = () => {
        if (isLoggedIn) {
            setIsLoggedIn(false);
            // setShowProfile(false);
            alert("You have been logged out.");
            window.location.href = '/';
        }
    };
    return (
        <div>
            <div className={style.home_nav_container}>
                        <nav className={style.nav}>
                            <ul>
                                <li><a href="MonthData">Dashboard</a></li>
                                <li><a href="TransData">Transaction</a></li>
                                <li><a onClick={handleLogout}>Logout</a></li>
                            </ul>
                        </nav>
                    </div>
            <center>
                <h1 className={style.page_name}>Dashboard</h1>
                
            <Select className={style.select} options={MonthList} onChange={event => monthHandler(event) + labelHandler(event)} placeholder="Enter Month and Year" />
            <h2 className={style.label}>{label}</h2>
            
                <h1>{result}</h1>
            </center>
        </div>
    )
}



export default MonthData;