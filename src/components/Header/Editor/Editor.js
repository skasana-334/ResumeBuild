import React, { useState } from 'react'
import styles from "./Editor.module.css";
import InputControl from '../InputControl/InputControl';
import { useEffect } from 'react';
import { X } from 'react-feather';
const Editor = (props) => {
  // <--------------recieving props---->
    const sections=props.sections;// recieving sections from body
    const information=props.information;

      // <-------------use states---->

    //since the sessions change their state so we have to make an activesession hook,by default it will take first section as active
    const [activeSectionKey,setActiveSectionKey]=useState(Object.keys(sections)[0]);

// now we have to make a function to generate different body for each section as form is used to create same part only for different we need this function
const [activeInformation,setactiveInformation]=useState(
  information[sections[Object.keys(sections)[0]]]);

  // to prefill title
  const[sectionTitle,setsectionTitle]=useState(sections[Object.keys(sections)[0]])
// to change chip content
const[activeDetailIndex,setactiveDetailIndex]=useState(0);
  // to store edit values or default values by defaul it will have basicdetails info
  const[values,setValues]=useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    phone: activeInformation?.detail?.phone || "",
    email: activeInformation?.detail?.email || "",
  });
const handlePointUpdate=(value,index)=>{
  //make a copy of values as we should not directly change the values
const tempValues={...values}
//checks if the points property of the tempValues object is an array. If it is not an array, it assigns an empty array to the points property.
if (!Array.isArray(tempValues.points)) 
tempValues.points = [];
tempValues.points[index]=value;//update value at particular index
setValues(tempValues);
}

  // <--------------bodies---->

const workExpBody = (
  <div className={styles.detail}>
    <div className={styles.row}>
      <InputControl
        label="Title"
        placeholder="Enter title eg. Frontend developer"
        value={values.title}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, title: event.target.value }))
        }
      />
      <InputControl
        label="Company Name"
        placeholder="Enter company name eg. amazon"
        value={values.companyName}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, companyName: event.target.value }))
        }
      />
    </div>
    <div className={styles.row}>
      <InputControl
        label="Certificate Link"
        placeholder="Enter certificate link"
        value={values.certificationLink}
        onChange={(event) =>
          setValues((prev) => ({
            ...prev,
            certificationLink: event.target.value,
          }))
        }
      />
      <InputControl
        label="Location"
        placeholder="Enter location eg. Remote"
        value={values.location}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, location: event.target.value }))
        }
      />
    </div>
    <div className={styles.row}>
      <InputControl
        label="Start Date"
        type="date"
        placeholder="Enter start date of work"
        value={values.startDate}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, startDate: event.target.value }))
        }
      />
      <InputControl
        label="End Date"
        type="date"
        placeholder="Enter end date of work"
        value={values.endDate}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, endDate: event.target.value }))
        }
      />
    </div>

    <div className={styles.column}>
      <label>Enter work description</label>
      <InputControl
        placeholder="Line 1"
        value={values.points ? values.points[0] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 0)}
      />
      <InputControl
        placeholder="Line 2"
        value={values.points ? values.points[1] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 1)}
      />
      <InputControl
        placeholder="Line 3"
        value={values.points ? values.points[2] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 2)}
      />
    </div>
  </div>
);

