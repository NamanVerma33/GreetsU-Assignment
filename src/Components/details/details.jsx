// import React from "react";
// import "./details.css";
// import logo from "../Assests/greetsu-favicon.b43044faff18cc4fe7f572ee5fe84cef.svg";
// import "./milestone.css";
// import { useState } from "react";

// const details = () => {
//   const [formData, setFormData] = useState({
//     yourName: "",
//     partnerName: "",
//     coupleName: "",
//     yourImageName: null,
//     partnerImageName: null,
//     coupleImageName: null,
//     milestones: [
//       { milestone: "", date: "" },
//       { milestone: "", date: "" },
//     ],
//   });

//   // Add a new milestone
//   const addMilestone = () => {
//     setFormData((prevState) => ({
//       ...prevState,
//       milestones: [...prevState.milestones, { milestone: "", date: "" }],
//     }));
//   };

//   const handleMilestoneChange = (index, event) => {
//     const { name, value } = event.target;

//     const updatedMilestones = formData.milestones.map((milestone, i) =>
//       i === index ? { ...milestone, [name]: value } : milestone
//     );
//     setFormData({ ...formData, milestones: updatedMilestones });
//   };

//   const handleDelete = (indexToDelete) => {
//     if (formData.milestones.length > 2) {
//       const updatedMilestones = formData.milestones.filter(
//         (_, index) => index !== indexToDelete
//       );
//       setFormData({ ...formData, milestones: updatedMilestones });
//     } else {
//       alert("At least 2 milestones are required.");
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value, type, files } = event.target;
//     setFormData({
//       ...formData,
//       [name]: type === "file" ? files[0] : value,
//     });
//   };

//   const handleFileChange = (event) => {
//     const { id, files } = event.target;
//     const file = files[0];
//     if (file) {
//       const fileName = file.name;
//       switch (id) {
//         case "your-image":
//           setFormData({ ...formData, yourImageName: fileName });
//           break;
//         case "partner-image":
//           setFormData({ ...formData, partnerImageName: fileName });
//           break;
//         case "couple-image":
//           setFormData({ ...formData, coupleImageName: fileName });
//           break;
//         default:
//           break;
//       }
//     }
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit} id="LoanForm">
//         <div className="container">
//           <h1 style={{ color: "#2a2f4f" }}>Create your Love Timeline</h1>
//           <div className="input-container">
//             <h2 style={{ color: "#2a2f4f" }}>Add your details</h2>

//             <label htmlFor="">Your Name</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               name="yourName"
//               value={formData.yourName}
//               onChange={handleInputChange}
//               required
//             />
//             <label htmlFor="">Partner Name</label>
//             <input
//               type="text"
//               placeholder="Enter your parnter name"
//               name="partnerName"
//               value={formData.partnerName}
//               onChange={handleInputChange}
//               required
//             />
//             <label htmlFor="">Couple Name</label>
//             <input
//               type="text"
//               placeholder="Eg.. Virat & Anushka => Virushka"
//               name="coupleName"
//               value={formData.coupleName}
//               onChange={handleInputChange}
//               required
//             />
//             <label htmlFor="">
//               Your image <div>(recommended aspect ratio of image 1:1)</div>
//             </label>
//             <input
//               className="input-css"
//               style={{ display: "None" }}
//               type="file"
//               id="a"
//               name="yourImage"
//               onChange={(e) => handleFileChange(e, "yourImage")}
//             />
//             <label
//               style={{ cursor: "pointer" }}
//               htmlFor="a"
//               className="label-css"
//             >
//               Choose File
//             </label>
//             {formData.yourImageName && (
//               <span className="imagename">{formData.yourImageName}</span>
//             )}
//             <label htmlFor="">
//               Partner image <div>(recommended aspect ratio of image 1:1)</div>
//             </label>
//             <input
//               style={{ display: "None" }}
//               type="file"
//               id="ab"
//               className="input-css"
//               name="partnerImage"
//               onChange={(e) => handleFileChange(e, "yourImage")}
//             />
//             <label
//               style={{ cursor: "pointer", textAlign: "center" }}
//               htmlFor="ab"
//               className="label-css"
//             >
//               {" "}
//               Choose File
//             </label>
//             {formData.yourImageName && (
//               <span className="imagename">{formData.partnerImageName}</span>
//             )}
//             <label htmlFor="">
//               Couple Image <div>(optional)</div>
//             </label>
//             <input
//               style={{ display: "None" }}
//               type="file"
//               id="abc"
//               className="input-css"
//               name="coupleImage"
//               onChange={(e) => handleFileChange(e, "yourImage")}
//             />
//             <label
//               style={{ cursor: "pointer" }}
//               htmlFor="a"
//               className="label-css custom-file-label"
//             >
//               Choose File
//             </label>
//             {formData.yourImageName && (
//               <span className="imagename">{formData.coupleImageName}</span>
//             )}
//           </div>
//         </div>
//         <div className="container-mile">
//           <h2 style={{ color: "#2a2f4f" }}>Add your journey milestones</h2>
//           <div className="inner-container-mile">
//             <div className="event">
//               <div>
//                 <label>Milestone 1</label>
//                 <input
//                   type="text"
//                   placeholder="Milestone 1"
//                   value=""
//                   style={{ width: "100%" }}
//                   class="date"
//                 />
//               </div>

