import React, { useState } from "react";
import doctor from "./../images/doctor.jpg";
import { ChevronDown, Search, Check } from "react-feather";
import "./index.css";
import MemberImage from "./MemberImage";

const Employee = () => {
  const data = [{ id: 1, name: "Dr. Siegfried Tausend" }];
  const [searchBar, setSearchBar] = useState();
  const [employeeSelectAll, setEmployeeSelectAll] = useState();
  const [employeeSelected, setEmployeeSelected] = useState([]);
  return (
    <div
      style={{
        height: "1357.61px",
        width: "1136.29px"
      }}
    >
      <h5
        style={{
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontSize: "24px",
          fontWeight: 500
        }}
      >
        Select employee dropdown
      </h5>
      <label>
        <div
          style={{
            borderRadius: "16px",
            backgroundColor: "#F0F5FB",
            width: "365px",
            display: "flex",
            padding: "11px 16px"
          }}
        >
          <MemberImage
            borderColor={"#F0F5FB"}
            data={{
              total: 12,
              members: [
                { name: "Aditya", image: doctor },
                { name: "Mohit", image: doctor }
              ]
            }}
          />
          <p
            style={{
              margin: 0,
              verticalAlign: "center",
              fontSize: "13px",
              fontWeight: 500,
              fontFamily: "Montserrat",
              lineHeight: "140%",
              // top: "8px",
              alignSelf: "center",
              left: "30px",
              position: "relative",
              letterSpacing: "0.01em",
              height: "18px",
              flex: "none",
              order: 1,
              flexGrow: 0,
              color: "#7E98BA"
            }}
          >
            Select employee
          </p>
          <ChevronDown
            size={10}
            style={{ position: "relative", left: "320px", alignSelf: "center" }}
          />
        </div>
        <select
          style={{
            display: "none"
          }}
        ></select>
      </label>
      {/* Drop Down */}
      <div
        style={{
          background: "#142A51",
          width: "376px",
          padding: "10px",
          borderRadius: "12px",
          display: "absolute",
          left: "40px"
          // height: "20px"
        }}
      >
        <label
          style={{
            backgroundColor: "#1C3663",
            display: "flex"
          }}
        >
          <Search
            size={17.06}
            color={"#6F8BBC"}
            style={{ padding: "15px 5px 15px 15px" }}
          />
          <input
            placeholder={"Search employee..."}
            style={{
              color: "#6F8BBC",
              fontSize: "13px",
              fontWeight: 400,
              fontFamily: "Montserrat",
              border: 0,
              outline: 0,
              padding: "15px 5px",

              backgroundColor: "#1C3663"
            }}
          />
        </label>
        <div style={{}}>
          <label
            style={{
              cursor: "pointer",
              display: "flex",
              padding: "14px 5px",
              alignItems: "center",
              position: "relative"
            }}
          >
            <MemberImage
              borderColor={"#142A51"}
              data={{
                total: data.length,
                members: [
                  { name: "Aditya", image: doctor },
                  { name: "Mohit", image: doctor }
                ]
              }}
            />
            <span
              style={{
                position: "relative",
                left: "40px",
                color: "#DAE2EF",
                fontFamily: "Montserrat",
                fontSize: "13px"
              }}
            >
              All employee
            </span>
            <input
              type="checkbox"
              style={{ opacity: 0 }}
              onChange={(event) => {
                console.log(event.target.checked);
                setEmployeeSelectAll(event.target.checked);
                if (event.target.checked) {
                  setEmployeeSelected(data);
                } else {
                  setEmployeeSelected([]);
                }
              }}
            />

            <span
              style={{
                background: `rgb(59, 140, 216)`,
                borderRadius: "5px",
                height: "16px",
                width: "16px",
                position: "relative",
                left: "200px"
              }}
            >
              <Check size={15} color={"white"} />
            </span>
            <span className={"customCheckbox"}></span>
          </label>
          {/* Employee List */}
          {data.map((item) => {
            return (
              <label
                style={{
                  cursor: "pointer",
                  display: "flex",
                  padding: "14px 5px",
                  alignItems: "center",
                  position: "relative"
                }}
              >
                <MemberImage
                  borderColor={"#142A51"}
                  data={{
                    total: 12,
                    members: [
                      { name: "Aditya", image: doctor },
                      { name: "Mohit", image: doctor }
                    ]
                  }}
                />
                <span
                  style={{
                    position: "relative",
                    left: "40px",
                    color: "#DAE2EF",
                    fontFamily: "Montserrat",
                    fontSize: "13px"
                  }}
                >
                  All employee
                </span>
                <input
                  type="checkbox"
                  style={{ opacity: 0 }}
                  onChange={(event) => {
                    console.log(event.target.checked);
                    setEmployeeSelectAll(event.target.checked);
                    if (event.target.checked) {
                      setEmployeeSelected(data);
                    } else {
                      setEmployeeSelected([]);
                    }
                  }}
                />

                <span
                  style={{
                    background: `rgb(59, 140, 216)`,
                    borderRadius: "5px",
                    height: "16px",
                    width: "16px",
                    position: "relative",
                    left: "200px"
                  }}
                >
                  <Check size={15} color={"white"} />
                </span>
                <span className={"customCheckbox"}></span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};
const EmployeeBefore = () => {
  return (
    <div
      style={{
        height: "1357.61px",
        width: "1136.29px"
      }}
    >
      <h5
        style={{
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontSize: "24px",
          fontWeight: 500
        }}
      >
        Select employee dropdown
      </h5>
      <label>
        <div
          style={{
            // backgroundColor: "#F0F5FB",
            // border: "0px",
            // borderRadius: "16px"
            backgroundColor: "#F0F5FB",
            position: "relative",
            width: "376px",
            height: "1000px",
            display: "flex"
          }}
        >
          <div style={{ position: "absolute", display: "flex" }}>
            <div
              style={{
                left: 0,
                top: 0,
                width: "32px",
                height: "32px",
                border: "3px  solid #F0F5FB",
                borderRadius: "20px",
                backgroundColor: "#314363",
                color: "white",
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize: "normal",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "10"
              }}
            >
              12
            </div>
            <div
              style={{
                position: "absolute",
                left: "12px",
                zIndex: "5",
                backgroundImage: `url(${doctor})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "32px",
                width: "32px",
                border: "3px solid #F0F5FB",
                borderRadius: "20px"
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                backgroundImage: `url(${doctor})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                left: "24px",
                zIndex: "2",
                width: "32px",
                height: "32px",
                border: "3px solid #F0F5FB",
                borderRadius: "20px"
              }}
            ></div>
          </div>
          <p
            style={{
              margin: 0,
              verticalAlign: "center",
              fontSize: "13px",
              fontWeight: 500,
              fontFamily: "Montserrat",
              lineHeight: "140%",
              top: "7px",
              left: "64px",
              position: "absolute",
              letterSpacing: "0.01em",
              height: "18px",
              flex: "none",
              order: 1,
              flexGrow: 0,
              color: "#7E98BA"
            }}
          >
            Select employee
          </p>
        </div>
        <select
          style={{
            display: "none"
          }}
        ></select>
      </label>
    </div>
  );
};

export default Employee;
