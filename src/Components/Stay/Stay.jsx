import repair from '../../assets/images/stay/repair.png'
import business from '../../assets/images/stay/business.png'
import relocation from '../../assets/images/stay/relocation.png'
import season from '../../assets/images/stay/season.png'
import things from '../../assets/images/stay/things.png'
import outside from '../../assets/images/stay/outside.png'

export const Stay = () => {

    return (
        <div className="container-page stay">
            <div className="title regular_h2">
                Когда оставляют вещи?
            </div>
            <div className="content">
                    <img src={repair} alt={'repair'} className='item'/>
                    <img src={relocation} alt={'repair'} className='item'/>

                    <img src={season} alt={'repair'} className='item'/>

                    <img src={business} alt={'repair'} className='item'/>

                    <img src={outside} alt={'repair'} className='item'/>

                    <img src={things} alt={'repair'} className='item'/>
            </div>
        </div>
    )
}
