import plusIcon from './assets/icon-plus.svg';
import minusIcon from './assets/icon-minus.svg';

const AccordionList = ({ data, num, currOpen, onOpen }) => {
  const isOpen = num === currOpen;
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <li onClick={handleToggle}>
      <div className="faq-flex">
        <h4>{data.question}</h4>
        {isOpen ? (
          <img src={minusIcon} alt="minus" />
        ) : (
          <img src={plusIcon} alt="plus" />
        )}
      </div>
      {isOpen && <p className="border-bottom">{data.answer}</p>}
    </li>
  );
};

export default AccordionList;
