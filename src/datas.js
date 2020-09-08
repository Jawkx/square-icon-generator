import React from 'react'
import {
    FaExclamationTriangle,
    FaClipboard,
    FaBoxes,
    FaTabletAlt,
    FaDatabase,
    FaPlusCircle,
    FaImages,
    FaCopy,
    FaTools,
    FaUserLock,
    FaUserFriends
} from 'react-icons/fa'

const datas = [
    {
        name: "Equipment Issues",
        icon: <FaExclamationTriangle />,
        color: "blue"
    },
    {
        name: "WorkList",
        icon: <FaClipboard />,
        color: "#FF4E00"
    },
    {
        name: "Equipment List",
        icon: <FaBoxes />,
        color: "#BF3100"
    },
    {
        name: "Facility Apps",
        icon: <FaTabletAlt />,
        color: "#723153"
    },
    {
        name: "PM mainlist",
        icon: <FaDatabase />,
        color: "#5F4B66"
    },
    {
        name: "Add Work",
        icon: <FaPlusCircle />,
        color: "#F49D37"
    },
    {
        name: "Equipment Images",
        icon: <FaImages />,
        color: "#F22B29"
    },
    {
        name: "Facility apps log",
        icon: <FaCopy />,
        color: "#30246B"
    },
    {
        name: "Admin Tools",
        icon: <FaTools />,
        color: "#313B72"
    },
    {
        name: "Admin page",
        icon: <FaUserLock />,
        color: "#62A87C"
    },
    {
        name: "Users-list",
        icon: <FaUserFriends />,
        color: "#a5682f"
    }
]

export default datas