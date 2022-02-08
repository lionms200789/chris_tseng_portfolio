import gsap from "gsap/all";
import React from "react"
import Heading from '../components/heading';

const experiences = [
    {
        company: '創鈞堂資訊有限公司',
        jobTitle: '前端工程師',
        jobTenure: 'Jul. 2020 ~ Sep. 2021',
        jobDescription: `<p>- 維護與更新既有專案並依照客戶需求調整與新增網站功能。&nbsp;</p>
    <p>- 依照無障礙掃描結果進行網站無障礙改善與優化。&nbsp;</p>
    <p>- 參與專案開發，主要包含頁面切版、元件製作、串接後端 API、確保 RWD 畫面正常顯示。&nbsp;</p>
    <p>- 後期參與部分後端開發，撰寫部分基礎 API 與後端 CRUD 功能。</p>
    <p>- 協助撰寫專案投標文件、結案交付文件、簡報文件製作。&nbsp;</p>
    <p>- 參與專案之需求訪談會議、協助教育訓練相關事宜。&nbsp;</p>
    <p class="my-4">【參與重要專案】 【北市社會住宅管理系統】三平台成效：&nbsp;</p>
    <p>- 提供社宅住戶多種 e 化線上服務，整合多元生活機能服務，提升住戶滿意度。&nbsp;</p>
    <p>- 資訊即時、透明化，使用者與管理者可隨時追蹤進度，確保生活、服務品質。&nbsp;</p>
    <p>- 有效降低物管團隊、市府團隊之管理成本，提升日常工作效率。</p>`
    },
    {
        company: 'DHL Express 洋基通運股份有限公司',
        jobTitle: '電話顧客服務專員',
        jobTenure: 'Jul. 2017 ~ Jul. 2019',
        jobDescription: `<p>- 提供顧客跨國寄件方案諮詢及報價服務&nbsp;</p>
    <p>- 回覆客戶快遞取件需求及安排相關服務&nbsp;</p>
    <p>- 電話開發潛在新客戶、銷售物流方案</p>`
    },
    {
        company: '菁英國際語言教育中心',
        jobTitle: '櫃檯行政工讀',
        jobTenure: 'Oct. 2015 ~ Jun. 2016',
        jobDescription: '負責課堂與教室管理、櫃台接待、解決學生問題，行政工作等。'
    },
    {
        company: '台灣無印良品阪急門市',
        jobTitle: '長期服務人員',
        jobTenure: 'Mar. 2012 ~ May. 2015',
        jobDescription: '負責賣場顧客服務、商品介紹及銷售、環境維護、櫃台收銀、商品陳列及人型更換。'
    }
]

const Experience = () => {

    return (
        <div className="container px-8 mx-auto pt-24">
            <Heading title="工作經歷" englishTitle="Experiences" classes="justify-center" />
            <ol className="relative border-l border-gray-200">
                {
                    experiences.map((item, idx) => {
                        return <li key={idx} className="mb-10 ml-6 group">
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 border-2 bg-primary rounded-full group-hover:bg-yellow-500 group-hover:animate-bounce transition-colors duration-150 ease-linear"></span>
                            <h3 className="flex items-center mb-2 font-semibold">
                                <span className="text-base lg:text-xl">{item.jobTitle}</span>
                                <span className="text-base text-gray-500 mx-2">{item.company}</span>
                            </h3>
                            <span className="block mb-2 text-sm font-normal leading-none text-gray-500">
                                {item.jobTenure}
                            </span>
                            <div className="mb-4 text-base font-normal text-gray-400 group-hover:text-gray-600 transition-colors duration-150 ease-linear" dangerouslySetInnerHTML={{ __html: item.jobDescription }}></div>
                        </li>
                    })
                }
            </ol>
        </div>
    )
};

export default Experience;