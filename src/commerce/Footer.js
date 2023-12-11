import React from 'react'
import {BsTwitter} from "react-icons/bs"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {BiLogoGmail} from "react-icons/bi"

function Footer() {
  return (
    <>
        
        <div className="bg-black text-white my-10">
           
        <div className="flex  justify-around p-4 ">
            <div className=''>
                <p className='font-bold my-2 py-2 font-mono text-xl'>About Website</p>
                <ul className='font-mono'>
                    <li>About Website</li>
                    <li>Newsroom</li>
                    <li>Careers</li>
                    <li>Website Stands Social Impact</li>
                    <li>Affiliates</li>
                    <li>Supply Chain Transparency</li>
                    <li>Sitemap</li>
                    <li>Website Global Sites</li>
                    <li>Website</li>
                </ul>
            </div>
            <div className=''>
            <p className='font-bold my-2 py-2 font-mono text-xl'>My Website</p>
                <ul className='font-mono'>
                    <li>My Account</li>
                    <li>Order Status</li>
                    <li>Beauty Insider</li>
                    <li>Rewards Bazaar</li>
                    <li>Shoping! by Website-Subscribe Now</li>
                    <li>Flash Unlimted Shipping</li>
                    <li>Download the App</li>
                    <li>Shoping Website</li>
                </ul>
            </div>
            <div>
            <p className='font-bold my-2 py-2 font-mono text-xl'>Help & FAQs</p>
                <ul className='font-mono'>
                    <li>Online Ordering</li>
                    <li>Shipping</li>
                    <li>Billing</li>
                    <li>Returns & Exchanges</li>
                    <li>International Shipments</li>
                    <li>Customer Service</li>
                    <li>Contact Us</li>
                    <li>Accessibility</li>
                </ul>
            </div>
            <div>
            <p className='font-bold my-2 py-2 font-mono text-xl'>Ways to Shop</p>
                <ul className='font-mono'>
                    <li>Just Arrived</li>
                    <li>Bestsellers</li>
                    <li>Gift Cards</li>
                    <li>Store Locations</li>
                    <li>Book a Reservation</li>
                    <li>Website inside JCPenney</li>
                    <li>Website + Google Home</li>
                 </ul> 
            </div>
        </div>
        <div>
            <p className='text-white py-2'>-</p>
            
        </div>
        <div className='flex justify-evenly'>
            <div>
                <label className='m-5'>Sign up for Website Emails</label>
                <input className='p-2 rounded'  type='text' placeholder='Email address'/>
            </div>
            <div className='font-mono'>
                <label>Choose Region:</label>
                <select className='border-2 p-2 rounded  m-1 bg-black'>
                    <option className='bg-red'>Region</option>
                    <option>Surat</option>
                    <optin>Dwarka</optin>
                    <option>Bhopal</option>
                    <option>Indore</option>
                </select>
            </div>
           <div>
        <div className='flex text-4xl '>
                
                <AiFillFacebook/>
                <BsTwitter/>
                <AiFillLinkedin/>
                <BiLogoGmail/>
            </div>
           </div>
        </div>
        <div className='m-5 font-extralight p-5 text-gray-400' >
                <p className='m-1  text-center'>Copyright @ 2023 Website INDIA, All rights reserved. Terms of Use | Privacy Policy</p>
                <p className='text-center'>0755 WEBSITE (1800 246 2038) | TTY (1 888 866 9845)</p>
            </div>
        </div>
    </>
  )
}

export default Footer
