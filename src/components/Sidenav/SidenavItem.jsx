/* eslint-disable react/prop-types */
const SidenavItem = ({ link, stylePropsA, stylePropsSpan, icon: Icon, title }) => {
  return (
    <a href={link} className={stylePropsA}>
      <Icon size={20} />
      <span className={stylePropsSpan}>{title}</span>
    </a>
  )
}

export default SidenavItem