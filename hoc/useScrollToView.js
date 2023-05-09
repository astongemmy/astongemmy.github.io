//Scrolls to selected element when corresponding tag is clicked
const useScrollToView = ({ offset = 0 }) => {
	const scrollTargetToView = (e) => {
		const activator = e.target
		const targetId = activator.dataset.target
		
		const targetElement = document.querySelector(`#${targetId}`)
		if (!targetElement) return
		
		const scrollPosition = targetElement.offsetTop;
		document.documentElement.scrollTo({
			top: scrollPosition - offset,
			behavior: 'smooth'
		})
		e.preventDefault();
	}

	return scrollTargetToView
}

export default useScrollToView;