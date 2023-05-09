import useScrollToView from '../hoc/useScrollToView'

const NavbarLink = ({ text, href }) => {
	const scrollTargetToView = useScrollToView({ offset: 60 })

	return (
		<a onClick={scrollTargetToView} data-target={href} className="whitespace-nowrap text-gray-500 border-b-4 border-gray-200 transition-all duration-700" href={`#${href}`}>
			{text}
		</a>
	)
}

export default NavbarLink;