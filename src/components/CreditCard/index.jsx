import './styles.css'

const numCard = (num) => {
    let arr = num.split('');
    return arr.slice(arr.length - 4);
}

const monthCard = (m) => {
    if(m < 10){
        return '0' + m.toString();
    }
    return m.toString();
}

const yearCard = (y) => {
    let strYear = y.toString();
    let arrYear = strYear.split('');
    return arrYear.slice(arrYear.length - 2);
}

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    return(
        <div className="container-card" Style={`background-color: ${bgColor}; color: ${color};`}>
            <div>
                <p className="num">**** **** **** {numCard(number)}</p>
            </div>
            <div className="info-card">
                <p>Expires {monthCard(expirationMonth)}/{yearCard(expirationYear)}  {bank}</p>
                <p className="name-bank">{owner}</p>
            </div>
		</div>
    );
};

export default CreditCard;