const projectBody = (
  <div className={styles.detail}>
    <div className={styles.row}>
      <InputControl
        label="Title"
        value={values.title}
        placeholder="Enter title eg. Chat app"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, title: event.target.value }))
        }
      />
    </div>
    <InputControl
      label="Overview"
      value={values.overview}
      placeholder="Enter basic overview of project"
      onChange={(event) =>
        setValues((prev) => ({ ...prev, overview: event.target.value }))
      }
    />
    <div className={styles.row}>
      <InputControl
        label="Deployed Link"
        value={values.link}
        placeholder="Enter deployed link of project"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, link: event.target.value }))
        }
      />
      <InputControl
        label="Github Link"
        value={values.github}
        placeholder="Enter github link of project"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, github: event.target.value }))
        }
      />
    </div>
    <div className={styles.column}>
      <label>Enter project description</label>
      <InputControl
        placeholder="Line 1"
        value={values.points ? values.points[0] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 0)}
      />
      <InputControl
        placeholder="Line 2"
        value={values.points ? values.points[1] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 1)}
      />
      <InputControl
        placeholder="Line 3"
        value={values.points ? values.points[2] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 2)}
      />
      <InputControl
        placeholder="Line 4"
        value={values.points ? values.points[3] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 3)}
      />
    </div>
  </div>
);
const displayName = "Libraries/Frameworks";
const skills=(
  
  <div className={styles.detail}>
    
<div className={styles.row}>
      <InputControl
        label="Languages"
        value={values.Languages}
        placeholder="C++,Java .."
        onChange={(event) =>
          setValues((prev) => ({ ...prev, Languages: event.target.value }))
        }
      />
    </div>
   
<InputControl
  label={displayName}
  value={values.Libraries_Frameworks}
  placeholder="React.js,Next.js..."
  onChange={(event) =>
    setValues((prev) => ({ ...prev, Libraries_Frameworks: event.target.value }))
  }
/>
    <div className={styles.row}>
      <InputControl
        label="Tools"
        value={values.tools}
        placeholder="Netlify,Haiku..."
        onChange={(event) =>
          setValues((prev) => ({ ...prev, tools: event.target.value }))
        }
      />
      <InputControl
        label="Other"
        value={values.other}
        placeholder=""
        onChange={(event) =>
          setValues((prev) => ({ ...prev, other: event.target.value }))
        }
      />
    </div>
</div>
     
)

const educationBody = (
  <div className={styles.detail}>
    <div className={styles.row}>
      <InputControl
        label="Title"
        value={values.title}
        placeholder="Enter title eg. B-tech"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, title: event.target.value }))
        }
      />
    </div>
    <InputControl
      label="College/School Name"
      value={values.college}
      placeholder="Enter name of your college/school"
      onChange={(event) =>
        setValues((prev) => ({ ...prev, college: event.target.value }))
      }
    />
    <div className={styles.row}>
      <InputControl
        label="Start Date"
        type="date"
        placeholder="Enter start date of this education"
        value={values.startDate}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, startDate: event.target.value }))
        }
      />
      <InputControl
        label="End Date"
        type="date"
        placeholder="Enter end date of this education"
        value={values.endDate}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, endDate: event.target.value }))
        }
      />
    </div>
  </div>
);
const basicInfoBody = (
  <div className={styles.detail}>
    <div className={styles.row}>
      <InputControl
        label="Name"
        placeholder="Enter your full name eg. Aashu"
        value={values.name}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, name: event.target.value }))
        }
      />
      <InputControl
        label="Title"
        value={values.title}
        placeholder="Enter your title eg. Frontend developer"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, title: event.target.value }))
        }
      />
    </div>
    <div className={styles.row}>
      <InputControl
        label="Linkedin Link"
        value={values.linkedin}
        placeholder="Enter your linkedin profile link"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, linkedin: event.target.value }))
        }
      />
      <InputControl
        label="Github Link"
        value={values.github}
        placeholder="Enter your github profile link"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, github: event.target.value }))
        }
      />
    </div>
    <div className={styles.row}>
      <InputControl
        label="Email"
        value={values.email}
        placeholder="Enter your email"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, email: event.target.value }))
        }
      />
      <InputControl
        label="Enter phone"
        value={values.phone}
        placeholder="Enter your phone number"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, phone: event.target.value }))
        }
      />
    </div>
  </div>
);
const achievementsBody = (
  <div className={styles.detail}>
    <div className={styles.column}>
      <label>List your achievements</label>
      <InputControl
        placeholder="Line 1"
        value={values.points ? values.points[0] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 0)}
      />
      <InputControl
        placeholder="Line 2"
        value={values.points ? values.points[1] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 1)}
      />
      <InputControl
        placeholder="Line 3"
        value={values.points ? values.points[2] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 2)}
      />
      <InputControl
        placeholder="Line 4"
        value={values.points ? values.points[3] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 3)}
      />
    </div>
  </div>
);
const summaryBody = (
  <div className={styles.detail}>
    <InputControl
      label="Summary"
      value={values.summary}
      placeholder="Enter your objective/summary"
      onChange={(event) =>
        setValues((prev) => ({ ...prev, summary: event.target.value }))
      }
    />
  </div>
);
const otherBody = (
  <div className={styles.detail}>
    <InputControl
      label="Other"
      value={values.other}
      placeholder="Enter something"
      onChange={(event) =>
        setValues((prev) => ({ ...prev, other: event.target.value }))
      }
    />
  </div>
); 
  
  // <--------------funstion to generate body---->

