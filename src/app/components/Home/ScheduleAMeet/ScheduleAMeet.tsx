'use client'
import { useEffect } from 'react'
import RedirectLink from '../../utilities/RedirectLink/RedirectLink'
import styles from './ScheduleAMeet.module.css'
import services from '@/app/services/services'
export default function ScheduleAMeet(){
    useEffect(() => {
        let getDetailsAboutMe=async ()=>{
            await services.aboutMe.getDetailsAboutMe();
        }
        getDetailsAboutMe();
    }, [])
    return (
        <div>
            <RedirectLink
                title="Schedule a Meet"
                link=""
            ></RedirectLink>
        </div>
    )
}