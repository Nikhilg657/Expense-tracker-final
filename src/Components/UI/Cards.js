import './Cards.css';
const Cards=(props)=>{
    const stylecss='Cards '+props.className;
    return <div data-aos="fade-up" data-aos-delay="200"  className={stylecss} >
        {props.children}
    </div>
}
export default Cards;