// now we will decide which body i hvave to show for this we will use 
// switch case  
const generateBody = () => {
  switch (sections[activeSectionKey]) {
    case sections.basicInfo:
      return basicInfoBody;
    case sections.workExp:
      return workExpBody;
    case sections.project:
      return projectBody;
     
    case sections.education:
      return educationBody;
      case sections.skills:
        return skills;
    case sections.achievement:
      return achievementsBody;
    case sections.summary:
      return summaryBody;
    case sections.other:
      return otherBody;
    default:
      return null;
  }
};
         // <--------------function to handle details after submission---->

//tackle to submission details with prev details not harm
// for this we will use switch case 
//make tempdetails because only detail will change in basic info so set prev values as it is for other attributes like name and for detail use tempdetail and title---> do this for all other sections
const handleSubmission = () => {
  switch (sections[activeSectionKey]) {
    case sections.basicInfo: {
      //to store change detail values
      const tempDetail = {
        name: values.name,
        title: values.title,
        linkedin: values.linkedin,
        github: values.github,
        email: values.email,
        phone: values.phone,
      };
//In summary, this code snippet updates the state of a props object by creating a new state object that has all properties from the previous state, but with updated values for the detail and sectionTitle properties in the sections.basicInfo object.
      props.setInformation((prev) => ({
        ...prev,//to copy all properties from prev state to new state
        //key:value pair which set properties
        [sections.basicInfo]: {
          ...prev[sections.basicInfo],//set other values as of previous
          detail: tempDetail,//set details with temp or updated
          sectionTitle,
        },
      }));
      break;
    }
    case sections.workExp: {
      const tempDetail = {
        certificationLink: values.certificationLink,
        title: values.title,
        startDate: values.startDate,
        endDate: values.endDate,
        companyName: values.companyName,
        location: values.location,
        points: values.points,
      };
      //since workexp has an array of many experience so to find out which one it is we will have to find out
      const tempDetails = [...information[sections.workExp]?.details];
      tempDetails[activeDetailIndex] = tempDetail;

      props.setInformation((prev) => ({
        ...prev,
        [sections.workExp]: {
          ...prev[sections.workExp],
          details: tempDetails,
          sectionTitle,
        },
      }));
      break;
    }
    case sections.project: {
      const tempDetail = {
        link: values.link,
        title: values.title,
        overview: values.overview,
        github: values.github,
        points: values.points,
      };
      
      const tempDetails = [...information[sections.project]?.details];
      tempDetails[activeDetailIndex] = tempDetail;

      props.setInformation((prev) => ({
        ...prev,
        [sections.project]: {
          ...prev[sections.project],
          details: tempDetails,
          sectionTitle,
        },
      }));
      break;
    }
    case sections.education: {
      const tempDetail = {
        title: values.title,
        college: values.college,
        startDate: values.startDate,
        endDate: values.endDate,
      };
      const tempDetails = [...information[sections.education]?.details];
      tempDetails[activeDetailIndex] = tempDetail;

      props.setInformation((prev) => ({
        ...prev,
        [sections.education]: {
          ...prev[sections.education],
          details: tempDetails,
          sectionTitle,
        },
      }));
      break;
    }
    case sections.skills: {
      const tempDetail = {
        Languages: values.Languages,
        Libraries_Frameworks: values.Libraries_Frameworks,
        tools: values.tools,
        other: values.other,
      };
      //since workexp has an array of many experience so to find out which one it is we will have to find out
      const tempDetails = [...information[sections.skills]?.details];
      tempDetails[activeDetailIndex] = tempDetail;

      props.setInformation((prev) => ({
        ...prev,
        [sections.skills]: {
          ...prev[sections.skills],
          details: tempDetails,
          sectionTitle,
        },
      }));
      break;
    }
    case sections.achievement: {
      const tempPoints = values.points;

      props.setInformation((prev) => ({
        ...prev,
        [sections.achievement]: {
          ...prev[sections.achievement],
          points: tempPoints,
          sectionTitle,
        },
      }));
      break;
    }
    case sections.summary: {
      const tempDetail = values.summary;

      props.setInformation((prev) => ({
        ...prev,
        [sections.summary]: {
          ...prev[sections.summary],
          detail: tempDetail,
          sectionTitle,
        },
      }));
      break;
    }
    case sections.other: {
      const tempDetail = values.other;

      props.setInformation((prev) => ({
        ...prev,
        [sections.other]: {
          ...prev[sections.other],
          detail: tempDetail,
          sectionTitle,
        },
      }));
      break;
    }
  }
};


