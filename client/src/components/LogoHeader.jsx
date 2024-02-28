                                          
export const LogoHeader = () => {
    return (
        <header>
            <div className="logo-container">
                <h1 className="title">Seth Zarkovich</h1>
                <h4 className="sub-title">Insurance Broker</h4>
            </div>

            <div className="info-container">
                <div className="info-item moved">
                    <i className="fa-solid fa-location-dot"></i>
                    <h3>1-696 Wharncliffe Road, South,</h3>
                    <h4>London, Ontario N6J 2N4</h4>
                </div> 
        
                <div className="info-item">
                    <i className="fa-regular fa-clock"></i>
                    <h3>8:30 AM - 4:30 PM</h3>
                    <h4>Monday to Friday</h4>
                </div> 

                <div className="info-item">
                    <i className="fa-solid fa-phone"></i>
                    <h3>519-333-5822</h3>
                    <h4>seth.zarkovich@hubinternational.com</h4>
                </div> 
            </div>
        </header>
    )
}