//               <div>
//                 <label style={{ position: "relative" }}>
//                   Date of Milestone 1
//                 </label>
//                 <div class="delete-milestone"></div>
//                 <input type="date" class="date" />
//               </div>
//               <div className="delete">
//                 <svg
//                   stroke="currentColor"
//                   fill="currentColor"
//                   stroke-width="0"
//                   viewBox="0 0 24 24"
//                   height="1em"
//                   width="1em"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path fill="none" d="M0 0h24v24H0V0z"></path>
//                   <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"></path>
//                 </svg>
//               </div>
//             </div>
//             <div className="create-btn">
//               <button>Add Milestone</button>
//             </div>
//           </div>
//         </div>
//         <div className="last">
//           <button type="submit" className="btn">
//             Create Timeline
//           </button>
//         </div>
//         <div className="logo">
//           <div className="img">
//             <a href="https://www.greetsu.com/">
//               <img src={logo} alt="" className="header-img" />
//             </a>
//           </div>
//           <div className="content">
//             <p id="team">from team</p>
//             <p id="greet">GreetsU</p>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default details;

import React, { useState } from "react"; // Import useState
import "./details.css";
import logo from "../Assests/greetsu-favicon.b43044faff18cc4fe7f572ee5fe84cef.svg";
// import milestone from "../milestones/milestone";
// import "./milestone.css";

