import React from 'react'
import nav from '../../img/nav.svg'
import navv from '../../img/navv.svg'
import Container from '../container/Container'
import './Nav.css';
import { useTranslation } from 'react-i18next';
import i18n from '../../locales/i18next';

const Nav = () => {
    const data = useTranslation();
    const { t } = useTranslation();
    return (
        <Container>
            <div className='nav__wrapper'>
                <div className='nav' >
                    <a className='logo' href=""><img src={nav} alt="" /></a>
                    <a className='nav__logo' href=""><img src={navv} alt="" /></a>
                </div>
                <div className="content">
                    <select defaultValue={data.i18n.language} onChange={e => {
                        i18n.changeLanguage(e.target.value)
                    }} >
                        <option value="uz">UZ</option>
                        <option value="ru">RU</option>
                        <option value="en">EN</option>
                    </select>
                    <ul>
                        <li><a href="">{t("portfolio")}</a></li>
                        <li><a href="">{t("blog")}</a></li>
                        <li><a href="">{t("cv")}</a></li>
                        <li><a href="">{t("store")}</a></li>
                        <li><a href="">{t("freelance")}</a></li>
                        <li><a href="">{t("contact")}</a></li>
                        <li><a href="">{t("about")}</a></li>
                    </ul>
                </div>
            </div>
        </Container>
    )
}

export default Nav
