import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { fadeAnimationVariants } from "../../../utils/helpers";
import rev from "../../../assets/rev.png";
import CourseCard from "../../../components/Course/CourseCard";
import { auth, db } from "../../../firebase";
import {
  doc,
  getDoc,
  collection,
  Timestamp,
  updateDoc,
  arrayUnion,
  getDocs,
} from "firebase/firestore";
import "./CourseDetail.css";

const FC1 = () => {
  const [userDocId, setUserDocId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const usersRef = collection(db, "users");
        const querySnapshot = await getDocs(usersRef);

        querySnapshot.forEach((doc) => {
          if (doc.data().uid === auth.currentUser.uid) {
            setUserDocId(doc.id);
            console.log(doc.id); // Store the document ID associated with the current user
          }
        });
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUserData();
  }, [auth.currentUser.uid]);

  const handleEnroll = async () => {
    try {
      const userDocRef = doc(db, "users", userDocId);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        const coursesArray = userData.courses || [];

        // Check if "TC1" is already in the courses array
        if (!coursesArray.includes("FC1")) {
          coursesArray.push("FC1");

          // Update the user document with the updated courses array
          await updateDoc(userDocRef, { courses: coursesArray });

          console.log("Enrolled in FC1 successfully!");
          navigate("/dashboard");
        } else {
          console.log("Already enrolled in FC1.");
        }
      }
    } catch (error) {
      console.error("Error enrolling in FC1:", error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="CourseDetail light">
      <Navbar />
      <div className="nav3">
        <p>
          Courses /{" "}
          <Link to="/free_courses" className="unformat-link">
            Free Courses
          </Link>{" "}
          / Basics of Computer Course
        </p>
      </div>
      <motion.div
        className="container"
        id="hero-course"
        variants={fadeAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <div className="left-course">
          <h2>Basics of Computer Course</h2>
          <div className="fot">
            <div id="pfile"></div>
            <p>Instructor Name</p>
          </div>
          <button className="enroll" onClick={handleEnroll}>
            Enroll
          </button>
        </div>
        <div className="right-course">
          <div className="course-box">
            <div className="cb-1">
              <p className="course-box-head">Basics of Computer</p>
              <p className="course-box-desc">
                Dive into the fundamental concepts of computing with our Basics
                of Computer course.
              </p>
            </div>
            <div className="cb-2">
              <p>4.9 (135 Reviews) | 98%</p>
              <ul className="course-box-list">
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ color: "#00c7fc" }}
                  />
                  <p>Beginner level</p>
                </li>
                <p className="sub">Gain Experience</p>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ color: "#00c7fc" }}
                  />
                  <p>10 Hours Aprox</p>
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ color: "#00c7fc" }}
                  />
                  <p>Flexible Schedule</p>
                </li>
                <p className="sub">Learn at your own pace</p>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ color: "#00c7fc" }}
                  />
                  <p>Earn degree credit</p>
                </li>
                <p className="sub">Learn more</p>
              </ul>
            </div>
            <div className="cb-3">
              <button className="cb-btn">Apply Now</button>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <div className="course-nav" id="course-nav">
          <ul className="course-nav-ul">
            <li className="course-nav-li">
              <a href="#course-nav" className="unformat-link">
                About
              </a>
            </li>
            <li className="course-nav-li">
              <a href="#what-c" className="unformat-link">
                What you will learn
              </a>
            </li>
            <li className="course-nav-li">
              <a href="#content-c" className="unformat-link">
                Content
              </a>
            </li>
            <li className="course-nav-li">
              <a href="#ass-c" className="unformat-link">
                Assessment
              </a>
            </li>
            <li className="course-nav-li">
              <a href="#inst-c" className="unformat-link">
                Instructor
              </a>
            </li>
            <li className="course-nav-li">
              <a href="#rev-c" className="unformat-link">
                Reviews
              </a>
            </li>
          </ul>
        </div>
        <div id="about-c">
          <h1>Overview</h1>
          <p>
            Dive into the fundamental concepts of computing with our Basics of
            Computer course. This beginner-friendly course is designed to
            introduce individuals to the essential components and principles of
            computer systems.
          </p>
        </div>
        <div id="what-c">
          <h1>What You Will Learn</h1>
          <ul id="what-c-ul">
            <li id="what-c-li">
              <i
                className="fa-solid fa-circle-check rm"
                style={{ color: "#00c7fc" }}
              />
              <p>
                Understand the basic components and functions of a computer.
              </p>
            </li>
            {/* <p className="sub-c">
              Explore the core concepts, history, and ethical considerations
              surrounding Artificial Intelligence.
            </p> */}
            <li id="what-c-li">
              <i
                className="fa-solid fa-circle-check rm"
                style={{ color: "#00c7fc" }}
              />
              <p>
                Gain familiarity with common computer terminologies and
                concepts.
              </p>
            </li>
            {/* <p className="sub-c">
              Dive into the fundamentals of machine learning, covering
              supervised and unsupervised learning, algorithms, and model
              evaluation.
            </p> */}
            <li id="what-c-li">
              <i
                className="fa-solid fa-circle-check rm"
                style={{ color: "#00c7fc" }}
              />
              <p>
                Develop foundational knowledge for further exploration in the
                field of computing.
              </p>
            </li>
            {/* <p className="sub-c">
              Uncover the mysteries of neural networks, deep learning
              architectures, and their applications in real-world scenarios.
            </p> */}
            {/* <li id="what-c-li">
              <i
                className="fa-solid fa-circle-check rm"
                style={{ color: "#00c7fc" }}
              />
              <p>Natural Language Processing (NLP):</p>
            </li>
            <p className="sub-c">
              Learn how AI processes and understands human language, and explore
              applications in text analysis, sentiment analysis, and language
              generation.
            </p>
            <li id="what-c-li">
              <i
                className="fa-solid fa-circle-check rm"
                style={{ color: "#00c7fc" }}
              />
              <p>Computer Vision:</p>
            </li>
            <p className="sub-c">
              Delve into the fascinating world of computer vision, understanding
              how AI interprets and analyzes visual information.
            </p>
            <li id="what-c-li">
              <i
                className="fa-solid fa-circle-check rm"
                style={{ color: "#00c7fc" }}
              />
              <p>Hands-On Projects:</p>
            </li>
            <p className="sub-c">
              Apply your knowledge through hands-on projects that simulate
              real-world AI applications, enhancing your problem-solving skills.
          </p> */}
          </ul>
          <h1>Prerequisites</h1>
          <p>A PC/Laptop with an Internet Connection.</p>
        </div>
        <div id="content-c">
          <h1>Course Content:</h1>
          <ul id="main-ul-c">
            <li id="content-main-li">
              Module 1: Introduction to Computing
              <ul id="child-ul-c">
                <li id="content-child-li">Overview of Computer Systems</li>
                <li id="content-child-li">Historical Evolution of Computers</li>
                <li id="content-child-li">
                  Importance of Computers in Modern Life
                </li>
              </ul>
            </li>
          </ul>
          <ul id="main-ul-c">
            <li id="content-main-li">
              Module 2: Computer Hardware Basics
              <ul id="child-ul-c">
                <li id="content-child-li">
                  Understanding Central Processing Units (CPUs)
                </li>
                <li id="content-child-li">Memory and Storage Devices</li>
                <li id="content-child-li">Input and Output Devices</li>
              </ul>
            </li>
          </ul>
          <ul id="main-ul-c">
            <li id="content-main-li">
              Module 3: Software and Operating Systems
              <ul id="child-ul-c">
                <li id="content-child-li">
                  Differentiating System Software and Application Software
                </li>
                <li id="content-child-li">Overview of Operating Systems</li>
                <li id="content-child-li">Software Installation and Updates</li>
              </ul>
            </li>
          </ul>
          <ul id="main-ul-c">
            <li id="content-main-li">
              Module 4: Computer Networks and Internet
              <ul id="child-ul-c">
                <li id="content-child-li">Basics of Computer Networking</li>
                <li id="content-child-li">Introduction to the Internet</li>
                <li id="content-child-li">Common Internet Services</li>
              </ul>
            </li>
          </ul>
          <ul id="main-ul-c">
            <li id="content-main-li">
              Module 5: Computer Security Basics
              <ul id="child-ul-c">
                <li id="content-child-li">Overview of Cybersecurity</li>
                <li id="content-child-li">
                  Best Practices for Securing Personal Computers
                </li>
                <li id="content-child-li">
                  Recognizing and Avoiding Common Cyber Threats
                </li>
              </ul>
            </li>
          </ul>
          <ul id="main-ul-c">
            <li id="content-main-li">
              Module 6: Capstone Project
              <ul id="child-ul-c">
                <li id="content-child-li">Apply Your Knowledge</li>
                <li id="content-child-li">
                  Create and Execute a Real-World AI Project
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div id="ass-c">
          <h1>Assessment:</h1>
          <p>Quizzes: Assess understanding of basic computer concepts.</p>
          <p>Hands-on Exercises: Practical tasks to reinforce learning.</p>
          <p>Final Quiz: Comprehensive assessment covering key topics.</p>
        </div>
        <div id="inst-c">
          <h1>Instructor</h1>
          <div className="inst">
            <div className="pfile"></div>
            <p className="inst-abt">
              Juraj Šimunec is Microsoft 365 Engineer experienced with setup and
              administration of complete M365 platform. His main area of focus
              is to provide best possible experience for users, but at the same
              time following best security practices in tenant configuration and
              integration with various workloads.
            </p>
          </div>
        </div>
        <div id="rev-c">
          <h1 id="rev-head">Reviews (40 Reviews)</h1>
          <div className="ratings">
            <p>Course Ratings</p>
            <img src={rev} alt="Ratings" />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="container"
        id="related-sec"
        variants={fadeAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <h1>Other Courses</h1>
        <div id="related">
          <CourseCard
            title="Web Development | Complete FullStack Course | HTML CSS JS"
            name="Joshi Patel"
            rating="4.7"
            num="432"
            price="599"
          />
          <CourseCard
            title="Web Development | Complete FullStack Course | HTML CSS JS"
            name="Joshi Patel"
            rating="4.7"
            num="432"
            price="599"
          />
          <CourseCard
            title="Web Development | Complete FullStack Course | HTML CSS JS"
            name="Joshi Patel"
            rating="4.7"
            num="432"
            price="599"
          />
          <CourseCard
            title="Web Development | Complete FullStack Course | HTML CSS JS"
            name="Joshi Patel"
            rating="4.7"
            num="432"
            price="599"
          />
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default FC1;
