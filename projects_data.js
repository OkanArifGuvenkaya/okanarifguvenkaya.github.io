// Project data for modal display
const projects = [
    {
        id: 1,
        title: "Mobile Robot Development for Intralogistics",
        date: "Sept - Oct 2025",
        image: "images/projects/mobile-robot-intralogistics.jpg",
        description: "Designed and implemented a complete mobile robot stack covering kinematics, perception, control, localization, and navigation on a Raspberry Pi platform for structured indoor environments.",
        bullets: [
            "Applied PID control for low-level motion control",
            "Implemented Dijkstra algorithm for global path planning",
            "Developed OpenCV-based visual object detection",
            "Multi-sensor fusion (camera, ultrasonic, color sensors)"
        ],
        technologies: ["Raspberry Pi", "Python", "OpenCV", "PID Control", "Path Planning"],
        links: []
    },
    {
        id: 2,
        title: "Autonomous Driving in ROS-based Unity Simulation",
        date: "March - Aug 2025",
        image: "images/projects/autonomous-driving-unity.jpg",
        description: "Designed and implemented a complete autonomous driving stack in ROS, integrating perception, planning, decision-making, and control modules in a Unity-based simulation environment.",
        bullets: [
            "Developed path planning modules including global waypoint processing, short-term goal selection, and trajectory generation using the TEB local planner",
            "Designed and implemented an autonomous driving stack in ROS",
            "Integration of perception and control systems"
        ],
        technologies: ["ROS", "Unity", "TEB Planner", "Python", "C++"],
        links: [
            { type: "video", url: "https://www.youtube.com/watch?v=hG--16rI4ik", label: "Simulation Video" }
        ]
    },
    {
        id: 3,
        title: "Reinforcement Learning for Humanoid Motion Optimization",
        date: "March - Aug 2025",
        image: "images/projects/humanoid-rl.jpg",
        description: "Modeled humanoid motion in MuJoCo using real gait data and implemented a PPO-based reinforcement learning framework to track human joint angles and maintain stable locomotion.",
        bullets: [
            "Modeled humanoid motion in MuJoCo using real gait data collected via motion capture system",
            "Processed static and dynamic trials in OpenSim, performing scaling, inverse kinematics, and gait cycle extraction",
            "Implemented a PPO-based reinforcement learning framework in DeepMind's dm_control to track human joint angles, maintain upright posture, and minimize control effort"
        ],
        technologies: ["MuJoCo", "OpenSim", "PPO", "dm_control", "Python"],
        links: [
            { type: "presentation", url: "presentations/rl-humanoid-presentation.pdf", label: "Project Presentation" }
        ]
    },
    {
        id: 4,
        title: "Vision Based Motion Control of Differential Drive Robot",
        date: "Feb - June 2023",
        image: "images/projects/differential-drive-robot.jpg",
        description: "Developed PID control for a differential drive robot with vision-based localization using ArUco markers, achieving robust target tracking against external disturbances.",
        bullets: [
            "Developed PID control for a differential drive robot, achieving target position against external disturbances",
            "Designed the robot in Solidworks and implemented coding and physical control via Raspberry Pi",
            "Used ArUco markers for position detection and created 2D animations"
        ],
        technologies: ["Raspberry Pi", "Python", "OpenCV", "Solidworks", "PID Control"],
        links: [
            { type: "report", url: "reports/differential-drive-progress.pdf", label: "Progress Report" }
        ]
    },
    {
        id: 5,
        title: "Spherical Haptic Interface with Educational GUI",
        date: "Sept 2022 - June 2023",
        image: "images/projects/spherical-haptic.jpg",
        description: "Designed and implemented a spherical haptic system for educational purposes, featuring multiple representation methods including quaternions, rotation matrices, Euler angles, and axis-angle.",
        bullets: [
            "Designed a spherical haptic system for educational purposes, utilizing various representation methods used in robotics such as unit quaternions, rotation matrices, Euler angles and Axis-angle",
            "Created a user-friendly GUI to provide a 3D rendering of the system and physical system"
        ],
        technologies: ["MATLAB", "App Designer", "Control Systems", "3D Graphics"],
        links: []
    },
    {
        id: 6,
        title: "Traffic Violation Detection via Computer Vision",
        date: "Sept 2022 - Jan 2023",
        image: "images/projects/traffic-violation.jpg",
        description: "Developed a computer vision system for detecting traffic violations of heavy vehicles using classical CV techniques and motion analysis.",
        bullets: [
            "Detected traffic violations of heavy vehicles using computer vision methods",
            "Employed techniques such as Hough line detection, foreground detection, noise elimination, blob analysis, and optical flow"
        ],
        technologies: ["Python", "OpenCV", "Computer Vision", "Optical Flow"],
        links: [
            { type: "report", url: "reports/traffic-violation-cv.pdf", label: "Project Report" }
        ]
    },
    {
        id: 7,
        title: "Sabancı Motorsports - Aerodynamics Department",
        date: "Feb 2020 - Jan 2022",
        image: "images/projects/sabanci-motorsports.jpg",
        description: "Led the Aerodynamics department in designing and optimizing aerodynamic packages for Formula Student race car, including CFD analysis and thermal management.",
        bullets: [
            "Acted as the Aerodynamics department leader (Sept 2021 - Jan 2022) and a department member (Feb 2020 - Sept 2021) in the Sabancı Motorsports team",
            "Designed and optimized aerodynamic packages, including rear wing and front wing of a race car",
            "Conducted cooling optimization of the battery box design via conjugate heat transfer"
        ],
        technologies: ["Solidworks", "ANSYS", "CFD", "Simscale"],
        links: []
    },
    {
        id: 8,
        title: "Sabancı Aerospace Team - Rocket Competition",
        date: "July 2020 - Sept 2021",
        image: "images/projects/sabanci-aerospace.jpg",
        description: "Contributed to the Sabancı Aerospace team for the TEKNOFEST Rocket Competition, performing comprehensive engineering analyses for rocket design.",
        bullets: [
            "Collaborated as a team member in the Sabancı Aerospace team for the TEKNOFEST Rocket Competition",
            "Conducted structural, thermal, and CFD analyses of the rocket"
        ],
        technologies: ["ANSYS", "CFD", "Structural Analysis", "Thermal Analysis"],
        links: []
    }
];

