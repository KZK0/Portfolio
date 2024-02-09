import './footer.scss';

export const Footer = () => {
    return (
        <footer className='footer-section'>
            <div className='footer-first-bloc'>
                <div className='footer-left'>
                    <h5>Contact</h5>
                    <ul>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                    </ul>
                </div>
                <div className='footer-mid'>
                    <h5>Links</h5>
                    <ul>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                    </ul>
                </div>
                <div className='footer-right'>
                    <h5>Follow-me</h5>
                    <ul>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                    </ul>
                </div>
            </div>
            <div className='footer-scnd-bloc'>
                <p>Copyright <i className="fa-regular fa-copyright"></i> 2024 | Designed & Developed by <span>KZKO</span>.</p>
            </div>
        </footer>
    )
}