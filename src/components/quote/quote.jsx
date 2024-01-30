import './quote.scss';


export const Quote = () => {
    return (
        <blockquote className='quote-section'>
            <div className='quote-content'>
                <h5>My Favorite Quote:</h5>
                <p><i class="fa-solid fa-quote-left"></i> We grow after we finish learning. <i class="fa-solid fa-quote-right"></i></p>
                <h6>By: ich weiß nicht !</h6>
            </div>
        </blockquote>
    )
}