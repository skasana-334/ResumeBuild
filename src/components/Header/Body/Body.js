import React from 'react'
import styles from "./Body.module.css";
import {ArrowDown} from "react-feather";
import Editor from '../Editor/Editor';
import Resume from '../Resume/Resume';
import { useState ,useRef} from 'react';
import ReactToPrint from 'react-to-print'

const Body = () => {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        skills:"Skills",
        achievement: "Achievements",
        summary: "Summary",

        other: "Other",
      };
      const resumeRef=useRef();
      const [activeColor,setActiveColor]=useState(colors[0]);
      const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
          id: sections.basicInfo,
          sectionTitle: sections.basicInfo,
          detail: {},
        },
        [sections.workExp]: {
          id: sections.workExp,
          sectionTitle: sections.workExp,
          details: [],
        },
        [sections.project]: {
          id: sections.project,
          sectionTitle: sections.project,
          details: [],
        },
        [sections.education]: {
          id: sections.education,
          sectionTitle: sections.education,
          details: [],
        },
        [sections.skills]: {
          id: sections.skills,
          sectionTitle: sections.skills,
          details:[],
        },
        [sections.achievement]: {
          id: sections.achievement,
          sectionTitle: sections.achievement,
          points: [],
        },
        [sections.summary]: {
          id: sections.summary,
          sectionTitle: sections.summary,
          detail: "",
        },
        [sections.other]: {
          id: sections.other,
          sectionTitle: sections.other,
          detail: "",
        },
      });
  return (
    <div className={styles.container}>
        <p className={styles.heading}>Resume Builder</p>
        <div className={styles.toolbar}>
            <div className={styles.colors}>
                {
                    colors.map(item=>(
                    <span 
                    key={item}
                    style={{backgroundColor:item}}
                    className={`${styles.color} ${activeColor===item?styles.active:""}`}//it was require as we want to determine which color is active onclick
                    onClick={()=>setActiveColor(item)}/>
                    ))
                }
                
                
                </div>
                <ReactToPrint
                trigger={()=>{
                  return (
                  <button>Download<ArrowDown/></button>
  );
}}
content={()=>resumeRef.current}
                >

                </ReactToPrint>
            </div>
            <div className={styles.main}>
<Editor 
sections={sections}
 information={resumeInformation} 
 setInformation={setResumeInformation}>

 </Editor>
<Resume information={resumeInformation} 
sections={sections} 
activeColor={activeColor}
ref={resumeRef}>

</Resume>
            </div>
      
    </div>
  );
}

export default Body;
