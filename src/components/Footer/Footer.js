import "./footer.css";

const Footer = ({ totalBet }) => {
  return (
    <div className="footer">
      <div>Total Bet €{totalBet}</div>

      <button className="placeBet">Place Bet</button>
    </div>
  );
};

export default Footer;