const Details = () => {
  const [formData, setFormData] = useState({
    yourName: "",
    partnerName: "",
    coupleName: "",
    yourImageName: null,
    partnerImageName: null,
    coupleImageName: null,
    milestones: [
      { milestone: "", date: "" },
      { milestone: "", date: "" },
    ],
  });

  const addMilestone = () => {
    setFormData((prevState) => ({
      ...prevState,
      milestones: [...prevState.milestones, { milestone: "", date: "" }],
    }));
  };

  const handleMilestoneChange = (index, event) => {
    const { name, value } = event.target;
    const updatedMilestones = formData.milestones.map((milestone, i) =>
      i === index ? { ...milestone, [name]: value } : milestone
    );
    setFormData({ ...formData, milestones: updatedMilestones });
  };

  const handleDelete = (indexToDelete) => {
    if (formData.milestones.length > 2) {
      const updatedMilestones = formData.milestones.filter(
        (_, index) => index !== indexToDelete
      );
      setFormData({ ...formData, milestones: updatedMilestones });
    } else {
      alert("At least 2 milestones are required.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleFileChange = (event) => {
    const { id, files } = event.target;
    const file = files[0];
    if (file) {
      const fileName = file.name;
      switch (id) {
        case "your-image":
          setFormData({ ...formData, yourImageName: fileName });
          break;
        case "partner-image":
          setFormData({ ...formData, partnerImageName: fileName });
          break;
        case "couple-image":
          setFormData({ ...formData, coupleImageName: fileName });
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="LoanForm">
        <div className="container">
          <h1 style={{ color: "#2a2f4f" }}>Create your Love Timeline</h1>
          <div className="input-container">
            <h2 style={{ color: "#2a2f4f" }}>Add your details</h2>

            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="yourName"
              value={formData.yourName}
              onChange={handleInputChange}
              required
            />

            <label>Partner Name</label>
            <input
              type="text"
              placeholder="Enter your partner name"
              name="partnerName"
              value={formData.partnerName}
              onChange={handleInputChange}
              required
            />

            <label>Couple Name</label>
            <input
              type="text"
              placeholder="Eg.. Virat & Anushka => Virushka"
              name="coupleName"
              value={formData.coupleName}
              onChange={handleInputChange}
              required
            />

            <label>Your image (recommended aspect ratio of image 1:1)</label>
            <input
              className="input-css"
              style={{ display: "none" }}
              type="file"
              id="your-image"
              name="yourImage"
              onChange={handleFileChange}
            />
            <label
              style={{ cursor: "pointer" }}
              htmlFor="your-image"
              className="label-css"
            >
              Choose File
            </label>
            {formData.yourImageName && (
              <span className="imagename">{formData.yourImageName}</span>
            )}

            <label>Partner image (recommended aspect ratio of image 1:1)</label>
            <input
              style={{ display: "none" }}
              type="file"
              id="partner-image"
              className="input-css"
              name="partnerImage"
              onChange={handleFileChange}
            />
            <label
              style={{ cursor: "pointer", textAlign: "center" }}
              htmlFor="partner-image"
              className="label-css"
            >
              Choose File
            </label>
            {formData.partnerImageName && (
              <span className="imagename">{formData.partnerImageName}</span>
            )}

            <label>Couple Image (optional)</label>
            <input
              style={{ display: "none" }}
              type="file"
              id="couple-image"
              className="input-css"
              name="coupleImage"
              onChange={handleFileChange}
            />
            <label
              style={{ cursor: "pointer" }}
              htmlFor="couple-image"
              className="label-css custom-file-label"
            >
              Choose File
            </label>
            {formData.coupleImageName && (
              <span className="imagename">{formData.coupleImageName}</span>
            )}
          </div>
        </div>

        <div className="container-mile">
          <h2 style={{ color: "#2a2f4f" }}>Add your journey milestones</h2>
          {formData.milestones.map((milestone, index) => (
            <div key={index} className="event">
              <div>
                {/* <label>Milestone 1</label> */}
                <label htmlFor={`milestone-${index}`}>
                  Milestone {index + 1}
                </label>
                <input
                  type="text"
                  style={{ width: "100%" }}
                  className="date"
                  id={`milestone-${index}`}
                  name="milestone"
                  value={milestone.milestone}
                  placeholder={`Milestone ${index + 1}`}
                  onChange={(event) => handleMilestoneChange(index, event)}
                />
              </div>

              <div>
                <label
                  style={{ position: "relative" }}
                  htmlFor={`date-${index}`}
                >
                  Date of Milestone {index + 1}
                </label>
                {/* <label style={{ position: "relative" }}>
                  Date of Milestone 1
                </label> */}
                <input
                  type="date"
                  style={{ width: "100%" }}
                  className="date"
                  id={`date-${index}`}
                  name="date"
                  value={milestone.date}
                  placeholder={`Milestone ${index + 1}`}
                  onChange={(event) => handleMilestoneChange(index, event)}
                />
              </div>

              <div className="delete" onClick={() => handleDelete(index)}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"></path>
                </svg>
              </div>
            </div>
          ))}
          <div className="inner-container-mile">
            <div className="create-btn">
              <button type="button" onClick={addMilestone}>
                Add Milestone
              </button>
            </div>
          </div>
        </div>

        <div className="last">
          <button type="submit" className="btn">
            Create Timeline
          </button>
        </div>

        <div className="logo">
          <div className="img">
            <a href="https://www.greetsu.com/">
              <img src={logo} alt="" className="header-img" />
            </a>
          </div>
          <div className="content">
            <p id="team">from team</p>
            <p id="greet">GreetsU</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Details;
