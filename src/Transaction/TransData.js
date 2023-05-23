import React,{useState, useEffect} from "react";
import Select from "react-select";
import JanT22 from "../Tables/janT22";
import FebT22 from "../Tables/febt22";
import MarchT22 from "../Tables/marcht22";
import MayT22 from "../Tables/mayt22";
import JuneT22 from "../Tables/junet22";
import JulyT22 from "../Tables/julyt22";
import AugT22 from "../Tables/augt22";
import SepT22 from "../Tables/sept22";
import OctT22 from "../Tables/octt22";
import NovT22 from "../Tables/novt22";
import DecT22 from "../Tables/dect22";
import style from "../Dashboard/Data.module.css"



function MonthData() {
     const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // Retrieve the selected option from localStorage
    const storedOption = localStorage.getItem("selectedOption");
    if (storedOption) {
      setSelectedOption(JSON.parse(storedOption));
    }
  }, []);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    localStorage.setItem("selectedOption", JSON.stringify(option));
  };
    var MonthList = [
    {
        label: "January 2022",
        "path": <JanT22 />
    },
    {
        label: "February 2022",
        "path": <FebT22 />
        },
        {
            label: "March 2022",
            "path": <MarchT22 />
        },
        {
            label: "May 2022",
            "path": <MayT22 />
        },
        {
            label: "June 2022",
            "path": <JuneT22 />
        },
        {
            label: "July 2022",
            "path": <JulyT22 />
        },
        {
            label: "August 2022",
            "path": <AugT22 />
        },
        {
            label: "September 2022",
            "path": <SepT22 />
        },
        {
            label: "October 2022",
            "path": <OctT22 />
        },
        {
            label: "November 2022",
            "path": <NovT22 />
        },
        {
            label: "December 2022",
            "path": <DecT22 />
        }
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
                <h1 className={style.page_name}>Transaction History</h1>
            </center>
            <Select className={style.select} value={selectedOption}
                options={MonthList} onChange={event => monthHandler(event) + labelHandler(event) + { handleOptionChange }} placeholder="Enter Month and Year" />
            <center>
            <h2 className={style.label}>{label}</h2>
            
                <h1>{result}</h1>
            </center>
        </div>
    )
}



export default MonthData;