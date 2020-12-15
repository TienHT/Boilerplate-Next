import Link from 'next/link';
import './Logo.module.scss';


function Logo({logo}) {
    return (
        <div className={'logo-container'}>
            <Link href={logo.path || '/'}>
                <a>
                    {
                        logo?.src ? <img src={logo.src} alt={logo.alt || 'sesic NV'} /> : null
                    }
                    
                    {
                        logo?.title && <span>{logo.title}</span>
                    }
                </a>
            </Link>
        </div>
    );
}

export default Logo;