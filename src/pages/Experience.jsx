import "../style/experience.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdOutlineSchool} from "react-icons/md"

const Experience = () => {
  return (
    <div className="experience">
       <VerticalTimeline lineColor="rgb(25, 85, 87) ">
        <VerticalTimelineElement className="vertical-timeline-element--education" date="2010-2014" iconStyle={{background:"rgb(25,85,87)",color:"#fff"}}
        icon={<MdOutlineSchool/>}>
          <h3 className="vertical-timeline-element-title">My High School, South Dakota</h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" date="2022-2050" iconStyle={{background:"rgb(25,85,87)",color:"#fff"}}
        icon={<MdOutlineSchool/>}>
          <h3 className="vertical-timeline-element-title">
           Coders-Den  Front-End Developer online School </h3>
          <p>onging</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" date="2010-2030" iconStyle={{background:"rgb(191, 194, 15)",color:"#fff"}}
        icon={<MdOutlineSchool/>}>
          <h3 className="vertical-timeline-element-title">Sir-P institute</h3>
          <p>computer science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" date="2015-2017" iconStyle={{background:"rgb(191, 194, 15)",color:"#fff"}}
        icon={<MdOutlineSchool/>}>
          <h3 className="vertical-timeline-element-title">
            Delta College, west carolina
          </h3>
          <p>general programining skills</p>
        </VerticalTimelineElement>
       </VerticalTimeline>
    </div>
  )
}
//{}[]
export default Experience