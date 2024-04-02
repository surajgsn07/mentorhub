import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
const MentorProfile = () => {

    const [slotsData, setSlotsData] = useState([]);

    const [selectedSlot, setSelectedSlot] = useState(null);

    const [slotloader, setSlotLoader] = useState(false);

    async function getAllSlots() {
        try {
            setSlotLoader(true);
            const response = await axios.get('/api/v1/timeslot/getAllSlots');
            setSlotsData(response.data);
            setSlotLoader(false);

        } catch (error) {
            setSlotLoader(false);

        }
    }

    useEffect(() => {
        getAllSlots();
    }, [slotsData]);


    const bookMyTrail = async () => {

    }

    const butMentorship = async () => {

    }


    return (

        <div>

            <div className='grid gap-10 lg:grid-cols-3'>


                <div className='m-4 p-3 lg:col-span-2'>

                    <div className='flex items-center justify-between'>


                        <div className='p-2 rounded-xl w-32 h-32 bg-black my-3'>
                            <img src="/" alt="MentorImg" className='w-full h-full' />
                        </div>
                        <div className='mr-3'>
                            <FaHeart className='text-red-500 text-3xl' />
                            <FaRegHeart className='text-blue-500 text-3xl' />
                        </div>
                    </div>

                    <div className='flex   justify-between p-3 flex-wrap gap-3 '>
                        <div>

                            <div className=' text-2xl font-bold'>
                                Aniket gupta
                            </div>
                            <div className='font-semit text-xl'>
                                Developer
                            </div>


                            <div className='flex gap-3 text-xs my-2'>
                                <p className='p-2 border-2 rounded-lg'>Frontend</p>
                                <p className='p-2 border-2 rounded-lg'>Frontend</p>
                            </div>

                        </div>


                        <div>
                            <div className='p-3 max-w-[250px] border-2'>
                                <p>10 + Years of Experience</p>
                                <p className='font-semibold text-lg'>Hewlett Packard Enterprise </p>
                                <p>GenPact</p>
                                <p>NIIST Bhopal,RGTU</p>
                            </div>
                        </div>


                    </div>


                    {/* Description */}
                    <div className='p-3'>
                        <h3>About</h3>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni distinctio minus itaque molestiae impedit repellendus eius! Deleniti ut velit culpa quisquam nulla dolorem, iure sapiente quod non, praesentium distinctio mollitia.
                    </div>

                    <div className='p-3'>
                        <span>5 Star</span>
                    </div>



                    <div className='pl-3'>
                        <div className='p-2 border-2 inline-block px-3'>
                            <p>Ludhiana, India</p>
                        </div>
                        <p className='mx-2 w-10 h-10 rounded-full border-2 inline-flex bg-blue-500 items-center justify-center text-white font-bold'>In</p>

                        <div >
                            <p className='my-3 '>
                                Languages That i speak
                            </p>

                            <p className='p-2  border-2 inline-block'>
                                English
                            </p>
                        </div>
                    </div>

                </div>


                {/* Slots and Subscription */}

                <div className='px-3 lg:px-0 mt-3 border-2 my-3 mr-3'>

                    <div className='slots border-2 my-3 mr-3 p-3'>
                        <h3 className='p-2 font-semibold text-2xl'>

                            Available Free Trail Slots
                        </h3>
                        <div className='flex gap-3'>

                            {slotloader ? <div className="text-center relative bottom-11"> Wait..</div> : ''}

                            <div className=" mx-auto w-[70%] flex flex-wrap gap-3 justify-center items-center">
                                {
                                    slotsData.length === 0 && "No Slots Found"
                                }
                                {
                                    slotsData?.map((slot) =>
                                        <div key={slot?._id} onClick={() => {
                                            return setSelectedSlot((prev) => prev !== slot?._id ? slot?._id : null)
                                        }} className={`relative flex min-w-[100px] cursor-pointer items-center rounded-lg justify-center pr-3 pl-1 bg-slate-100 ${selectedSlot === slot._id ? "bg-blue-300 border-4 border-blue-700" : ''}`}>

                                            <div className="w-16 h-16 m-2 inline-flex items-center justify-center rounded-xl bottom-2 border-4 border-blue-500 border-outset">
                                                <div>
                                                    <p className="text-2xl font-semibold ">{slot.date}</p>
                                                    <p>{slot?.monthName}</p>
                                                </div>
                                            </div>
                                            <div className="font-semibold text-lg m-3">{slot?.time}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                        <button
                            className={`inline-block px-3 py-2 bg-blue-500 rounded-xl text-white font-semibold 
                        ${!selectedSlot ? "opacity-20 " : ''}`} disabled={!selectedSlot}>
                            Book Free Trail</button>

                    </div>


                    {/*  Pricing */}

                    <div className='p-2 border-2 my-3 mr-3'>
                        <h3 className='p-2 font-semibold text-2xl'>
                            Buy Mentorship</h3>
                        <div className='p-2 my-2'>
                            <p>For fresher</p>
                            <p>Ml , AI , WEB</p>

                        </div>

                        <div className='font-bold text-3xl my-3'>
                            <p>10,000</p>
                        </div>
                        <button className='inline-block p-3 bg-blue-500 rounded-xl text-white font-semibold'>Buy 1:1 Mentorship</button>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default MentorProfile;