//                <------------addfunction---->

const handleAdd=()=>{
  const details=activeInformation?.details//length of current details
  if(!details)
  return;
  const prevDetails=details.slice(-1)[0];
  if(!Object.keys(prevDetails).length)
  return;//to check if prev exp is empty or not
  details?.push({});
  // add a empty array for new project same as we done in handle submission
  props.setInformation(prev=>({
    ...prev,//copy of prev info
    [sections[activeSectionKey]]:{
...information[sections[activeSectionKey]],//keep prev info same
details:details,
    },
  }));
  setactiveDetailIndex(details?.length-1);
}
            // <----------- delete function
const handleDelete=(index)=>{
  const details = activeInformation?.details
  ? [...activeInformation?.details]
  : "";
if (!details) 
return;
details.splice(index, 1);
props.setInformation((prev) => ({
  ...prev,
  [sections[activeSectionKey]]: {
    ...information[sections[activeSectionKey]],
    details: details,
  },
}));

setactiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
};
              // <-------------useeffects---->

// now when to updaate our info ,whenever we update our section or change our key
//due to use effect we have updated information at every point of  time
useEffect(() => {
  const activeInfo = information[sections[activeSectionKey]];
    setactiveInformation(activeInfo);
    setsectionTitle(sections[activeSectionKey]);
    setactiveDetailIndex(0);
    // list all properties of all section using if else
    // if else because we first get basicinfo detail which will have not same details as of other section
    setValues({
      name: activeInfo?.detail?.name || "",
      //here these are values which will only in details array not in detail so we are checking is it details array or not
      overview: activeInfo?.details
        ? activeInfo.details[0]?.overview || ""
        : "",
        Languages: activeInfo?.detail?.Languages || "",
        Libraries_Frameworks: activeInfo?.detail?.Libraries_Frameworks || "",
        tools: activeInfo?.detail?.tools || "",
      link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
      certificationLink: activeInfo?.details
        ? activeInfo.details[0]?.certificationLink || ""
        : "",
      companyName: activeInfo?.details
        ? activeInfo.details[0]?.companyName || ""
        : "",
      college: activeInfo?.details
        ? activeInfo.details[0]?.college || ""
        : "",
      location: activeInfo?.details
        ? activeInfo.details[0]?.location || ""
        : "",
      startDate: activeInfo?.details
        ? activeInfo.details[0]?.startDate || ""
        : "",
      endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",

      //it is the confusing and bit difficult 
      //in workex and project points are in array but in achievements they are directly listed means they have not anything else
      points: activeInfo?.details
        ? activeInfo.details[0]?.points
          ? [...activeInfo.details[0]?.points]
          : ""
        : activeInfo?.points
        ? [...activeInfo.points]
        : "",
      title: activeInfo?.details
        ? activeInfo.details[0]?.title || ""
        : activeInfo?.detail?.title || "",
      linkedin: activeInfo?.detail?.linkedin || "",
      //github can be in basic info and in project
      github: activeInfo?.details
        ? activeInfo.details[0]?.github || ""
        : activeInfo?.detail?.github || "",
      phone: activeInfo?.detail?.phone || "",
      email: activeInfo?.detail?.email || "",
      
      summary: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
      other: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
    });
  }, [activeSectionKey]);

  // to update actve info for chips
