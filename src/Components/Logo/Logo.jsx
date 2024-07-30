import logo from '../../assets/images/logo/logo.png';


export const Logo = () => {
    return(
        <div className={'logo'}>
            <img className={'image'} src={logo} alt="logo" />
            <div className={'text'}>GetBox</div>
        </div>
    )
}