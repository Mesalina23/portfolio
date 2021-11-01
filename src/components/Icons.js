const Icons = (props) => {
  return (
    <>
      <li>
        <a
          href={props.hrefIcon}
          target='_blank'
          title={props.titleIcon}
          rel='noreferrer'
        >
          <i className={props.classIcon}></i>
        </a>
      </li>
    </>
  );
};

export default Icons;
