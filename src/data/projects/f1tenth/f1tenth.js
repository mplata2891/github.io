// src/data/projects/f1tenth/f1tenth.js
import vescSnippet from './vesc.py?raw';
import wallFollowerSnippet from './wall_follower.py?raw';

export const f1tenthProject = {
  id: "F1TENTH_RACING",
  category: "Autonomous Robotics // Senior Design",
  title: "F1TENTH Autonomous Racing Platform",
  span: "md:col-span-2",
  status: "PROTOTYPE",
  role: "Systems Integrator",
  description: `Engineered a 1/10th scale autonomous racing vehicle utilizing a ROS2 Humble software architecture deployed on an NVIDIA Jetson Orin Nano. Integrated modular hardware including a VESC 6 MKV motor controller, Intel RealSense camera, and Hokuyo LiDAR to facilitate real-time environmental data processing.`,
  impact: `Migrated legacy systems to ROS2 Humble, significantly improving real-time performance and Quality of Service (QoS) handling for high-frequency sensor data. Authored comprehensive system documentation to streamline onboarding and subsystem communication for future engineering teams.`,
  tags: ["ROS2 HUMBLE", "NVIDIA JETSON", "SLAM TOOLBOX", "PYTHON", "C++"],
  
  subsystems: [
    {
      name: "VESC CDC Interface Node",
      description: "Established a reliable USB CDC communication bridge between the Jetson Orin Nano and VESC 6 MKV. Translated high-level ROS2 messages into low-level PWM/Servo byte arrays.",
      code: vescSnippet,
      lang: "python"
    },
    {
      name: "PID Wall Follower Node",
      description: "Processed high-frequency LiDAR data arrays (sensor_msgs/LaserScan) to compute spatial error and output corrective steering vectors using a tuned Proportional-Integral-Derivative controller.",
      code: wallFollowerSnippet,
      lang: "python"
    }
  ],

  // categorized documentation array
  documents: [
    {
      title: "Final SDP Group Report",
      type: "OFFICIAL_REPORT",
      url: "/assets/docs/f1tenth/4830_SDP_Report.pdf"
    },
    {
      title: "Individual Exec Summary",
      type: "OFFICIAL_REPORT",
      url: "/assets/docs/f1tenth/SDP_ExecutiveSummary_PlataMike.pdf"
    },
    {
      title: "Jetson-to-VESC Integration",
      type: "INTERNAL_SYS_DOC",
      url: "/assets/docs/f1tenth/Jetson_to_VESC.pdf"
    },
    {
      title: "ROS2 Node Specifications",
      type: "INTERNAL_SYS_DOC",
      url: "/assets/docs/f1tenth/f1tenth_ros2_documentation.pdf"
    },
    {
      title: "ROS2 Team Onboarding Guide",
      type: "INTERNAL_SYS_DOC",
      url: "/assets/docs/f1tenth/ROS2_Documentation.pdf"
    }
  ]
};