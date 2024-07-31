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
                <div className="item">
                    <div className="text regular_h4">1</div>
                    <img src={repair} className={'image'} alt={'image'}/>
                </div>
                <div className="item">
                    <div className="text regular_h4">1</div>
                    <img src={relocation} className={'image'} alt={'image'}/>
                </div>
                <div className="item">
                    <div className="text regular_h4">1</div>
                    <img src={season} className={'image'} alt={'image'}/>
                </div>
                <div className="item">
                    <div className="text regular_h4">1</div>
                    <img src={business} className={'image'} alt={'image'}/>
                </div>
                <div className="item">
                    <div className="text regular_h4">1</div>
                    <img src={outside} className={'image'} alt={'image'}/>
                </div>
                <div className="item">
                    <div className="text regular_h4">1</div>
                    <img src={things} className={'image'} alt={'image'}/>
                </div>
            </div>
        </div>
    )
}
