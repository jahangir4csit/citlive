import React from 'react'
import { graphql, Link } from "gatsby"
import NumberBn from '../utils/numberBn'
import MonthBN from '../utils/monthBn'

export default function SeminarItem(data){
    
    const seminar = data.seminarData;

    let day = <NumberBn number={data.day ? data.day : ''} />
    let month = <MonthBN number={data.month ? data.month : ''} />
    let year = data.year === 2022 ? '২২' : data.year;

    return(
        <li>
            <div class="date">{day} 
            <span>{month}, 
            {' ' + year}</span></div>
            <div class="text_main">
                <div class="text">
                <h4 dangerouslySetInnerHTML={{ __html: seminar.title }} />
                <p>{seminar.seminar_meta.venue ? seminar.seminar_meta.venue : seminar.seminar_meta.venueOthers}, 
                সময়ঃ {seminar.seminar_meta.seminarTime.timeSlot ? seminar.seminar_meta.seminarTime.timeSlot : ''} 
                {seminar.seminar_meta.seminarTime.timeH ? ' '+seminar.seminar_meta.seminarTime.timeH :''}:
                {seminar.seminar_meta.seminarTime.timeS ? seminar.seminar_meta.seminarTime.timeS :'00'} টা</p>
                </div>
                <div class="join_btn">
                    <Link 
                    to={`/register-for-free-seminar/`} 
                    state={{ id: seminar.seminar_meta.course ? seminar.seminar_meta.course.databaseId : 0 }}
                    >জয়েন</Link>
                </div>
            </div>
        </li>
    )

}