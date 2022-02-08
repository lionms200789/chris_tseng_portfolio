import React, { useEffect } from "react"
import Heading from '../components/heading'
import ReacGif from '../../static/icons/react.gif'
import WorldWideGif from '../../static/icons/worldwide.gif'
import PencilGif from '../../static/icons/pencil.gif';

import scrollTransition from "../utils/gsap/scroll-transition";

const skills = [
    {
        type: '網頁前端開發',
        icon: ReacGif,
        class: 'front-end',
        items: ['HTML5', 'CSS3', 'JavaScript', 'Sass', 'RWD', 'Bootstrap', 'React', 'Redux', 'Vue.js', 'Vuex']
    },
    {
        type: '網頁後端開發',
        icon: WorldWideGif,
        class: 'back-end',
        items: ['C#', 'ASP.NET Core MVC', 'Redis', 'MS SQL']
    },
    {
        type: '其他',
        icon: PencilGif,
        class: 'other',
        items: ['Git', 'Github', 'Webpack', 'Jira', 'Postman', 'TOEIC 650']
    }
]

const Skill = () => {

    useEffect(() => {
        skills.forEach(item => {
            const elmnt = document.querySelector('.' + item.class);
            scrollTransition({ target: elmnt.children, from: { x: '-2rem' }, to: { x: 0 } });
        })
    }, []);

    return (
        <div className="container px-8 mx-auto pt-24">
            <Heading title="技能" englishTitle="Skills" classes="justify-center" />
            {
                skills.map((skill, idx) => {
                    return <div key={idx} className="mb-10">
                        <h4 className="text-xl font-bold mb-4 flex items-center">
                            <img src={skill.icon} className="w-8 lg:w-10 mr-2" />
                            <span>{skill.type}</span>
                        </h4>
                        <div className={`flex flex-wrap ${skill.class}`}>
                            {
                                skill.items.map((item, _idx) => <span key={_idx} className="px-5 py-1 rounded-full bg-primary text-white mr-2 my-1">
                                    {item}
                                </span>)
                            }
                        </div>
                    </div>
                })
            }
        </div>
    )
};

export default Skill;