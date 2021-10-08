import { Link } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
const ShowFooterLinks = ({ links, external }) => {
    return links.map((link) => (
        <ul className='footer__ul' key={link.id}>
            <li className='footer__ul__li'>
                {external ? (
                    <>
                        <BsChevronLeft size={12} />
                        <a href={link.route} target='_blank' rel="noreferrer">
                            {link.name}
                        </a>
                    </>
                ) : (
                    <>
                        <BsChevronLeft size={12} />
                        <Link
                            to={
                                link.hasOwnProperty('route')
                                    ? link.route
                                    : `/details/${link.id}`
                            }>
                            {link.name}
                        </Link>
                    </>
                )}
            </li>
        </ul>
    ));
};
export default ShowFooterLinks;
