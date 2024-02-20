import CSS from './contactMoreInfo.module.css'

function ContactMoreInfo() {
    return (
        <>
            <div className={CSS.moreInfo}>
                <div className={CSS.phoneNumber}>
                    <p className={CSS.title}>Mobile</p>
                    <p className={CSS.titleInfo}>PhoneNumber</p>
                </div>
                <div className={CSS.email}>
                    <p className={CSS.title}>Email</p>
                    <p className={CSS.titleInfo}>Email</p>
                </div>
                <div className={CSS.address}>
                    <p className={CSS.title}>Address</p>
                    <p className={CSS.titleInfo}>Address</p>
                </div>
                <div className={CSS.birthday}>
                    <p className={CSS.title}>Birthday</p>
                    <p className={CSS.titleInfo}>Date</p>
                </div>
            </div>
        </>
    )
}
export default ContactMoreInfo