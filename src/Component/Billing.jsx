import React, { useEffect, useState } from 'react'
import {
    Districts,
    Countries,
    States,
    Thanas,
    Unions,
    Zipcodes,
    StreetAddress,
  } from "../Data";


const Billing = ({details, setDetails}) => {
     // Country State Set 
  const [country, setCountry] = useState([]);
  const [countryState, setCountryState] = useState([]);
  const [district, setDistrict] = useState([]);
  const [thanas, setThanas] = useState([]);
  const [union, setUnion] = useState([]);
  const [zipcode, setZipcode] = useState([]);
  const [address, setAddress] = useState([]);

  // Button Controller
  const [divBtn, setDivBtn] = useState(true);
  const [districtBtn, setDistrictBtn] = useState(true);
  const [cityBtn, setCityBtn] = useState(true);
  const [unionBtn, setUnionBtn] = useState(true);
  const [zipcodeBtn, setZipcodeBtn] = useState(true);
  const [villageBtn, setVillageBtn] = useState(true);
 

   // handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  useEffect(() => {
    setCountry(Countries);
  }, []);

  const handleCountry = (e) => {
    const { name, value } = e.target;
    console.log(value)
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
    const dt = States.filter((x) => x.countryId === value );
    setCountryState(dt);
    setDivBtn(false);
  };

  const handleStates = (e) => {
    const { name, value } = e.target;
    console.log(name)
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
    const dt = Districts.filter((x) => x.stateId === value);
    setDistrict(dt);
    setDistrictBtn(false);
  };

  const handleDistricts = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
    const dt = Thanas.filter((x) => x.districtId === value);
    setThanas(dt);
    setCityBtn(false);
  };
  const handleThanas = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
    const dt = Unions.filter((x) => x.thanaId === value);
    setUnion(dt);
    setUnionBtn(false);
  };
  const handleUnions = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
    const dt = Zipcodes.filter((x) => x.unionId === value);
    setZipcode(dt);
    setZipcodeBtn(false);
  };
  const zipCodes = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
    const dt = StreetAddress.filter((x) => x.zipId === value);
    setAddress(dt);
    setVillageBtn(false);
  };
  return (
    <div className="address billing">
          <h5>Billing Address</h5>
          <div>
            <label htmlFor="">
              <b>Attention</b>
            </label>{" "}
            <br />
            <input
              type="text"
              name="name"
              required
              placeholder="Enter person/site name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Country</label> <br />
            <select name="country" onChange={handleCountry} required>
              <option value="" hidden selected>
                Select Country
              </option>
              {country && country !== undefined
                ? country.map((ctr, index) => {
                    return (
                      <option key={index} value={ctr.id}>
                        {ctr.name}
                      </option>
                    );
                  })
                : "No Country"}
            </select>{" "}
          </div>
          <div>
            <label htmlFor="">Division/State</label> <br />
            <select
              id="ddlStates"
              name="division"
              disabled={divBtn}
              onChange={handleStates} required
            >
              <option value="0">Select State</option>
              {countryState && countryState !== undefined
                ? countryState.map((ctr, index) => {
                    return (
                      <option key={index} value={ctr.id}>
                        {ctr.name}
                      </option>
                    );
                  })
                : "No State"}
            </select>{" "}
          </div>
          <div>
            <label htmlFor="">District</label> <br />
            <select
              id="ddlDistricts"
              name="district"
              disabled={districtBtn}
              onChange={handleDistricts} required
            >
              <option value="0">Select District</option>
              {district && district !== undefined
                ? district.map((ctr, index) => {
                    return (
                      <option key={index} value={ctr.id}>
                        {ctr.name}
                      </option>
                    );
                  })
                : "No Districts"}
            </select>{" "}
          </div>
          <div>
            <label htmlFor="">City/Sub District/Thana</label> <br />
            <select
              id="ddlThanas"
              name="city"
              disabled={cityBtn}
              onChange={handleThanas} required
            >
              <option value="0">Select Thana</option>
              {thanas && thanas !== undefined
                ? thanas.map((ctr, index) => {
                    return (
                      <option key={index} value={ctr.id}>
                        {ctr.name}
                      </option>
                    );
                  })
                : "No Thanas"}
            </select>{" "}
          </div>
          <div>
            <label htmlFor="">Union/Area/Town</label> <br />
            <select
              id="ddlThanas"
              name="union"
              disabled={unionBtn}
              onChange={handleUnions} required
            >
              <option value="0">Select Union</option>
              {union && union !== undefined
                ? union.map((ctr, index) => {
                    return (
                      <option key={index} value={ctr.id}>
                        {ctr.name}
                      </option>
                    );
                  })
                : "No Unions"}
            </select>{" "}
          </div>
          <div>
            <label htmlFor="">Zipcode</label> <br />
            <select
              id="ddlThanas"
              name="zipcode"
              disabled={zipcodeBtn}
              onChange={zipCodes} required
            >
              <option value="0">Select Zipcode</option>
              {zipcode && zipcode !== undefined
                ? zipcode.map((ctr, index) => {
                    return (
                      <option key={index} value={ctr.id}>
                        {ctr.name}
                      </option>
                    );
                  })
                : "No Unions"}
            </select>{" "}
          </div>
          <div>
            <label htmlFor="">Street Address/Village</label> <br />
            <select
              id="ddlThanas"
              name="village"
              disabled={villageBtn}
              onChange={handleChange} required
            >
              <option value="0">Select Address</option>
              {address && address !== undefined
                ? address.map((ctr, index) => {
                    return (
                      <option key={index} value={ctr.id}>
                        {ctr.name}
                      </option>
                    );
                  })
                : "No Unions"}
            </select>{" "}
            <br />
          </div>
          <div>
            <label htmlFor="">
              <b>House/Suite/Apartment No</b>
            </label>
            <br />
            <input type="text" name="house" onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="">
              <b>Phone</b>
            </label>
            <br />
            <input type="number" name="phone" onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="">
              {" "}
              <b>Fax</b>
            </label>
            <br />
            <input type="text" name="fax" onChange={handleChange} required />
          </div>
        </div>
  )
}

export default Billing