import PropTypes from 'prop-types';
import { PhoneboockTitle } from './Section.styled';

export const Section = ({ children, title, firstTitle }) => {
  return (
    <section>
      {title ? <PhoneboockTitle>{title}</PhoneboockTitle> : ''}
      {firstTitle ? <h2>{firstTitle}</h2> : ''}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  firstTitle: PropTypes.string,
  children: PropTypes.node,
};