useEffect(()=>{
  setactiveInformation(information[sections[activeSectionKey]]);
},[information])

// to show data according to index after add
useEffect(() => {
  const details = activeInformation?.details;
  if (!details) 
  return;
    //here we set details of exp,project and edu simultaneously
   //by which if exp is selected other 2 have empty values

  const activeInfo = information[sections[activeSectionKey]];
  setValues({
    overview: activeInfo.details[activeDetailIndex]?.overview || "",
    link: activeInfo.details[activeDetailIndex]?.link || "",
    certificationLink:
      activeInfo.details[activeDetailIndex]?.certificationLink || "",
    companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
    location: activeInfo.details[activeDetailIndex]?.location || "",
    startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
    endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
    points: activeInfo.details[activeDetailIndex]?.points || "",
    title: activeInfo.details[activeDetailIndex]?.title || "",
    linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
    github: activeInfo.details[activeDetailIndex]?.github || "",
    college: activeInfo.details[activeDetailIndex]?.college || "",
    Languages:activeInfo.details[activeDetailIndex]?.Languages || "",
    Libraries_Frameworks:activeInfo.details[activeDetailIndex]?.Libraries_Frameworks || "",
    tools:activeInfo.details[activeDetailIndex]?.tools || "",
  });
}, [activeDetailIndex]);
  return (
    <div className={styles.container}>

      <div className={styles.header}>
        {Object.keys(sections)?.map((key)=>(
            <div className={`${styles.section} ${activeSectionKey===key?styles.active:""}`}
            key={key}
            onClick={()=>setActiveSectionKey(key)}
            >
                {sections[key]}
            </div>
        ))}
        </div>

        {/* body */}
        <div className={styles.body}>
              {/* it will help to create a same title for all section using one time */}
          <InputControl label="Title" placeholder="Enter section Title" value={sectionTitle} onChange={(event)=>setsectionTitle(event.target.value)}></InputControl>
      <div className={styles.chips}>
      
          {
            activeInformation?.details?
            activeInformation?.details?.map((item,index)=>(
              <div
              className={`${styles.chip} ${
                activeDetailIndex === index ? styles.active : ""
              }`}
              key={item.title + index}
              onClick={() => setactiveDetailIndex(index)}
            >
                    <p>{sections[activeSectionKey]} {index+1}</p>
                    {/* delete */}
          <X onClick={(event)=>{
            event.stopPropagation();
            handleDelete(index);
          }}/>
           </div>
            )):
          ""}
           {/* <-------------add ----> */}
        
           {/* add more should be shown only when one xperience is ther */}
      {
        activeInformation?.details &&activeInformation?.details?.length > 0 ?(
           // this is to add more experience 
      <div className ={styles.add} onClick={handleAdd}>
      +Add
    </div>
        ):
        ""
      }
      </div>
     
          {generateBody()}
          <button onClick={handleSubmission}>Save</button>
        </div>
    </div>
  )
}

export default Editor
