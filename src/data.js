import {CiGrid42} from 'react-icons/ci'
import {IoIosPeople} from 'react-icons/io'
import {GrScheduleNew} from 'react-icons/gr'
import {CgFileDocument} from 'react-icons/cg'
import {GrTask} from 'react-icons/gr'
import {AiOutlineMessage} from 'react-icons/ai'
import {TbReportAnalytics} from 'react-icons/tb'
import pic from './assets/tezza.jpeg'



export const sideData = [
    {
        icon: <CiGrid42/>,
        tag: 'Workspace',
        url: '/'
    },
    {
        icon: <IoIosPeople />,
        tag: 'Clients',
        url: '/clients'
    },
    {
        icon: <GrScheduleNew/>,
        tag: 'Schedule Appointment',
        url: '/schedule'
    },
    {
        icon: <CgFileDocument/>,
        tag: 'Payment',
        url: '/payment'
    },
    {
        icon: <GrTask/>,
        tag: 'Task',
        url: '/task'
    },
    {
        icon: <AiOutlineMessage/>,
        tag: 'Message',
        url: '/message'
    },
    {
        icon: <TbReportAnalytics/>,
        tag: 'Reports',
        url: '/report'
    },
]

export const cardData1 = [
    {
        title: "Today's Agenda",
        text: "You don't have any schedule for today",
        name: "Add",

    },
   
]

export const cardData2 = [ 
    {
        title: "Activity Report",
        link: "view full activity report",
        date: "Tuesday (18th Sept. 2023)",
        text:"You added a new client",
        name: "Odunsote Mayokun",
        status: "status: Pending"

    }
]

export const cardData3 = [
    {
    title: "Task that are due",
    link: "Create Tasks",
    text: "Follow up with",
    name: "Odunsote",
    due: "Due on: 1/21/2023",
    created: "Created on: 1/15/2023"
    }
]

export const tableHead = ["Name", "Email", "Phone", "Residential Address"]

export const tableBody = [
    {
        name: "Adegoke Oluwadamilare",   
        email: "adegoketemitope1909@gmail.com",
        phone: "0816073668",
        address: "No 2, Olonade Close, Monato Ibadan, Oyo state, Nigeria"
    },
    {
        name: "Adegoke Oluwadamilare",   
        email: "adegoketemitope1909@gmail.com",
        phone: "0816073668",
        address: "No 2, Olonade Close, Monato Ibadan, Oyo state, Nigeria"
    },
    {
        name: "Adegoke Oluwadamilare",   
        email: "adegoketemitope1909@gmail.com",
        phone: "0816073668",
        address: "No 2, Olonade Close, Monato Ibadan, Oyo state, Nigeria"
    },
    {
        name: "Adegoke Oluwadamilare",   
        email: "adegoketemitope1909@gmail.com",
        phone: "0816073668",
        address: "No 2, Olonade Close, Monato Ibadan, Oyo state, Nigeria"
    },
    {
        name: "Adegoke Oluwadamilare",   
        email: "adegoketemitope1909@gmail.com",
        phone: "0816073668",
        address: "No 2, Olonade Close, Monato Ibadan, Oyo state, Nigeria"
    },
    {
        name: "Adegoke Oluwadamilare",   
        email: "adegoketemitope1909@gmail.com",
        phone: "0816073668",
        address: "No 2, Olonade Close, Monato Ibadan, Oyo state, Nigeria"
    },
]

export const profile = [
    {
        name:"Odusote Mayokun",
        email: "adegoketemitope1909@gmail.com",
        gender: "Female",
        age: "54 years old",
        country: "Nigerian",
        image: pic
    }
]

export const profileDetails = [
    {
        tag: "Full Name",
        value: "Odusote Mayokun"
    },
    {
        tag: "Applicant Fullname",
        value: "Odusote Mayokun Kemi"
    },
    {
        tag: "Place of Birth",
        value: "Nigeria"
    },
    {
        tag: "Marital Status",
        value: "Married"
    },
    {
        tag: "Current Occupation",
        value: "Engineer"
    },
    {
        tag: "Residential Address",
        value: "No 2, Olonade Close, Monato Ibadan, Oyo state, Nigeria"
    },
    {
        tag: "Country of Interest",
        value: "Iceland"
    },
]

export const moreProfileDetails = [
    {
        tag: "Email",
        value: "adegoketemitope1909@gmail.com"
    },
    {
        tag: "Gender",
        value: "Female"
    },
    {
        tag: "Country of Citizenship",
        value: "Nigeria, Ugandan"
    },
    {
        tag: "Education",
        value: "Bachelor's Degree"
    },
    {
        tag: "Phone Number",
        value: "+234816073668"
    },
    {
        tag: "Mailing Address",
        value: "No 2, Olonade Close, Monato Ibadan, Oyo state, Nigeria"
    },
    {
        tag: "Purpose of Travel",
        value: "Trading"
    },
]

export const moreProfileDetails2 = [{
    tag: "Date of Birth",
    value: "04/11/2012"
}]