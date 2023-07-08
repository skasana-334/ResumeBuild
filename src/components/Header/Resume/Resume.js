import React, { forwardRef, useEffect, useRef, useState } from 'react'
import styles from './Resume.module.css';
import { AtSign, GitHub, Linkedin, Phone,Paperclip,Calendar,MapPin } from 'react-feather';
const Resume = forwardRef((props,ref) => {
  const information=props.information;
  const sections=props.sections;
  //for css var in js
  const containerRef=useRef();
  const [columns,setColumns]=useState([[],[]]); 

  // for drag and drop
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");
  // get date in correct format 
  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };
  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievement: information[sections.achievement],
    education: information[sections.education],
    skills: information[sections.skills],
    basicInfo: information[sections.basicInfo],
    summary: information[sections.summary],
    other: information[sections.other],
  };
// object to store sections as key and all their values as object
  const sectionDiv = {
    [sections.workExp]: (
      <div
        key={"workexp"}
        draggable
        onDragOver={() => setTarget(info.workExp?.id)}
        onDragEnd={() => setSource(info.workExp?.id)}
        className={`${styles.section} ${
          info.workExp?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.workExp.sectionTitle}</div>
        <div className={styles.content}>
          {info.workExp?.details?.map((item) => (
            <div className={styles.item} key={item.title}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.companyName ? (
                <p className={styles.subTitle}>{item.companyName}</p>
              ) : (
                <span />
              )}
              {item.certificationLink ? (
                <a className={styles.link} href={item.certificationLink}>
                  <Paperclip />
                  {item.certificationLink}
                </a>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(item.startDate)}-
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                <div />
              )}
              {item.location ? (
                <p className={styles.date}>
                  <MapPin /> Remote
                </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.project]: (
      <div
        key={"project"}
        draggable
        onDragOver={() => setTarget(info.project?.id)}
        onDragEnd={() => setSource(info.project?.id)}
        className={`${styles.section} ${
          info.project?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.project.sectionTitle}</div>
        <div className={styles.content}>
          {info.project?.details?.map((item) => (
            <div className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.link ? (
                <a className={styles.link} href={item.link}>
                  <Paperclip />
                  {item.link}
                </a>
              ) : (
                <span />
              )}
              {item.github ? (
                <a className={styles.link} href={item.github}>
                  <GitHub />
                  {item.github}
                </a>
              ) : (
                <span />
              )}
              {item.overview ? (
                <p className={styles.overview}>{item.overview} </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.skills]:(
<div
        key={"skills"}
        draggable
        onDragOver={() => setTarget(info.skills?.id)}
        onDragEnd={() => setSource(info.skills?.id)}
        className={`${styles.section} ${
          info.skills?.sectionTitle ? "" : styles.hidden
        }`}
      >
                   <div className={styles.sectionTitle}>{info.skills.sectionTitle}</div>
        <div className={styles.content}>
          {info.skills?.details?.map((item) => (
            <div className={styles.item}>
              {item.Languages ? (
                <p className={styles.Languages}>{item.Languages}</p>
              ) : (
                <span />
              )}
                 {item.tools ? (
                <p className={styles.tools}>{item.tools} </p>
              ) : (
                <span />
              )}
              {item.Libraries_Frameworks? (
                <p className={styles.Libraries_Frameworks}>{item.Libraries_Frameworks} </p>
              ) : (
                <span />
              )}
                  {item.other ? (
                <p className={styles.other}>{item.other} </p>
              ) : (
                <span />
              )}
           
            </div>
          ))}
        </div>
      </div>
      

      
    ),
    [sections.education]: (
      <div
        key={"education"}
        draggable
        onDragOver={() => setTarget(info.education?.id)}
        onDragEnd={() => setSource(info.education?.id)}
        className={`${styles.section} ${
          info.education?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.education?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.education?.details?.map((item) => (
            <div className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.college ? (
                <p className={styles.subTitle}>{item.college}</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(item.startDate)} -
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.achievement]: (
      <div
        key={"achievement"}
        draggable
        onDragOver={() => setTarget(info.achievement?.id)}
        onDragEnd={() => setSource(info.achievement?.id)}
        className={`${styles.section} ${
          info.achievement?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.achievement?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.achievement?.points?.length > 0 ? (
            <ul className={styles.numbered}>
              {info.achievement?.points?.map((elem, index) => (
                <li className={styles.point} key={elem + index}>
                  {elem}
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
    [sections.summary]: (
      <div
        key={"summary"}
        draggable
        onDragOver={() => setTarget(info.summary?.id)}
        onDragEnd={() => setSource(info.summary?.id)}
        className={`${styles.section} ${
          info.summary?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.summary?.sectionTitle}</div>
        <div className={styles.content}>
          <p className={styles.overview}>{info.summary?.detail}</p>
        </div>
      </div>
    ),
    [sections.other]: (
      <div
        key={"other"}
        draggable
        onDragOver={() => setTarget(info.other?.id)}
        onDragEnd={() => setSource(info.other?.id)}
        className={`${styles.section} ${
          info.other?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.other?.sectionTitle}</div>
        <div className={styles.content}>
          <p className={styles.overview}>{info?.other?.detail}</p>
        </div>
      </div>
    ),
  };


//function for swap
const swapSourceTarget=(source,target)=>{
  if(!source||!target)
  return;
  const tempCol= [[...columns[0]], [...columns[1]]];//store the original as we will not want to hamper original data
  //we need index for swapping
  //for this we search in both cols and if found return
  let sourceRowIndex=tempCol[0].findIndex((item)=>item===source);
  let sourceColIndex=0;
  if(sourceRowIndex<0){
    sourceColIndex=1;
    sourceRowIndex = tempCol[1].findIndex((item) => item === source);}
  let targetRowIndex=tempCol[0].findIndex((item)=>item===source);
  let targetColIndex=0;
  if(targetRowIndex<0){
    targetColIndex=1;
    targetRowIndex=tempCol[1].findIndex((item)=>item===source);}
    //swap
    //like t=a,a=b,b=t;
    const tempSource = tempCol[sourceColIndex][sourceRowIndex];//not 2d array
      tempCol[sourceColIndex][sourceRowIndex] =
      tempCol[targetColIndex][targetRowIndex];

    tempCol[targetColIndex][targetRowIndex] = tempSource;

    setColumns(tempCol);
};
useEffect(()=>{
  setColumns([
    [sections.summary,sections.education,sections.workExp],
    [,sections.project ,sections.skills,sections.achievement, sections.other],
  ]);
},[])
  //useeffect for source and target
  useEffect(()=>{

swapSourceTarget(source,target);
  },[source]);

//change color 
useEffect(()=>{

  const container=containerRef.current;//give div of container
  if(!props.activeColor||!container)
  return;
  container.style.setProperty("--color",props.activeColor); 
},[props.activeColor])
return (
  <div ref={ref}>
    <div ref={containerRef} className={styles.container}>
      <div className={styles.header}>
        <p className={styles.heading}>{info.basicInfo?.detail?.name}</p>
        <p className={styles.subHeading}>{info.basicInfo?.detail?.title}</p>

        <div className={styles.links}>
          {info.basicInfo?.detail?.email ? (
            <a className={styles.link} href={info.basicInfo.detail.email}>
              <AtSign /> {info.basicInfo?.detail?.email}
            </a>
          ) : (
            <span />
          )}
          {info.basicInfo?.detail?.phone ? (
            <a className={styles.link}>
              <Phone /> {info.basicInfo?.detail?.phone}
            </a>
          ) : (
            <span />
          )}
     
          {info.basicInfo?.detail?.linkedin ? (
               
            <a className={styles.link}href={info.basicInfo.detail.linkedin}>
        
            <Linkedin /> {info.basicInfo.detail.linkedin}
            </a>
          ) : (
            <span />
          )}
          {info.basicInfo?.detail?.github ? (
            <a className={styles.link} href={info.basicInfo.detail.github}>
              <GitHub /> {info.basicInfo.detail.github}
            </a>
          ) : (
            <span />
          )}
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.col1}>
          {columns[0].map((item) => sectionDiv[item])}
        </div>
        <div className={styles.col2}>
          {columns[1].map((item) => sectionDiv[item])}
        </div>
      </div>
    </div>
  </div>
);
});

export default Resume;